import { describe, it, expect, beforeEach } from 'vitest'
import { createPinia, setActivePinia } from 'pinia'
import { useMessageStore } from '../stores/useMessageStore'

describe('useMessageStore', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })

  it('starter med tom liste', () => {
    const store = useMessageStore()
    expect(store.messages).toEqual([])
    expect(store.messageCount).toBe(0)
  })

  it('addMessage legger til brukermeldinger, men ikke tomme', () => {
    const store = useMessageStore()
    store.addMessage('   ')
    expect(store.messages).toHaveLength(0)

    store.addMessage('Hei!')
    expect(store.messages).toHaveLength(1)
    expect(store.messages[0]!.role).toBe('user')
  })

  it('removeMessage fjerner bare den oppgitte meldingen', () => {
    const store = useMessageStore()
    store.$patch({
      messages: [
        { id: 1, role: 'user', text: 'Melding 1' },
        { id: 2, role: 'user', text: 'Melding 2' },
        { id: 3, role: 'user', text: 'Melding 3' },
      ],
    })

    store.removeMessage(1)

    expect(store.messages).toHaveLength(2)
    expect(store.messages[0]!.text).toBe('Melding 2')
  })

  it('reset tømmer lista', () => {
    const store = useMessageStore()
    store.$patch({
      messages: [
        { id: 1, role: 'user', text: 'Hei!' },
        { id: 2, role: 'assistant', text: 'Hallo' },
      ],
    })
    store.reset()
    expect(store.messages).toHaveLength(0)
  })
})