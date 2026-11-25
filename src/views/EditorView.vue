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
        </nav>

        <div class="app-layout">
            <ProjectBadge class="app-badge" />
            <AppHeader class="app-header" :userName="userStore.userName"
                @update:userName="userStore.setUserName($event)" />
            <TextEditor class="app-editor" :userName="userStore.userName" />
            <AssistantPanel class="app-chat" :userName="userStore.userName" :messages="messageStore.messages"
                :isWaiting="messageStore.isWaiting" @send-message="messageStore.addMessage($event)"
                @remove-message="messageStore.removeMessage($event)" />

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
    padding: 0.5rem 1rem;
    background: #333;
}

.top-nav a {
    color: #42b883;
    text-decoration: none;
}

.app-layout {
    display: grid;
    grid-template-columns: 1fr 300px;
    grid-template-rows: auto auto 1fr auto;
    min-height: 100vh;
    gap: 1px;
    background: #ddd;
}

.app-badge {
    grid-column: 1 / -1;
    grid-row: 1;
}

.app-header {
    grid-column: 1 / -1;
    grid-row: 2;
    margin-top: 10px;
}

.app-editor {
    grid-column: 1 / 2;
    grid-row: 3;
}

.app-chat {
    grid-column: 2 / 3;
    grid-row: 3;
}

.app-footer {
    grid-column: 1 / -1;
    grid-row: 4;
    margin-top: 10px;
}
</style>