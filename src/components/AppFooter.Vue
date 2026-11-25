<script setup lang="ts">
defineProps<{ appName: string; year: number }>()
</script>

<template>
  <footer>{{ appName }} © {{ year }}</footer>
</template>

<style scoped>
footer {
  padding: 1rem;
  text-align: center;
  color: #666;
  font-size: 0.9rem;
}
</style>