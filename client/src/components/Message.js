import React, { Component } from 'react';
import './messages.css';

export default class Message extends Component {

    generateTime(time) {
        console.log(time);
        let date = new Date(time);
        let hour = date.getHours(),
            minute = date.getMinutes();
        hour = (hour===0) ? '00' : hour;
        minute = (minute<10) ? '0' + minute : minute;
        return hour + ':' + minute;
    }

    render() {
        let formattedTime = this.generateTime(this.props.message.time);
        if(this.props.message.type === 'system') {
            let action = this.props.message.action;
            return (
                <div className={this.props.styleClass}>
                    {this.props.message.username} has {action==='login'?'entered':'left'} this chatroom.
                </div>
            );
        } else {
            return (
                <div className={this.props.styleClass}>
                    <div className="msg-info">
                        {this.props.message.username} {formattedTime}
                    </div>
                    <div className="msg-content">
                        {this.props.message.message}
                    </div>
                     
                </div>
            )
        }
    }
}