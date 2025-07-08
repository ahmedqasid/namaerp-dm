<template>
  <div class="space-y-4">
    <input
        v-model="query"
        type="text"
        placeholder="Search..."
        class="w-full p-2 border rounded"
    />
    <slot/>
  </div>
</template>

<script setup lang="ts">
import {ref, provide} from 'vue'

const query = ref('')
provide('filterQuery', query)
</script>
