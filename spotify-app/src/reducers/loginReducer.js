import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE } from '../actions/userActions'




let user = JSON.parse(localStorage.getItem('user'));
const initialState = user ? { loggedIn: true, user } : {}

export function login(state = initialState, action) {
    switch (action.type) {
      case LOGIN_REQUEST:
        return {
                 loggingIn: true,
                 user: action.payload.username
                 };
      case LOGIN_SUCCESS:
        return {  
                loggedIn: true,
                user: action.payload.username
                };
      case LOGIN_FAILURE:
        return { 
                loggingIn: false
                };
      default:
        return state
    }
  }