import io from 'socket.io-client';
const socket = io.connect('/');

export const addTodo = (todo) => {

  socket.emit('todos:client:insert', {
                completed: false,
                name: event.target.value
            });

  return {
    type: 'TODOS_REQUEST',
    loader: true
  };
}
