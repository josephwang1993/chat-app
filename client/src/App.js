import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux';

import Login from './components/login';



class App extends Component {
  constructor(props) {
    super(props);

  }
  render() {
    let username = this.props.username;
    return (
        <div className="App">
          {username.length==0?<Login/>:username}
        </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    username: state.login.username
  }
}

export default connect(mapStateToProps, null)(App);
