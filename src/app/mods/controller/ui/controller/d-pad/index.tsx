import styled from '@emotion/styled'
import { at_light, at_dark } from 'last.css/utils'

import { Btn, unit_size, btn_color_in_light, btn_color_in_dark } from '../common'
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

export
const D_pad = () =>
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
      </Btn>
      <Btn>
        <Triangle direction='down' />
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
