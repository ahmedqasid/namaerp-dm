<template>
  <div class="nama-table">
    <div class="row header-row">
      <div class="cell">Property</div>
      <div class="cell">Column</div>
      <div class="cell">Arabic</div>
      <div class="cell">English</div>
      <div class="cell">Type</div>
      <div class="cell">Foreign Table</div>
    </div>
    <div v-for="field in fields" :key="field.id" :id="field.id" class="row">
      <div class="cell" data-label="Property">{{ field.id }}</div>
      <div class="cell" data-label="Column">{{ field.columns ? field.columns.join(', ') : field.column }}</div>
      <div class="cell" data-label="Arabic">{{ field.ar }}</div>
      <div class="cell" data-label="English">{{ field.en }}</div>
      <div class="cell" data-label="Type">
        <a v-if="field.enum" :href="withBase(enumPagePath(field.enum))">{{ field.enum }}</a>
        <template v-else>{{ field.type }}</template>
      </div>
      <div class="cell" data-label="Foreign Table">
        <a v-if="field.refPath" :href="withBase(field.refPath)">{{ field.refTo }}</a>
        <template v-else>{{ field.refTo }}</template>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {withBase} from 'vitepress'
import {enumPagePath} from '../dm-client'

defineProps<{
  fields: {
    id: string
    column?: string
    columns?: string[]
    ar?: string
    en?: string
    type: string
    refTo?: string
    refPath?: string
    enum?: string
  }[]
}>()
</script>

<style scoped>
.row {
  /* keep the anchor target visible below the sticky navbar */
  scroll-margin-top: calc(var(--vp-nav-height) + 12px);
}
</style>
