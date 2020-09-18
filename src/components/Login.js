import React, { useState } from 'react'
import { connect } from 'react-redux'
import { login } from '../store/modules/auth'

function Login({ login }) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const setter = func => e => func(e.target.value)

  const onSubmit = e => {
    e.preventDefault()
    login(email, password)
  }

  return (
    <div className="login">
      <form onSubmit={onSubmit}>
        <input
          type="text"
          name="email"
          placeholder="Email"
          value={email}
          onChange={setter(setEmail)}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={password}
          onChange={setter(setPassword)}
        />
        <button type="submit">Login</button>
      </form>
    </div>
  )
}

export default connect(null, { login })(Login)
