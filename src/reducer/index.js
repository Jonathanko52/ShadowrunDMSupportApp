import { combineReducers } from 'redux';

// import all reducers here
import personalReducer from './personalReducer.js';
import addRemoveReducer from './addRemoveReducer.js';
import appReducer from './appReducer.js';


// combine reducers
const reducers = combineReducers({
  personalData: personalReducer,
  addRemove: addRemoveReducer,
  app:appReducer
});

// make the combined reducers available for import
export default reducers;
