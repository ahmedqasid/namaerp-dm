<template>
  <div v-if="entity" class="dm-entity-page">
    <div class="dm-title-row">
      <h1>
        {{ entity.entity }}
        <span v-if="entity.table !== entity.entity" class="dm-table-name">(Table Name: {{ entity.table }})</span>
      </h1>
      <a class="dm-raw-json" :href="withBase(`/dm-json/${entity.entity}.json`)" target="_blank"
         title="Machine-readable schema of this entity (for tools and LLMs)">Raw JSON</a>
    </div>

    <p v-if="arabicNames" class="dm-names"><strong>Arabic:</strong> {{ arabicNames }}</p>
    <p v-if="englishNames" class="dm-names"><strong>English:</strong> {{ englishNames }}</p>

    <div class="filter-input-wrapper">
      <input v-model="filter" type="text" placeholder="Type to filter..." class="filter-input"/>
    </div>

    <p v-if="visibleDetails.length" class="dm-detail-links">
      <template v-for="(detail, i) in visibleDetails" :key="detail.id">
        <a :href="'#' + detail.id">{{ detail.id }} ({{ detail.table }})</a><span v-if="i < visibleDetails.length - 1"> , </span>
      </template>
    </p>

    <h2 v-show="visibleFields.length">Fields</h2>
    <FieldsTable :fields="visibleFields"/>

    <section v-for="detail in visibleDetails" :key="detail.id" :id="detail.id" class="dm-detail-section">
      <h2>
        {{ detail.id }}
        <span v-if="detail.ar || detail.en" class="dm-table-name">({{ [detail.ar, detail.en].filter(Boolean).join(' - ') }})</span>
      </h2>
      <p class="dm-names">
        <strong>Table Name:</strong> {{ detail.table }}, <strong>Join Column:</strong> {{ detail.joinColumn }}
      </p>
      <FieldsTable :fields="filteredFields(detail.fields)"/>
    </section>
  </div>
</template>

<script setup lang="ts">
import {computed, ref} from 'vue'
import {useData, withBase} from 'vitepress'
import FieldsTable from './FieldsTable.vue'

interface DmField {
  id: string
  column?: string
  columns?: string[]
  ar?: string
  en?: string
  type: string
  refTo?: string
  refPath?: string
  enum?: string
}

interface DmDetail {
  id: string
  table: string
  joinColumn: string
  ar?: string
  en?: string
  fields: DmField[]
}

const {params} = useData()
const entity = computed(() => params.value?.data as {
  entity: string, table: string, module: string,
  ar?: string, arPlural?: string, en?: string, enPlural?: string,
  fields: DmField[], details?: DmDetail[]
} | undefined)

const filter = ref('')

const arabicNames = computed(() =>
    [...new Set([entity.value?.ar, entity.value?.arPlural].filter(Boolean))].join(' - '))
const englishNames = computed(() =>
    [...new Set([entity.value?.en, entity.value?.enPlural].filter(Boolean))].join(' - '))

function fieldMatches(field: DmField, query: string): boolean {
  return [field.id, field.column, ...(field.columns ?? []), field.ar, field.en, field.type, field.refTo, field.enum]
      .some(value => value && value.toLowerCase().includes(query))
}

function filteredFields(fields: DmField[]): DmField[] {
  const query = filter.value.trim().toLowerCase()
  if (!query) return fields
  return fields.filter(field => fieldMatches(field, query))
}

const visibleFields = computed(() => filteredFields(entity.value?.fields ?? []))

const visibleDetails = computed(() => {
  const details = entity.value?.details ?? []
  const query = filter.value.trim().toLowerCase()
  if (!query) return details
  return details.filter(detail =>
      detail.id.toLowerCase().includes(query) || detail.table.toLowerCase().includes(query)
      || detail.fields.some(field => fieldMatches(field, query)))
})
</script>

<style scoped>
.dm-title-row {
  display: flex;
  align-items: baseline;
  gap: 16px;
  flex-wrap: wrap;
}

.dm-table-name {
  font-size: 0.65em;
  font-weight: 400;
  color: var(--vp-c-text-2);
}

.dm-raw-json {
  font-size: 13px;
  padding: 2px 10px;
  border: 1px solid var(--vp-c-divider);
  border-radius: 6px;
  background: var(--vp-c-bg-alt);
  white-space: nowrap;
}

.dm-names {
  margin: 4px 0;
}

.dm-detail-links {
  margin: 12px 0;
}

.dm-detail-section {
  margin-top: 24px;
  /* keep the anchor target visible below the sticky navbar */
  scroll-margin-top: calc(var(--vp-nav-height) + 12px);
}

.filter-input-wrapper {
  margin: 1rem 0;
  display: flex;
  justify-content: flex-start;
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
  transition: border-color 0.2s;
}

.filter-input:focus {
  outline: none;
  border-color: var(--vp-c-brand-1);
}
</style>
