import io from 'socket.io-client';
const socket = io.connect('/');

export default function(store) {
    socket.on('todos:insert', (todo) => {
        store.dispatch({
            type: 'todo:insert',
            todo
        });
    });

    socket.on('todos:update', function (todo) {
        store.dispatch({
            type: 'todo:update',
            todo
        });
    });

    socket.on('todos:delete', function (todo) {
        store.dispatch({
            type: 'todo:delete',
            todo
        });
    });
}
