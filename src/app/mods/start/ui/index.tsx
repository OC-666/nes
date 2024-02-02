import { set_file_handle } from '../../../ss/file'

export
const Start = () => {
  return <div
    style={{
      height: '100vh',
      display: 'flex',
      gap: '1em',
      alignItems: 'center',
      justifyContent: 'center',
    }}
  >
    <button
      className='btn'
      onClick={async () => {
        if (!window.showOpenFilePicker) {
          alert('你的浏览器不支持这功能，请试试 edge 或 firefox、chrome')
          return
        }
        const handles = await window.showOpenFilePicker({
          multiple: false,
        })
        set_file_handle(handles[0])
      }}
    >选择游戏...</button>
  </div>
}
