import { describe, expect, it } from 'vitest'
import { ref } from 'vue'
import { useCharCount } from '../composables/useCharCount'

describe('useCharCount', () => {
  it('teller tegn og ord, og oppdaterer seg når teksten endres', () => {
    const text = ref('')
    const { charCount, wordCount } = useCharCount(text)

    expect(charCount.value).toBe(0)
    expect(wordCount.value).toBe(0)

    text.value = 'Hei på deg'

    expect(charCount.value).toBe(10)
    expect(wordCount.value).toBe(3)
  })

  it('teller null ord når teksten bare er mellomrom', () => {
    const text = ref('   ')
    const { wordCount } = useCharCount(text)
    expect(wordCount.value).toBe(0)
  })

  it('to kall deler ikke tilstand', () => {
    const a = useCharCount(ref('hei'))
    const b = useCharCount(ref(''))
    expect(b.charCount.value).toBe(0)
    expect(a.charCount.value).toBe(3)
  })
})