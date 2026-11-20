<script setup lang="ts">
import { useRoute } from 'vue-router'
import { computed } from 'vue'

const route = useRoute()
const prosjektId = computed(() => route.params.prosjektId as string)
</script>

<template>
  <div class="settings-layout">
    <h1>Innstillinger</h1>
    <nav>
      <RouterLink :to="`/editor/${prosjektId}/settings/general`">Generelt</RouterLink>
      <RouterLink :to="`/editor/${prosjektId}/settings/security`">Sikkerhet</RouterLink>
    </nav>
    <RouterView />
  </div>
</template>