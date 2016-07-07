import React, { Component } from 'react';

export default class Content extends Component {
  render() {
    const childrenWithProps = React.Children.map(this.props.children,
     (child) => React.cloneElement(child, {
       feeds: this.props.feeds,
       feedActions: this.props.actionFeeds
     })
    );


    return(
      <div  className="app-body">
        <div className="padding">
          { childrenWithProps }
        </div>
      </div>

    );
  }
}
