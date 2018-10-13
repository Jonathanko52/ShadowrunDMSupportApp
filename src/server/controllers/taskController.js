const charSheetModel = require('./models/CharSheetModel.js')
const path = require('path');

module.exports = {
    //Saves state to mongodb
  saveState:(req,res,next)=>{

      charSheetModel.findOneAndUpdate({userID:999},{
        app:req.body.app,
        addRemove:req.body.addRemove,
        personalData:req.body.personalData,
        userID:999,
    },(err)=>{
        if(err){
            res.status(500).sendFile(path.join(__dirname + './../../views/index.html'))
        } else {
            res.status(200).sendFile(path.join(__dirname + './../../views/index.html'))
        }
    })
    next()
  }
}