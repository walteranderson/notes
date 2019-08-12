import thunk from 'redux-thunk'
import logger from 'redux-logger'
import { createStore, compose, applyMiddleware } from 'redux'
import reducers from './modules'

export default (initialState) => {
  const middlewares = [thunk, logger]

  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
  const enhancers = composeEnhancers(applyMiddleware(...middlewares))

  return createStore(reducers, initialState, enhancers)
}
