import { REGISTER_REQUEST, REGISTER_SUCCESS, REGISTER_FAILURE} from '../actions/userActions'
import axios from 'axios'


export const initialUserRegistration = {
    credentials: {
    first_name: '',
    last_name: '',
    username: '',
    password: ''
    },
    registering: false
}

const baseURL = 'https://bwft-spotify-song-suggester.herokuapp.com'

export function userReducer(state = initialUserRegistration, action) {
    switch (action.type) {
      case REGISTER_REQUEST:
        const username = action.payload.credentials.username
        axios
            .get(`${baseURL}/api/users`)
            .then(res => console.log(res))
            .catch(err => console.log(err))
        return { state,
                 registering: true };
      case REGISTER_SUCCESS:
        const newUser = action.payload.credentials
        axios
            .post(`${baseURL}/api/users/register`, newUser)
            .then(res => console.log(res))
            .catch(err => console.log(err))
        
        return { state, 
                registering: false };
      case REGISTER_FAILURE:
        return {};
      default:
        return state
    }
  }