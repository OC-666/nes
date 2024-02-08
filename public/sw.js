// https://learn.microsoft.com/en-us/microsoft-edge/progressive-web-apps-chromium/how-to/#step-5---add-a-service-worker

self.addEventListener('fetch', evt => {
  console.log(evt.request.url)
  console.log(location.href)
})
