import React, { Component } from 'react';
import Feed from './Feed';


export default class FeedList extends Component {
 componentDidMount() {
   this.props.action.fetchFeeds();
 }

  render() {

    const { feeds } = this.props;
    const countFeeds = feeds.items.length;

    const feedsTemplate = feeds.items.reverse().map((item, index) => {
      return (
        <Feed key={item.id} feed={item}/>
      )
    });


    return(

      <div className="box">

        <div className="box-header">
          { feeds.isFetching ? "Загрузка..." : ""}
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
