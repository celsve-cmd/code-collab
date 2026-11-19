import type { InjectionKey, Ref } from 'vue'

export const userNameKey: InjectionKey<Readonly<Ref<string>>> = Symbol('userName')
export const displayNameKey: InjectionKey<Readonly<Ref<string>>> = Symbol('displayName')
export const setUserNameKey: InjectionKey<(name: string) => void> = Symbol('setUserName')