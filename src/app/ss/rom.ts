import { State_nullable } from '../../common/state/index.ts'

export
const rom_file = State_nullable<ROM>(null)

export
const useHas_file = () => rom_file.useVal() !== null

export
const set_rom_file = (handle: ROM | null) => {
  rom_file.set(() => handle)
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
          file.getFile()
            .then(file => {
              set_rom_file(file)
              res(true)
            })
            .catch(rej)
        } else
          rej('If there\'s no file, shouldn\'t this arrow function be executed')
      })
      if (!consumed)
        res(false)
    })
  }

  async function launch_by_download() {
    console.log('checking whether launching by download file')
    const params = new URLSearchParams(window.location.search)
    const rom = params.get('rom')
    if (!rom) return false

    const name = rom.split('/').at(-1) as string
    const res = await fetch(rom)
    set_rom_file({
      fileName: name,
      fileContent: await res.blob(),
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
