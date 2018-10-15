import * as types from '../action/actionTypes.js'

const initialState = {
 armorArray:[],
 augmentationArray:[],
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

    case types.RETRIEVE_AND_SET_ADDREMOVE: 

    return{
      ...action.payload[0]
    }

//////////////////////ADD REDUCER

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

    case types.ADD_ARMOR:

      newArray= state.armorArray.slice()
      newArray.push(action.payload)
    return{
      ...state,
      armorArray:newArray
    }

    case types.ADD_AUGMENTATION:

      newArray= state.augmentationArray.slice()
      newArray.push(action.payload)
    return{
      ...state,
      augmentationArray:newArray
    }

    case types.ADD_CONTACT:

      newArray= state.contactArray.slice()
      newArray.push(action.payload)
    return{
      ...state,
      contactArray:newArray
    }

    case types.ADD_CYBERDECK:

      newArray= state.cyberdeckArray.slice()
      newArray.push(action.payload)
    return{
      ...state,
      cyberdeckArray:newArray
    }

    case types.ADD_GEAR:

      newArray= state.gearArray.slice()
      newArray.push(action.payload)
    return{
      ...state,
      gearArray:newArray
    }

    case types.ADD_POWER:

      newArray= state.powerArray.slice()
      newArray.push(action.payload)
    return{
      ...state,
      powerArray:newArray
    }

    case types.ADD_QUALITY:

      newArray= state.qualityArray.slice()
      newArray.push(action.payload)
    return{
      ...state,
      qualityArray:newArray
    }

    case types.ADD_SKILL:

      newArray= state.skillArray.slice()
      newArray.push(action.payload)
    return{
      ...state,
      skillArray:newArray
    }

    case types.ADD_SPELL:

      newArray= state.spellArray.slice()
      newArray.push(action.payload)
    return{
      ...state,
      spellArray:newArray
    }

    case types.ADD_VEHICLE:

      newArray= state.vehicleArray.slice()
      newArray.push(action.payload)
    return{
      ...state,
      vehicleArray:newArray
    }

    //Remove Reducers

    case types.REMOVE_MELEEWEAPON:

        newArray= state.meleeWeaponArray.slice()
        newArray.splice(action.payload,1)
        return{
        ...state,
        meleeWeaponArray:newArray
      }

      case types.REMOVE_RANGEDWEAPON:
      newArray= state.rangedWeaponArray.slice()
      newArray.splice(action.payload,1)
    return{
      ...state,
      rangedWeaponArray:newArray
    }

    case types.REMOVE_ARMOR:

      newArray= state.armorArray.slice()
      newArray.splice(action.payload,1)
    return{
      ...state,
      armorArray:newArray
    }

    case types.REMOVE_AUGMENTATION:

      newArray= state.augmentationArray.slice()
      newArray.splice(action.payload,1)
    return{
      ...state,
      augmentationArray:newArray
    }

    case types.REMOVE_CONTACT:

      newArray= state.contactArray.slice()
      newArray.splice(action.payload,1)
    return{
      ...state,
      contactArray:newArray
    }

    case types.REMOVE_CYBERDECK:

      newArray= state.cyberdeckArray.slice()
      newArray.splice(action.payload,1)
    return{
      ...state,
      cyberdeckArray:newArray
    }

    case types.REMOVE_GEAR:

      newArray= state.gearArray.slice()
      newArray.splice(action.payload,1)
    return{
      ...state,
      gearArray:newArray
    }

    case types.REMOVE_POWER:

      newArray= state.powerArray.slice()
      newArray.splice(action.payload,1)
    return{
      ...state,
      powerArray:newArray
    }

    case types.REMOVE_QUALITY:

      newArray= state.qualityArray.slice()
      newArray.splice(action.payload,1)
    return{
      ...state,
      qualityArray:newArray
    }

    case types.REMOVE_SKILL:

      newArray= state.skillArray.slice()
      newArray.splice(action.payload,1)
    return{
      ...state,
      skillArray:newArray
    }

    case types.REMOVE_SPELL:

      newArray= state.spellArray.slice()
      newArray.splice(action.payload,1)
    return{
      ...state,
      spellArray:newArray
    }

    case types.REMOVE_VEHICLE:

      newArray= state.vehicleArray.slice()
      newArray.splice(action.payload,1)
    return{
      ...state,
      vehicleArray:newArray
    }




    default:
    return state;
  }

}

export default addReducer