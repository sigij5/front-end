import React from 'react'
import { axiosWithAuth } from "../utils/axiosWithAuth";
import axios from 'axios'
import { history } from '../utils/history'



const baseURL = 'https://bwft-spotify-song-suggester.herokuapp.com'

export const REGISTER_REQUEST = 'REGISTER_REQUEST';
export const REGISTER_SUCCESS = 'REGISTER_SUCCESS';
export const REGISTER_FAILURE = 'REGISTER_FAILURE';


export const addUser = newUser => dispatch => {
    // console.log(newUser)
    dispatch({type: REGISTER_REQUEST});
    axios
        .post(`${baseURL}/api/users/register`, newUser)
        .then(res => 
            // console.log(res))
            dispatch({ type: REGISTER_SUCCESS, payload: res.data }),
            history.push('/login')
            )
        .catch(err => dispatch({ type: REGISTER_FAILURE, payload: err}))
}

export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';

export const login = credentials => dispatch => {
    dispatch({ type: LOGIN_REQUEST, payload: credentials});
    axios
        .post(`${baseURL}/api/user/login`, {username: `${credentials.username}`,
         password: `${credentials.password}`})
         .then(res => {
            //  localStorage.setItem('token', res.token)
            //  dispatch({ type: LOGIN_SUCCESS, payload: credentials})
            console.log(res)
         })
         .catch(err => {
            dispatch({ type: LOGIN_FAILURE, payload: err})
         })
        //  .finally(
        //      axiosWithAuth()
        //         .get(`${baseURL}/api/users`)
        //         .then(res => {
        //             let user = res.data.filter(user => user.username === credentials.username)
        //             history.push(`/profile/${user.id}`)
        //         })
        //         .catch(err => console.log(err))
        //  )
}