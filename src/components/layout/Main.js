import React, { Component } from 'react';
import io from 'socket.io-client';
const socket = io.connect('/');


export default class Main extends Component {
  constructor(props){
    super(props);
    console.log(this);
  }

  addTodo(e){
      e.preventDefault();

      socket.emit('todos:client:insert', {
                    completed: false,
                    name: event.target.value
                });

  }


  render() {
    const { todos } = this.props;
    const todos1 = todos.map((item, index) => {
      return (
        <div key={item.id}>{item.id}</div>
      )
    });

    return (
      <div>
        <div onClick={this.addTodo.bind(this)}>Новая задача</div>

      {todos1}
      </div>
    );
  }
}
