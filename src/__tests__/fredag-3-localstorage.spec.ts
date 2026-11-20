import { describe, expect, it } from 'vitest'
import { tryParse } from '../composables/useLocalStorage'

describe('tryParse', () => {
  it('gir standardverdien når det ikke ligger noe lagret', () => {
    expect(tryParse(null, 'standard')).toBe('standard')
  })

  it('gir standardverdien når lagret data er ødelagt', () => {
    expect(tryParse('{ikke json', 'standard')).toBe('standard')
  })

  it('leser gyldig JSON', () => {
    expect(tryParse('"Geir"', '')).toBe('Geir')
    expect(tryParse('42', 0)).toBe(42)
  })

  it('beholder false og 0 som gyldige verdier', () => {
    expect(tryParse('false', true)).toBe(false)
    expect(tryParse('0', 99)).toBe(0)
  })
})