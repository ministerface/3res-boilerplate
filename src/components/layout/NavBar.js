import React, { Component } from 'react';
import NavLink from './NavLink';

export default class NavBar extends Component {
  render() {
    return (
      <ul className="nav navbar-nav pull-left nav-active-border b-blue">
        <li className="nav-item">
          <NavLink onlyActiveOnIndex={true} to="/"><i className="md md-dashboard"></i>Мой профиль</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/todos">Задачи</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/projects">Проекты</NavLink>
        </li>
      </ul>
    );
  }
}
