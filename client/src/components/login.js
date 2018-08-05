import React, { Component } from 'react';
import { connect } from 'react-redux';
import { login } from '../actions/loginAction';
import io from 'socket.io-client';
import PropTypes from 'prop-types';


class Login extends Component {

    constructor(props) {
        super(props);
        this.onLogin = this.onLogin.bind(this);
        this.socket = io();
    }

    onLogin() {
        let username = this.refs.username.value;
        const uid = this.generateUid();
        if(!username) {
            username = 'Temp' + uid;
        }
        this.socket.emit('login', {uid:uid, username: username});
        this.props.login(username, uid);
    }

    generateUid() {
        return new Date().getTime()
    }

    render() {
        return (
            <div>
                Username: <br/>
                <input type="text" ref="username"/><br/>
                <button onClick={this.onLogin}>Login</button>
            </div>
        );
    }
}

Login.propTypes = {
    login: PropTypes.func.isRequired
}

export default connect(null, { login })(Login);