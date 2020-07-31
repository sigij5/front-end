import React, { useEffect } from 'react'
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
    dispatch({ type: LOGIN_REQUEST });
    axios
        .post(`${baseURL}/api/users/login`, {username: `${user.username}`,
         password: `${user.password}`})
         .then(res => {
             console.log('logging in')
             localStorage.setItem('token', res.data.token)
             localStorage.setItem('user', res.data.id)
             localStorage.setItem('password', user.password)
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
export const GET_SONGS = 'GET_SONGS';

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
    axiosWithAuth()
        .get(`${baseURL}/api/favorites/${id}`)
        .then(res => {
            console.log(res)
            dispatch({ type: GET_SONGS, payload: res.data })
        })
        .catch(err => console.log(err))
}


export const addSong = (id, song) => dispatch => {
    // dispatch({ type: POST_REQUEST })
    axiosWithAuth()
        .post(`${baseURL}/api/favorites/${id}/add/${JSON.stringify(song)}`)
        .then(res => {
            console.log(res)
            dispatch(getUserData(id))
        })
        .catch(err => console.log(err))
        // .finally(dispatch(getUserData(id)))
}

export const removeSong = (id, song) => dispatch => {
    axiosWithAuth()
        .delete(`${baseURL}/api/favorites/${id}/remove/${JSON.stringify(song)}`)
        .then(res => {
            console.log(res)
            dispatch(getUserData(id))
        })
        .catch(err => console.log(err))
        // .finally(dispatch(getUserData(id)))
}

// export const saveEdit = (id, newUser) => dispatch => {
//     axiosWithAuth()
//         .put(`${baseURL}/api/users/${id}/`, newUser)
//         .then(res => console.log(res))
// }

export const saveEdit = (id, newUser) => dispatch => {
    axios
        .put(`https://reqres.in/api/users/${id}/`, newUser)
        .then(res => {
            dispatch({ type: GET_SUCCESS, payload: res.data})
        })
}

export const LOGOUT = 'LOGOUT'

export const logout = () => dispatch => {
    localStorage.removeItem('token')
    localStorage.removeItem('user')
    dispatch({ type: LOGOUT })
}