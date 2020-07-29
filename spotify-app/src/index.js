import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware} from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk'
import { Router } from 'react-router-dom'
import { history } from './utils/history'


import './index.css';
import App from './App';
import rootReducer from './reducers';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';

const store = createStore(rootReducer, applyMiddleware(thunk));
console.log('This is my state', store.getState());

ReactDOM.render(
  <Router history={history}>
    <Provider store={store}>
      <App />
    </Provider>
  </Router>,
  document.getElementById('root')
);

