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
const init_file_on_launch = () => {
  console.log('initialize file_handle on launch')
  const lq = window.launchQueue
  if (!lq) {
    console.error('window.launchQueue not supported')
    return
  }

  lq.setConsumer(params => {
    const file = params.files[0]
    if (file) {
      console.log('launch by clicking file')
      set_file_handle(file)
    } else
      console.error('If there\'s no file, shouldn\'t this arrow function be executed')
  })
}
