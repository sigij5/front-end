import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware} from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk'
import { BrowserRouter as Router } from 'react-router-dom'


import './index.css';
import App from './App';
import rootReducer from './reducers';

const store = createStore(rootReducer, applyMiddleware(thunk));
console.log('This is my state', store.getState());

ReactDOM.render(
  <Router>
    <Provider store={store}>
      <App />
    </Provider>
  </Router>,
  document.getElementById('root')
);

