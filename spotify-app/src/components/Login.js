


import React, {useState} from 'react'

import { login } from '../actions/userActions'
import { useDispatch } from 'react-redux'
import { MDBContainer, MDBRow, MDBCol, MDBBtn } from 'mdbreact';

const Login = () => {
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
          ...user,
          [e.target.name]: e.target.value,
        });
    }


return (
<MDBContainer className='form-container'>
  <MDBRow>
    <MDBCol md="6">
      <form onSubmit={onSubmit}>
        <p className="h4 text-center mb-4">Sign in</p>
        <label htmlFor="defaultFormLoginEmailEx" className="grey-text">
         Username
        </label>
        <input 
        type="text" 
        id="defaultFormLoginEmailEx" 
        className="form-control" 
        name='username'
        onChange={handleChange}
        />
        <br />
        <label htmlFor="defaultFormLoginPasswordEx" className="grey-text">
          Password
        </label>
        <input 
        type="password" 
        id="defaultFormLoginPasswordEx" 
        className="form-control"
        name='password'
        onChange={handleChange} 
        />
        <div className="text-center mt-4">
          <MDBBtn color="indigo" type="submit">Login</MDBBtn>
        </div>
      </form>
    </MDBCol>
  </MDBRow>
</MDBContainer>
);
};

export default Login;