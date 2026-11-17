<script setup lang="ts">
import { ref, computed } from 'vue'

defineProps<{ userName: string }>()

const text = ref('')
const charCount = computed(() => text.value.length)
</script>

<template>
  <section>
    <EditorToolbar
      :userName="userName"
      :charCount="charCount"
    />
    <textarea v-model="text" placeholder="Skriv koden din her..." />
  </section>
</template>