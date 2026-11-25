<script setup lang="ts">
import FileTreeItem from './FileTreeItem.vue'
import type { FileNode } from '../types'

const emit = defineEmits<{ selectFile: [node: FileNode] }>()

const files: FileNode[] = [
  {
    name: 'src',
    type: 'folder',
    children: [
      {
        name: 'components',
        type: 'folder',
        children: [
          {
            name: 'AppHeader.vue',
            type: 'file',
            language: 'html',
            content: '<template>\n  <header>\n    <h1>Code Collab</h1>\n  </header>\n</template>'
          }
        ]
      },
      {
        name: 'App.vue',
        type: 'file',
        language: 'html',
        content: '<template>\n  <RouterView />\n</template>'
      },
      {
        name: 'main.ts',
        type: 'file',
        language: 'javascript',
        content: "import { createApp } from 'vue'\nimport App from './App.vue'\n\ncreateApp(App).mount('#app')"
      },
      {
        name: 'types.ts',
        type: 'file',
        language: 'javascript',
        content: 'export interface Message {\n  id: number\n  role: "user" | "assistant"\n  text: string\n}'
      }
    ]
  },
  {
    name: 'package.json',
    type: 'file',
    language: 'json',
    content: '{\n  "name": "code-collab",\n  "version": "1.0.0"\n}'
  }
]
</script>

<template>
  <aside class="file-tree">
    <h3>Filer</h3>
    <FileTreeItem
      v-for="node in files"
      :key="node.name"
      :node="node"
      :depth="0"
      @select-file="emit('selectFile', $event)"
    />
  </aside>
</template>