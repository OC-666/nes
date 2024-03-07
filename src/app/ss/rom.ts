import { State_nullable } from '../../common/state/index.ts'
import { get_core_by_suffix } from '../mods/emulator/ss/cores.ts'
import { check_and_make_usergesture } from './usergesture.ts'

export
const rom_file = State_nullable<ROM>(null)

interface I_rom_info {
  name: string
  core?: string
}

export
const state_rom_info = State_nullable<I_rom_info>(null)

export
const useHas_rom = () => rom_file.useVal() !== null

export
const get_rom_file = () => rom_file.get()

export
const set_rom_file = (rom: ROM | null) => {
  if (rom) {
    const [name, suffix] = (rom instanceof File ? rom.name : rom.fileName).split('.') as [string, string]
    const core = get_core_by_suffix(suffix)
    state_rom_info.set(() => ({ name, core }))
  }
  rom_file.set(() => rom)
}

export
const init_file_on_launch = async () => {
  
  /**
   * launching by clicking file
   * @returns launched or not
   */
  async function launch_by_click_file(): Promise<boolean> {
    console.log('checking whether launching by clicking file')
    const lq = window.launchQueue
    if (!lq) {
      console.error('window.launchQueue not supported')
      return false
    }

    return await new Promise((res, rej) => {
      let consumed = false
      lq.setConsumer(params => { // 此回调是同步的，不要改成 async
        consumed = true
        const file = params.files[0]
        if (file) {
          console.log('launch by clicking file')
          check_and_make_usergesture()
            .then(() => file.getFile())
            .then(file => {
              set_rom_file(file)
              res(true)
            })
            .catch(rej)
        } else {
          console.log('launch by clicking the installed app')
          res(false)
        }
      })
      if (!consumed)
        res(false)
    })
  }

  async function launch_by_download() {
    console.log('checking whether launching by download file')
    const params = new URLSearchParams(window.location.search)
    const rom = params.get('rom') // 自动 decode
    if (!rom) return false

    const name = rom.split('/').at(-1) as string
    console.log(`downloading rom: ${name}, at ${rom}`)
    await check_and_make_usergesture()
    set_rom_file({
      fileName: name,
      fileContent: await (await fetch(rom)).blob(),
    })
    return true
  }

  console.log('initializing rom_file on launch')
  let launched = await launch_by_click_file()
  if (launched) {
    console.log('launched by clicking file')
    return
  }
  launched = await launch_by_download()
  if (launched) {
    console.log('launched by download')
    return
  }
  console.log('launched without rom')
}
