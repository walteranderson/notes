import { NotFoundError } from 'objection'

export default (err, req, res, next) => {
  if (!err) return next()

  let statusCode = 500
  const body = {
    type: 'Internal Server Error',
    message: err.message,
    data: {}
  }

  if (err instanceof NotFoundError) {
    statusCode = 404
    body.type = 'NotFoundError'
  }

  res.json(body).status(statusCode).end()
}
