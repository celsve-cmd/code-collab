import { ref, computed, onUnmounted } from 'vue'

export function useTimer(initialSeconds: number, onComplete?: () => void) {
  const remaining = ref(initialSeconds)
  const isRunning = ref(false)
  let intervalId: number | null = null

  const formatted = computed(() => {
    const mins = Math.floor(remaining.value / 60)
    const secs = remaining.value % 60
    return `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`
  })

  function start() {
    if (isRunning.value) return
    if (remaining.value <= 0) {
      remaining.value = initialSeconds
    }
    isRunning.value = true
    intervalId = window.setInterval(() => {
      remaining.value--
      if (remaining.value <= 0) {
        stop()
        onComplete?.()
      }
    }, 1000)
  }

  function stop() {
    if (intervalId !== null) {
      clearInterval(intervalId)
      intervalId = null
    }
    isRunning.value = false
  }

  function reset() {
    stop()
    remaining.value = initialSeconds
  }

  onUnmounted(() => {
    stop()
  })

  return { remaining, formatted, isRunning, start, stop, reset }
}