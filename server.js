const express = require('express')
const next = require('next')
const mongoose = require('mongoose')
require('dotenv/config')
const dev = process.env.NODE_ENV !== 'production'

const app = next({ dev })
const handle = app.getRequestHandler()
const port = process.env.SERVER_PORT || 3000

mongoose.connect(`mongodb+srv://node_user:node_user_123@cluster0.u4slu.mongodb.net/yusufcode?retryWrites=true&w=majority`,{
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log('DB connected!')

  const port = process.env.PORT || 3000

  app.prepare().then(()=>{
    const server = express()
  
    //ROUTES
    server.use(express.json())
    server.use('/api/improve-language', ImproveLanguageRoute)
    server.get('*', (req, res) => handle(req, res))
  
    server.listen(port, (err) => {
      if(err) throw err
      console.log(`Server listen on http://127.0.0.1:${port}`)
    })
  
  })

})
.catch((err) => {
  console.log('DB ERROR:', err)
})

//IMPORT ROUTES
const ImproveLanguageRoute = require('./api/routes/improveLanguage')


