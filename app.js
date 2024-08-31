const express = require('express')
const app = express()

// get the port from env variable
const PORT = process.env.PORT || 3000

app.use(express.static('dist'))

// Dummy endpoint to check version
app.get('/version', (req, res) => {
  res.send('1') // change this string to ensure a new version deployed
})

// For HTTP-level health check
app.get('/health', (req, res) => {
  // eslint-disable-next-line no-constant-condition
  if (true) throw('error...  ')
  res.send('ok')
})

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`server started on port ${PORT}`)
})
