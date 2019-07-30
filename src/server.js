import app from './app'
import config from './config'

app.listen(config.server.port, config.server.ip, err => {
  if (err) {
    console.error('Unable to listen for connections', err)
    process.exit(10)
  }

  console.log(
    `Server is listening on http://${config.server.ip}:${config.server.port}`
  )
})
