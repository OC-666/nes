import { Nostalgist } from 'nostalgist'
import { set_rom_file } from '../../../ss/rom'

type Game_status = 'running' | 'paused' | 'stopped'

interface SS_emulator {
  game: Game | null
}

export
const emulator: SS_emulator = {
  game: null
}

export
class Game {
  private _status: Game_status = 'running' // 构造器接收到的是一个 running 的 _game
  private readonly _on_quit: (() => void)[] = []

  constructor(
    private readonly _game: Nostalgist,
  ) {
    const listen_resize = () => {
      this.resize()
    }
    window.addEventListener('resize', listen_resize)
    this._on_quit.push(() =>
      window.removeEventListener('resize', listen_resize)
    )
  }

  get_status() {
    return this._status
  }

  resume() {
    this._game.resume()
    this._status = 'running'
  }

  pause() {
    this._game.pause()
    this._status = 'paused'
  }

  quit() {
    this._status = 'stopped'
    this._game.exit({
      removeCanvas: false, // 由 Nostalgist 添加的 canvas 才需要移除，否则用户重新打开游戏，就没有 canvas 了
    })
    set_rom_file(null)
    emulator.game = null

    this._on_quit.forEach(cb => cb())
  }

  resize() {
    const opts= {
      width: window.innerWidth,
      height: window.innerHeight,
    }
    console.log('resizing window', opts)
    this._game.resize(opts)
  }
}
