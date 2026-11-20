import { ref, watch } from 'vue'

export function tryParse<T>(raw: string | null, fallback: T): T {
  if (raw === null) return fallback
  try {
    return JSON.parse(raw) as T
  } catch {
    return fallback
  }
}

export function useLocalStorage<T>(key: string, defaultValue: T) {
  const data = ref<T>(tryParse(localStorage.getItem(key), defaultValue))

  watch(data, (val) => {
    localStorage.setItem(key, JSON.stringify(val))
  })

  return data
}