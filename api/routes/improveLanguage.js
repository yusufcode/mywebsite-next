const router = require('express').Router()
const ImproveLanguage = require('../models/ImproveLanguage')

//CREATE
router.post('/', async (req,res)=>{
  const newWord = await ImproveLanguage(req.body)
  try{
    const savedWord = await newWord.save()
    res.status(200).json(savedWord)
  } catch(err){
    res.status(500).json(err)
  }
})

//UPDATE
router.put('/:id', async (req,res)=>{
  try{
    const updatedWord = await ImproveLanguage.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body
      },
      {
        new: true
      }
    )
    res.status(200).json(updatedWord)
  } catch(err){
    res.status(500).json(err)
  }
})

//DELETE
router.delete('/:id', async (req,res)=>{
  try{
    await ImproveLanguage.findByIdAndDelete(req.params.id)
    res.status(200).json('Word has been deleted.')
  } catch(err){
    res.status(500).json(err)
  }
})

//GET
router.get('/:id', async (req,res)=>{
  try{
    const word = await ImproveLanguage.findById(req.params.id)
    res.status(200).json(word)
  } catch(err){
    res.status(500).json(err)
  }

})

//GET ALL
router.get('/', async (req,res)=>{
  const tr = req.query.tr
  const en = req.query.en
  const ru = req.query.ru
  const cat = req.query.cat
  try{
    let word;
    if(tr){
      word = await ImproveLanguage.find({tr})
    } else if(en){
      word = await ImproveLanguage.find({en})
    } else if(ru){
      word = await ImproveLanguage.find({ru})
    } else if(cat){
      word = await ImproveLanguage.find({categories:cat})
    } else{
      word = await ImproveLanguage.find()
    }
    res.status(200).json(word)
  } catch(err){
    res.status(500).json(err)
  }

})

module.exports = router