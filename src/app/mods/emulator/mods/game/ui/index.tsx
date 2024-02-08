import { useEffect, useRef } from 'react'

import { Game as _Game } from '../../../ss'

export
const Game = () => {
  const ref_canvas = useRef<HTMLCanvasElement>(null)
  // 启动游戏
  useEffect(() => {
    ;(async function start_game() {
      const canvas = ref_canvas.current!
      const game = new _Game(canvas)
      await game.fullscreen()
      await game.start()
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
