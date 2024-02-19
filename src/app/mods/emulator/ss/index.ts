import { Nostalgist } from 'nostalgist'
import { get_rom_file, set_rom_file } from '../../../ss/rom'
import { keymap } from '../../../ss/controller/map'

type Game_status = 'before_running' | 'running' | 'paused' | 'stopped'

interface SS_emulator {
  game: Game | null
}

export
const emulator: SS_emulator = {
  game: null
}

export
class Game {
  private _status: Game_status = 'before_running'
  private readonly _on_quit: (() => void)[] = []
  private _game?: Nostalgist

  constructor(
    private _canvas: HTMLCanvasElement,
  ) {
    const listen_resize = () => {
      if (this._status == 'running')
        this.resize()
    }
    window.addEventListener('resize', listen_resize)
    this._on_quit.push(() =>
      window.removeEventListener('resize', listen_resize)
    )

    emulator.game = this
  }

  get_status() {
    return this._status
  }

  async start() {
    console.log('启动游戏，如果使用国内网络，这个过程会比较慢')
    const keymap_value = keymap.get()
    console.log('按键：', keymap_value)
    this._game = await Nostalgist.nes({
      rom: get_rom_file()!,
      element: this._canvas, // 没有 element 就说明没 mount 好
      // resolveCoreJs: ... // 国内加速
      retroarchConfig: keymap_value,
      retroarchCoreConfig: {
        fceumm_turbo_enable: 'Both',
      },
    })
    this._status = 'running'
  }

  resume() {
    if (this._status != 'paused')
      throw Error('resume on not paused game')
    this._game!.resume()
    this._status = 'running'
  }

  pause() {
    if (this._status != 'running')
      throw Error('pause on not running game')
    this._game!.pause()
    this._status = 'paused'
  }

  quit() {
    this._status = 'stopped'
    this._game!.exit({
      removeCanvas: false, // 由 Nostalgist 添加的 canvas 才需要移除，否则用户重新打开游戏，就没有 canvas 了
    })
    set_rom_file(null)
    emulator.game = null

    this._on_quit.forEach(cb => cb())
  }

  async fullscreen() {
    // 默认开启全屏，在设置中修改“是否全屏”
    try {
      await this._canvas.requestFullscreen({ // 打开控制台的情况下，游戏内容非全屏，原因未知
        navigationUI: 'hide',
      })
      console.log('fullscreen success')
    } catch(err) {
      console.error('fullscreen failed', err)
    }
  }
  resize() {
    const opts= {
      width: window.innerWidth,
      height: window.innerHeight,
    }
    console.log('resizing window', opts)
    this._game!.resize(opts)
  }
}
