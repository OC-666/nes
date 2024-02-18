import styled from '@emotion/styled'
import { css_vars } from 'last.css/variables'

import { Close } from './close'
import { useVal_controller_modal_shown } from '../../../ss/controller'

const Box = styled.div({
  position: 'fixed',
  left: 0,
  top: 0,
  bottom: 0,
  right: 0,
  zIndex: 10,
  background: css_vars.bc(.88),
})

export
const Controller_modal = () => {
  const shown = useVal_controller_modal_shown()

  return shown && <Box>
    <Close />
  </Box>
}
