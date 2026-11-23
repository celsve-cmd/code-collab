import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useUserStore = defineStore('user', () => {
  const userName = ref('')
  const displayName = computed(() => userName.value || 'Anonym')
  const isLoggedIn = computed(() => userName.value.trim().length > 0)

  function setUserName(name: string) {
    userName.value = name.trim()
  }

  function logout() {
    userName.value = ''
  }

  return { userName, displayName, isLoggedIn, setUserName, logout }
})