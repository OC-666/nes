interface File_picker_opts {
  multiple?: boolean
  startIn: 'desktop'
}

interface File_saver_opts {
  startIn: 'desktop'
  types: {
    accept: Record<string, string[]>
  }[]
}

interface Window {
  launchQueue?: {
    setConsumer: (callback: (params: { files: FileSystemFileHandle[] }) => void) => void
  }
  showOpenFilePicker?: (opts: File_picker_opts) => Promise<FileSystemFileHandle[]>
  showSaveFilePicker?: (opts: File_saver_opts) => Promise<FileSystemFileHandle>
}
