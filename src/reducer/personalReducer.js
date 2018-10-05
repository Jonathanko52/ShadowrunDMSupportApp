import * as types from '../action/actionTypes.js'

const initialState = {
  name:'',
  metatype:'',
  ethnicity:'',
  age:'',
  sex:'',
  height:'',
  weight:'',
  streetCred:'',
  notoriety:'',
  publicAwareness:'',
  karma:'',
  totalKarma:'',
  misc:''

}

const personalDataReducers = (state=initialState, action)=>{
  
  switch(action.type){
    case types.SUBMIT_TEXT:
      let boxVal = document.getElementById(action.payload).value;
    return {
      ...state,
      [action.payload]:boxVal
    };
//////////////////////
    default:

    return state;
  }

}

export default personalDataReducers