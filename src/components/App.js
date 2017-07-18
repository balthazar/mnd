import React from 'react'
import { Switch, Route } from 'react-router'
import { Provider } from 'react-redux'

import Header from 'components/Header'
import Footer from 'components/Footer'
import routes from 'routes'

export default (store, Router, routerProps) => (
  <Provider store={store}>
    <Router {...routerProps}>
      <div>

        <Header />

        <Switch>
          {routes.map(route => <Route key={route.path} {...route} />)}
        </Switch>

        <Footer />

      </div>
    </Router>
  </Provider>
)
