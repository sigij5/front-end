import React from 'react';
import { Route, NavLink, Switch } from 'react-router-dom'


import Login from './components/Login'
import Signup from './components/Signup'
import Profile from './components/Profile'
import './App.css';
import PrivateRoute from './components/PrivateRoute';

function App() {
  return (
    <div className="App">
      <header className='App-header'>
        <h1>Spotify App</h1>
        <NavLink className='link' to='login'>Login</NavLink>
        <NavLink className='link' to='signup'>Sign Up</NavLink>
      </header>
      <Switch>
        <Route path='/login' component={Login} />
        <Route path='/signup' component={Signup} />
        <PrivateRoute path='/profile/:id' component={Profile}/>
      </Switch>
    </div>
  );
}

export default App;
