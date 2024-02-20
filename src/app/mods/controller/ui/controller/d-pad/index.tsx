import { FC } from 'react'
import styled from '@emotion/styled'
import { at_light, at_dark, css_vars } from 'last.css/utils'

import { type keymap_value } from '../../../../../ss/controller/map'
import { Btn, unit_size, btn_color_in_light, btn_color_in_dark } from '../common'
import { Box_map_value, Map_value } from '../map_value'
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
    <Box_directions
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
        <Box_map_value
          style={{
            position: 'absolute',
            zIndex: 1,
            bottom: '100%',
            left: 0,
            width: '100%',
            height: 1,
          }}
        >
          <svg viewBox="0 0 30 20" style={{
            width: unit_size(.75),
            height: unit_size(.5),
            position: 'absolute',
            bottom: 0,
            left: '50%',
          }}>
            <path
              stroke='currentColor'
              fill='none'
              strokeWidth={1}
              d={`
                M 0 20
                L 10 0
                H 30
              `}
            />
          </svg>
          <div style={{
            position: 'absolute',
            left: '125%',
            bottom: unit_size(.5),
            transform: 'translateY(50%)',
          }}>
            <Map_value value={props.keymap_value.input_player1_up} />
          </div>
        </Box_map_value>
      </Btn>
      <Btn>
        <Triangle direction='down' />
        <Map_value value={props.keymap_value.input_player1_down} />
      </Btn>
    </Box_directions>
    <Box_directions
      style={{
        width: unit_size(3),
        height: unit_size(),
        left: 0,
        top: unit_size(),
      }}
    >
      <Btn>
        <Triangle direction='left' />
      </Btn>
      <Btn>
        <Triangle direction='right' />
      </Btn>
    </Box_directions>
  </Box_D_pad>
