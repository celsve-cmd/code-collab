<script setup lang="ts">
import { inject, ref } from 'vue'
import { userNameKey, displayNameKey, setUserNameKey } from '../types'

const userName = inject(userNameKey, ref(''))
const displayName = inject(displayNameKey, ref(''))
const setUserName = inject(setUserNameKey, () => {})
</script>

<template>
  <header>
    <h1>Code Collab</h1>
    <p>Hei, {{ displayName }}!</p>
    <input
      :value="userName"
      @input="setUserName(($event.target as HTMLInputElement).value)"
      placeholder="Skriv navnet ditt..."
    />
  </header>
</template>