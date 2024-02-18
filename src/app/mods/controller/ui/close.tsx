import styled from '@emotion/styled'
import { css_vars } from 'last.css/variables'
import { useEffect } from 'react'
import { state_controller_modal_shown } from '../../../ss/controller'

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
      if (evt.key != 'Escape') return
      state_controller_modal_shown.set(() => false)
    }
    document.addEventListener('keydown', listener)
    return () => document.removeEventListener('keydown', listener)
  }, [])
  return <Box
    className='last x'
    onClick={() => {
      state_controller_modal_shown.set(() => false)
    }}
  />
}
