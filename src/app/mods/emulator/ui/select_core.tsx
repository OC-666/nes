import { Modal_select } from '../../../../common/cmp/modal/select'
import { state_rom_info } from '../../../ss/rom'
import { core_list } from '../ss/cores'

export
function Select_core() {
  const { name, core } = state_rom_info.get()!

  return <Modal_select<string>
    shown={{
      val: true
    }}
    // title='选择游戏机'
    val={core}
    opts={core_list.map(item => ({ lab: item.emulator, val: item.name }))}
    set={new_v => {
      state_rom_info.set(() => ({
        name,
        core: new_v,
      }))
    }}
  />
}
