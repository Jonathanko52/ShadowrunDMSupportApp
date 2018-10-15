const charSheetModel = require('./models/CharSheetModel.js')
const path = require('path');

module.exports = {

    createSheet:(req,res,next)=>{
        let parsedID = parseInt(req.cookies.ID)
        charSheetModel.create({
            trackingNumber:parsedID,
            app:[],
            addRemove:[],
            personalData:[],
      },(err,data)=>{
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
      let parsedID = parseInt(req.cookies.ID)
      charSheetModel.findOneAndUpdate({trackingNumber:parsedID},{
        app:req.body.app,
        addRemove:req.body.addRemove,
        personalData:req.body.personalData,
    },(err)=>{
        if(err){
            console.log("Server updatefail", err)
            res.status(500).end()
        } else {
            console.log("Server update succeeded", err)

            res.status(200).end()
        }
    })

  },

  retrieveSheet:(req,res,next)=>{
    let parsedID = parseInt(req.cookies.ID)
    charSheetModel.find({trackingNumber:parsedID},(err,data)=>{
        if(err){
            console.log('RETRIEVE FAILED')
            res.end()
        } else {
            console.log('RETRIEVE SUCCEEDED',data)
            res.status(200).json(data).end()
        }
    })
  }

}