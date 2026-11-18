<script setup lang="ts">
import { useMouse } from '../composables/useMouse'

const { x, y } = useMouse()
</script>


<template>
  <aside>
    <h2>Assistent</h2>
    <p>Kommer i morgen.</p>
    <p>Musen er på {{ x }}, {{ y }}</p>
  </aside>
</template>