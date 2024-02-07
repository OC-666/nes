import { useHas_file } from '../ss/rom'
import { Emulator } from '../mods/emulator/ui'
import { Start } from '../mods/start/ui/'
import { Head } from '../mods/head/ui/'

export
const App = () => {
  const has_file = useHas_file()

  return <div
    style={{
      display: 'grid',
      height: '100vh',
      gridTemplateRows: '1fr auto',
    }}
  >
    <Head />
    {has_file
      ? <Emulator />
      : <Start />
    }
  </div>
}
