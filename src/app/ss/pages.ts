import { useLocation } from 'wouter'

class Page {
  public readonly path: string
  constructor(path: string) {
    this.path = '/nes' + path
  }

  useNav() {
    const [_, set_location] = useLocation()
    return () => {
      console.log('navigating with path', this.path)
      set_location(this.path)
    }
  }
}

export
const pages = {
  home: new Page('/'),
  emulator: new Page('/emulator'),
  settings: new Page('/settings'),
}
