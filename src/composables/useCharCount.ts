import { computed, type Ref } from 'vue'

export function useCharCount(text: Ref<string>) {
  const charCount = computed(() => text.value.length)

  const wordCount = computed(() => {
    const trimmed = text.value.trim()
    return trimmed ? trimmed.split(/\s+/).length : 0
  })

  return { charCount, wordCount }
}