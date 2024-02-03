import { Nostalgist } from 'nostalgist'

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
}
