import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import type { Message } from '../types'

export const useMessageStore = defineStore('messages', () => {
  const messages = ref<Message[]>([])
  let nesteId = 1

  const messageCount = computed(() => messages.value.length)

  function addMessage(text: string) {
    const trimmed = text.trim()
    if (!trimmed) return

    messages.value.push({ id: nesteId++, role: 'user', text: trimmed })

    // Stub. I uke 4 bytter vi denne ut med et ekte API-kall.
    setTimeout(() => {
      messages.value.push({
        id: nesteId++,
        role: 'assistant',
        text: 'Godt spørsmål. Dette svaret er en stub.'
      })
    }, 800)
  }

  function removeMessage(id: number) {
    messages.value = messages.value.filter((m) => m.id !== id)
  }

  function reset() {
    messages.value = []
  }

  return { messages, messageCount, addMessage, removeMessage, reset }
})