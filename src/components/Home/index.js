import React from 'react'
import Home from './Home'
import { useSelector } from 'react-redux'

export default () => {
  const isAuthenticated = useSelector(state => state.auth.isAuthenticated)

  if (!isAuthenticated) {
    return <p>not logged in</p>
  }

  return <Home />
}
