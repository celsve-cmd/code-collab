import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import EditorToolbar from '../components/EditorToolbar.vue'

describe('EditorToolbar', () => {
  it('viser hvem som redigerer når navnet er satt', () => {
    const wrapper = mount(EditorToolbar, {
      props: { userName: 'Ada', charCount: 12, wordCount: 3 }
    })
    expect(wrapper.text()).toContain('Ada redigerer')
    expect(wrapper.text()).toContain('12 tegn')
  })

  it('ber om navn når det mangler', () => {
    const wrapper = mount(EditorToolbar, {
      props: { userName: '', charCount: 0, wordCount: 0 }
    })
    expect(wrapper.text()).toContain('Skriv navnet ditt for å starte')
  })
})