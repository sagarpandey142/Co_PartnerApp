import { combineReducers } from 'redux';
import signupReducer from './signupReducer';
import professionalRoleReducer from './professionalRole';

const rootReducer = combineReducers({
  signup: signupReducer,
  professionalRole: professionalRoleReducer
});

export default rootReducer;
