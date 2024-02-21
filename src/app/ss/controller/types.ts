
// 可用的键：https://github.com/libretro/RetroArch/blob/master/retroarch.cfg#L445

export
type KB_key =
  'KeyQ' | 'KeyW' | 'KeyE' | 'KeyR'
  | 'KeyT' | 'KeyY'
  | 'KeyU' | 'KeyI' | 'KeyO' | 'KeyP'
  | 'KeyA' | 'KeyS' | 'KeyD' | 'KeyF'
  | 'KeyG' | 'KeyH'
  | 'KeyJ' | 'KeyK' | 'KeyL' | 'Semicolon' 
  | 'KeyZ' | 'KeyX' | 'KeyC' | 'KeyV'
  | 'KeyB' | 'KeyN' | 'KeyM' | 'Period'

  | 'Enter' | 'ShiftRight'
  | 'ArrowLeft' | 'ArrowRight' | 'ArrowUp' | 'ArrowDown'

  | 'Numpad7' | 'Numpad8' | 'Numpad9'
  | 'Numpad4' | 'Numpad5' | 'Numpad6'
  | 'Numpad1' | 'Numpad2' | 'Numpad3'
  | 'Numpad0'

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

  | 'rshift' | 'enter'
  | 'left' | 'right' | 'up' | 'down'
  
  | 'keypad7' | 'keypad8' | 'keypad9'
  | 'keypad4' | 'keypad5' | 'keypad6'
  | 'keypad1' | 'keypad2' | 'keypad3'
  | 'keypad0'

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

  | '右 shift' | '回车'
  | '←' | '→' | '↑' | '↓'

  | '小键盘 7' | '小键盘 8' | '小键盘 9'
  | '小键盘 4' | '小键盘 5' | '小键盘 6'
  | '小键盘 1' | '小键盘 2' | '小键盘 3'
  | '小键盘 0'
