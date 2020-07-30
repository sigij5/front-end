import React, {useState} from 'react'
import axios from 'axios'
import { connect, useDispatch, useSelector } from 'react-redux';
import { addUser } from '../actions/userActions'
import { MDBContainer, MDBRow, MDBCol, MDBBtn } from 'mdbreact';

const Signup = () => {

const [user, setUser] = useState({
        first_name: '',
        last_name: '',
        username: '',
        password: '',
});

const dispatch = useDispatch();
    
const onSubmit = e => {
    e.preventDefault();
    dispatch(addUser(user))
    }
    
const handleChange = e => {
    setUser({
        ...user,
        [e.target.name]: e.target.value,
        }
    );
}


return (
<MDBContainer className='form-container'>
  <MDBRow>
    <MDBCol md="6">
      <form onSubmit={onSubmit}>
        <p className="h4 text-center mb-4">Sign up</p>
        <label htmlFor="defaultFormRegisterNameEx" className="grey-text">
          First name
        </label>
        <input 
        type="text" 
        id="defaultFormRegisterNameEx" 
        className="form-control" 
        onChange={handleChange}
        name='first_name'
        />
        <br />
        <label htmlFor="defaultFormRegisterEmailEx" className="grey-text">
          Last name
        </label>
        <input 
        type="text" 
        id="defaultFormRegisterEmailEx" 
        className="form-control" 
        onChange={handleChange}
        name='last_name'
        />
        <br />
        <label htmlFor="defaultFormRegisterConfirmEx" className="grey-text">
          Username
        </label>
        <input 
        type="text" 
        id="defaultFormRegisterConfirmEx" 
        className="form-control" 
        onChange={handleChange}
        name='username'
        />
        <br />
        <label htmlFor="defaultFormRegisterPasswordEx" className="grey-text">
          Password
        </label>
        <input 
        type="password" 
        id="defaultFormRegisterPasswordEx" 
        className="form-control"
        onChange={handleChange}
        name='password'
        />
        <div className="text-center mt-4">
          <MDBBtn color="unique" type="submit">
            Register
          </MDBBtn>
        </div>
      </form>
    </MDBCol>
  </MDBRow>
</MDBContainer>
);
};

export default Signup;
