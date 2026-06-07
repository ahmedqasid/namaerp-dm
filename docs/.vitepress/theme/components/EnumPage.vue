<template>
  <div v-if="enumData" class="dm-enum-page">
    <div class="dm-title-row">
      <h1>{{ enumData.enum }}</h1>
      <a class="dm-raw-json" :href="withBase(`/dm-json/enums/${enumData.enum}.json`)" target="_blank"
         title="Machine-readable values of this enum (for tools and LLMs)">Raw JSON</a>
    </div>

    <div class="filter-input-wrapper">
      <input v-model="filter" type="text" placeholder="Type to filter..." class="filter-input"/>
    </div>

    <h2>Values</h2>
    <div class="nama-table">
      <div class="row header-row">
        <div class="cell">ID</div>
        <div class="cell">Arabic</div>
        <div class="cell">English</div>
      </div>
      <div v-for="value in visibleValues" :key="value.id" :id="value.id" class="row">
        <div class="cell" data-label="ID">{{ value.id }}</div>
        <div class="cell" data-label="Arabic">{{ value.ar }}</div>
        <div class="cell" data-label="English">{{ value.en }}</div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {computed, ref} from 'vue'
import {useData, withBase} from 'vitepress'

const {params} = useData()
const enumData = computed(() => params.value?.data as {
  enum: string, values: { id: string, ar?: string, en?: string }[]
} | undefined)

const filter = ref('')

const visibleValues = computed(() => {
  const query = filter.value.trim().toLowerCase()
  const values = enumData.value?.values ?? []
  if (!query) return values
  return values.filter(value =>
      [value.id, value.ar, value.en].some(v => v && v.toLowerCase().includes(query)))
})
</script>

<style scoped>
.dm-title-row {
  display: flex;
  align-items: baseline;
  gap: 16px;
  flex-wrap: wrap;
}

.dm-raw-json {
  font-size: 13px;
  padding: 2px 10px;
  border: 1px solid var(--vp-c-divider);
  border-radius: 6px;
  background: var(--vp-c-bg-alt);
  white-space: nowrap;
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
