import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom'
import { userReducer } from './reducers/userReducer'


import './index.css';
import App from './App';

const store = createStore(userReducer);
console.log('This is my state', store.getState());

ReactDOM.render(
  <Router>
    <Provider store={store}>
      <App />
    </Provider>
  </Router>,
  document.getElementById('root')
);

