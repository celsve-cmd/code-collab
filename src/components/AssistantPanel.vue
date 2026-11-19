<script setup lang="ts">
import { inject, ref } from 'vue'
import { userNameKey } from '../types'
import { useMessages } from '../composables/useMessages'

const userName = inject(userNameKey, ref(''))

const { messages, newMessage, messageCount, send } = useMessages()
</script>


<template>
  <aside>
    <h2>Assistent ({{ messageCount }})</h2>
    <p v-if="messages.length === 0">Ingen meldinger ennå.</p>
    <ul v-else>
      <li v-for="message in messages" :key="message.id" :class="message.role">
        <strong>{{ message.role === 'user' ? userName : 'Assistent' }}:</strong>
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