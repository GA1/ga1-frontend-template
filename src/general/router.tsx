import { Route, Routes } from 'react-router-dom'

import { RoutePaths } from '../routing/route-paths'
import { Home } from '../home/home'
import { NotFound } from './not-found'
import { Layout } from './layout'

export const Router = () => (
  <Routes>
    <Route
      path={RoutePaths.HOME}
      element={
        <Layout>
          <Home />
        </Layout>
      }
    />
    <Route
      path='/not-found'
      element={
        <Layout>
          <NotFound />
        </Layout>
      }
    />
  </Routes>
)
