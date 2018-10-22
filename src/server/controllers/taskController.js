const charSheetModel = require('./models/CharSheetModel.js')
const path = require('path');

module.exports = {

    createSheet:(req,res,next)=>{
        console.log('COOKIE ID IN CREATESHEER', req.cookies.ID)
        let parsedID = parseInt(req.cookies.ID)
        charSheetModel.create({
            trackingnumber:parsedID,
            app:[{  boxDisplay:'meleeWeapon',
            loading: false,
            error: null,
            retrievedState: null,}],
            addRemove:[],
            personalData:[],
      },(err,data)=>{
          if(err){
              console.log("CREATE FAILED",err)
            //   res.status(500).sendFile(path.join(__dirname + './views/index.html'))
          } else{
            console.log("CREATED SHEET SUCCESSFULLLY")
          }
      })
      next()    
    },
    //Saves state to mongodb
    saveSheet:(req,res,next)=>{
      let parsedID = parseInt(req.cookies.ID)
      charSheetModel.findOneAndUpdate({trackingnumber:parsedID},{
        app:req.body.app,
        addRemove:req.body.addRemove,
        personalData:req.body.personalData,
    },(err)=>{
        if(err){
            console.log("SERVER UPDATE FAILED", err)
            res.status(500).end()
        } else {
            console.log("SERVER UPDATE SUCCEEDED")

            res.status(200).end()
        }
    })

  },

  retrieveSheet:(req,res,next)=>{
    let parsedID = parseInt(req.cookies.ID)
    charSheetModel.find({trackingnumber:parsedID},(err,data)=>{
        if(err){
            console.log('RETRIEVE FAILED')
            res.end()
        } else {
            console.log('RETRIEVE SUCCEEDED',data)
            res.json(data)
            next()
        }
    })
  }

}