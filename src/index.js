import React from 'react';
import { render } from 'react-dom';
import { Router, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import store, { history } from './store';
import { routes } from './routes';

import  App from './containers/App.js';

import todoSocketListeners from './socket-listeners/todos.js';
todoSocketListeners(store);


const router = (
  <Provider store={ store }>
    <Router history={ history } routes={ routes } />
  </Provider>
);

render(router, document.getElementById('root'));
