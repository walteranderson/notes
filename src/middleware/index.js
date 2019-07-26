import morgan from 'morgan'
import bodyParser from 'body-parser'

import errorHandler from './error-handler'
import usersRouter from '../lib/users/router'
import authRouter from '../lib/auth/router'

export default function registerMiddleware (app) {
  app.use(bodyParser.json())
  app.use(bodyParser.urlencoded({ extended: true }))
  app.use(morgan('dev'))

  app.get('/api/hello', (req, res) => res.json({ message: 'hello world' }))
  app.use('/api/users', usersRouter)
  app.use('/api/auth', authRouter)

  app.use(errorHandler)
}
