import { axiosWithAuth } from "../utils/axiosWithAuth";
import axios from 'axios'



const baseURL = 'https://bwft-spotify-song-suggester.herokuapp.com'

export const REGISTER_REQUEST = 'REGISTER_REQUEST';
export const REGISTER_SUCCESS = 'REGISTER_SUCCESS';
export const REGISTER_FAILURE = 'REGISTER_FAILURE';


export const addUser = newUser => dispatch => {
    console.log(newUser)
    dispatch({type: REGISTER_START, payload: newUser});
    axios
        .get(`${baseURL}/api/users`)
        .then(res => console.log(res))
        .catch(err => console.log(err))
}

