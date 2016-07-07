import React, { Component } from 'react';
import Feed from './Feed';


export default class FeedList extends Component {
  render() {

    const { feeds } = this.props;
    const countFeeds = feeds.length;
    const feedsTemplate = feeds.map((item, index) => {
      return (
        <Feed key={item.id} feed={item}/>
      )
    });

    return(
      <div className="box">
        <div className="box-header">
          <h3>Лента <span className="label success">{countFeeds}</span></h3>
        </div>
        <div className="box-body">
          <div className="streamline b-l m-l-md">
            {feedsTemplate}


          </div>
        </div>
      </div>

    );
  }
}
