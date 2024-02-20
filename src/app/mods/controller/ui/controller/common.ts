import styled from '@emotion/styled'
import { css_vars } from 'last.css/utils'

export
const unit_size = (num = 1) => css_vars.us(5 * num)

export
const btn_color_in_dark = css_vars.fc(.8)

export
const btn_color_in_light = css_vars.fc(.06)

export
const Btn = styled.button({
  background: 'transparent',
  border: 'none',
  outline: 'none',
  cursor: 'pointer',
  padding: '0',
  width: unit_size(),
  height: unit_size(),

  position: 'relative',
})
