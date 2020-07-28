import React, {useState} from 'react'
import axios from 'axios'
import { connect, useDispatch, useSelector } from 'react-redux';
import { addUser } from '../actions/userActions'


// const Signup = props => {



//     return (
//         <div>
//             <button onClick={props.addUser}>SignUp</button>
//         </div>
//     )
// }

// const mapStateToProps = state => {
//     return {
//         username: state.credentials.username
//     }
// }


// export default connect(
//     mapStateToProps,
//     { addUser }
//     )(Signup)


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
    

        return(
            <form onSubmit={onSubmit}>
                <div>
                <h2>Sign Up:</h2>
                </div>
                
                <label>First Name:&nbsp;
                    <input
                        type='text'
                        name='first_name'
                        onChange={handleChange}
                    />
                </label>
    
                <label>Last Name:&nbsp;
                    <input
                        type='text'
                        name='last_name'
                        onChange={handleChange}
                    />
                </label>
    
                <label>Username:&nbsp;
                    <input
                        type='text'
                        name='username'
                        onChange={handleChange}
                    />
                </label>
    
                <label>Password:&nbsp;
                    <input 
                        type='password'
                        name='password'
                        onChange={handleChange}
                    />
                </label>
    
    
                <button id='submitBtn'>Sign Up</button>
            </form>
        )
    }

export default Signup;



// export default connect(
//     mapStateToProps,
//     { addUser }
//     )(Signup)
