import { ref, computed } from 'vue'

export type Role = 'user' | 'assistant'

export interface Message {
  id: number
  role: Role
  text: string
}

export function useMessages() {
  const messages = ref<Message[]>([])
  const newMessage = ref('')
  const isWaiting = ref(false)
  let nesteId = 1

  const messageCount = computed(() => messages.value.length)

  function send() {
    if (isWaiting.value) return

    const text = newMessage.value.trim()
    if (!text) return

    messages.value.push({ id: nesteId++, role: 'user', text })
    newMessage.value = ''
    isWaiting.value = true

    // Stub. I uke 4 bytter vi denne med et ekte API-kall.
    setTimeout(() => {
      messages.value.push({
        id: nesteId++,
        role: 'assistant',
        text: 'Godt spørsmål! Dette svaret er en stub.'
      })
      isWaiting.value = false
    }, 800)
  }

  return { messages, newMessage, messageCount, isWaiting, send }
}