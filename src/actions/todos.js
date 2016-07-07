import io from 'socket.io-client';
const socket = io.connect('/');

export const addTodo = (todo) => {

  socket.emit('todos:client:insert', {
                user: todo.user,
                date: new Date(),
                message: todo.message
            });

  return {
    type: 'TODOS_REQUEST',
    loader: true
  };
}
