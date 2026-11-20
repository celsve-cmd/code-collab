import { ref, watch } from 'vue'

export function useLocalStorage<T>(key: string, defaultValue: T) {
  let initial = defaultValue
  try {
    const stored = localStorage.getItem(key)
    if (stored !== null) initial = JSON.parse(stored)
  } catch {
    // ugyldig data, bruk default
  }

  const data = ref<T>(initial)

  watch(data, (val) => {
    localStorage.setItem(key, JSON.stringify(val))
  })

  return data
}