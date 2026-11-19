<script setup lang="ts">
import { computed, provide, ref, readonly } from 'vue'
//components
import AppHeader from './components/AppHeader.vue'
import AppFooter from './components/AppFooter.vue'
import TextEditor from './components/TextEditor.vue'
import AssistantPanel from './components/AssistantPanel.vue'
import ClickCounter from './components/ClickCounter.vue'
//composables
import { useMouse } from './composables/useMouse'
import { useTimer } from './composables/useTimer'
//import { useLocalStorage } from './composables/useLocalStorage'
import { userNameKey, setUserNameKey, displayNameKey } from './types'

const userName = ref('')
provide(userNameKey, readonly(userName))
provide(setUserNameKey, (name: string) => {
  userName.value = name
})

const displayName = computed(() => userName.value || 'Anonym')
provide(displayNameKey, displayName)


const { x, y } = useMouse()


const props = withDefaults(defineProps<{
  initialSeconds?: number
}>(), {
  initialSeconds: 60,
})

const emit = defineEmits<{
  (e: 'timer-complete'): void
}>()

const { formatted, isRunning, start, stop, reset } = useTimer(props.initialSeconds, () => {
  emit('timer-complete')
})

</script>

<template>
  <div class="app-layout">
    <AppHeader class="app-header" />

    <TextEditor class="app-editor"/>

    <EditorToolbar :charCount="0" />

    <AssistantPanel class="app-assistant" />

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

    <AppFooter appName="Code Collab" :year="2026" class="app-footer" />
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
  margin-top: 10px;
}
.app-editor {
  grid-column: 1 / 2;
  grid-row: 2 / 3;
}

.click-counters {
  display: flex;
  gap: 1rem;
  padding: 1rem;
}

.mouse-coordinates {
  position: fixed;
  bottom: 1rem;
  right: 1rem;
  background: rgba(255, 255, 255, 0.8);
  padding: 0.5rem;
  border-radius: 4px;
}
</style>