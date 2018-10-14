import * as types from '../action/actionTypes.js'

const initialState = {
  boxDisplay:'meleeWeapon'

}

const appReducer = (state=initialState, action)=>{
  
  switch(action.type){

//////////////////////
    case types.BOX_CHANGE:
      return{
        boxDisplay:action.payload
      }



    case types.UPDATE_DATABASE_ENTRY:
      fetch('http://localhost:3333/updateDatabase',{
        method: "POST",
        credentials: "same-origin",
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(action.payload)
      }).then((res,err)=>{
        if(err){
          console.log('First error',err)
        }
        res.json()
      }).then((res,err)=>{
        console.log("UPDATE RES",res)
        if(err){
          console.log("Second error", err)
        }
        console.log("UPDATE SUCCEEDED")
      }).catch((err)=>{
        console.log("Catch error", err)
      })
    return state;

    case types.CREATE_DATABASE_ENTRY:
      fetch('http://localhost:3333/createInDatabase',{
        method: "POST",
        credentials: "same-origin",
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(action.payload)
      }).then((res,err)=>{
        if(err){
          console.log('First error',err)
        }
        res.json()
      }).then((res,err)=>{
        if(err){
          console.log("Second error", err)
        }
        console.log("SAVE SUCCEEDED", res)
      }).catch((err)=>{
        console.log("Catch error", err)
      })
    return state;

      case types.RETRIEVE_FROM_DATABASE:
      fetch('http://localhost:3333/retrieveFromDatabase',{
        method: "GET",
        credentials: "same-origin",
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
      }).then((res,err)=>{
        if(err){
          console.log('First error',err)
        }
        res.json()
      }).then((res,err)=>{
        if(err){
          console.log("Second error", err)
        }
        console.log("RETRIEVE SUCCEEDED", res)

      }).catch((err)=>{
        console.log("Catch error", err)
      })

    return state;


    
    default:
    return state;
  }

}

export default appReducer