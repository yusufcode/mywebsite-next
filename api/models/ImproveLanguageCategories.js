const mongoose = require('mongoose')

const PostSchema = mongoose.Schema({
  name:{
    type:String,
    required:true,
    unique:true
  }
})

module.exports = mongoose.model('ImproveLanguageCategories', PostSchema)