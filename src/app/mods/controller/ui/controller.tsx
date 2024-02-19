import styled from '@emotion/styled'
import { css_vars } from 'last.css/variables'

const unit_size = (num = 1) => css_vars.us(4 * num)

const Btn = styled.button({
  background: 'transparent',
  border: 'none',
  outline: 'none',
  cursor: 'pointer',
  padding: '0',
  width: unit_size(),
  height: unit_size(),
})

const Box_D_pad = styled.div({
  flex: 1,
  position: 'relative',
  width: unit_size(3),
  height: unit_size(3),
})
const Box_directions = styled.div({
  borderRadius: '4px',
  background: css_vars.fc(.9),
  position: 'absolute',
  display: 'flex',
  justifyContent: 'space-between',
})

interface Triangle_props {
  direction: 'up' | 'down' | 'left' | 'right'
}
const Triangle = ({ direction }: Triangle_props) =>
  <div
    style={{
      width: unit_size(),
      height: unit_size(),
      display: 'grid',
      placeItems: 'center',
      transform: `rotate(${
        { up: 0, right: 90, down: 180, left: 270 }[direction]
      }deg)`,
      boxSizing: 'border-box',
      paddingBottom: unit_size(.066),

      // @ts-ignore
      '---size': css_vars.fs_xs,
      color: css_vars.bc(.1),
    }}
  >
    <div className='last triangle' />
  </div>

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

const Box = styled.div({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  background: css_vars.fc(.1),
  padding: unit_size(1),
  borderRadius: unit_size(1),
})

export
const Controller = () => {
  return <Box>
    <D_pad />
  </Box>
}
