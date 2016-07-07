import io from 'socket.io-client';
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
