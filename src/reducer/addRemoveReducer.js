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
 rangedWeaponArray:[{weapon:'ak', damage:'30', accuracy:'4', ap:'2', mode:'semi', rc: 'what?', ammo:'20'}],
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
        ...state,
        meleeWeaponArray:newArray
      }

    case types.ADD_RANGEDWEAPON:

      newArray= state.rangedWeaponArray.slice()
      newArray.push(action.payload)
    return{
      ...state,
      rangedWeaponArray:newArray
    }

    default:
    return state;
  }

}

export default addReducer