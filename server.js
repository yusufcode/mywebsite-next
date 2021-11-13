const express = require('express')
const next = require('next')
const dev = process.env.NODE_ENV !== 'production'

const app = next({dev})
const handle = app.getRequestHandler()
const port = 3000

app.prepare().then(()=>{
  const server = express()
  server.get('*', (req, res)=>{
    return handle(req,res)
  })
  server.listen(port, (err) => {
    if(err) throw err
    console.log(`SERVER SUCCESS: ${port}`)
  }).catch((e)=>{
    console.log(e.stack)
    process.exit(1)
  })
})
