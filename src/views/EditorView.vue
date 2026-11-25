<script setup lang="ts">
import { computed, ref, watch } from 'vue'
import { useRoute } from 'vue-router'

import ProjectBadge from '../components/ProjectBadge.vue'
import AppHeader from '../components/AppHeader.vue'
import AppFooter from '../components/AppFooter.vue'
import FileTree from '../components/FileTree.vue'
import TextEditor from '../components/TextEditor.vue'
import AssistantPanel from '../components/AssistantPanel.vue'
import { useUserStore } from '../stores/useUserStore'
import { useMessageStore } from '../stores/useMessageStore'
import type { FileNode } from '../types'

const route = useRoute()
const userStore = useUserStore()
const messageStore = useMessageStore()

const selectedFile = ref<FileNode | null>(null)

const currentLanguage = computed(() => selectedFile.value?.language ?? 'javascript')
const currentContent = computed(() => selectedFile.value?.content ?? '')

function handleSelectFile(file: FileNode) {
  selectedFile.value = file
}

function updateContent(value: string) {
  if (selectedFile.value) {
    selectedFile.value.content = value
  }
}

watch(() => route.params.prosjektId, (nyId) => {
  console.log('Byttet prosjekt til:', nyId)
})

//const { x, y } = useMouse()
//const { formatted, isRunning, start, stop, reset } = useTimer(60, () => {
//    console.log('Timer ferdig')
//})
</script>

<template>
  <div>
    <nav class="top-nav">
      <RouterLink to="/">← Tilbake til forsiden</RouterLink>
      <ProjectBadge />
    </nav>

    <div class="app-layout">
      <AppHeader
        class="app-header"
        :userName="userStore.userName"
        :displayName="userStore.displayName"
        @update:userName="userStore.setUserName($event)"
      />
      <FileTree class="app-files" @select-file="handleSelectFile" />
      <TextEditor
        class="app-editor"
        :userName="userStore.userName"
        :model-value="currentContent"
        :language="currentLanguage"
        @update:model-value="updateContent"
      />
      <AssistantPanel
        class="app-chat"
        :userName="userStore.userName"
        :messages="messageStore.messages"
        :isWaiting="messageStore.isWaiting"
        @send-message="messageStore.addMessage($event)"
        @remove-message="messageStore.removeMessage($event)"
      />

            <!--
            <div class="click-counters">
                <ClickCounter :initial="5" @inc="(n) => console.log(`teller: ${n}`)" />
                <ClickCounter :initial="10" />
            </div>

            <div class="mouse-coordinates">
                <p>Musen er på {{ x }}, {{ y }}</p>
            </div>

            <div class="timer">
                <p class="time">{{ formatted }}</p>
                <p :style="{ color: isRunning ? 'green' : 'gray' }">
                    {{ isRunning ? 'Running' : 'Stopped' }}
                </p>
                <button @click="start">Start</button>
                <button @click="stop">Stop</button>
                <button @click="reset">Reset</button>
            </div>
            -->


            <AppFooter appName="Code Collab" :year="new Date().getFullYear()" class="app-footer" />
    </div>
  </div>
</template>

<style scoped>
.top-nav {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 0.5rem 1rem;
  background: #333;
}

.top-nav a {
  color: #42b883;
  text-decoration: none;
}

.app-layout {
  display: grid;
  grid-template-columns: minmax(180px, 250px) minmax(0, 1fr) minmax(220px, 300px);
  grid-template-rows: auto minmax(0, 1fr) auto;
  grid-template-areas:
    'header header header'
    'files editor chat'
    'footer footer footer';
  gap: 1rem;
  padding: 1rem;
  min-height: calc(100vh - 3rem);
  background: #f3f4f6;
}

.app-header { grid-area: header; }
.app-files  { grid-area: files;  }
.app-editor { grid-area: editor; min-width: 0; }
.app-chat   { grid-area: chat;   }
.app-footer { grid-area: footer; }

.app-files,
.app-chat {
  background: white;
  border-radius: 6px;
  padding: 1rem;
}

@media (max-width: 1000px) {
  .app-layout {
    grid-template-columns: minmax(160px, 220px) minmax(0, 1fr);
    grid-template-rows: auto auto auto auto;
    grid-template-areas:
      'header header'
      'files editor'
      'chat chat'
      'footer footer';
  }
}

@media (max-width: 700px) {
  .app-layout {
    grid-template-columns: minmax(0, 1fr);
    grid-template-areas:
      'header'
      'files'
      'editor'
      'chat'
      'footer';
  }
}
</style>