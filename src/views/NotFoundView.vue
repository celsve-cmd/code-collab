<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter()
</script>

<template>
  <main class="not-found">
    <h1>404</h1>
    <p>Siden du leter etter, finnes ikke.</p>
    <button @click="router.push({ name: 'home' })">Gå til forsiden</button>
  </main>
</template>