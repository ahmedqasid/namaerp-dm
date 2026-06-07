<template>
  <div class="dm-module-page">
    <h1>{{ title }}</h1>
    <div class="filter-input-wrapper">
      <input v-model="filter" type="text" placeholder="Type to filter..." class="filter-input"/>
    </div>
    <ul class="dm-entity-list">
      <li v-for="entity in visibleEntities" :key="entity.name">
        <a :href="withBase(`/modules/${moduleId}/${entity.name}.html`)">{{ entity.name }}</a>
        <span v-if="entity.en || entity.ar" class="dm-entity-names">
          — {{ [entity.en, entity.ar].filter(Boolean).join(' / ') }}
        </span>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import {computed, ref} from 'vue'
import {useData, withBase} from 'vitepress'

const {params} = useData()
const moduleId = computed(() => params.value?.module as string)
const title = computed(() => (params.value?.title as string) || moduleId.value)
const entities = computed(() => (params.value?.entities ?? []) as { name: string, table: string, ar?: string, en?: string }[])

const filter = ref('')

const visibleEntities = computed(() => {
  const query = filter.value.trim().toLowerCase()
  if (!query) return entities.value
  return entities.value.filter(entity =>
      [entity.name, entity.table, entity.ar, entity.en].some(v => v && v.toLowerCase().includes(query)))
})
</script>

<style scoped>
.dm-entity-list {
  list-style: none;
  padding: 0;
  margin: 16px 0;
}

.dm-entity-list li {
  padding: 4px 0;
  border-bottom: 1px dashed var(--vp-c-divider);
}

.dm-entity-names {
  color: var(--vp-c-text-2);
  font-size: 14px;
}

.filter-input-wrapper {
  margin: 1rem 0;
}

.filter-input {
  width: 100%;
  max-width: 300px;
  padding: 0.5rem 0.75rem;
  border: 1px solid var(--vp-c-divider);
  border-radius: 6px;
  background-color: var(--vp-c-bg);
  color: var(--vp-c-text-1);
  font-size: 1rem;
}

.filter-input:focus {
  outline: none;
  border-color: var(--vp-c-brand-1);
}
</style>
