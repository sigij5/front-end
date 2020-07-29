import React from 'react'
import axios from 'axios'
import { NavLink } from 'react-router-dom'
import { logout } from '../actions/userActions'
import { connect } from 'react-redux'


const Profile = props => {


    return(
        <div className='profile-page'>
            <NavLink to='login' onClick={logout}>Logout</NavLink>
            <h1>Welcome {props.user.username}</h1>
        </div>
    )


}


const mapStateToProps = state => {
    return {
        user: state.user
    }
}

export default connect(
    mapStateToProps,
    {}
)(Profile);