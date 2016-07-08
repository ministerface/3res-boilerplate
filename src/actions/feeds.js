import io from 'socket.io-client';
import fetch from 'isomorphic-fetch';

const socket = io.connect('/');

export const addFeed = (feed) => {

  socket.emit('feed:client:insert', {
                user: feed.user,
                date: new Date(),
                message: feed.message
            });

  return {
    type: 'FEED_REQUEST',
    loader: true
  };
}


function requestFeeds() {
  return {
    type: 'REQUEST_FEEDS'
  }
}

function receiveFeeds(json) {
  return {
    type: 'RECEIVE_FEEDS',
    feeds: json
  }
}


export function fetchFeeds() {
  return function (dispatch) {

    dispatch(requestFeeds());

    return fetch('/api/v1/feeds')
      .then(response => response.json())
      .then(json =>
        dispatch(receiveFeeds(json))
    );

  }
}
