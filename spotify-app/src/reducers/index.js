import { combineReducers } from 'redux';

import { registration } from './registrationReducer'
import { login } from './loginReducer'

const rootReducer = combineReducers({
  login,
  registration
});

export default rootReducer;