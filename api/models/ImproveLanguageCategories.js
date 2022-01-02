const mongoose = require('mongoose')

const RecordSchema = mongoose.Schema({
  name:{
    type:String,
    required:true,
    unique:true
  }
})

module.exports = mongoose.model('ImproveLanguageCategories', RecordSchema)