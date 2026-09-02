set -x
export NODE_OPTIONS=--max_old_space_size=40000
# $env:NODE_OPTIONS = "--max_old_space_size=40000"
function git_pull() {
    git reset --hard
    git checkout -B master origin/master
    git checkout -f master
    git pull  origin master
    #git gc
}
function checkForErrors() {
    rc=$?
    if [[ $rc != 0 ]] ; then
      echo 'There are build errors';
      exit 1
    fi
}
# The support knowledge base (github.com/ahmedqasid/namaerp-support-kb) carries this repo and
# namaerp-docs as git submodules so support staff can run Claude Code over both. A submodule
# pins one commit and never follows master on its own -- somebody has to move the pointer, and
# until they do, support answers schema questions from whatever the data model looked like on
# the day the pin was last touched. Moving it from the deploy ties the pin to the only moment
# we know a commit is not merely pushed but built and serving.
#
#   SUPPORT_KB_DIR=/root/namaerp-support-kb   # where the KB is cloned on this host
#   SUPPORT_KB_LOCK_WAIT=300                  # seconds to queue behind the other deploy
#
# The clone does NOT need the submodule contents -- 250MB this host will never read -- so the
# pointer is written straight into the index with update-index. A plain `git clone <kb>` (no
# --recurse-submodules) is the intended setup; a clone that does have the submodule checked out
# is kept in step too, so `git status` there stays clean.
#
# namaerp-dm and namaerp-docs deploy from the same server into the SAME KB clone, so their two
# updates must not interleave -- the other one's `reset --hard` landing between our update-index
# and our commit wipes the staged pin. Two defences, because a pin lost in silence is worse than
# any loud deploy failure: a lock so it does not happen (the path is shared with namaerp-docs's
# copy of these functions -- keep them identical), and every check made against HEAD and the
# remote rather than the index, so a lost update is retried instead of reported as success.
function acquireSupportKbLock() {
    SUPPORT_KB_LOCK_HELD=0
    local lock_file="${SUPPORT_KB_LOCK_FILE:-/var/lock/namaerp-support-kb.lock}"

    if ! command -v flock >/dev/null 2>&1 ; then
      echo "WARNING: flock not found - support KB update runs unserialised." >&2
      return 0
    fi
    # fd 8, not 9: the docs deploy holds its own lock on 9 for the life of the process.
    exec 8<>"$lock_file" || {
      echo "WARNING: cannot open $lock_file - support KB update runs unserialised." >&2
      return 0
    }
    if ! flock -w "${SUPPORT_KB_LOCK_WAIT:-300}" 8 ; then
      echo "WARNING: the other deploy has held $lock_file for ${SUPPORT_KB_LOCK_WAIT:-300}s -" >&2
      echo "         skipping the pin update rather than racing it; the next deploy carries it." >&2
      exec 8>&-
      return 1
    fi
    SUPPORT_KB_LOCK_HELD=1
    return 0
}
function releaseSupportKbLock() {
    [[ "${SUPPORT_KB_LOCK_HELD:-0}" == 1 ]] && exec 8>&-
    SUPPORT_KB_LOCK_HELD=0
    return 0
}
function updateSupportKbPointer() {
    local kb_dir="$1" sub="$2" sha="$3"

    # Re-read the remote every attempt: the retry exists precisely because someone else -- the
    # other deploy, or a teammate -- pushed between our fetch and our push, so the next attempt
    # must build on their commit rather than clobber it.
    git -C "$kb_dir" fetch -q origin master || return 1
    git -C "$kb_dir" reset -q --hard        || return 1
    git -C "$kb_dir" checkout -q -B master FETCH_HEAD || return 1

    # Compared against HEAD, never against the index. The index belongs to the clone, not to
    # this run: the other deploy's `reset --hard` can empty it under us, and "the index matches
    # HEAD" would then read as "already pinned" -- reporting success having advanced nothing.
    if [[ "$(git -C "$kb_dir" rev-parse "HEAD:$sub" 2>/dev/null)" == "$sha" ]] ; then
      echo "Support KB already pins $sub at $sha - nothing to push."
      return 0
    fi

    git -C "$kb_dir" update-index --cacheinfo "160000,$sha,$sub" || return 1
    if [[ -e "$kb_dir/$sub/.git" ]] ; then
      git -C "$kb_dir/$sub" fetch -q origin master && git -C "$kb_dir/$sub" checkout -q "$sha"
    fi
    # An explicit identity: this may be the first commit ever made on this host, and a deploy
    # that died on "Please tell me who you are" would be a silly way to lose a release. A commit
    # that finds nothing staged means the pin was reset away in the line above -- so let it fail
    # into the retry rather than treating an empty commit as done.
    git -C "$kb_dir" -c user.name='Nama deploy' -c user.email='deploy@namasoft.com' \
        commit -q -m "Advance $sub to ${sha:0:12}" || return 1
    git -C "$kb_dir" push -q origin master || return 1

    # Read the pin back off the remote instead of trusting the push. Last line of defence: if
    # anything above dropped it, this turns a silent no-op into a retry.
    git -C "$kb_dir" fetch -q origin master || return 1
    if [[ "$(git -C "$kb_dir" rev-parse "FETCH_HEAD:$sub" 2>/dev/null)" != "$sha" ]] ; then
      echo "Support KB push did not land $sub at $sha." >&2
      return 1
    fi
    echo "Support KB now pins $sub at $sha."
}
# Never fatal. The site is already published by the time this runs; a stale pin is a nuisance,
# not an outage, and failing here would only misreport a good deploy as a bad one. It is loud
# instead, because nothing else watches this.
function advanceSupportKb() {
    local kb_dir="${SUPPORT_KB_DIR:-/root/namaerp-support-kb}"
    local sub="namaerp-dm"
    local sha attempt

    sha=$(git rev-parse HEAD)
    if [[ $? != 0 || -z "$sha" ]] ; then
      echo "WARNING: cannot resolve HEAD - support KB pin not advanced." >&2
      return 0
    fi
    if [[ ! -d "$kb_dir/.git" ]] ; then
      echo "WARNING: no support KB clone at $kb_dir - pin not advanced." >&2
      echo "         git clone https://github.com/ahmedqasid/namaerp-support-kb.git $kb_dir" >&2
      return 0
    fi
    acquireSupportKbLock || return 0

    for attempt in 1 2 3 ; do
      if updateSupportKbPointer "$kb_dir" "$sub" "$sha" ; then
        releaseSupportKbLock
        return 0
      fi
      echo "Support KB update attempt $attempt failed - refetching and retrying." >&2
    done
    releaseSupportKbLock
    echo "ERROR: could not pin $sub at $sha in the support KB after 3 attempts." >&2
    echo "       The site IS deployed - only the KB pin is stale. To fix by hand:" >&2
    echo "       cd $kb_dir && git submodule update --remote --merge && git commit -am 'Update submodule pointers' && git push" >&2
    return 0
}
git add *
if ! git diff --cached --quiet; then
    git commit -m "new release"
    checkForErrors
    git push
    checkForErrors
fi

git_pull
checkForErrors
npm i
npm run docs:build
checkForErrors
mkdir /var/www/dm
rsync -L -r -t -v -z -q --delete -s  ./docs/.vitepress/dist/  /var/www/dm/
chown -R www-data /var/www/dm/
advanceSupportKb
