import { Localstorage_manager_json } from '../../../common/localstorage'

// 可用的键：https://github.com/libretro/RetroArch/blob/master/retroarch.cfg#L445

type KB_key =
  'KeyQ' | 'KeyW' | 'KeyE' | 'KeyR'
  | 'KeyT' | 'KeyY'
  | 'KeyU' | 'KeyI' | 'KeyO' | 'KeyP'
  | 'KeyA' | 'KeyS' | 'KeyD' | 'KeyF'
  | 'KeyG' | 'KeyH'
  | 'KeyJ' | 'KeyK' | 'KeyL' | 'Semicolon' 
  | 'KeyZ' | 'KeyX' | 'KeyC' | 'KeyV'
  | 'KeyB' | 'KeyN' | 'KeyM' | 'Period'
  | 'ArrowLeft' | 'ArrowRight' | 'ArrowUp' | 'ArrowDown'

export
type KB_value =
  'q' | 'w' | 'e' | 'r'
  | 't' | 'y'
  | 'u' | 'i' | 'o' | 'p'
  | 'a' | 's' | 'd' | 'f'
  | 'g' | 'h'
  | 'j' | 'k' | 'l' | 'semicolon'
  | 'z' | 'x' | 'c' | 'v'
  | 'b' | 'n' | 'm' | 'period'
  | 'left' | 'right' | 'up' | 'down'

export
type KB_label =
  'Q' | 'W' | 'E' | 'R'
  | 'T' | 'Y'
  | 'U' | 'I' | 'O' | 'P'
  | 'A' | 'S' | 'D' | 'F'
  | 'G' | 'H'
  | 'J' | 'K' | 'L' | ';'
  | 'Z' | 'X' | 'C' | 'V'
  | 'B' | 'N' | 'M' | '.'
  | '←' | '→' | '↑' | '↓'

export
const key_value_label_map = new class Key_value_label_map {
  private readonly _list: [KB_key, KB_value, KB_label][] = [
    ['KeyQ', 'q', 'Q'], ['KeyW', 'w', 'W'], ['KeyE', 'e', 'E'], ['KeyR', 'r', 'R'],
    ['KeyT', 't', 'T'], ['KeyY', 'y', 'Y'],
    ['KeyU', 'u', 'U'], ['KeyI', 'i', 'I'], ['KeyO', 'o', 'O'], ['KeyP', 'p', 'P'],
    ['KeyA', 'a', 'A'], ['KeyS', 's', 'S'], ['KeyD', 'd', 'D'], ['KeyF', 'f', 'F'],
    ['KeyG', 'g', 'G'], ['KeyH', 'h', 'H'],
    ['KeyJ', 'j', 'J'], ['KeyK', 'k', 'K'], ['KeyL', 'l', 'L'], ['Semicolon', 'semicolon', ';'],
    ['KeyZ', 'z', 'Z'], ['KeyX', 'x', 'X'], ['KeyC', 'c', 'C'], ['KeyV', 'v', 'V'],
    ['KeyB', 'b', 'B'], ['KeyN', 'n', 'N'], ['KeyM', 'm', 'M'], ['Period', 'period', '.'],
    ['ArrowLeft', 'left', '←'], ['ArrowRight', 'right', '→'],
    ['ArrowUp', 'up', '↑'], ['ArrowDown', 'down', '↓'],
  ]
  key(key: KB_key) {
    return {
      value: this._list.find(v => v[0] == key)![1],
      label: this._list.find(v => v[0] == key)![2],
    }
  }
  value(value: KB_value) {
    return {
      key: this._list.find(v => v[1] == value)![0],
      label: this._list.find(v => v[1] == value)![2],
    }
  }
  label(label: KB_label) {
    return {
      key: this._list.find(v => v[2] == label)![0],
      value: this._list.find(v => v[2] == label)![1],
    }
  }
}

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
