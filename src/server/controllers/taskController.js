const charSheetModel = require('./models/CharSheetModel.js')
const path = require('path');

module.exports = {
    createSheet:(req,res,next)=>{
        charSheetModel.create({
            app:req.body.app,
            addRemove:req.body.addRemove,
            personalData:req.body.personalData,
            userId:req.cookies.ID,
      },(err)=>{
          if(err){
              res.status(500).sendFile(path.join(__dirname + './../../views/index.html'))
          } else {
              res.status(200).sendFile(path.join(__dirname + './../../views/index.html'))
          }
      })
      next()    
    },
    //Saves state to mongodb
    saveSheet:(req,res,next)=>{
      charSheetModel.findOneAndUpdate({userID:req.cookies.ID},{
        app:req.body.app,
        addRemove:req.body.addRemove,
        personalData:req.body.personalData,
    },(err)=>{
        if(err){
            res.status(500).sendFile(path.join(__dirname + './../../views/index.html'))
        } else {
            res.status(200).sendFile(path.join(__dirname + './../../views/index.html'))
        }
    })
    next()
  },

  retrieveSheet:(req,res,next)=>{
    charSheetModel.find({userID:req.cookies.ID},(err,data)=>{
        if(err){
            console.log('RETRIEVE FAILED')
            res.end()
        } else {
            console.log('RETRIEVED DATA', data)
        }
    })
    
  }

}