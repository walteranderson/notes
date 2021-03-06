import morgan from 'morgan'
import bodyParser from 'body-parser'
import helmet from 'helmet'
import cors from 'cors'

import authenticate from './authenticate'
import errorHandler from './error-handler'
import usersRouter from '../lib/users/router'
import authRouter from '../lib/auth/router'
import notesRouter from '../lib/notes/router'
import linksRouter from '../lib/links/router'
import tasksRouter from '../lib/tasks/router'

export default function registerMiddleware(app) {
  app.use(bodyParser.json())
  app.use(bodyParser.urlencoded({ extended: true }))
  app.use(morgan('dev'))
  app.use(helmet())
  app.use(cors())

  app.get('/', (req, res) => res.json({ message: 'hello world' }))
  app.use('/api/users', usersRouter)
  app.use('/api/auth', authRouter)
  app.use('/api/notes', authenticate, notesRouter)
  app.use('/api/links', authenticate, linksRouter)
  app.use('/api/tasks', authenticate, tasksRouter)

  app.use(errorHandler)
}
