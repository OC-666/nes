import styled from '@emotion/styled'
import { css_vars } from 'last.css/utils'

export
const Box = styled.div({
  position: 'fixed',
  left: 0,
  top: 0,
  bottom: 0,
  right: 0,
  zIndex: 10,

  background: css_vars.fc(.3),
  backdropFilter: 'blur(2px)',
  animation: '.1s fade-in',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column',
})