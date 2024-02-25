import { useSyncExternalStore } from 'react'

type Listener = () => void
type setter<Val> = (calc: (old_val: Val) => Val) => void

export
interface I_state<Val> {
  get: () => Val
  set: setter<Val>
  useVal: () => Val
  useSet: () => setter<Val>
  useState: () => [Val, setter<Val>]
  subscribe: (listener: Listener) => () => void
}

export
const State = <Val>(val: Val): I_state<Val> => {
  const listeners: Listener[] = []
  const subscribe = (listener: Listener) => {
    listeners.push(listener)
    return () =>
      listeners.splice(listeners.indexOf(listener), 1)
  }

  const set = (calc_val: (old: Val) => Val) => {
    val = calc_val(val)
    for (const l of listeners)
      l()
  }
  const get = () => val

  const useVal = () => useSyncExternalStore<Val>(subscribe, get)
  const useState: () => [Val, typeof set] = () => [useVal(), set]
  return  {
    get,
    set,
    useVal,
    useSet: () => set,
    subscribe,
    useState,
  }
}

export
const State_nullable = <Val>(val: Val | null) => State(val)
