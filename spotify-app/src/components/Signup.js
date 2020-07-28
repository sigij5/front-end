import React from 'react'
import axios from 'axios'
import { connect } from 'react-redux';


const Signup = props => {



    return (
        <div>
            <button onClick>SignUp</button>
        </div>
    )

export default connect(
    mapStateToProps,
    { addUser }
    )(Signup)

