import { combineReducers } from 'redux';

// import all reducers here
import personalReducer from './personalReducer.js';
import skillsReducer from './skillsReducer.js'
import addRemoveReducer from './addRemoveReducer.js';


// combine reducers
const reducers = combineReducers({
  personalData: personalReducer,
  skills: skillsReducer,
  addRemove: addRemoveReducer
});

// make the combined reducers available for import
export default reducers;
