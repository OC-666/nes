import { useEffect } from 'react'

import { useUnconfirmed_core, useHas_rom } from '../../../ss/rom'
import { pages } from '../../../ss/pages'

import { Game } from '../mods/game/ui'
import { Game_menu } from '../mods/menu/ui'
import { Select_core } from './select_core'

export
const Page_emulator = () => {
  console.log('rendering emulator, which shouldnt be too frequently...')

  const nav_home = pages.home.useNav()
  const has_rom = useHas_rom()
  useEffect(() => {
    if (!has_rom) {
      console.error('no rom???')
      nav_home()
    }
  }, [])

  const core_unconfirmed = useUnconfirmed_core()

  return core_unconfirmed
    ? <Select_core />
    : <>
      <Game />
      <Game_menu />
    </>
}
