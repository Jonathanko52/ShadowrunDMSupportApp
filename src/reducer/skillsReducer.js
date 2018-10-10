import * as types from '../action/actionTypes.js'

const initialState = {
 skillsArray: [{skill:'knives', rating:4, type: 'active'}]

}

const skillsReducer = (state=initialState, action)=>{
  
  switch(action.type){

//////////////////////
    case types.ADD_SKILL:

        let newSkillsArray = skillsArray.slice()
        newSkillsArray.push(action.payload)
      return{
        newSkillsArray
      }

    default:
    return state;
  }

}

export default skillsReducer