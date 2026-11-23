import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import { createPinia, setActivePinia } from 'pinia'
import { useMessageStore } from '../stores/useMessageStore'

describe('useMessageStore med isWaiting', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
    vi.useFakeTimers()
  })

  afterEach(() => {
    vi.useRealTimers()
  })

  it('venter på assistenten før den slipper inn en ny melding', () => {
    const store = useMessageStore()

    store.addMessage('Hei')

    expect(store.isWaiting).toBe(true)
    expect(store.messages).toHaveLength(1)

    store.addMessage('Ignorer meg')
    expect(store.messages).toHaveLength(1)

    vi.advanceTimersByTime(800)

    expect(store.isWaiting).toBe(false)
    expect(store.messages).toHaveLength(2)
  })
})