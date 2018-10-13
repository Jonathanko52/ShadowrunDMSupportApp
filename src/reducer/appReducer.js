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


//body isn't aprsed into readable stream, possible resulting in 

    case types.SAVE_STATE:
      console.log('APPLICATION STATE',action.payload)
      fetch('http://localhost:3333/saveToDatabase',{
        method: "POST",
        credentials: "same-origin",
        headers: {
          "Content-Type": "application/json; charset=utf-8",
        },
        body: JSON.stringify(action.payload)
      }).then((res,err)=>{
        if(err){
          console.log('First error',err)
        }
        console.log('RESPONSE',res)
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


    
    default:
    return state;
  }

}

export default appReducer