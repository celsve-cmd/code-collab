import { ref, watch } from 'vue'

export function tryParse<T>(raw: string | null, fallback: T): T {
  if (raw === null) return fallback
  try {
    return JSON.parse(raw) as T
  } catch {
    return fallback
  }
}

export function useLocalStorage<T>(key: string, defaultValue: T, storage?: Storage) {
  const lagring = storage ?? window.localStorage
  const data = ref<T>(tryParse(lagring.getItem(key), defaultValue))

  watch(data, (val) => {
    lagring.setItem(key, JSON.stringify(val))
  })

  return data
}