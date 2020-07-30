import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE, GET_REQUEST, GET_SUCCESS, GET_FAILURE } from '../actions/userActions'


// const id = 

const user = { 
    id: '',
    username: '',
    first_name: '',
    last_name: '',
    favorites: [],
};
// const initialState = user ? { loggedIn: true, user } : {}



export function login(state = user, action) {
    switch (action.type) {
      case LOGIN_REQUEST:
        return {
                 loggingIn: true,
                //  id: action.payload
                 };
      case LOGIN_SUCCESS:
        return {...state,  
                loggedIn: true,
                id: action.payload
                };
      case LOGIN_FAILURE:
        return { 
                loggingIn: false
                };
      default:
        return state
    }
  }

  export function userData(state = user, action) {
    switch(action.type) {
        case GET_REQUEST:
            return {
                  loading: true,
            };
        case GET_SUCCESS:
            return {
                state: action.payload
            };
        case GET_FAILURE:
            return {}


        default:
            return state
    }
  }