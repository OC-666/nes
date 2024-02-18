import styled from '@emotion/styled'

const height = `calc(var(--size) * ${Math.sqrt(3) / 2})`

export
const Triangle = styled.div({
  boxSizing: 'border-box',
  display: 'block',
  width: `var(--size)`,
  height,
  borderTop: '0 solid transparent',
  borderBottom: `${height} solid currentcolor`,
  borderLeft: `calc(var(--size) / 2) solid transparent`,
  borderRight: `calc(var(--size) / 2) solid transparent`,
})
