import React, { Component } from 'react';
import NavBar from './NavBar';

export default class Header extends Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <div className="app-content box-shadow-z0">
        <div className="app-header navbar-md white box-shadow">
          <div className="navbar">
            <a className="navbar-item pull-right hidden-md-up m-a-0 m-l">
              <i className="material-icons"></i>
            </a>
            <a className="navbar-brand">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="24" height="24">
                <path d="M 4 4 L 44 4 L 44 44 Z" fill="#3F51B5"></path>
                <path d="M 4 4 L 34 4 L 24 24 Z" fill="rgba(0,0,0,0.15)"></path>
                <path d="M 4 4 L 24 4 L 4  44 Z" fill="#2196F3"></path>
              </svg>
              <img src="images/logo.png" alt="." className="hide" />
              <span className="hidden-folded inline">Mangust CRM</span>
            </a>

            <ul className="nav navbar-nav pull-right">
              <li className="nav-item">
                <a className="nav-link">
                  <span><i className="fa fa-fw fa-arrows-v"></i></span>
                </a>
              </li>
              <li className="nav-item dropdown">
                <a href="" className="nav-link">
                  <i className="material-icons"></i>
                  <span className="label up p-a-0 accent"></span>
                </a>
                <div className="dropdown-menu w-xl text-color pull-right p-a-0 animated flipInX">
                  <div className="row no-gutter text-blue-hover">
                    <div className="col-xs-4 b-r b-b"><a className="p-a block text-center"><i className="material-icons md-24 text-muted m-v-sm"></i> <span className="block">Alarm</span></a></div>
                    <div className="col-xs-4 b-r b-b"><a className="p-a block text-center"><i className="material-icons md-24 text-muted m-v-sm"></i> <span className="block">Favorite</span></a></div>
                    <div className="col-xs-4 b-b"><a className="p-a block text-center"><i className="material-icons md-24 text-muted m-v-sm"></i> <span className="block">History</span></a></div>
                    <div className="col-xs-4 b-r"><a className="p-a block text-center"><i className="material-icons md-24 text-muted m-v-sm"></i> <span className="block">Call</span></a></div>
                    <div className="col-xs-4 b-r"><a className="p-a block text-center"><i className="material-icons md-24 text-muted m-v-sm"></i> <span className="block">Chat</span></a></div>
                    <div className="col-xs-4"><a className="p-a block text-center"><i className="material-icons md-24 text-muted m-v-sm"></i> <span className="block">Inbox</span></a></div>
                  </div>
                </div>
              </li>
              <li className="nav-item dropdown">
                <a href="" className="nav-link"><i className="material-icons"></i> <span className="label up p-a-0 warn"></span></a>
                <div className="dropdown-menu pull-right w-xl animated fadeInUp no-bg no-border no-shadow">
                  <div className="scrollable">
                    <ul className="list-group list-group-gap m-a-0">
                      <li className="list-group-item black lt box-shadow-z0 b">
                        <span className="pull-left m-r">
                          <img src="images/a0.jpg" alt="..." className="w-40 img-circle"/>
                        </span>
                        <span className="clear block">Use awesome <a href="" className="text-primary">animate.css</a><br/><small className="text-muted">10 minutes ago</small>
                        </span></li>
                      <li className="list-group-item black lt box-shadow-z0 b">
                        <span className="pull-left m-r">
                          <img src="images/a1.jpg" alt="..." className="w-40 img-circle"/>
                        </span>
                        <span className="clear block">
                          <a href="" className="text-primary">Joe</a> Added you as friend<br/><small className="text-muted">2 hours ago</small></span></li>
                      <li className="list-group-item dark-white text-color box-shadow-z0 b">
                        <span className="pull-left m-r">
                          <img src="images/a2.jpg" alt="..." className="w-40 img-circle"/></span>
                        <span className="clear block"><a href="" className="text-primary">Danie</a> sent you a message<br/><small className="text-muted">1 day ago</small></span></li>
                    </ul>
                  </div>
                </div>
              </li>
              <li className="nav-item dropdown">
                <a href="" className="nav-link dropdown-toggle clear">
                  <span className="avatar w-32">
                    <img src="images/a2.jpg" alt="..."/> <i className="busy b-white right"></i></span></a>
                <div className="dropdown-menu pull-right dropdown-menu-scale">
                  <a className="dropdown-item"><span>Inbox</span> <span className="label warn m-l-xs">3</span></a> <a className="dropdown-item">
                    <span>Profile</span></a> <a className="dropdown-item"><span>Settings</span> <span className="label primary m-l-xs">3/9</span></a>
                  <div className="dropdown-divider"></div>
                  <a className="dropdown-item">Need help?</a> <a className="dropdown-item" >Sign out</a></div>
              </li>
            </ul>

            <div className="collapse navbar-toggleable-sm">
              <form className="navbar-form form-inline pull-right pull-none-sm navbar-item v-m">
                <div className="form-group l-h m-a-0">
                  <div className="input-group input-group-sm">
                    <input type="text" className="form-control p-x b-a rounded" placeholder="Поиск задачи..."/> <span className="input-group-btn"><button type="submit" className="btn white b-a rounded no-shadow"><i className="fa fa-search"></i></button></span></div>
                </div>
              </form>
              <NavBar />
            </div>
          </div>
        </div>
      </div>
    );
  }


}
