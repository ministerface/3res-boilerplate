import React, { Component } from 'react';
import LazyLoad from 'react-lazyload';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

export default class Feed extends Component {
  render() {
    const { user, message, date } = this.props.feed;
    const dates = new Date(date);

const time = dates.toLocaleString("ru", {
hour: 'numeric',
minute: 'numeric'
}
);

const dat = dates.toLocaleString("ru", {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
}
);


    return(
      <LazyLoad throttle={200} height={100}>
        <ReactCSSTransitionGroup key="1"
          transitionName="fade"
          transitionAppear={true}
          transitionAppearTimeout={500}
          transitionEnter={false}
          transitionLeave={false}>

          <div className="sl-item">
            <div className="sl-left">
              <img src="images/a2.jpg" className="img-circle"/>
            </div>
            <div className="sl-content">
              <div className="sl-date text-muted">{dat} в {time}</div>
              <div className="sl-author">
                <a >{user}</a>
              </div>
              <div>
                <p>{message}</p>

              </div>
            </div>
          </div>
        </ReactCSSTransitionGroup>
      </LazyLoad>
    );
  }
}
