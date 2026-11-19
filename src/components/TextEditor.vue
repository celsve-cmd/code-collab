<script setup lang="ts">
import { computed } from 'vue'
import EditorToolbar from './EditorToolbar.vue'
import { useLocalStorage } from '../composables/useLocalStorage'

const text = useLocalStorage('editorText', '')
const charCount = computed(() => text.value.length)
</script>

<template>
  <section>
    <EditorToolbar :charCount="charCount" />
    <textarea v-model="text" placeholder="Skriv koden din her..." />
  </section>
</template>