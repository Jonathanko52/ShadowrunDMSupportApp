const tableModel = require('../models/TableModel.js')
const path = require('path');

module.exports = {
    //Creates a table to be places into MongoDB
  createTable:(req,res,next)=>{
      tableModel.create({
        itemName:[],
        quantity:[],
        costPerUnit:[],
        userId:0,
    },(err)=>{
        if(err){
            res.status(500).sendFile(path.join(__dirname + './../../views/index.html'))
        } else {
            res.status(200).sendFile(path.join(__dirname + './../../views/index.html'))
        }
    })
    next()
  },

    //retrieves Table corresponding to userID from mongDB
  retrieveTable:(req,res,next)=>{
    tableModel.find({userId:req.body},(err, data)=>{
        if(err){
          res.end()
        } else {
            let returnData = [data[0].itemName, data[0].quantity, data[0].costperunit]
            res.status(200).json(returnData)
        }
    })
  },

    //saves table form react app state to mongodb
    updateTable: (req,res,next)=>{
        console.log("UPDATE ID",req.cookies.ID)
        console.log("UPDATE Itemanem",req.body[0].itemNameArr)
        console.log("UPDATE quantity",req.body[0].quantityArr)
        console.log("UPDATE costperunit",req.body[0].costPerUnitArr)

        tableModel.findOneAndUpdate({userId:req.cookies.ID},{
            itemName:req.body[0].itemNameArr,
            quantity:req.body[0].quantityArr,
            costperunit:req.body[0].costPerUnitArr,
        },
        (err,data)=>{
            if(err){
                console.log('UPDATE FAILED', err)
            } 
            console.log('update probably suddeeced')
            res.status(200).json(data)   


        })
    },

  deleteTable:(req,res,next)=>{
      tableModel.deleteOne({userID:req.cookies.ID},(err,data)=>{
        if(err){
            console.log('DELETE FAILED', err)
        }
        res.status(200).json(data)

      })

  },

  checkTable:(req,res)=>{

  }

}