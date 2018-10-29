import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducers from './reducer/index.js';
import ReduxThunk from 'redux-thunk'

const store = createStore(
  reducers,
  applyMiddleware(ReduxThunk),
  composeWithDevTools()
);

export default store;