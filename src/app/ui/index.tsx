import { useHas_file } from '../ss/file'
import { Emulator } from '../mods/emulator/ui'
import { Start } from '../mods/start/ui'

export
const App = () => {
  const has_file = useHas_file()

  return <>
    {has_file
      ? <Emulator />
      : <Start />
    }
  </>
}
