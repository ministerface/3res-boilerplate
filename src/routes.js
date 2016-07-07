import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './containers/App';
import Dashboard from './components/pages/Dashboard';
import Todos from './components/pages/Todos';

export const routes = (
  <Route name="Главная" path="/" component={ App }>
    <IndexRoute  component={ Dashboard } />
    <Route name="Задачи" path="todos" component={ Todos }/>
  </Route>
);
