import { FC, ReactNode } from 'react'
import styled from '@emotion/styled'
import { css_vars } from 'last.css/utils'

import { Close } from './close'

const Box = styled.div({
  position: 'fixed',
  left: 0,
  top: 0,
  bottom: 0,
  right: 0,
  zIndex: 10,

  background: css_vars.bc(.2),
  backdropFilter: 'blur(10px)',
  animation: '.1s fade-in',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column',
})

type shown = {
  val: boolean
  set: (val: boolean) => void
}

interface Modal_props {
  Children: (shown: shown) => ReactNode
  shown: shown
}

export
const Modal: FC<Modal_props> = props =>
  props.shown.val && <Box>
    <Close hide={() => props.shown.set(false)} />
    {props.Children(props.shown)}
  </Box>
