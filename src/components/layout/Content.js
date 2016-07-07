import React, { Component } from 'react';

export default class Content extends Component {
  render() {
    return(
      <div  className="app-body">
        <div className="padding">
          { this.props.children }
        </div>
      </div>

    );
  }
}
