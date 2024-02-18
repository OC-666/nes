import React from 'react'
import ReactDOM from 'react-dom/client'
import 'last.css'
import 'last.css/cmp/triangle.css'
import 'last.css/cmp/x.css'
import './global.css'

import { init_file_on_launch } from './ss/rom'
import { App } from './ui'
import './test'

;(async function() {
  await init_file_on_launch()

  ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  )
})()
