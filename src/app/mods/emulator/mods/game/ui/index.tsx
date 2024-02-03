import { useEffect, useRef } from 'react'
import { Nostalgist } from 'nostalgist'

import { file_handle } from '../../../../../ss/file'
import { emulator, Game as _Game } from '../../../ss'

export
const Game = () => {
  const ref_canvas = useRef<HTMLCanvasElement>(null)
  const handle = file_handle.useVal()
  // 启动游戏
  useEffect(() => {
    ;(async function start_game() {
      const file = await handle!.getFile() // 没有 handle 就不应打开这个页面
      const _launcher = await Nostalgist.nes({
        rom: file,
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
