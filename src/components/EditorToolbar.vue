<script setup lang="ts">
import { computed} from 'vue'
import { useUserStore } from '../stores/useUserStore'

defineProps<{ charCount: number; wordCount: number}>()

const userStore = useUserStore()

const statusText = computed(() =>
  userStore.userName ? `${userStore.userName} redigerer ` : 'Skriv navnet ditt for å starte '
)
</script>

<template>
  <div class="toolbar">
    <span class="status">{{ statusText }}</span>
    <span class="chars">{{ charCount }} tegn · {{ wordCount }} ord</span>
  </div>
</template>