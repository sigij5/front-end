import React, {useState} from 'react'
import axios from 'axios'

import { login } from '../actions/userActions'
import { useDispatch } from 'react-redux'


// const Login = props => {

// }

// export default Login;


const Login = props => {
    const dispatch = useDispatch()
    const [user, setUser] = useState({
        username: '',
        password: ''
    })

    const onSubmit = e => {
        e.preventDefault();
        dispatch(login(user))
    }

    const handleChange = e => {
        setUser({
          user,
          [e.target.name]: e.target.value,
        });
    }

    return(
        <form className='login-form' onSubmit={onSubmit}>
            <label>
                <input 
                    placeholder='Username'
                    type='text'
                    name='username'
                    value={user.username}
                    onChange={handleChange}
                />
            </label>
            <label>
                <input 
                    placeholder='Password'
                    type='text'
                    name='password'
                    value={user.password}
                    onChange={handleChange}
                />
            </label>
            <button>Log in</button>
        </form>
    )
    }

export default Login;

