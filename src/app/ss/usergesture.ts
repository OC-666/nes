export
const make_usergesture = () => {
  const div = document.createElement('div')
  div.style.position = 'fixed'
  div.style.left = '0'
  div.style.top = '0'
  div.style.right = '0'
  div.style.bottom = '0'
  div.style.zIndex = '1000'

  div.style.background = 'rgba(var(--bc), 1)'
  div.style.display = 'grid'
  div.style.placeItems = 'center'

  div.innerHTML = '请点击屏幕以继续' // Please click on the screen to continue

  return new Promise<void>(res => {
    div.addEventListener('click', () => {
      document.body.removeChild(div)
      res()
    })
    document.body.appendChild(div)
  })
}
