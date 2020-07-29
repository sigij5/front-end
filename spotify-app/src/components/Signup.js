// import React, {useState} from 'react'
// import axios from 'axios'
// import { connect, useDispatch, useSelector } from 'react-redux';
// import { addUser } from '../actions/userActions'


// // const Signup = props => {



// //     return (
// //         <div>
// //             <button onClick={props.addUser}>SignUp</button>
// //         </div>
// //     )
// // }

// // const mapStateToProps = state => {
// //     return {
// //         username: state.credentials.username
// //     }
// // }


// // export default connect(
// //     mapStateToProps,
// //     { addUser }
// //     )(Signup)


// const Signup = () => {
//     const [user, setUser] = useState({
//             first_name: '',
//             last_name: '',
//             username: '',
//             password: '',
//             });

//     const dispatch = useDispatch();
        
//     const onSubmit = e => {
//         e.preventDefault();
//         dispatch(addUser(user))
//         }
        
//     const handleChange = e => {
//         setUser({
//             ...user,
//             [e.target.name]: e.target.value,
//             }
//         );
//     }
    

//         return(
//             <form onSubmit={onSubmit}>
//                 <div>
//                 <h2>Sign Up:</h2>
//                 </div>
                
//                 <label>First Name:&nbsp;
//                     <input
//                         type='text'
//                         name='first_name'
//                         onChange={handleChange}
//                     />
//                 </label>
    
//                 <label>Last Name:&nbsp;
//                     <input
//                         type='text'
//                         name='last_name'
//                         onChange={handleChange}
//                     />
//                 </label>
    
//                 <label>Username:&nbsp;
//                     <input
//                         type='text'
//                         name='username'
//                         onChange={handleChange}
//                     />
//                 </label>
    
//                 <label>Password:&nbsp;
//                     <input 
//                         type='password'
//                         name='password'
//                         onChange={handleChange}
//                     />
//                 </label>
    
    
//                 <button id='submitBtn'>Sign Up</button>
//             </form>
//         )
//     }

// export default Signup;



import React from "react";
import { MDBContainer, MDBRow, MDBCol, MDBBtn } from 'mdbreact';

const Signup = () => {
return (
<MDBContainer className='form-container'>
  <MDBRow>
    <MDBCol md="6">
      <form>
        <p className="h4 text-center mb-4">Sign up</p>
        <label htmlFor="defaultFormRegisterNameEx" className="grey-text">
          First name
        </label>
        <input type="text" id="defaultFormRegisterNameEx" className="form-control" />
        <br />
        <label htmlFor="defaultFormRegisterEmailEx" className="grey-text">
          Last name
        </label>
        <input type="text" id="defaultFormRegisterEmailEx" className="form-control" />
        <br />
        <label htmlFor="defaultFormRegisterConfirmEx" className="grey-text">
          Username
        </label>
        <input type="text" id="defaultFormRegisterConfirmEx" className="form-control" />
        <br />
        <label htmlFor="defaultFormRegisterPasswordEx" className="grey-text">
          Password
        </label>
        <input type="password" id="defaultFormRegisterPasswordEx" className="form-control" />
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
