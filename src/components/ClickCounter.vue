<script setup lang="ts">
import { ref, computed } from 'vue'

const props = defineProps<{ initial?: number }>()
const emit = defineEmits<{ inc: [value: number]; reset: [] }>()

const count = ref(props.initial ?? 0)
const doubled = computed(() => count.value * 2)

function increment(): void {
  count.value++
  emit('inc', count.value)
}

function reset(): void {
  count.value = props.initial ?? 0
  emit('reset')
}
</script>

<template>
  <div>
    <p>Count: {{ count }}</p>
    <p>Double: {{ doubled }}</p>
    <button @click="increment">+1</button>
    <button @click="reset">Reset</button>
  </div>
</template>



<!--  
// Slik ser den ut i modul 2. Se på den før du begynner.


class ClickCounter extends HTMLElement {
  private _count = 0

  private get doubled(): number {
    return this._count * 2
  }

  private render(): void {
    this.shadowRoot.innerHTML = `
      <p>Count: <span id="count">${this._count}</span></p>
      <p>Double: <span id="double">${this.doubled}</span></p>
      <button id="inc">+1</button>
    `
    this.shadowRoot.getElementById('inc')?.addEventListener('click', () => {
      this._count++
      this.render()          // ← denne linja må du huske på
    })
  }
}-->