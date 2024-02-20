import { FC } from 'react'
import styled from '@emotion/styled'
import { at_light, at_dark } from 'last.css/utils'

import { type keymap_value } from '../../../../../ss/controller/map'
import { Btn, unit_size, btn_color_in_light, btn_color_in_dark } from '../common'
import { Map_value } from '../map_value'
import { SVG_top_left, SVG_bottom_left, SVG_x, SVG_bottom_right } from '../map_value/path'
import { Triangle } from './triangle'

const Box_D_pad = styled.div({
  position: 'relative',
  width: unit_size(3),
  height: unit_size(3),
})

const Box_directions = styled.div({
  borderRadius: '4px',
  [at_light]: {
    background: btn_color_in_light,
  },
  [at_dark]: {
    background: btn_color_in_dark,
  },
  position: 'absolute',
  display: 'flex',
  justifyContent: 'space-between',
})

interface D_pad_props {
  keymap_value: keymap_value
}

export
const D_pad: FC<D_pad_props> = props =>
  <Box_D_pad>
    <Box_directions /* 盛放 up 和 down 两个 */
      style={{
        flexDirection: 'column',
        width: unit_size(),
        height: unit_size(3),
        left: unit_size(),
        top: 0,
      }}
    >
      <Btn>
        <Triangle direction='up' />
        <SVG_top_left />
        <div style={{ /* 此 div 给 up 的键位提供 绝对定位 */ 
          position: 'absolute',
          right: '125%',
          bottom: '150%',
          transform: 'translateY(50%)',
        }}>
          <Map_value value={props.keymap_value.input_player1_up} />
        </div>
      </Btn>
      <Btn>
        <Triangle direction='down' />
        <SVG_bottom_left />
        <div style={{
          position: 'absolute',
          right: '125%',
          top: '150%',
          transform: 'translateY(-50%)',
        }}>
          <Map_value value={props.keymap_value.input_player1_down} />
        </div>
      </Btn>
    </Box_directions>
    <Box_directions /*盛放 left 和 right 两个 */
      style={{
        width: unit_size(3),
        height: unit_size(),
        left: 0,
        top: unit_size(),
      }}
    >
      <Btn>
        <Triangle direction='left' />
        <SVG_x />
        <div style={{
          position: 'absolute',
          right: '150%',
          top: '50%',
          transform: 'translateY(-50%)',
        }}>
          <Map_value value={props.keymap_value.input_player1_left} />
        </div>
      </Btn>
      <Btn>
        <Triangle direction='right' />
        <SVG_bottom_right />
        <div style={{
          position: 'absolute',
          left: '125%',
          top: '150%',
          transform: 'translateY(-50%)',
        }}>
          <Map_value value={props.keymap_value.input_player1_left} />
        </div>
      </Btn>
    </Box_directions>
  </Box_D_pad>
