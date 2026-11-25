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


<style scoped>
header {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 0.75rem 1rem;
  background: white;
  border-radius: 6px;
}

header h1 {
  margin: 0;
  font-size: 1.4rem;
}

header p {
  margin: 0;
  flex: 1;
}
</style>