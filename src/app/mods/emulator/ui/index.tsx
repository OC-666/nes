import { Game } from '../mods/game/ui'
import { Game_menu } from '../mods/menu/ui'
import { useUnconfirmed_core } from '../../../ss/rom'
import { Select_core } from './select_core'

export
const Page_emulator = () => {
  console.log('rendering emulator, which shouldnt be too frequently...')

  const core_unconfirmed = useUnconfirmed_core()
  return core_unconfirmed
    ? <Select_core />
    : <>
      <Game />
      <Game_menu />
    </>
}
