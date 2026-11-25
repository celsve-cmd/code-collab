<script setup lang="ts">
import { computed } from 'vue'
import { Codemirror } from 'vue-codemirror'
import { javascript } from '@codemirror/lang-javascript'
import { json } from '@codemirror/lang-json'
import { html } from '@codemirror/lang-html'
import { oneDark } from '@codemirror/theme-one-dark'
import EditorToolbar from './EditorToolbar.vue'
import { useCharCount } from '../composables/useCharCount'

const props = withDefaults(
  defineProps<{
    userName: string
    modelValue?: string
    language?: 'javascript' | 'json' | 'html'
  }>(),
  {
    modelValue: '',
    language: 'javascript'
  }
)

const emit = defineEmits<{ 'update:modelValue': [value: string] }>()

const { charCount, wordCount } = useCharCount(computed(() => props.modelValue))

const extensions = computed(() => {
  switch (props.language) {
    case 'json':
      return [json(), oneDark]
    case 'html':
      return [html(), oneDark]
    default:
      return [javascript(), oneDark]
  }
})
</script>

<template>
  <section>
    <EditorToolbar :userName="userName" :charCount="charCount" :wordCount="wordCount" />
    <Codemirror
      :model-value="props.modelValue"
      :extensions="extensions"
      :style="{ height: '100%' }"
      placeholder="Skriv koden din her..."
      @update:model-value="emit('update:modelValue', $event)"
    />
  </section>
</template>