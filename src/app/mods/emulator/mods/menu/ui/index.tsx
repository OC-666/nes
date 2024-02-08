import { useRef, useEffect } from 'react'
import { emulator } from '../../../ss'

export
const Game_menu = () => {
  const ref_dialog = useRef<HTMLDialogElement>(null)
  const close_dialog = () => {
    ref_dialog.current!.close()
  }

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
          close_dialog()
          break
        case 'stopped':
          console.error('hit esc when stopped, this event should have been removed')
          break
        default:
          throw Error('unknown game status: ' + game.get_status())
      }
    }

    document.addEventListener('keydown', listen_esc_key)
    return () => document.removeEventListener('keydown', listen_esc_key)
  }, [])

  return <dialog
    className='menu_container'
    ref={ref_dialog}
  >
    <menu
      style={{ width: 320 }}
    >
      <Menu_item
        label='继续'
        on_click={() => {
          todo()
        }}
      />
      <Menu_item
        label='全屏'
        on_click={() => {
          /**
           * @todo
           * 屏幕尺寸改动后，canvas 随之变化，需要重新渲染，要：
           * 1. 保存游戏状态
           * 2. 全屏
           * 3. 恢复游戏状态
           */
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
        label='操作说明'
        on_click={() => {
          todo()
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
