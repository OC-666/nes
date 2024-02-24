import { useRef, useEffect } from 'react'
import { emulator } from '../../../ss'
import { show_controller_modal } from '../../../../../ss/controller/modal'
import { Icon } from './icon'

export
const Game_menu = () => {
  const ref_dialog = useRef<HTMLDialogElement>(null)
  const close_dialog = () => {
    ref_dialog.current!.close()
  }
  const open_dialog = () => {
    ref_dialog.current!.showModal()
  }
  const open_menu = () => {
    open_dialog()
    emulator.game!.pause()
  }

  useEffect(() => {
    const listen_menu_key = (evt: KeyboardEvent) => {
      if (evt.code != 'Space') return
      console.log('hitting Space')
      
      const game = emulator.game!

      switch(game.get_status()) {
        case 'running':
          open_menu()
          break
        case 'paused':
          game.resume()
          close_dialog()
          break
        case 'stopped':
          console.error('hit Control when stopped, this event should have been removed already')
          break
        default:
          throw Error('unknown game status: ' + game.get_status())
      }
    }

    document.addEventListener('keydown', listen_menu_key)
    return () => document.removeEventListener('keydown', listen_menu_key)
  }, [])

  return <>
    <Icon
      onClick={open_menu}
      style={{
        position: 'fixed',
        top: '1rem',
        left: '1rem',
        cursor: 'pointer',
        color: '#fff',
        zIndex: 1,
      }}
    />
    <dialog
      className='menu_container'
      ref={ref_dialog}
    >
      <menu
        style={{ width: 320 }}
      >
        <Menu_item
          label='继续'
          on_click={() => {
            emulator.game!.resume()
            close_dialog()
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
          label='操作说明'
          on_click={() => {
            show_controller_modal(open_dialog)
            close_dialog()
          }}
        />
        <Menu_item
          label='退出'
          on_click={() => {
            emulator.game!.quit()
            close_dialog()
          }}
        />
      </menu>
    </dialog>
  </>
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
