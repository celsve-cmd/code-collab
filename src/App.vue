<script setup lang="ts">
import { ref, computed, watch } from 'vue'
import AppHeader from './components/AppHeader.vue'
import AppFooter from './components/AppFooter.vue'
import TextEditor from './components/TextEditor.vue'
import AssistantPanel from './components/AssistantPanel.vue'
import ClickCounter from './components/ClickCounter.vue'
import EditorToolbar from './components/EditorToolbar.vue'
import { useMouse } from './composables/useMouse'



const userName = ref('')
watch(userName, (newValue) => {
  localStorage.setItem('userName', newValue)
})

const greeting = computed(() => {
  return userName.value ? `Hei, ${userName.value}` : 'Hei, ukjent'
})

const { x, y } = useMouse()

</script>

<template>
  <div class="app-layout">
    <AppHeader v-model:userName="userName" :greeting="greeting" class="app-header" />

    <TextEditor class="app-editor" :userName="userName" />

    <AssistantPanel class="app-assistant" />

    <EditorToolbar :userName="userName" :charCount="0" />

    <AppFooter appName="Code Collab" :year="2026" class="app-footer" />
  </div>

  <div class="click-counters">
    <ClickCounter :initial="5" @inc="(n) => console.log(`teller: ${n}`)" />

    <ClickCounter :initial="10" />
  </div>

  <div class="mouse-coordinates">
    <p>Musen er på {{ x }}, {{ y }}</p>
  </div>
</template>

<style scoped>
.app-layout {
  display: grid;
  grid-template-columns: 1fr 300px;
  grid-template-rows: auto 1fr auto;
  min-height: 100vh;
  gap: 1px;
  background: #ddd;
}

.app-header,
.app-footer {
  grid-column: 1 / -1;
}
</style>