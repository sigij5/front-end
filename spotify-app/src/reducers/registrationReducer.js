import { REGISTER_REQUEST, REGISTER_SUCCESS, REGISTER_FAILURE} from '../actions/userActions'
import axios from 'axios'


export const initialUserRegistration = {
    credentials: {
    first_name: '',
    last_name: '',
    username: '',
    password: ''
    },
    registering: false,
    error: ''
}


export function registration(state = initialUserRegistration, action) {
    switch (action.type) {
      case REGISTER_REQUEST:
        return { ...state,
                 registering: true,
                 error: '',
                 };
      case REGISTER_SUCCESS:
        return { ...state, 
                registering: false,
                error: '',
                };
      case REGISTER_FAILURE:
        return { ... state, 
                registering: false,
                error: action.payload };
      default:
        return state
    }
  }