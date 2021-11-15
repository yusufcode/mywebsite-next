const express = require('express')
const next = require('next')
require('dotenv/config')
const dev = process.env.NODE_ENV !== 'production'

const app = next({ dev })
const handle = app.getRequestHandler()
const port = process.env.SERVER_PORT || 3000

app.prepare().then(()=>{
  const server = express()

  server.get('*', (req, res) => handle(req, res))

  server.listen(port, (err) => {
    if(err) throw err
    console.log(`Server listen on http://127.0.0.1:${port}`)
  })

})
