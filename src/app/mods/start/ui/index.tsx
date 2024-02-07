import { set_rom_file } from '../../../ss/rom'

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
          console.error('如果你是开发者，应使用 127.0.0.1 访问本机服务（windows.showOpenFilePicker 只支持 https 和本机访问）')
          alert('你的浏览器不支持这功能，请试试 edge 或 firefox、chrome')
          return
        }
        const handles = await window.showOpenFilePicker({
          multiple: false,
        })
        set_rom_file(await handles[0].getFile())
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
