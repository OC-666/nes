// https://learn.microsoft.com/en-us/microsoft-edge/progressive-web-apps-chromium/how-to/#step-5---add-a-service-worker

self.addEventListener('fetch', evt => {
  const raw_url = evt.request.url
  const fceumm_js = 'https://cdn.jsdelivr.net/gh/arianrhodsandlot/retroarch-emscripten-build@v1.16.0/retroarch/fceumm_libretro.js'
  const fceumm_wasm = 'https://cdn.jsdelivr.net/gh/arianrhodsandlot/retroarch-emscripten-build@v1.16.0/retroarch/fceumm_libretro.wasm'

  const location_url = new URL(location.href)
  const protocal = location_url.protocol
  const host = location_url.host
  const path = '/nes/retroarch'
  const baseurl = protocal + '//' + host + path

  switch(raw_url) {
    case fceumm_js:
      console.log('replacing `fceumm js raw url` with ' + baseurl + '/fceumm_libretro.js')
      evt.respondWith(fetch(baseurl + '/fceumm_libretro.js'))
      break
    case fceumm_wasm:
      console.log('replacing `fceumm wasm raw url` with ' + baseurl + '/fceumm_libretro.wasm')
      evt.respondWith(fetch(baseurl + '/fceumm_libretro.wasm'))
      break
  }
})
