import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import type { Message } from '../types'

export const useMessageStore = defineStore('messages', () => {
  const messages = ref<Message[]>([])
  const isWaiting = ref(false)
  let nesteId = 1

  const messageCount = computed(() => messages.value.length)

  function addMessage(text: string) {
    if (isWaiting.value) return

    const trimmed = text.trim()
    if (!trimmed) return

    messages.value.push({ id: nesteId++, role: 'user', text: trimmed })
    isWaiting.value = true

    // Stub. I uke 4 bytter vi denne ut med et ekte API-kall.
    setTimeout(() => {
      messages.value.push({
        id: nesteId++,
        role: 'assistant',
        text: 'Godt spørsmål. Dette svaret er en stub.'
      })
      isWaiting.value = false
    }, 800)
  }

  function removeMessage(id: number) {
    messages.value = messages.value.filter((m) => m.id !== id)
  }

  function reset() {
    messages.value = []
    isWaiting.value = false
  }

  return { messages, messageCount, isWaiting, addMessage, removeMessage, reset }
})