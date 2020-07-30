import React from 'react'
import { axiosWithAuth } from "../utils/axiosWithAuth";
import axios from 'axios'
import { history } from '../utils/history'
import { jwt_decode } from 'jwt-decode'



const baseURL = 'https://bwft-spotify-song-suggester.herokuapp.com'

export const REGISTER_REQUEST = 'REGISTER_REQUEST';
export const REGISTER_SUCCESS = 'REGISTER_SUCCESS';
export const REGISTER_FAILURE = 'REGISTER_FAILURE';

// const token = localStorage.getItem('token')
// const decoded = jwt_decode(token);

export const addUser = newUser => dispatch => {
    // console.log(newUser)
    dispatch({type: REGISTER_REQUEST});
    axios
        .post(`${baseURL}/api/users/register`, newUser)
        .then(res => {
            console.log(res)
            dispatch({ type: REGISTER_SUCCESS, payload: res.data })
            history.push('/login')
            })
        .catch(err => dispatch({ type: REGISTER_FAILURE, payload: err}))
}

export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';

export const login = user => dispatch => {
    dispatch({ type: LOGIN_REQUEST, payload: user});
    axios
        .post(`${baseURL}/api/users/login`, {username: `${user.username}`,
         password: `${user.password}`})
         .then(res => {
             localStorage.setItem('token', res.data.token)
             localStorage.setItem('user', res.data.id)
             dispatch({ type: LOGIN_SUCCESS, payload: res.data.id})
             history.push('/profile')
         })
         .catch(err => {
            dispatch({ type: LOGIN_FAILURE, payload: err})
         })
}

export const GET_REQUEST = 'GET_REQUEST';
export const GET_SUCCESS = 'GET_SUCCESS';
export const GET_FAILURE = 'GET_FAILURE';

export const getUserData = id => dispatch => {
    dispatch({ type: GET_REQUEST })
    axiosWithAuth()
        .get(`${baseURL}/api/users/${id}`)
        .then(res => {
            console.log(res)
            localStorage.setItem('user', res.data[0].username)
            dispatch({ type: GET_SUCCESS, payload: res.data[0] })
        })
        .catch(err => {
            dispatch({ type: GET_FAILURE })
        })
}



export const logout = () => {
    localStorage.removeItem('token')
    localStorage.removeItem('user')
}