import http from './http'
import jwt from './jwt'

export const login = (email, password) => {
  return http
    .post('/api/auth', { email, password })
    .then(res => res.data)
    .then(data => jwt.set(data.token))
}

export const logout = () => {
  return new Promise(resolve => {
    jwt.clear()
    resolve()
  })
}

export const hasToken = () => {
  return !!jwt.get()
}

export const getUser = () => {
  return http.get('/api/users/me').then(res => res.data)
}

export const getNotes = () => {
  return http.get('/api/notes').then(res => res.data)
}
