import io from 'socket.io-client';
const socket = io.connect('/');

export default function(store) {
    socket.on('feed:insert', (todo) => {
        store.dispatch({
            type: 'feed:insert',
            todo
        });
    });

    socket.on('feed:update', function (todo) {
        store.dispatch({
            type: 'feed:update',
            todo
        });
    });

    socket.on('feed:delete', function (todo) {
        store.dispatch({
            type: 'feed:delete',
            todo
        });
    });
}
