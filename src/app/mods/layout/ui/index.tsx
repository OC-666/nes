import { FC, ReactNode, useEffect } from 'react'
import { Modal_controller } from '../mods/controller/ui'
import { pages } from '../../../ss/pages'
import { useHas_rom } from '../../../ss/rom'

interface Props_layout {
  children: ReactNode
}

export
const Layout: FC<Props_layout> = props => {
  useNav_emu_when_there_is_rom()
  return <>
    <Modal_controller />
    {props.children}
  </>
}

const useNav_emu_when_there_is_rom = () => {
  const nav_emulator = pages.emulator.useNav()
  const nav_home = pages.home.useNav()

  const has_rom = useHas_rom()
  useEffect(() => {
    console.log('has_rom changed', has_rom)
    if (has_rom)
      nav_emulator()
    else
      nav_home()
  }, [has_rom])
}
