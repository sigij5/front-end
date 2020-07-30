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
            // dispatch({ POST_SUCCESS, payload: res.data.favorite_songs })
        })
        .catch(err => console.log(err))
        .finally(dispatch(getUserData(id)))
}

export const removeSong = (id, song) => dispatch => {
    axiosWithAuth()
        .delete(`${baseURL}/api/favorites/${id}/remove/${JSON.stringify(song)}`)
        .then(res => console.log(res))
        .catch(err => console.log(err))
        .finally(dispatch(getUserData(id)))
}

export const editUser = (id, newUser) => dispatch => {
    axiosWithAuth
        .put(`${baseURL}/api/favorites/${id}/`)
}

export const LOGOUT = 'LOGOUT'

export const logout = () => dispatch => {
    dispatch({ type: LOGOUT })
    localStorage.removeItem('token')
    localStorage.removeItem('user')
}