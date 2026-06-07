<template>
  <div class="table-search-box" :class="{embedded}">
    <input
        ref="inputElement"
        v-model="query"
        type="text"
        placeholder="Search entities and tables (name, table, Arabic, English)..."
        class="table-search-input"
        @keydown.enter="openFirstResult"
    />
    <div class="table-search-results" v-if="query.trim()">
      <p v-if="!results.length" class="table-search-empty">No matching tables</p>
      <ul v-else>
        <li v-for="result in results" :key="result.key">
          <a :href="withBase(result.path)" @click="emit('close')">
            <span class="result-name">{{ result.name }}</span>
            <span v-if="result.detailOf" class="result-detail-of">in {{ result.detailOf }}</span>
            <span v-if="result.names" class="result-names">{{ result.names }}</span>
            <span class="result-module">{{ result.module }}</span>
          </a>
        </li>
      </ul>
      <p v-if="truncated" class="table-search-empty">Showing first {{ MAX_RESULTS }} results — keep typing to narrow down</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import {computed, onMounted, ref} from 'vue'
import {withBase} from 'vitepress'
import {dmEntities, dmEnums, entityPagePath, enumPagePath, moduleTitle} from '../dm-client'

const props = defineProps<{ embedded?: boolean }>()
const emit = defineEmits<{ close: [] }>()

const query = ref('')
const inputElement = ref<HTMLInputElement | null>(null)
const MAX_RESULTS = 50

onMounted(() => inputElement.value?.focus())

interface SearchResult {
  key: string
  name: string
  names?: string
  module: string
  path: string
  detailOf?: string
  rank: number
}

function rankOf(query: string, ...names: (string | undefined)[]): number {
  let best = -1
  for (const name of names) {
    if (!name) continue
    const index = name.toLowerCase().indexOf(query)
    if (index < 0) continue
    // exact > prefix > substring, shorter names first
    const rank = (index === 0 ? (name.toLowerCase() === query ? 0 : 1) : 2) * 1000 + name.length
    if (best < 0 || rank < best) best = rank
  }
  return best
}

const allResults = computed<SearchResult[]>(() => {
  const q = query.value.trim().toLowerCase()
  if (!q) return []
  const results: SearchResult[] = []
  for (const entity of dmEntities) {
    const entityRank = rankOf(q, entity.name, entity.table, entity.ar, entity.en)
    if (entityRank >= 0)
      results.push({
        key: entity.name,
        name: entity.name + (entity.table !== entity.name ? ` (${entity.table})` : ''),
        names: [entity.en, entity.ar].filter(Boolean).join(' / ') || undefined,
        module: moduleTitle(entity.module),
        path: entityPagePath(entity),
        rank: entityRank
      })
    for (const detail of entity.details ?? []) {
      const detailRank = rankOf(q, detail.table, detail.id)
      if (detailRank >= 0)
        results.push({
          key: entity.name + '#' + detail.id,
          name: detail.table,
          detailOf: entity.name,
          module: moduleTitle(entity.module),
          path: entityPagePath(entity) + '#' + detail.id,
          rank: detailRank + 1 // prefer top-level entities on ties
        })
    }
  }
  for (const enumName of dmEnums) {
    const enumRank = rankOf(q, enumName)
    if (enumRank >= 0)
      results.push({
        key: 'enum:' + enumName,
        name: enumName,
        module: 'Enums',
        path: enumPagePath(enumName),
        rank: enumRank + 2
      })
  }
  return results.sort((a, b) => a.rank - b.rank)
})

const results = computed(() => allResults.value.slice(0, MAX_RESULTS))
const truncated = computed(() => allResults.value.length > MAX_RESULTS)

function openFirstResult() {
  const first = results.value[0]
  if (first) {
    emit('close')
    window.location.href = withBase(first.path)
  }
}
</script>

<style scoped>
.table-search-box {
  padding: 8px 4px;
}

.table-search-box.embedded .table-search-results {
  max-height: unset;
}

.table-search-input {
  width: 100%;
  padding: 10px 14px;
  border: 1px solid var(--vp-c-divider);
  border-radius: 8px;
  background: var(--vp-c-bg);
  color: var(--vp-c-text-1);
  font-size: 15px;
}

.table-search-input:focus {
  outline: none;
  border-color: var(--vp-c-brand-1);
}

.table-search-results {
  margin-top: 8px;
  max-height: 60vh;
  overflow-y: auto;
}

.table-search-results ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

.table-search-results a {
  display: flex;
  align-items: baseline;
  gap: 10px;
  flex-wrap: wrap;
  padding: 8px 10px;
  border-radius: 6px;
  text-decoration: none;
}

.table-search-results a:hover {
  background: var(--vp-c-bg-soft);
}

.result-name {
  font-weight: 600;
  color: var(--vp-c-brand-1);
}

.result-detail-of {
  font-size: 13px;
  color: var(--vp-c-text-2);
}

.result-names {
  font-size: 13px;
  color: var(--vp-c-text-1);
}

.result-module {
  margin-inline-start: auto;
  font-size: 12px;
  color: var(--vp-c-text-3);
}

.table-search-empty {
  padding: 8px 10px;
  color: var(--vp-c-text-2);
  font-size: 14px;
}
</style>
