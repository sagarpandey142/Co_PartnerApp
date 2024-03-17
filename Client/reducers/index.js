// reducers/index.js
import { combineReducers } from 'redux';
import signupReducer from './signupReducer';

const rootReducer = combineReducers({
  signup: signupReducer,
  // Add other reducers if needed
});

export default rootReducer;
