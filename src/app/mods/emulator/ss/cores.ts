type rom_suffix = 'nes' | 'snes' | 'gb' | 'gbc' | 'gba'

interface Core {
  rom_suffix: rom_suffix
  name: string
  emulator: string
}

export
function get_core_by_suffix(suffix: string) {
  const core_list: Core[] = [
    { rom_suffix: 'nes', name: 'fceumm', emulator: '红白机，小霸王，fc，nes'},
    { rom_suffix: 'snes', name: 'snes9x', emulator: '超任，sfc，snes' },
    { rom_suffix: 'gb', name: 'mgba', emulator: 'GAME BOY，gb' },
    { rom_suffix: 'gbc', name: 'mgba', emulator: 'GAME BOY COLOR，gbc' },
    { rom_suffix: 'gba', name: 'mgba', emulator: 'GAME BOY ADVANCE，gba'},
  ]
  return core_list.find(core => core.rom_suffix === suffix)?.name
}
