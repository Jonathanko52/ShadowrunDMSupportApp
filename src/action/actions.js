import * as types from './actionTypes.js'

export const submitText = (boxName) => ({
  type: types.SUBMIT_TEXT,
  payload: boxName,
});

export const savePage = (state)=>({
  type:types.SAVE_PAGE,
  payload: state
})



//actions for the addbox 

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