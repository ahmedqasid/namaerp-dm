<template>

</template>

<script lang="ts" setup>
import {onMounted} from 'vue'
import {entityPathsMap} from '../entity-paths'

const baseRedirectUrl = 'modules/'

onMounted(() => {
  const hash = decodeURIComponent(window.location.hash || '')
  if (!hash)
    return;
  const match = hash.match(/^#entity:entity\/([^&]+)/)
  let entity;
  if (match)
    entity = match[1];
  else
    entity = hash.substring(1);
  const relativePath = entityPathsMap[entity]
  if (relativePath) {
    const fullUrl = baseRedirectUrl + relativePath
    window.location.href = fullUrl
  } else {
    console.warn(`No redirect mapping found for entity: ${entity}`)
  }
})
</script>
