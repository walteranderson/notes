import React from 'react'
import { useSelector } from 'react-redux'
import { Route, Redirect } from 'react-router-dom'
import Loading from './Loading'

// Use Cases
// 1. normal unprotected route
// 2. guest route, only accessible if NOT logged in
// 3. protected route, only accessible if you are logged in
export default ({
  component: Component,
  authenticate = false,
  guest = false,
  ...rest
}) => {
  const isAuthenticated = useSelector(state => state.auth.isAuthenticated)
  const request = useSelector(state => state.auth.loginRequest)
  const render = props => {
    if (!guest && !authenticate) {
      // this is just a normal unprotected route
      return <Component {...props} />
    }

    if (request.sending) {
      // if our auth request is in progress, let's not make any decisions yet
      return <Loading />
    }

    if (guest && isAuthenticated) {
      // this is a guest route, but the user has already authenticated
      return <Redirect to="/" />
    }

    if (authenticate && !isAuthenticated) {
      // this is a protected route, but the user has not authenticated yet
      return <Redirect to="/login" />
    }

    return <Component {...props} />
  }

  return <Route {...rest} render={render} />
}
