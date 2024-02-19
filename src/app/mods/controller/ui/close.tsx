import styled from '@emotion/styled'
import { css_vars } from 'last.css/utils'
import { useEffect } from 'react'
import { hide_controller_modal } from '../../../ss/controller'

const Box = styled.button({
  background: 'transparent',
  border: 'none',
  outline: 'none',
  color: 'inherit',
  cursor: 'pointer',

  '---position': 'absolute',
  right: css_vars.fs,
  top: css_vars.fs,

  opacity: .6,
  ':hover': {
    opacity: 1
  },
})

export
const Close = () => {
  useEffect(() => {
    const listener = (evt: KeyboardEvent) => {
      if (evt.key != 'Backspace') return
      hide_controller_modal()
    }
    document.addEventListener('keydown', listener)
    return () => document.removeEventListener('keydown', listener)
  }, [])
  return <Box
    className='last x'
    onClick={() => {
      hide_controller_modal()
    }}
  />
}
