<script setup lang="ts">
defineProps<{ userName: string; displayName?: string }>()
const emit = defineEmits<{ 'update:userName': [value: string] }>()
</script>

<template>
  <header>
    <h1>Code Collab</h1>
    <p>Hei, {{ displayName ?? userName }}!</p>
    <input
      :value="userName"
      @input="emit('update:userName', ($event.target as HTMLInputElement).value)"
      placeholder="Skriv navnet ditt..."
    />
  </header>
</template>