import { set_file_handle } from '../../../ss/file'

export
const Start = () => {
  return <div
    style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
    }}
  >
    <button
      className='btn contract big'
      style={{
        padding: '0 1.6em',
        letterSpacing: '.08em',
      }}
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
    >开始游戏...</button>
    <p
      style={{
        marginTop: '1.6em',
        marginBottom: '3em',
        color: 'rgba(var(--fc), .58)',
        fontSize: 'var(--fs-sm)',
        letterSpacing: '.06em',
      }}
    >尊重知识版权，请使用正版游戏，嘿嘿嘿</p>
  </div>
}
