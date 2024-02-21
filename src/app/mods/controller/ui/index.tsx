import { Controller } from './controller'
import { Modal } from '../../../../common/cmp/modal'
import {
  useVal_controller_modal_shown,
  show_controller_modal,
  hide_controller_modal,
} from '../../../ss/controller/modal'

export
const Controller_modal = () => {
  const shown = useVal_controller_modal_shown()

  return <Modal
    shown={{
      val: shown,
      set: val => {
        if (val) show_controller_modal()
        else hide_controller_modal()
      }
    }}
    Children={() =>
      <Controller />
    }
  />
}
