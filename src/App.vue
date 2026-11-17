<script setup lang="ts">
import { ref } from 'vue'
import AppHeader from './components/AppHeader.vue'
import AppFooter from './components/AppFooter.vue'
import TextEditor from './components/TextEditor.vue'
import AssistantPanel from './components/AssistantPanel.vue'
import ClickCounter from './components/ClickCounter.vue'
import EditorToolbar from './components/EditorToolbar.vue'

const userName = ref('')
</script>

<template>
  <div class="app-layout">
    <AppHeader v-model:userName="userName" class="app-header" />
    <TextEditor class="app-editor" :userName="userName" />
    <AssistantPanel class="app-assistant" />

    <EditorToolbar :userName="userName" :charCount="0" />
    
    <AppFooter appName="Code Collab" :year="2026" class="app-footer" />
  </div>

  <div>
    <ClickCounter :initial="5" @inc="(n) => console.log(`teller: ${n}`)" />
    <ClickCounter :initial="10" />
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