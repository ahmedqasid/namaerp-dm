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
git_pull
checkForErrors
npm i
npm run docs:build
checkForErrors
mkdir /var/www/dm
rsync -L -r -t -v -z -q --delete -s  ./docs/.vuepress/dist/  /var/www/dm/
chown -R www-data /var/www/dm/

