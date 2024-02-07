import { useEffect, useRef } from 'react'
import { Nostalgist } from 'nostalgist'

import { rom_file } from '../../../../../ss/rom'
import { emulator, Game as _Game } from '../../../ss'

export
const Game = () => {
  const ref_canvas = useRef<HTMLCanvasElement>(null)
  const val_rom_file = rom_file.useVal()
  // 启动游戏
  useEffect(() => {
    ;(async function start_game() {
      console.log('启动游戏，如果使用国内网络，这个过程会比较慢')
      const _launcher = await Nostalgist.nes({
        rom: val_rom_file!,
        element: ref_canvas.current!, // 没有 element 就说明没 mount 好
      })
      emulator.game = new _Game(_launcher)
    }())
  }, [])

  return <canvas
    ref={ref_canvas}
    style={{
      position: 'fixed',
      left: 0,
      top: 0,
      width: '100%',
      height: '100%',
    }}
  />
}
