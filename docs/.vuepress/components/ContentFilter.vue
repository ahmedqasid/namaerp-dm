<template>
  <div class="filter-input-wrapper">
    <input
        v-model="filter"
        @input="onInput"
        type="text"
        placeholder="Type to filter..."
        class="filter-input"
    />
  </div>
</template>

<script lang="ts" setup>
import {ref} from 'vue'

const filter = ref<string>('')
let debounceTimer: number | null = null

function onInput(): void {
  if (debounceTimer !== null) {
    clearTimeout(debounceTimer)
  }
  debounceTimer = window.setTimeout(() => {
    applyFilter()
  }, 300)
}

function applyFilter(): void {
  const query = filter.value.toLowerCase()
  const elements = document.querySelectorAll<HTMLElement>('.searchable')

  elements.forEach((el) => {
    const text = el.textContent?.toLowerCase() ?? ''
    const matches = text.includes(query)
    el.style.display = matches || query === '' ? '' : 'none'
  })
}
</script>

<style scoped>
.filter-input-wrapper {
  margin-bottom: 1rem;
  display: flex;
  justify-content: flex-start;
}

.filter-input {
  width: 100%;
  max-width: 300px;
  padding: 0.5rem 0.75rem;
  border: 1px solid var(--vp-c-border);
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
