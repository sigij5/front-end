import React from 'react';
import { Route, NavLink, Switch } from 'react-router-dom'
import {useSelector, useDispatch} from 'react-redux'


import Login from './components/Login'
import Signup from './components/Signup'
import Profile from './components/Profile'
import './App.css';
import PrivateRoute from './components/PrivateRoute';
import { ProfileInfo } from './components/ProfileInfo'
import { logout } from './actions/userActions'

function App() {
  const loggedIn = useSelector(state => state.login.loggedIn)
  const user = localStorage.getItem('user')
  const dispatch = useDispatch()

  return (
    <div className="App">
      <header className='App-header'>
        <h1>Spotify App</h1>
        <nav>
          {/* <NavLink className='link' to='login'>Login</NavLink>
          <NavLink className='link' to='signup'>Sign Up</NavLink> */}
          { loggedIn && ( <NavLink className='link' to='/info'>Profile</NavLink>)}  
          { loggedIn && ( <NavLink className='link' to='/login' onClick={() => dispatch(logout())}>Logout</NavLink>)}  
          { !loggedIn && (<NavLink className='link' to='login'>Login</NavLink>)}
          { !loggedIn && (<NavLink className='link' to='signup'>Sign Up</NavLink>)}
          
        </nav>
      </header>
      <div className='body'>
        <Switch>
          <Route path='/login' component={Login} />
          <Route path='/signup' component={Signup} />
          <PrivateRoute path='/profile' component={Profile}/>
          <PrivateRoute path='/info' component={ProfileInfo} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
