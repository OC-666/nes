import styled from '@emotion/styled'
import { css_vars } from 'last.css/utils'
import { unit_size } from '../common'

const Path = (d: string) =>
  () =>
    <path
      stroke='currentColor' fill='none'
      d={d}
    />
const Box_svg = styled.svg({
  position: 'absolute',
  color: css_vars.fc(.5),
})

const Path_top_left = Path(`
  M 30 20
  L 20 0
  H 0
`)
export
const SVG_top_left = () =>
  <Box_svg viewBox="0 0 30 20" style={{ /* 用 svg 画拐弯的线 */
    width: unit_size(.75),
    height: unit_size(.5),
    bottom: '100%',
    right: '50%',
  }}>
    <Path_top_left />
  </Box_svg>

// @ts-ignore
const Path_top_right = Path(`
  M 0 20
  L 10 0
  H 30
`)

const Path_bottom_left = Path(`
  M 30 0
  L 20 20
  H 0
`)
export
const SVG_bottom_left = () =>
  <Box_svg viewBox="0 0 30 20" style={{ /* 用 svg 画拐弯的线 */
    width: unit_size(.75),
    height: unit_size(.5),
    top: '100%',
    right: '50%',
  }}>
    <Path_bottom_left />
  </Box_svg>

const Path_x = Path(`
  M 0 1
  L 20 1
`)
export
const SVG_x = () =>
  <Box_svg viewBox="0 0 20 1" style={{
    width: unit_size(.5),
    height: 1,
    right: '100%',
    bottom: '50%',
  }}>
    <Path_x />
  </Box_svg>

const Path_bottom_right = Path(`
  M 0 0
  L 10 20
  H 30
`)
export
const SVG_bottom_right = () =>
  <Box_svg viewBox="0 0 30 20" style={{
    width: unit_size(.75),
    height: unit_size(.5),
    top: '100%',
    left: '50%',
  }}>
    <Path_bottom_right />
  </Box_svg>
