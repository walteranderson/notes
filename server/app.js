import express from 'express'
import { Model } from 'objection'
import Knex from 'knex'

import registerMiddleware from './middleware'
import config from './config'

const knex = Knex(config.knexConfig())
Model.knex(knex)

const app = express()

registerMiddleware(app)

export default app
