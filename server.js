const { parse } = require('url')
const next = require('next')
const express = require('express')
const renderAndCache = require('./scripts/cache')

const port = parseInt(process.env.PORT, 10) || 3000
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare().then(() => {
  const server = express()

  if (!dev) {
    server.get('/', (req, res) => {
      const { query } = parse(req.url, true)
      renderAndCache(app, req, res, '/', query)
    })
  }

  server.get('*', handle)

  server.listen(port, (err) => {
    if (err) throw err
    console.log(`> Ready on http://localhost:${port}`)
  })
})
