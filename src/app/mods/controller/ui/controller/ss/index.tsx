import styled from '@emotion/styled'
import { css_vars, at_light, at_dark } from 'last.css/utils'
import { Btn, unit_size, btn_color_in_light, btn_color_in_dark } from '../common'

const Box_SS = styled.div({
  width: unit_size(5),
  height: unit_size(3),
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: unit_size(.388),
})

const Btn_SS = styled(Btn)({
  width: unit_size(1.4),
  height: unit_size(.68),
  [at_light]: {
    background: btn_color_in_light,
    color: css_vars.fc(.8),
  },
  [at_dark]: {
    background: btn_color_in_dark,
    color: css_vars.bc(.8),
  },
  borderRadius: 4,
  fontSize: css_vars.fs_xs,
})

export
const SS = () =>
  <Box_SS>
    <Btn_SS>select</Btn_SS>
    <Btn_SS
      style={{ letterSpacing: '.04em' }}
    >start</Btn_SS>
  </Box_SS>
