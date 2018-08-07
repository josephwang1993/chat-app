import React, { Component } from 'react';
import './roomstatus.css';

export default class Status extends Component {

    render() {
        let onlineCount = Object.keys(this.props.onlineUsers).length;
        let userList = '';
        let separator = '';
        for (let key in this.props.onlineUsers) {
            userList += separator + this.props.onlineUsers[key];
            separator = ', '
        }
        return (
            <div className="room-status">
                There {onlineCount>1?'are':'is'} {onlineCount} {onlineCount>1?'users':'user'} in this room.<br/>
                People online: {userList}
            </div>
        );
    }
}