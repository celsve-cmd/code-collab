import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import FileTree from '../components/FileTree.vue'

describe('FileTree', () => {
  it('viser toppnivåets mapper og filer', () => {
    const wrapper = mount(FileTree)
    expect(wrapper.text()).toContain('src')
    expect(wrapper.text()).toContain('package.json')
  })

  it('rendrer nestede nivåer rekursivt', () => {
    const wrapper = mount(FileTree)
    expect(wrapper.text()).toContain('components')
    expect(wrapper.text()).toContain('App.vue')
    expect(wrapper.text()).toContain('main.ts')
    expect(wrapper.text()).toContain('AppHeader.vue')
  })

  it('klikk på fil emitterer selectFile med noden', async () => {
    const wrapper = mount(FileTree)
    const radene = wrapper.findAll('.file-row')
    const mål = radene.find((rad) => rad.text().includes('main.ts'))!
    await mål.trigger('click')

    expect(wrapper.emitted('selectFile')).toHaveLength(1)
    const node = wrapper.emitted('selectFile')![0]![0] as unknown as Record<string, string>
    expect(node['name']).toBe('main.ts')
    expect(node['language']).toBe('javascript')
  })

  it('mapper åpnes og lukkes ved klikk, uten å emittere', async () => {
    const wrapper = mount(FileTree)
    const radene = wrapper.findAll('.file-row')
    const mappeRad = radene.find((rad) => rad.text().includes('components'))!

    await mappeRad.trigger('click')
    expect(wrapper.text()).not.toContain('AppHeader.vue')

    await mappeRad.trigger('click')
    expect(wrapper.text()).toContain('AppHeader.vue')
    expect(wrapper.emitted('selectFile')).toBeFalsy()
  })
})