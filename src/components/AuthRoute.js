import React from 'react'
import { useSelector } from 'react-redux'
import { Route, Redirect } from 'react-router-dom'
import Loading from './Loading'

export default ({ component: Component, ...rest }) => {
  const isAuthenticated = useSelector(state => state.auth.isAuthenticated)
  const request = useSelector(state => state.auth.loginRequest)

  return (
    <Route
      {...rest}
      render={props => {
        if (isAuthenticated) {
          return <Component {...props} />
        }

        if (request.sending) {
          return <Loading />
        }

        return <Redirect to="/login" />
      }}
    />
  )
}
