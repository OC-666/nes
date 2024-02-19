import { State } from '../../../common/state'

const state_controller_modal_shown = State(false)
let cb_on_close: null | (() => void) = null

export
const useVal_controller_modal_shown = () => state_controller_modal_shown.useVal()

export
const show_controller_modal = (cb?: () => void) => {
  if (cb_on_close) throw Error('there is already a `on_close` callback')
  cb_on_close = cb || null

  state_controller_modal_shown.set(() => true)
}

export
const hide_controller_modal = () => {
  if (cb_on_close) cb_on_close()
  cb_on_close = null

  state_controller_modal_shown.set(() => false)
}
