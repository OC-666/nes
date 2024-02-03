import { useRef, useEffect } from 'react'
import { emulator } from '../../../ss'

export
const Game_menu = () => {
  const ref_dialog = useRef<HTMLDialogElement>(null)

  useEffect(() => {
    const listen_esc_key = (evt: KeyboardEvent) => {
      if (evt.key != 'Escape') return
      console.log('hitting esc')
      
      const game = emulator.game!
      const dialog = ref_dialog.current!
      switch(game.get_status()) {
        case 'running':
          game.pause()
          dialog.showModal()
          break
        case 'paused':
          game.resume()
          dialog.close()
          break
        case 'stopped':
          console.debug('hit game when stopped')
          break
      }
    }

    document.addEventListener('keydown', listen_esc_key)
    return () => document.removeEventListener('keydown', listen_esc_key)
  }, [])

  return <dialog
    ref={ref_dialog}
  >
    dialog
  </dialog>
}
