import styled from '@emotion/styled'
import { unit_size } from '../common'
import { css_vars, at_light, at_dark } from 'last.css/utils'

interface Triangle_props {
  direction: 'up' | 'down' | 'left' | 'right'
}

const Box_triangle = styled.div({
  width: unit_size(),
  height: unit_size(),
  display: 'grid',
  placeItems: 'center',
  boxSizing: 'border-box',
  paddingBottom: unit_size(.066),

  '---size': css_vars.fs_xs,
  [at_dark]: {
    color: css_vars.bc(.5),
  },
  [at_light]: {
    color: css_vars.fc(.6),
  },
})

export
const Triangle = ({ direction }: Triangle_props) =>
  <Box_triangle
    style={{
      transform: `rotate(${
        { up: 0, right: 90, down: 180, left: 270 }[direction]
      }deg)`,
    }}
  >
    <div className='last triangle' />
  </Box_triangle>
