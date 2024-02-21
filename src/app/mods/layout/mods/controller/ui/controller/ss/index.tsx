import { FC } from 'react'
import styled from '@emotion/styled'
import { css_vars, at_light, at_dark } from 'last.css/utils'

import { type keymap_value } from '../../../../../../../ss/controller/map'
import { Map_value } from '../map_value'
import { Btn, unit_size, btn_color_in_light, btn_color_in_dark } from '../common'
import { SVG_y } from '../map_value/path'

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

interface SS_props {
  keymap_value: keymap_value
}

const Box_map_value = styled.div({
  position: 'absolute',
  bottom: '150%',
  left: '50%',
  transform: 'translateX(-50%)',
})

export
const SS: FC<SS_props> = props =>
  <Box_SS>
    <Btn_SS>
      <span>select</span>
      <SVG_y />
      <Box_map_value>
        <Map_value value={props.keymap_value.input_player1_select} />
      </Box_map_value>
    </Btn_SS>
    <Btn_SS
      style={{ letterSpacing: '.04em' }}
    >
      <span>start</span>
      <SVG_y />
      <Box_map_value>
        <Map_value value={props.keymap_value.input_player1_start} />
      </Box_map_value>
    </Btn_SS>
  </Box_SS>
