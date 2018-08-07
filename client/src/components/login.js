import React, { Component } from 'react';
import { connect } from 'react-redux';
import { login } from '../actions/loginAction';
import './login.css';
import { sendLoginMessage } from '../actions/sendMsgAction';

import PropTypes from 'prop-types';


class Login extends Component {

    constructor(props) {
        super(props);
        this.onLogin = this.onLogin.bind(this);
        this.socket = props.socket;
    }

    onLogin() {
        let username = this.refs.username.value;
        const uid = this.generateUid();
        if(!username) {
            username = 'Temp' + uid;
        }
        this.socket.emit('login', {uid:uid, username: username});
        let self = this;
        this.socket.on('loggedin', function(userInfo) {
            self.props.login(username, uid , userInfo);
            self.props.sendLoginMessage({
                type: 'system',
                username: userInfo.newUser.username,
                uid: userInfo.newUser.uid,
                action: 'login',
                id: 'sys_msg' + new Date().getTime(),
                time: new Date().getTime()
            });
        });
    }

    generateUid() {
        return new Date().getTime()
    }

    render() {
        return (
            <div className="container">
                <form onSubmit={(e)=> {this.onLogin(); e.preventDefault();}}>
                    <h2>Enter your chat nick name</h2>
                    <input className="form-control" ref="username" autoFocus/>
                    <button className="btn btn-primary btn block login-btn"
                            onClick={this.onLogin}
                            type="button">
                            Enter Charoom
                    </button>
                </form>
            </div>
        );
    }
}

Login.propTypes = {
    login: PropTypes.func.isRequired,
    sendLoginMessage: PropTypes.func.isRequired
}

export default connect(null, { login, sendLoginMessage })(Login);