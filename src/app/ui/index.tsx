import { Route } from 'wouter'

import { pages } from '../ss/pages'
import { Layout } from '../mods/layout/ui'

import { Page_home } from '../mods/home/ui'
import { Page_emulator } from '../mods/emulator/ui'

export
const App = () => {
  return <Layout>
    <Route path={pages.home.path}>
      <Page_home />
    </Route>
    <Route path={pages.emulator.path}>
      <Page_emulator />
    </Route>
  </Layout>
}
