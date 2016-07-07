import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import todos from './todos';
import feeds from './feeds';


const rootReducer = combineReducers({
  todos,
  feeds,
  routing: routerReducer
});

export default rootReducer;
