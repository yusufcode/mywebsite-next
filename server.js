const express = require('express')
const next = require('next')
const mongoose = require('mongoose')
require('dotenv').config({ path: '.env' });
const dev = process.env.NODE_ENV !== 'production'

const app = next({ dev })
const handle = app.getRequestHandler()

mongoose.connect(process.env.DATABASE,{
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
    server.use('/api/improve-language-categories', ImproveLanguageCategoriesRoute)
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
const ImproveLanguageCategoriesRoute = require('./api/routes/improveLanguageCategories')


