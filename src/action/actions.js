import * as types from './actionTypes.js'

export const submitText = (boxName) => ({
  type: types.SUBMIT_TEXT,
  payload: boxName,
});
