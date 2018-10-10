import * as types from './actionTypes.js'

export const submitText = (boxName) => ({
  type: types.SUBMIT_TEXT,
  payload: boxName,
});

export const savePage = (state)=>({
  type:types.SAVE_PAGE,
  payload: state
})

export const addMeleeWeapon = (data)=>({
  type:types.ADD_MELEEWEAPON,
  payload: data
})
