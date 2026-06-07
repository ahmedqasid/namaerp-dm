<template>
  <button class="table-search-nav-button" title="Table Search" @click="open = true">
    <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24"
         fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M3 3h18v18H3z"/>
      <path d="M3 9h18"/>
      <path d="M9 3v18"/>
    </svg>
    <span class="table-search-label">Table Search</span>
  </button>

  <Teleport to="body">
    <div v-if="open" class="table-search-overlay" @click.self="open = false">
      <div class="table-search-dialog" role="dialog" aria-modal="true" aria-label="Table Search">
        <button class="table-search-close" title="Close" @click="open = false">✕</button>
        <TableSearchBox @close="open = false"/>
      </div>
    </div>
  </Teleport>
</template>

<script setup lang="ts">
import {onUnmounted, ref, watch} from 'vue'
import TableSearchBox from './TableSearchBox.vue'

const open = ref(false)

function onKeydown(event: KeyboardEvent) {
  if (event.key === 'Escape')
    open.value = false
}

watch(open, (isOpen) => {
  if (isOpen)
    window.addEventListener('keydown', onKeydown)
  else
    window.removeEventListener('keydown', onKeydown)
})

onUnmounted(() => window.removeEventListener('keydown', onKeydown))
</script>

<style scoped>
.table-search-nav-button {
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 4px 12px;
  margin: 0 8px;
  border: 1px solid var(--vp-c-divider);
  border-radius: 8px;
  background: var(--vp-c-bg-alt);
  color: var(--vp-c-text-2);
  font-size: 13px;
  font-weight: 500;
  transition: border-color 0.25s, color 0.25s;
}

.table-search-nav-button:hover {
  border-color: var(--vp-c-brand-1);
  color: var(--vp-c-text-1);
}

.table-search-nav-button svg {
  color: var(--vp-c-brand-1);
}

@media (max-width: 767px) {
  .table-search-label {
    display: none;
  }
}

.table-search-overlay {
  position: fixed;
  inset: 0;
  z-index: 200;
  background: rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(2px);
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding: 64px 16px 16px;
}

.table-search-dialog {
  position: relative;
  width: min(720px, 100%);
  max-height: calc(100vh - 96px);
  overflow-y: auto;
  background: var(--vp-c-bg);
  border: 1px solid var(--vp-c-divider);
  border-radius: 12px;
  box-shadow: var(--vp-shadow-3);
  padding: 8px 12px;
}

.table-search-close {
  position: absolute;
  top: 14px;
  inset-inline-end: 16px;
  z-index: 1;
  padding: 4px 8px;
  border-radius: 6px;
  color: var(--vp-c-text-2);
  font-size: 14px;
}

.table-search-close:hover {
  color: var(--vp-c-text-1);
  background: var(--vp-c-bg-soft);
}
</style>
