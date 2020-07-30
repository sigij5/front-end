import { combineReducers } from 'redux';

import { registration } from './registrationReducer'
import { login, userData } from './loginReducer'

const rootReducer = combineReducers({
  login,
  registration,
  userData  
});

export default rootReducer;