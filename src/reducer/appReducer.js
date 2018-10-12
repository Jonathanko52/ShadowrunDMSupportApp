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

    case types.SAVE_STATE:
      console.log('APPLICATION STATE',action.payload)
    return state;

    case types.SAVE_STATE:
      console.log('APPLICATION STATE',action.payload)
    return state;


    
    default:
    return state;
  }

}

export default appReducer