<script setup lang="ts">
import { useUserStore } from '../stores/useUserStore'

const userStore = useUserStore()
</script>

<template>
  <header>
    <h1>Code Collab</h1>
    <p>Hei, {{ userStore.displayName }}!</p>
    <input
      :value="userStore.userName"
      @input="userStore.setUserName(($event.target as HTMLInputElement).value)"
      placeholder="Skriv navnet ditt..."
    />
  </header>
</template>