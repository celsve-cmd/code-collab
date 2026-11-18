<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{ userName: string; charCount: number }>()

const statusText = computed(() =>
  props.userName
    ? `${props.userName} redigerer`
    : 'Skriv navnet ditt for å starte'
)
</script>

<template>
  <div class="toolbar">
    <span class="status">{{ statusText }}</span>
    <span class="chars">{{ charCount }} tegn</span>
  </div>
</template>