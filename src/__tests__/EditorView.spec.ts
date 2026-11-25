import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import { createPinia } from 'pinia'
import { createMemoryHistory, createRouter } from 'vue-router'
import EditorView from '../views/EditorView.vue'
import { useMessageStore } from '../stores/useMessageStore'

describe('EditorView', () => {
  it('kaller addMessage på storen når panelet emitter', async () => {
    const router = createRouter({
      history: createMemoryHistory(),
      routes: [{ path: '/', component: { render: () => null } }],
    })
    router.push('/')
    await router.isReady()

    const pinia = createPinia()
    const wrapper = mount(EditorView, {
      global: {
        plugins: [pinia, router],
        stubs: { TextEditor: true, AppFooter: true, ProjectBadge: true },
      },
    })

    const store = useMessageStore()
    expect(store.messages).toHaveLength(0)

    await wrapper.get('input[placeholder="Spør om koden..."]').setValue('Test melding')
    const sendKnapp = wrapper.findAll('button').find((b) => b.text() === 'Send')!
    await sendKnapp.trigger('click')

    expect(store.messages).toHaveLength(1)
    expect(store.messages[0]!.text).toBe('Test melding')
  })
})