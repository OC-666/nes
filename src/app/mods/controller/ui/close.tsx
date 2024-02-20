import styled from '@emotion/styled'
import { css_vars } from 'last.css/utils'
import { useEffect } from 'react'
import { hide_controller_modal } from '../../../ss/controller/modal'

const Box = styled.button({
  border: 'none',
  outline: 'none',
  color: 'inherit',
  cursor: 'pointer',

  position: 'absolute',
  right: css_vars.fs,
  top: css_vars.fs,
  padding: css_vars.fs,
  borderRadius: '50%',

  transition: '.18s background-color',
  backgroundColor: css_vars.bc(.188),
  ':hover': {
    backgroundColor: css_vars.bc(.888),
  },
})

export
const Close = () => {
  useEffect(() => {
    const listener = (evt: KeyboardEvent) => {
      if (evt.key != 'Control') return
      hide_controller_modal()
    }
    document.addEventListener('keydown', listener)
    return () => document.removeEventListener('keydown', listener)
  }, [])
  return <Box
    onClick={() => {
      hide_controller_modal()
    }}
  >
    <i className='last x' />
  </Box>
}
