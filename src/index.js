import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import createStore from './store'
import Router from './Router'
import { hydrate } from './store/modules/hydrate'

import 'semantic-ui-css/semantic.min.css'

const store = createStore()

store.dispatch(hydrate())

render(
  <Provider store={store}>
    <Router />
  </Provider>,
  document.getElementById('root')
)
