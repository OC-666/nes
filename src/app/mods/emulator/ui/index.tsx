import { useEffect, useRef } from 'react'
import { Nostalgist } from 'nostalgist'

import { file_handle } from '../../../ss/file'

export
const Emulator = () => {
  const ref_canvas = useRef<HTMLCanvasElement>(null)
  const handle = file_handle.useVal()

  useEffect(() => {
    const start = async () => {
      const file = await handle!.getFile()
      await Nostalgist.nes({
        rom: file,
        element: ref_canvas.current!,
      })
    }

    start()
  }, [handle])

  return <div>
    <canvas
      ref={ref_canvas}
      style={{
        position: 'fixed',
        left: 0,
        top: 0,
        width: '100%',
        height: '100%',
      }}
    />
  </div>
}