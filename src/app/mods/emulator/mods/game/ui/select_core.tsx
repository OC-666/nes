import { Modal_select } from '../../../../../../common/cmp/modal/select'
import { state_rom_info } from '../../../../../ss/rom'
import { core_list } from '../../../ss/cores'

export
function Select_core() {
  const info = state_rom_info.get()
  if (!info)
    throw Error('no info on Select_core()')

  const val = core_list.find(core => core.name === info?.core)?.name

  return <Modal_select<string>
    shown={{
      val: Boolean(info.name && !info.core),
    }}
    title='选择游戏机'
    val={val}
    opts={core_list.map(item => ({ lab: item.emulator, val: item.name }))}
    set={new_v => {
      state_rom_info.set(() => ({
        ...info,
        core: new_v,
      }))
    }}
  />
}
