import { Localstorage_manager_json } from '../../../common/localstorage'

type Key =
  'KeyQ' | 'KeyW' | 'KeyE' | 'KeyR'
  | 'KeyT' | 'KeyY'
  | 'KeyU' | 'KeyI' | 'KeyO' | 'KeyP'
  | 'KeyA' | 'KeyS' | 'KeyD' | 'KeyF'
  | 'KeyG' | 'KeyH'
  | 'KeyJ' | 'KeyK' | 'KeyL' | 'Semicolon' 
  | 'KeyZ' | 'KeyX' | 'KeyC' | 'KeyV'
  | 'KeyB' | 'KeyN' | 'KeyM'

type keymap_value = {
  input_player1_left: Key
  input_player1_right: Key
  input_player1_up: Key
  input_player1_down: Key

  input_player1_a: Key
  input_player1_b: Key
  input_player1_x: Key
  input_player1_y: Key

  input_player1_select: Key
  input_player1_start: Key
}

const default_keymap: keymap_value = Object.freeze({
  input_player1_left: 'KeyS',
  input_player1_right: 'KeyF',
  input_player1_up: 'KeyE',
  input_player1_down: 'KeyD',

  input_player1_a: 'KeyK',
  input_player1_b: 'KeyJ',
  input_player1_x: 'KeyI',
  input_player1_y: 'KeyU',

  input_player1_select: 'KeyG',
  input_player1_start: 'KeyH',
})

export
const keymap = new class Keymap extends Localstorage_manager_json<keymap_value> {
  constructor() {
    super('controller-keymap', default_keymap)
  }
}
