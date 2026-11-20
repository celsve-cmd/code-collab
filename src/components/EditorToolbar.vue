<script setup lang="ts">
import { computed, inject, ref } from 'vue'
import { userNameKey } from '../types'

defineProps<{ charCount: number; wordCount: number}>()
const userName = inject(userNameKey, ref(''))

const statusText = computed(() =>
  userName.value ? `${userName.value} redigerer ` : 'Skriv navnet ditt for å starte '
)
</script>

<template>
  <div class="toolbar">
    <span class="status">{{ statusText }}</span>
    <span class="chars">{{ charCount }} tegn · {{ wordCount }} ord</span>
  </div>
</template>