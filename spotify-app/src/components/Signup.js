import React from 'react'
import axios from 'axios'
import { connect } from 'react-redux';
import { addUser } from '../actions/userActions'


const Signup = props => {



    return (
        <div>
            <button onClick={props.addUser}>SignUp</button>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        username: state.credentials.username
    }
}


export default connect(
    mapStateToProps,
    { addUser }
    )(Signup)

