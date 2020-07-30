import React, {useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {saveEdit} from '../actions/userActions'




export const ProfileInfo = () => {
    const user = useSelector(state => state.userData)
    const dispatch = useDispatch()


    return(
        <div className='profile-container'>
            
        </div>

    )
}