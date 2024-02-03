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
    className='menu_container'
    ref={ref_dialog}
  >
    <menu>
      <Menu_item
        label='继续'
        on_click={() => {
          todo()
        }}
      />
      <Menu_item
        label='退出全屏'
        on_click={() => {
          todo()
        }}
      />
      <Menu_item
        label='保存'
        on_click={() => {
          todo()
        }}
      />
      <Menu_item
        label='联机'
        on_click={() => {
          todo()
        }}
      />
      <Menu_item
        label='退出'
        on_click={() => {
          todo()
        }}
      />
    </menu>
  </dialog>
}

interface Menu_item_props {
  label: string
  on_click: () => void
}

const Menu_item = ({ label, on_click }: Menu_item_props) =>
  <li>
    <button onClick={on_click}>{label}</button>
  </li>

function todo() {
  alert('功能未添加，开发者正在努力')
}
