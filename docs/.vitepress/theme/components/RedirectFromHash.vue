<template>
</template>

<script setup lang="ts">
import {onMounted} from 'vue'
import {withBase} from 'vitepress'
import {buildEntityPathsMap} from '../dm-client'

// The ERP opens https://dm.namasoft.com#<EntityType> (and legacy GWT links use
// #entity:entity/<EntityType>) — resolve the hash to the entity page.
onMounted(() => {
  const hash = decodeURIComponent(window.location.hash || '')
  if (!hash)
    return
  const legacyMatch = hash.match(/^#entity:entity\/([^&]+)/)
  const entity = legacyMatch ? legacyMatch[1] : hash.substring(1)
  const relativePath = buildEntityPathsMap()[entity]
  if (relativePath)
    window.location.replace(withBase(relativePath))
  else
    console.warn(`No redirect mapping found for entity: ${entity}`)
})
</script>
