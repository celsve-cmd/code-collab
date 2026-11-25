import { describe, it, expect, beforeEach } from 'vitest'
import { createPinia, setActivePinia } from 'pinia'
import { useUserStore } from '../stores/useUserStore'

describe('useUserStore', () => {
  beforeEach(() => {
    localStorage.clear()
    setActivePinia(createPinia())
  })

  it('starter med tomt navn', () => {
    const store = useUserStore()
    expect(store.userName).toBe('')
    expect(store.isLoggedIn).toBe(false)
  })

  it('setUserName trimmer og setter navnet', () => {
    const store = useUserStore()
    store.setUserName('  Ada  ')
    expect(store.userName).toBe('Ada')
    expect(store.isLoggedIn).toBe(true)
  })

  it('logout nullstiller navnet', () => {
    const store = useUserStore()
    store.setUserName('Ada')
    store.logout()
    expect(store.userName).toBe('')
    expect(store.isLoggedIn).toBe(false)
  })

  it('displayName faller tilbake til Anonym uten navn', () => {
    const store = useUserStore()
    expect(store.displayName).toBe('Anonym')

    store.setUserName('Ada')
    expect(store.displayName).toBe('Ada')
  })
})