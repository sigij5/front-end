// import React, {useState} from 'react'
// import axios from 'axios'

// import { login } from '../actions/userActions'
// import { useDispatch } from 'react-redux'




// const Login = props => {
//     const dispatch = useDispatch()
//     const [user, setUser] = useState({
//         username: '',
//         password: ''
//     })

//     const onSubmit = e => {
//         e.preventDefault();
//         dispatch(login(user))
//     }

//     const handleChange = e => {
//         setUser({
//           ...user,
//           [e.target.name]: e.target.value,
//         });
//     }

//     return(
//         <form className='login-form' onSubmit={onSubmit}>
//             <label>
//                 <input 
//                     placeholder='Username'
//                     type='text'
//                     name='username'
//                     value={user.username}
//                     onChange={handleChange}
//                 />
//             </label>
//             <label>
//                 <input 
//                     placeholder='Password'
//                     type='text'
//                     name='password'
//                     value={user.password}
//                     onChange={handleChange}
//                 />
//             </label>
//             <button>Log in</button>
//         </form>
//     )
//     }

// export default Login;



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
          Your Username
        </label>
        <input 
        type="text" 
        id="defaultFormLoginEmailEx" 
        className="form-control" 
        value={user.username}
        onChange={handleChange}
        />
        <br />
        <label htmlFor="defaultFormLoginPasswordEx" className="grey-text">
          Your password
        </label>
        <input 
        type="password" 
        id="defaultFormLoginPasswordEx" 
        className="form-control"
        value={user.password}
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