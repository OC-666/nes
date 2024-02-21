import { useEffect } from 'react'
import styled from '@emotion/styled'
import { css_vars } from 'last.css/utils'

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
  backgroundColor: css_vars.fc(.066),
  ':hover': {
    backgroundColor: css_vars.fc(.088),
  },
})

export
const Close = ({ hide }: { hide: () => void }) => {
  useEffect(() => {
    // 此处注意：如果同时存在多个 modal，这多个 modal 都能接收到此事件
    const listener = (evt: KeyboardEvent) => {
      if (evt.key != 'Backspace') return
      hide()
    }
    document.addEventListener('keydown', listener)
    return () => document.removeEventListener('keydown', listener)
  }, [])
  return <Box
    onClick={() => {
      hide()
    }}
  >
    <i className='last x' />
  </Box>
}
