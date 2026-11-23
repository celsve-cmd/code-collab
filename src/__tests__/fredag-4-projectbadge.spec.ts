// src/__tests__/fredag-4-projectbadge.spec.ts
import { describe, expect, it } from 'vitest'
import { mount } from '@vue/test-utils'
import { createMemoryHistory, createRouter } from 'vue-router'
import ProjectBadge from '../components/ProjectBadge.vue'

async function mountAt(path: string) {
  const router = createRouter({
    history: createMemoryHistory(),
    routes: [{ path: '/editor/:prosjektId?', component: ProjectBadge }],
  })
  await router.push(path)
  await router.isReady()

  return mount(ProjectBadge, { global: { plugins: [router] } })
}

describe('ProjectBadge', () => {
  it('viser prosjekt-id-en fra URL-en', async () => {
    const wrapper = await mountAt('/editor/456')
    expect(wrapper.text()).toContain('Prosjekt: 456')
  })

  it('sier fra når det ikke er valgt noe prosjekt', async () => {
    const wrapper = await mountAt('/editor')
    expect(wrapper.text()).toContain('Ingen prosjekt valgt')
  })
})