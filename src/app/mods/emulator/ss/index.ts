import { Nostalgist } from 'nostalgist'
import { get_rom_file, set_rom_file, state_rom_info } from '../../../ss/rom'
import { keymap } from '../../../ss/controller/map'
import { state_setting } from '../../../ss/settings'

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
      console.log('resize listened')
      if (this._status == 'running' || this._status == 'paused') {
        console.log('resize')
        this.resize()
      }
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

  async retrieve_state() {
    const { state } = await this._game!.saveState()
    return state

    // const result = {
    //   state: await state.text(),
    //   thumbnail: await thumbnail?.text(),
    // }
    // return JSON.stringify(result)
  }
  async load_state(state: Blob) {
    await this._game!.loadState(state)
    await this._game!.pause() // ! 有时加载后，游戏会马上开始，可能是 nostalgist 或 retroarch 的 assembly 的bug
  }

  async start() {
    const keymap_value = keymap.get()
    console.log('starting...')
    console.log('keymap', keymap_value)
    const core = state_rom_info.get()?.core
    if (!core)
      throw Error('core should have been set already. https://github.com/OC-666/nes/wiki/%E6%A0%B8%E5%BF%83%E9%80%89%E6%8B%A9')
    
    this._game = await Nostalgist.launch({
      rom: get_rom_file()!,
      core,
      element: this._canvas, // 没有 element 就说明没 mount 好
      // resolveCoreJs: ... // 国内加速
      retroarchConfig: {
        rewind_enable: state_setting.rewind_enabled.get(), // 回溯
        savestate_thumbnail_enable: true,

        // 按键映射
        ...keymap_value,
        input_toggle_fast_forward: 'num6', // https://github.com/libretro/RetroArch/blob/master/retroarch.cfg#L577
        input_rewind: 'backspace', // https://github.com/libretro/RetroArch/blob/master/retroarch.cfg#L593
      },
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
      await document.documentElement.requestFullscreen({ // 打开控制台的情况下，游戏内容非全屏，原因未知
        // navigationUI: 'hide',
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
