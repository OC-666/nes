import { State_nullable } from '../../common/state/index.ts'

export
const file_handle = State_nullable<FileSystemFileHandle>(null)

export
const useHas_file = () => file_handle.useVal() !== null

export
const set_file_handle = (handle: FileSystemFileHandle | null) => {
  file_handle.set(() => handle)
}

export
const init_file_on_launch = async () => {
  console.log('initialize file_handle on launch')
  
  /**
   * 通过双击 rom 文件启动
   * @returns 是否已 launched
   */
  function launch_by_click_file() {
    const lq = window.launchQueue
    if (!lq) {
      console.error('window.launchQueue not supported')
      return false
    }

    let launched = false
    lq.setConsumer(params => {
      const file = params.files[0]
      if (file) {
        console.log('launch by clicking file')
        set_file_handle(file)
        launched = true
      } else
        console.error('If there\'s no file, shouldn\'t this arrow function be executed')
    })

    return launched
  }

  async function launch_by_download() {
    const params = new URLSearchParams(window.location.search)
    const rom = params.get('rom')
    if (!rom) return false

    const res = await fetch(rom)
    // res.blob()
    console.log(res.ok)
    return false
  }

  let launched = launch_by_click_file()
  launched = await launch_by_download()
  console.log({ launched })
}
