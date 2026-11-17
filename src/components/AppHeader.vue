<script setup lang="ts">
defineProps<{ userName: string, greeting: string }>()
const emit = defineEmits<{ 'update:userName': [value: string] }>()
</script>

<template>
  <header>
    <h1>Code Collab</h1>
    <p>{{ greeting }}</p>
    <input
      :value="userName"
      @input="emit('update:userName', ($event.target as HTMLInputElement).value)"
      placeholder="Skriv navnet ditt..."
    />
    
  </header>
</template>