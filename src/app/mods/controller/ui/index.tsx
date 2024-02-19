import { Close } from './close'
import { useVal_controller_modal_shown } from '../../../ss/controller'
import { Box } from './box'
import { Controller } from './controller'

export
const Controller_modal = () => {
  const shown = useVal_controller_modal_shown()

  return shown && <Box>
    <Close />
    <Controller />
  </Box>
}
