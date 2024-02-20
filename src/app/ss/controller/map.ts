import { Localstorage_manager_json } from '../../../common/localstorage'

type KB_key =
  'KeyQ' | 'KeyW' | 'KeyE' | 'KeyR'
  | 'KeyT' | 'KeyY'
  | 'KeyU' | 'KeyI' | 'KeyO' | 'KeyP'
  | 'KeyA' | 'KeyS' | 'KeyD' | 'KeyF'
  | 'KeyG' | 'KeyH'
  | 'KeyJ' | 'KeyK' | 'KeyL' | 'Semicolon' 
  | 'KeyZ' | 'KeyX' | 'KeyC' | 'KeyV'
  | 'KeyB' | 'KeyN' | 'KeyM'

export
type KB_value =
  'q' | 'w' | 'e' | 'r'
  | 't' | 'y'
  | 'u' | 'i' | 'o' | 'p'
  | 'a' | 's' | 'd' | 'f'
  | 'g' | 'h'
  | 'j' | 'k' | 'l' | 'semicolon'
  | 'z' | 'x' | 'c' | 'v'
  | 'b' | 'n' | 'm'

// @ts-ignore
const kv_map: Record<KB_key, KB_value> = Object.freeze({
  KeyQ: 'q', KeyW: 'w', KeyE: 'e', KeyR: 'r',
  KeyT: 't', KeyY: 'y',
  KeyU: 'u', KeyI: 'i', KeyO: 'o', KeyP: 'p',
  KeyA: 'a', KeyS: 's', KeyD: 'd', KeyF: 'f',
  KeyG: 'g', KeyH: 'h',
  KeyJ: 'j', KeyK: 'k', KeyL: 'l', Semicolon: 'semicolon',
  KeyZ: 'z', KeyX: 'x', KeyC: 'c', KeyV: 'v',
  KeyB: 'b', KeyN: 'n', KeyM: 'm',
})

export
type keymap_value = {
  input_player1_left: KB_value
  input_player1_right: KB_value
  input_player1_up: KB_value
  input_player1_down: KB_value

  input_player1_a: KB_value
  input_player1_b: KB_value
  input_player1_x: KB_value
  input_player1_y: KB_value

  input_player1_select: KB_value
  input_player1_start: KB_value
}

const default_keymap: keymap_value = Object.freeze({
  input_player1_left: 's',
  input_player1_right: 'f',
  input_player1_up: 'e',
  input_player1_down: 'd',

  input_player1_a: 'k',
  input_player1_b: 'j',
  input_player1_x: 'i',
  input_player1_y: 'u',

  input_player1_select: 'g',
  input_player1_start: 'h',
})

export
const keymap = new class Keymap extends Localstorage_manager_json<keymap_value> {
  constructor() {
    super('controller-keymap', default_keymap)
  }
}
