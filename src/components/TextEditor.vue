<script setup lang="ts">
import { ref, computed, watch } from 'vue'

defineProps<{ userName: string }>()

const text = ref('')
const charCount = computed(() => text.value.length)

watch(text, (newValue) => {
  localStorage.setItem('editorText', newValue)
})

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