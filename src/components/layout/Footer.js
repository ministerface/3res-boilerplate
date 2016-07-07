import React, { Component } from 'react';

export default class Footer extends Component {
  render() {
    return (
      <div className="dark dk pos-rlt">
        <div className="p-md">
          <div className="footer p-a p-x-md">

            <div className="row">
              <div className="col-sm-8">
                <div className="clearfix">
                  <a className="navbar-brand">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="24" height="24">
                      <path d="M 4 4 L 44 4 L 44 44 Z" fill="#3F51B5"></path>
                      <path d="M 4 4 L 34 4 L 24 24 Z" fill="rgba(0,0,0,0.15)"></path>
                      <path d="M 4 4 L 24 4 L 4  44 Z" fill="#2196F3"></path>
                    </svg>
                    <img src="images/logo.png" alt="." className="hide"/> <span className="hidden-folded inline">Mangust CRM</span></a>
                </div>
              </div>
              <div className="col-sm-4">
                <div className="text-sm-right text-xs-left"><small className="text-muted lineheig60">© Copyright 2016. All rights reserved.</small></div>
              </div>
            </div>
              </div>
            </div>
          </div>

    );
  }
}
