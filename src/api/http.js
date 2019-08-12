import axios from 'axios'
import jwt from './jwt'

const http = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL
})

http.interceptors.request.use(config => {
  const token = jwt.get()
  if (token) {
    config.headers.common['Authorization'] = `Bearer ${token}`
  }

  return config
})

export default http
