import * as types from '../action/actionTypes.js'

const initialState = {
}

const rollsReducer = (state=initialState, action)=>{
  let newArray;
  
  switch(action.type){

    case types.REMOVE_SPELL:

      newArray= state.spellArray.slice()
      newArray.splice(action.payload,1)
    return{
      ...state,
      spellArray:newArray
    }



    default:
    return state;
  }

}

export default rollsReducer