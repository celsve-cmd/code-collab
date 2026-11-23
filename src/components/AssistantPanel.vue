<script setup lang="ts">
import { ref } from 'vue'
import { useMessageStore } from '../stores/useMessageStore'
import { useUserStore } from '../stores/useUserStore'

const messageStore = useMessageStore()
const userStore = useUserStore()
const newMessage = ref('')

function send() {
  if (!newMessage.value.trim()) return
  messageStore.addMessage(newMessage.value)
  newMessage.value = ''
}
</script>

<template>
  <aside>
    <h2>Assistent ({{ messageStore.messageCount }})</h2>
    <p v-if="userStore.userName">Logget inn som: {{ userStore.userName }}</p>
    <p v-else>Skriv navnet ditt i headeren.</p>

    <p v-if="messageStore.messages.length === 0">Ingen meldinger ennå.</p>
    <ul v-else>
      <li v-for="message in messageStore.messages" :key="message.id" :class="message.role">
        <strong>{{ message.role === 'user' ? userStore.userName : 'Assistent' }}:</strong>
        {{ message.text }}
      </li>
    </ul>
    <input v-model="newMessage" @keyup.enter="send" placeholder="Spør om koden..." />
    <button @click="send">Send</button>
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