
# Search

You can use this page to search for any content inside our Data Model Site


<EmbeddableSearchBox fullHeight />

<script setup>
import { onMounted } from 'vue'

onMounted(() => {
  // Load Google Custom Search script
  if (typeof window !== 'undefined' && !document.querySelector('script[src*="cse.google.com"]')) {
    const script = document.createElement('script')
    script.src = 'https://cse.google.com/cse.js?cx=5008f3b439cee40d3'
    script.async = true
    document.head.appendChild(script)
  }
})
</script>