import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT, GET_REQUEST, GET_SUCCESS, GET_FAILURE, GET_SONGS } from '../actions/userActions'


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
                 loggedIn: false,
                //  id: action.payload
                 };
      case LOGIN_SUCCESS:
        return {...state,  
                loggedIn: true,
                id: action.payload
                };
      case LOGIN_FAILURE:
        return { 
                loggedIn: false
                };
      case LOGOUT:
          return {
              ...state,
              loggedIn: action.payload
          }
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
                ...state,
                id: action.payload.id,
                username: action.payload.username,
                first_name: action.payload.first_name,
                last_name: action.payload.last_name,
                loading: false
            };
        case GET_SONGS:
            return {
                ...state,
                favorites: action.payload
            }
        case GET_FAILURE:
            return {}


        default:
            return state
    }
  }