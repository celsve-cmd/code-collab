import { afterEach, describe, expect, it, vi } from 'vitest'
import { useMessageStore } from '../stores/useMessageStore'

describe('useMessages med isWaiting', () => {
  afterEach(() => {
    vi.useRealTimers()
  })

  it('venter på assistenten før den slipper inn en ny melding', () => {
    vi.useFakeTimers()
    const { messages, newMessage, isWaiting, send } = useMessages()

    newMessage.value = 'Hei'
    send()

    expect(isWaiting.value).toBe(true)
    expect(messages.value).toHaveLength(1)

    newMessage.value = 'Ignorer meg'
    send()
    expect(messages.value).toHaveLength(1)

    vi.advanceTimersByTime(800)

    expect(isWaiting.value).toBe(false)
    expect(messages.value).toHaveLength(2)
  })
})