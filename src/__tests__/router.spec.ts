import { describe, it, expect, beforeEach } from 'vitest'
import { createPinia, setActivePinia } from 'pinia'
import router from '../router'
import { useUserStore } from '../stores/useUserStore'

describe('route guard', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })

  it('sender ikke-innlogget til forsiden fra /editor', async () => {
    await router.push({ name: 'editor' })
    expect(router.currentRoute.value.name).toBe('home')
  })

  it('slipper innlogget inn til /editor', async () => {
    const store = useUserStore()
    store.setUserName('Ada')
    await router.push({ name: 'editor' })
    expect(router.currentRoute.value.name).toBe('editor')
  })
})