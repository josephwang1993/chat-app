import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { logout } from './actions/logoutAction';
import io from 'socket.io-client';
import Login from './components/login';
import ChatRoom from './components/ChatRoom';


class App extends Component {
  constructor(props) {
    super(props);
    this.socket = io();
  }

  componentWillUnmount() {
    this.props.logout();
  }

  render() {
    let username = this.props.username;
    let renderDOM;
    if(username.length===0) {
      renderDOM = <Login socket={this.socket}/>;
    } else {
      renderDOM = <ChatRoom socket={this.socket}/>;
    }
    return (
        <div className="App">
          {renderDOM}
        </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    username: state.appStatus.username,
  }
}

export default connect(mapStateToProps, { logout })(App);
