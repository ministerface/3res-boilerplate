import { createStore, compose, applyMiddleware } from 'redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { browserHistory } from 'react-router';
import rootReducer from './reducers/index';
import createLogger from 'redux-logger';
import thunkMiddleware from 'redux-thunk';

const currentState = {
  todos: []
};

const logger = createLogger();

const store = compose(
     applyMiddleware(thunkMiddleware),
     applyMiddleware(logger)
   )(createStore)(rootReducer, currentState);

export const history = syncHistoryWithStore(browserHistory, store);
export default store;
