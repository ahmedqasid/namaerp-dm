<template>
  <div v-if="matches">
    <slot/>
  </div>
</template>

<script setup lang="ts">
import {computed, inject, ref} from 'vue'

const query = inject('filterQuery', ref(''))
const props = defineProps({
  keywords: {
    type: Array<String>,
    required: true,
  },
})
const matches = computed(() => {
  const q = query.value.toLowerCase().trim()
  if (!q)
    return true
  return props.keywords.some(k => k.toLowerCase().includes(q))
})
</script>
