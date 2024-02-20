import { FC, ReactNode } from 'react'
import styled from '@emotion/styled'
import { css_vars, at_light, at_dark } from 'last.css/utils'

import { type keymap_value } from '../../../../../ss/controller/map'
import { SVG_bottom_left, SVG_top_right, SVG_x_right, SVG_bottom_right } from '../map_value/path'
import { Map_value } from '../map_value'
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

const Btn_ABXY = ({ type, keymap_value }: {
  type: 'X' | 'Y' | 'A' | 'B',
  keymap_value: ReactNode,
}) =>
  <Box_Btn_ABXY
    style={{
      gridArea: type,
    }}
  >
    <span>{type}</span>
    {keymap_value}
  </Box_Btn_ABXY>

interface ABXY_props {
  keymap_value: keymap_value
}

export
const ABXY: FC<ABXY_props> = props =>
  <Box_ABXY>
    <Btn_ABXY
      type='X'
      keymap_value={<>
        <SVG_top_right />
        <div style={{ /* 此 div 给 up 的键位提供 绝对定位 */ 
          position: 'absolute',
          left: '125%',
          bottom: '150%',
          transform: 'translateY(50%)',
        }}>
          <Map_value value={props.keymap_value.input_player1_x} />
        </div>
      </>}
    />
    <Btn_ABXY
      type='Y'
      keymap_value={<>
        <SVG_bottom_left />
        <div style={{ /* 此 div 给 up 的键位提供 绝对定位 */ 
          position: 'absolute',
          right: '125%',
          top: '150%',
          transform: 'translateY(-50%)',
        }}>
          <Map_value value={props.keymap_value.input_player1_y} />
        </div>
      </>}
    />
    <Btn_ABXY
      type='A'
      keymap_value={<>
        <SVG_x_right />
        <div style={{ /* 此 div 给 up 的键位提供 绝对定位 */ 
          position: 'absolute',
          left: '150%',
          bottom: '50%',
          transform: 'translateY(50%)',
        }}>
          <Map_value value={props.keymap_value.input_player1_a} />
        </div>
      </>}
    />
    <Btn_ABXY
      type='B'
      keymap_value={<>
        <SVG_bottom_right />
        <div style={{ /* 此 div 给 up 的键位提供 绝对定位 */ 
          position: 'absolute',
          left: '125%',
          top: '150%',
          transform: 'translateY(-50%)',
        }}>
          <Map_value value={props.keymap_value.input_player1_b} />
        </div>
      </>}
    />
  </Box_ABXY>
