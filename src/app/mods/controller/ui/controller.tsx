import styled from '@emotion/styled'
import { css_vars, at_light, at_dark } from 'last.css/utils'

const unit_size = (num = 1) => css_vars.us(5 * num)

const btn_color_in_dark = css_vars.fc(.8)
const btn_color_in_light = css_vars.fc(.06)

const Btn = styled.button({
  background: 'transparent',
  border: 'none',
  outline: 'none',
  cursor: 'pointer',
  padding: '0',
  width: unit_size(),
  height: unit_size(),
})

/* direction pad */

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

  // @ts-ignore
  '---size': css_vars.fs_xs,
  [at_dark]: {
    color: css_vars.bc(.5),
  },
  [at_light]: {
    color: css_vars.fc(.4),
  },
})

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

/* select & start */
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
    color: css_vars.fc(.6),
  },
  [at_dark]: {
    background: btn_color_in_dark,
    color: css_vars.bc(.8),
  },
  borderRadius: 4,
  fontSize: css_vars.fs_xs,
})
const SS = () =>
  <Box_SS>
    <Btn_SS>select</Btn_SS>
    <Btn_SS>start</Btn_SS>
  </Box_SS>

/* A, B; X, Y */
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
    color: css_vars.fc(.5),
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

const ABXY = () =>
  <Box_ABXY>
    <Btn_ABXY type='X' />
    <Btn_ABXY type='Y' />
    <Btn_ABXY type='A' />
    <Btn_ABXY type='B' />
  </Box_ABXY>

/* Controller */

const Box = styled.div({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  [at_light]: {
    backdropFilter: 'blur(4px)',
    boxShadow: 'rgba(0, 0, 0, 0.2) 0px -10px 20px 0px inset,' +
      'rgba(0, 0, 0, 0.28) 0px 5px 10px 0px'
  },
  [at_dark]: {
    backdropFilter: 'blur(6px)',
    border: '1px solid ' + css_vars.fc(.3),
  },
  padding: `${unit_size(1.2)} ${unit_size(.8)}`,
  borderRadius: unit_size(1),
})

export
const Controller = () => {
  return <Box>
    <D_pad />
    <SS />
    <ABXY />
  </Box>
}
