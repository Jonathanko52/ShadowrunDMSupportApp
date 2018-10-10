import * as types from '../action/actionTypes.js'

const initialState = {
  boxDisplay:'meleeWeapon'

}

const appReducer = (state=initialState, action)=>{
  
  switch(action.type){

//////////////////////
    case types.BOX_CHANGE:
        console.log("REDUCER FIRING")
      return{
        boxDisplay:action.payload
      }


    default:
    return state;
  }

}

export default appReducer