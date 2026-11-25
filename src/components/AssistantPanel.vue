<script setup lang="ts">
import { ref } from 'vue'
import type { Message } from '../types'

const props = defineProps<{
  userName: string
  messages: Message[]
  isWaiting?: boolean
}>()

const emit = defineEmits<{
  sendMessage: [text: string]
  removeMessage: [id: number]
}>()

const newMessage = ref('')

function send() {
  const text = newMessage.value.trim()
  if (!text || props.isWaiting) return
  emit('sendMessage', text)
  newMessage.value = ''
}
</script>

<template>
  <aside>
    <h2>Assistent ({{ messages.length }})</h2>
    <p v-if="userName">Logget inn som: {{ userName }}</p>
    <p v-else>Skriv navnet ditt i headeren.</p>

    <p v-if="messages.length === 0">Ingen meldinger ennå.</p>
    <ul v-else>
      <li v-for="message in messages" :key="message.id" :class="message.role">
        <strong>{{ message.role === 'user' ? userName : 'Assistent' }}:</strong>
        {{ message.text }}
        <button @click="emit('removeMessage', message.id)">×</button>
      </li>
    </ul>
    <input v-model="newMessage" @keyup.enter="send" placeholder="Spør om koden..." />
    <button @click="send" :disabled="isWaiting">
      {{ isWaiting ? 'Tenker...' : 'Send' }}
    </button>
  </aside>
</template>

<style scoped>
aside {
  padding: 1rem;
  background-color: #f9f9f9;
  border: 1px solid #313030;
  border-radius: 4px;
  margin: 1rem;
}
</style>