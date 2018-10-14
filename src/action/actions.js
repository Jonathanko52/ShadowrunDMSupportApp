import * as types from './actionTypes.js'

export const submitText = (boxName) => ({
  type: types.SUBMIT_TEXT,
  payload: boxName,
});

export const savePersonal = (state)=>({
  type:types.SAVE_PERSONAL,
  payload: state
})

export const loadState = (state)=>({
  type:types.LOAD_STATE,
  payload:state
})

export const createDatabaseEntry = (state)=>({
  type:types.CREATE_DATABASE_ENTRY,
  payload:state
})

export const updateDatabaseEntry = (state)=>({
  type:types.UPDATE_DATABASE_ENTRY,
  payload: state
})

export const retrieveFromDatabase = (state)=>({
  type:types.RETRIEVE_FROM_DATABASE,
  payload: state
})




//Actions for the addbox 
//Add actions
export const boxChange = (boxVal)=>({
  type:types.BOX_CHANGE,
  payload: boxVal
})

export const addMeleeWeapon = (data)=>({
  type:types.ADD_MELEEWEAPON,
  payload: data
})

export const addRangedWeapon = (data)=>({
  type:types.ADD_RANGEDWEAPON,
  payload: data
})

export const addArmor = (data)=>({
  type:types.ADD_ARMOR,
  payload: data
})
export const addAugmetation = (data)=>({
  type:types.ADD_AUGMENTATION,
  payload: data
})
export const addContact = (data)=>({
  type:types.ADD_CONTACT,
  payload: data
})
export const addCyberdeck = (data)=>({
  type:types.ADD_CYBERDECK,
  payload: data
})
export const addGear = (data)=>({
  type:types.ADD_GEAR,
  payload: data
})
export const addPower = (data)=>({
  type:types.ADD_POWER,
  payload: data
})
export const addQuality = (data)=>({
  type:types.ADD_QUALITY,
  payload: data
})
export const addSkill = (data)=>({
  type:types.ADD_SKILL,
  payload: data
})
export const addSpell = (data)=>({
  type:types.ADD_SPELL,
  payload: data
})
export const addVehicle = (data)=>({
  type:types.ADD_VEHICLE,
  payload: data
})

//Remove Actions

export const removeMeleeWeapon = (data)=>({
  type:types.REMOVE_MELEEWEAPON,
  payload: data
})

export const removeRangedWeapon = (data)=>({
  type:types.REMOVE_RANGEDWEAPON,
  payload: data
})

export const removeArmor = (data)=>({
  type:types.REMOVE_ARMOR,
  payload: data
})
export const removeAugmetation = (data)=>({
  type:types.REMOVE_AUGMENTATION,
  payload: data
})
export const removeContact = (data)=>({
  type:types.REMOVE_CONTACT,
  payload: data
})
export const removeCyberdeck = (data)=>({
  type:types.REMOVE_CYBERDECK,
  payload: data
})
export const removeGear = (data)=>({
  type:types.REMOVE_GEAR,
  payload: data
})
export const removePower = (data)=>({
  type:types.REMOVE_POWER,
  payload: data
})
export const removeQuality = (data)=>({
  type:types.REMOVE_QUALITY,
  payload: data
})
export const removeSkill = (data)=>({
  type:types.REMOVE_SKILL,
  payload: data
})
export const removeSpell = (data)=>({
  type:types.REMOVE_SPELL,
  payload: data
})
export const removeVehicle = (data)=>({
  type:types.REMOVE_VEHICLE,
  payload: data
})


