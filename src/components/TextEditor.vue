<script setup lang="ts">
import EditorToolbar from './EditorToolbar.vue'
import { useLocalStorage } from '../composables/useLocalStorage'
import { useCharCount } from '../composables/useCharCount'

const text = useLocalStorage('editorText', '')
const { charCount, wordCount } = useCharCount(text)
</script>

<template>
  <section>
    <EditorToolbar :charCount="charCount" :wordCount="wordCount" />
    <textarea v-model="text" placeholder="Skriv koden din her..." />
  </section>
</template>