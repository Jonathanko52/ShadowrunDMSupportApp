import { combineReducers } from 'redux';

// import all reducers here
import personalReducer from './personalReducer.js';


// combine reducers
const reducers = combineReducers({
  personalData: personalReducer,
});

// make the combined reducers available for import
export default reducers;
