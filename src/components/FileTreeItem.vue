<script setup lang="ts">
import { computed, ref } from 'vue'
import type { FileNode } from '../types'

defineOptions({ name: 'FileTreeItem' })

const props = defineProps<{ node: FileNode; depth: number }>()
const emit = defineEmits<{ selectFile: [node: FileNode] }>()

const isOpen = ref(props.node.type === 'folder')

const indent = computed(() => ({ paddingLeft: `${props.depth}rem` }))

const icon = computed(() => {
  if (props.node.type === 'folder') {
    return isOpen.value ? '📂' : '📁'
  }
  return '📄'
})

function handleClick() {
  if (props.node.type === 'folder') {
    isOpen.value = !isOpen.value
  } else {
    emit('selectFile', props.node)
  }
}
</script>

<template>
  <div>
    <div class="file-row" :style="indent" @click="handleClick">
      <span>{{ icon }}</span>
      <span>{{ node.name }}</span>
    </div>

    <div v-if="node.type === 'folder' && isOpen" class="children">
      <FileTreeItem
        v-for="child in node.children"
        :key="child.name"
        :node="child"
        :depth="props.depth + 1"
        @select-file="emit('selectFile', $event)"
      />
    </div>
  </div>
</template>

<style scoped>
.file-row {
  display: flex;
  gap: 0.4rem;
  cursor: pointer;
  padding: 0.15rem 0;
}
.file-row:hover {
  background: #eee;
}
.children {
  display: flex;
  flex-direction: column;
}
</style>