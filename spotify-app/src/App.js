import React from 'react';
import { Route, NavLink, Switch, Link } from 'react-router-dom'
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
        <a className='title' href='https://loving-poincare-a6249b.netlify.app/'>Spotify App</a>
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
