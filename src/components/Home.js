import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { logout } from '../store/modules/auth'

const Authenticated = () => {
  const user = useSelector(state => state.auth.user)
  const dispatch = useDispatch()
  const onLogout = () => dispatch(logout())
  return (
    <div>
      Logged In! {user.email}
      <button onClick={onLogout}>Logout</button>
    </div>
  )
}

export default () => {
  const isAuthenticated = useSelector(state => state.auth.isAuthenticated)

  return (
    <div>
      <span>home</span>
      {isAuthenticated ? <Authenticated /> : <Link to="/login">Login</Link>}
    </div>
  )
}
