const mongoose = require('mongoose')

const RecordSchema = mongoose.Schema({
  tr:{
    type:String,
    required:true,
    unique:true
  },
  en:{
    type:String,
    required:true,
    unique:true
  },
  ru:{
    type:String,
    required:true,
    unique:true
  },
  categories:{
    type:Array,
    required:false
  }
})

module.exports = mongoose.model('ImproveLanguage', RecordSchema)