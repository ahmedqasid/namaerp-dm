<template>
  <div class="dm-modules-index">
    <template v-if="mode === 'enums'">
      <ul class="dm-entity-list">
        <li v-for="enumName in dmEnums" :key="enumName">
          <a :href="withBase(enumPagePath(enumName))">{{ enumName }}</a>
        </li>
      </ul>
    </template>
    <template v-else>
      <ul class="dm-module-list">
        <li v-for="group in moduleGroups" :key="group.id">
          <a :href="withBase(`/modules/${group.id}/`)">{{ group.title }}</a>
          <span class="dm-entity-names">({{ group.count }})</span>
        </li>
        <li>
          <a :href="withBase('/modules/enums/')">Enums</a>
          <span class="dm-entity-names">({{ dmEnums.length }})</span>
        </li>
      </ul>
    </template>
  </div>
</template>

<script setup lang="ts">
import {computed} from 'vue'
import {withBase} from 'vitepress'
import {dmEntities, dmEnums, enumPagePath, moduleTitle} from '../dm-client'

const props = withDefaults(defineProps<{ mode?: 'modules' | 'enums' }>(), {mode: 'modules'})
const mode = computed(() => props.mode)

const moduleGroups = computed(() => {
  const counts = new Map<string, number>()
  for (const entity of dmEntities)
    counts.set(entity.module, (counts.get(entity.module) ?? 0) + 1)
  return [...counts.entries()]
      .map(([id, count]) => ({id, title: moduleTitle(id), count}))
      .sort((a, b) => a.title.localeCompare(b.title))
})
</script>

<style scoped>
.dm-module-list, .dm-entity-list {
  list-style: none;
  padding: 0;
  margin: 16px 0;
  columns: 3 280px;
}

.dm-module-list li, .dm-entity-list li {
  padding: 4px 0;
  break-inside: avoid;
}

.dm-entity-names {
  color: var(--vp-c-text-2);
  font-size: 13px;
  margin-inline-start: 6px;
}
</style>
