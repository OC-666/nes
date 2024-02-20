import { css_vars } from 'last.css/utils'
import { unit_size } from '../common'

const Path = (d: string) =>
  () =>
    <path
      stroke='currentColor' fill='none'
      d={d}
    />

const Path_top_left = Path(`
  M 30 20
  L 20 0
  H 0
`)
export
const SVG_top_left = () =>
  <svg viewBox="0 0 30 20" style={{ /* 用 svg 画拐弯的线 */
    width: unit_size(.75),
    height: unit_size(.5),
    position: 'absolute',
    bottom: '100%',
    right: '50%',
    color: css_vars.fc(.5),
  }}>
    <Path_top_left />
  </svg>

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
  <svg viewBox="0 0 30 20" style={{ /* 用 svg 画拐弯的线 */
    width: unit_size(.75),
    height: unit_size(.5),
    position: 'absolute',
    top: '100%',
    right: '50%',
    color: css_vars.fc(.5),
  }}>
    <Path_bottom_left />
  </svg>
