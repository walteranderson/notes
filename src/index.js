import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import createStore from './store'
import Router from './Router'
import init from './store/modules/init'

const store = createStore()

store.dispatch(init())

render(
  <Provider store={store}>
    <Router />
  </Provider>,
  document.getElementById('root')
)
