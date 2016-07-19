import React, { Component } from 'react';

export default class AddFeed extends Component {

  addTodo(e){
      e.preventDefault();

      this.props.action.addFeed({user:"Вячеслав", message: this.refs.message.value});
      this.refs.message.value = '';

  }


  render() {
    return (
      <div className="box">
        <form ref="AddFeedForm" onSubmit={this.addTodo.bind(this)}>
          <textarea ref="message" className="form-control no-border" rows="3" placeholder="Напишите что нибудь..."></textarea>

          <div className="box-footer clearfix">
            <input type="submit" className="btn btn-info pull-right btn-sm" value='Отправить'/>
            <ul className="nav nav-pills nav-sm">
              <li className="nav-item"><a className="nav-link"><i className="fa fa-camera text-muted"></i></a></li>
              <li className="nav-item"><a className="nav-link"><i className="fa fa-video-camera text-muted"></i></a></li>
            </ul>
          </div>
        </form>
      </div>
    );
  }
}
