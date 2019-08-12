import app from './app'
import config from './config'

app.listen(config.server.port, err => {
  if (err) {
    console.error('Unable to listen for connections', err)
    process.exit(1)
  }

  console.log(`Server is listening on http://localhost:${config.server.port}`)
})
