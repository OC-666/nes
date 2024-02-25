import { FC } from 'react'
import styled from '@emotion/styled'
import { css_vars } from 'last.css/utils'
import 'last.css/cmp/switch.css'

import Icon_fullscreen from '@mui/icons-material/Fullscreen'
import Icon_rewind from '@mui/icons-material/Replay'
import Icon_menu from '@mui/icons-material/Menu'

import { I_state } from '../../../../common/state'
import { state_setting } from '../../../ss/settings'

const border = '1px solid ' + css_vars.fc(.1)

export
const Page_settings = () =>
  <div
    style={{
      width: 600,
      margin: '30vh auto 0',
    }}
  >
    <Setting
      label={{
        text: '默认全屏',
        Icon: Icon_fullscreen,
      }}
      state={state_setting.fullscreen}
    />
    <Setting
      label={{
        text: '开启回溯',
        Icon: Icon_rewind,
      }}
      state={state_setting.rewind_enabled}
    />
    <Setting
      label={{
        text: '显示菜单按钮',
        Icon: Icon_menu,
      }}
      state={state_setting.menu_shown}
    />
  </div>

const Box_setting = styled.div({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '.6em 1.5em',
  '& + div': {
    borderTop: border,
  },
})
const Label = styled.label({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  svg: {
    marginRight: '.2em',
    transform: 'translateY(1px)',
  }
})
interface Props_setting {
  label: {
    text: string
    Icon: FC
  }
  state: I_state<boolean>
}
const Setting: FC<Props_setting> = props =>
  <Box_setting>
    <Label>
      <props.label.Icon />
      <span>{props.label.text}</span>
    </Label>
    <input
      type='checkbox'
      className='last switch'
      checked={props.state.useVal()}
      onChange={evt => props.state.set(() => evt.target.checked)}
    />
  </Box_setting>
