import React, { Component } from 'react';
import io from 'socket.io-client';
const socket = io.connect('/');

import Header from './Header';
import Footer from './Footer';
import Content from './Content';


export default class Main extends Component {
  constructor(props){
    super(props);
  }


  render() {
    return (
      <div className="app">

        <Header />

        <Content {...this.props}/>
        
        <Footer />
      </div>
    );
  }
}
