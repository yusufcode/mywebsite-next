const router = require('express').Router()
const ImproveLanguageCategories = require('../models/ImproveLanguageCategories')

//CREATE
router.post('/', async (req,res)=>{
  const newRecord = await ImproveLanguageCategories(req.body)
  try{
    const savedRecord = await newRecord.save()
    res.status(200).json(savedRecord)
  } catch(err){
    res.status(500).json(err)
  }
})

//UPDATE
router.put('/:id', async (req,res)=>{
  try{
    const updatedRecord = await ImproveLanguageCategories.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body
      },
      {
        new: true
      }
    )
    res.status(200).json(updatedRecord)
  } catch(err){
    res.status(500).json(err)
  }
})

//DELETE
router.delete('/:id', async (req,res)=>{
  try{
    await ImproveLanguageCategories.findByIdAndDelete(req.params.id)
    res.status(200).json('Record has been deleted.')
  } catch(err){
    res.status(500).json(err)
  }
})

//GET
router.get('/:id', async (req,res)=>{
  try{
    const record = await ImproveLanguageCategories.findById(req.params.id)
    res.status(200).json(record)
  } catch(err){
    res.status(500).json(err)
  }

})

//GET ALL
router.get('/', async (req,res)=>{
  const name = req.query.name
  try{
    let record;
    if(name){
      record = await ImproveLanguageCategories.find({name})
    } else{
      record = await ImproveLanguageCategories.find()
    }
    res.status(200).json(record)
  } catch(err){
    res.status(500).json(err)
  }

})

module.exports = router