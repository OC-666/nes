import { Localstorage_manager_json } from '../../../common/localstorage'
import { KB_key, KB_label, KB_value } from './types'

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

    ['Enter', 'enter', '回车'], ['ShiftRight', 'rshift', '右 shift'],

    ['ArrowLeft', 'left', '←'], ['ArrowRight', 'right', '→'],
    ['ArrowUp', 'up', '↑'], ['ArrowDown', 'down', '↓'],

    ['Numpad7', 'keypad7', '小键盘 7'], ['Numpad8', 'keypad8', '小键盘 8'], ['Numpad9', 'keypad9', '小键盘 9'],
    ['Numpad4', 'keypad4', '小键盘 4'], ['Numpad5', 'keypad5', '小键盘 5'], ['Numpad6', 'keypad6', '小键盘 6'],
    ['Numpad1', 'keypad1', '小键盘 1'], ['Numpad2', 'keypad2', '小键盘 2'], ['Numpad3', 'keypad3', '小键盘 3'],
    ['Numpad0', 'keypad0', '小键盘 0']
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
  input_player1_left: 'a',
  input_player1_right: 'd',
  input_player1_up: 'w',
  input_player1_down: 's',

  input_player1_a: 'keypad2',
  input_player1_b: 'keypad1',
  input_player1_x: 'keypad5',
  input_player1_y: 'keypad4',

  input_player1_select: 'rshift',
  input_player1_start: 'enter',
})

export
const keymap = new class Keymap extends Localstorage_manager_json<keymap_value> {
  constructor() {
    super('controller-keymap', default_keymap)
  }
}
