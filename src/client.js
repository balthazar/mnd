import React from 'react'
import ReactGA from 'react-ga'
import { hydrate, render } from 'react-dom'
import { ConnectedRouter } from 'react-router-redux'
import createHistory from 'history/createBrowserHistory'

import createStore from 'store'

import App from 'components/App'

const history = createHistory()
const store = createStore(history, window.__INITIAL_STATE__)

const r = __PROD__ ? hydrate : render
const rootNode = document.getElementById('root')
const rootComponent = <App store={store} Router={ConnectedRouter} routerProps={{ history }} />

if (__PROD__) {
  ReactGA.initialize('UA-41961567-3')
}

const track = () => {
  if (!__PROD__) {
    return
  }

  const { pathname, search } = window.location
  ReactGA.pageview(`${pathname}${search}`)
}

history.listen(track)
track()

r(rootComponent, rootNode)
