import { Head } from './head'
import { Start } from './start'

export
const Page_home = () =>
  <div
    style={{
      display: 'grid',
      height: '100vh',
      gridTemplateRows: '1fr auto',
    }}
  >
    <Head />
    <Start />
  </div>
