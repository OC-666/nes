import styled from '@emotion/styled'
import { css_vars, at_light, at_dark } from 'last.css/utils'
import { Btn, unit_size, btn_color_in_light, btn_color_in_dark } from '../common'

const Box_ABXY = styled.div({
  width: unit_size(3),
  height: unit_size(3),
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gridTemplateRows: 'repeat(3, 1fr)',
  gridTemplateAreas: '". X ." "Y . A" ". B ."',
})

const Box_Btn_ABXY = styled(Btn)({
  [at_light]: {
    background: btn_color_in_light,
    color: css_vars.fc(.7),
  },
  [at_dark]: {
    background: btn_color_in_dark,
    color: css_vars.bc(.7),
  },
  borderRadius: '50%',
  fontSize: css_vars.fs_sm,
})

const Btn_ABXY = ({ type }: { type: 'X' | 'Y' | 'A' | 'B' }) =>
  <Box_Btn_ABXY
    style={{
      gridArea: type,
    }}
  >{type}</Box_Btn_ABXY>

export
const ABXY = () =>
  <Box_ABXY>
    <Btn_ABXY type='X' />
    <Btn_ABXY type='Y' />
    <Btn_ABXY type='A' />
    <Btn_ABXY type='B' />
  </Box_ABXY>
