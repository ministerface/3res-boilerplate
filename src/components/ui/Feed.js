import React, { Component } from 'react';

export default class Feed extends Component {
  render() {
    const { user, message, date } = this.props.feed;
    console.log(this);
    return(
      <div className="sl-item">
        <div className="sl-left">
          <img src="images/a2.jpg" className="img-circle"/>
        </div>
        <div className="sl-content">
          <div className="sl-date text-muted">{date}</div>
          <div className="sl-author">
            <a >{user}</a>
          </div>
          <div>
            <p>{message}</p>


          </div>
        </div>
      </div>

    );
  }
}
