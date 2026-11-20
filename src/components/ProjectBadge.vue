<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const prosjektId = computed(() => route.params.prosjektId as string | undefined)
</script>

<template>
  <nav class="project-badge">
    <span v-if="prosjektId">Prosjekt: {{ prosjektId }}</span>
    <span v-else>Ingen prosjekt valgt</span>
  </nav>
</template>