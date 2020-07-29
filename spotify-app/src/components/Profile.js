import React from 'react'
import axios from 'axios'
import { NavLink } from 'react-router-dom'
import { logout } from '../actions/userActions'
import { connect } from 'react-redux'
import { useDispatch, useSelector } from 'react-redux'



const Profile = props => {
    const user = useSelector(state => state.login)
    const dispatch = useDispatch();
    console.log(user)


    return(
        <div className='profile-page'>
            <NavLink to='login' onClick={logout}>Logout</NavLink>
            <h1>Welcome User:{user.id}</h1>
            {console.log(user)}
        </div>
    )


}


// const mapStateToProps = state => {
//     return {
//         user: state.user
//     }
// }

export default Profile;