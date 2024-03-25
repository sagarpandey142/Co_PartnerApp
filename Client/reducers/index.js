import { combineReducers } from 'redux';
import signupReducer from './signupReducer';
import professionalRoleReducer from './professionalRole';
import CreateProject from './CreateProject';

const rootReducer = combineReducers({
  signup: signupReducer,
  professionalRole: professionalRoleReducer,
  createProject:CreateProject
});

export default rootReducer;
