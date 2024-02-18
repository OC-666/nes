import { useHas_file } from '../ss/rom'
import { Emulator } from '../mods/emulator/ui'
import { Start } from '../mods/start/ui/'
import { Head } from '../mods/head/ui/'
import { CMP_demo } from '../mods/cmp_demo/ui'
import { Controller_modal } from '../mods/controller/ui'

const is_cmp_demo_page = new URLSearchParams(window.location.search).get('cmp_demo') !== null

export
const App = () => {
  const has_file = useHas_file()

  return is_cmp_demo_page && <CMP_demo />
  || <div
    style={{
      display: 'grid',
      height: '100vh',
      gridTemplateRows: '1fr auto',
    }}
  >
    <Controller_modal />
    <Head />
    {has_file
      ? <Emulator />
      : <Start />
    }
  </div>
}
