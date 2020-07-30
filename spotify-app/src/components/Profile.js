import React, { useEffect } from 'react'
import axios from 'axios'
import { NavLink } from 'react-router-dom'
import { logout, getUserData } from '../actions/userActions'
import { connect } from 'react-redux'
import { useDispatch, useSelector } from 'react-redux'



const Profile = props => {
    const user = useSelector(state => state.login)
    const data = useSelector(state => state.userData)
    const dispatch = useDispatch()
    let userInfo = localStorage.getItem('user');

    useEffect(() => {
        dispatch(getUserData(user.id))
        console.log(data)
        console.log('this is the user data', userInfo)
    }, [userInfo])

    return(
        <div className='profile-page'>
            <h1>Welcome {userInfo}</h1>
            <nav>
                <NavLink to='login' onClick={logout}>Logout</NavLink>
                <br />
                <h3>My Favorite Songs:</h3>

            </nav>




        </div>
    )


}


export default Profile;