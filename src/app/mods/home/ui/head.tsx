import { FC, CSSProperties } from 'react'
import Icon_github from '@mui/icons-material/GitHub'
import Icon_help from '@mui/icons-material/Help'
import Icon_settings from '@mui/icons-material/Settings'
import { show_controller_modal } from '../../../ss/controller/modal'

interface Props_opts {
  label: string
  Icon: FC<{ style: CSSProperties }>
  target?: '_blank'
  href: string | (() => void)
}

const Opts = (props: Props_opts) => {
  const is_link = typeof props.href == 'string'
  const href = props.href as string
  const on_click = props.href as () => void
  const Icon = props.Icon
  return <a
    target={props.target}
    style={{
      display: 'flex',
      alignItems: 'center',
      color: 'rgba(var(--fc), 1)',
    }}
    href={is_link ? href : '#'}
    onClick={is_link ? undefined : on_click}
  >
    <Icon style={{opacity: .8}} />
    <span style={{ marginLeft: '.5em', display: 'block' }}>{props.label}</span>
  </a>
}

export
const Head = () => {
  return <div
    style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    }}
  >
    <img
      src='./icon/no_bg.png'
      style={{
        width: 512,
        height: 512,
      }}
    />

    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <h1
        title='老霸王'
        style={{
          marginTop: 0,
          marginBottom: '2rem',
          fontSize: '3rem',
        }}
      >老霸王</h1>

      <div
        style={{
          display: 'flex',
          gap: '2em',
        }}
      >
        <Opts
          label='操作说明'
          Icon={Icon_help}
          href={() => {
            show_controller_modal()
          }}
        />
        <Opts
          label='设置'
          Icon={Icon_settings}
          href=''
        />
        <Opts
          label='Github'
          Icon={Icon_github}
          href='https://github.com/OC-666/nes'
        />
      </div>
    </div>
  </div>
}
