import app from './app'
import config from './config'

const PORT = process.env.PORT || 3000

app.listen(PORT, err => {
  if (err) {
    console.error('Unable to listen for connections', err)
    process.exit(1)
  }

  console.log(`Server is listening on http://localhost:${PORT}`)
})
