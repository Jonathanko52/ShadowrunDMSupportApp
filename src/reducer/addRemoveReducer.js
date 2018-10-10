import * as types from '../action/actionTypes.js'

const initialState = {
 armorArray:[],
 augumentationArray:[],
 contactArray:[],
 cyberdeckArray:[],
 gearArray:[],
 meleeWeaponArray: [{weapon:'rock', reach:'stones throw', damage:'not much', accuracy:'poor', ap:'none'}],
 powerArray:[],
 qualityArray:[],
 rangedWeaponArray:[],
 skillArray:[],
 spellArray:[],
 vehicleArray:[]
}

const addReducer = (state=initialState, action)=>{
  let newArray;
  
  switch(action.type){

//////////////////////

    case types.ADD_MELEEWEAPON:

        newArray= state.meleeWeaponArray.slice()
        newArray.push(action.payload)
      return{
        meleeWeaponArray:newArray
      }

    default:
    return state;
  }

}

export default addReducer