import { Game } from '../mods/game/ui'
import { Game_menu } from '../mods/menu/ui'

export
const Page_emulator = () => {
  console.log('rendering emulator, which shouldnt be too frequently...')

  return <>
    <Game />
    <Game_menu />
  </>
}
