const mongoose = require('mongoose')

const PostSchema = mongoose.Schema({
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
}, {timestamps:true})

module.exports = mongoose.model('ImproveLanguage', PostSchema)