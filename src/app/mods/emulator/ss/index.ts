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
  private status: Game_status = 'running' // 构造器接收到的是一个 running 的 launcher

  constructor(
    private readonly launcher: Nostalgist,
  ) {}

  get_status() {
    return this.status
  }

  resume() {
    this.launcher.resume()
    this.status = 'running'
  }

  pause() {
    this.launcher.pause()
    this.status = 'paused'
  }

  quit() {
    this.status = 'stopped'
    this.launcher.exit({
      removeCanvas: false, // 由 Nostalgist 添加的 canvas 才需要移除，否则用户重新打开游戏，就没有 canvas 了
    })
    set_rom_file(null)
    emulator.game = null
  }
}
