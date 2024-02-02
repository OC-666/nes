import { State } from '.'

interface I_state_event {
  emit: () => void
  useSurveilled: () => number
}

export
const State_event = (): I_state_event => {
  const state = State(1)
  return {
    emit: () => {
      state.set(old => old + 1)
    },
    useSurveilled: () => state.useVal(),
  }
}
