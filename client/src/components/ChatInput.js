import React, { Component } from 'react';
import './chatinput.css';

class ChatInput extends Component {

    constructor(props) {
        super(props);
        this.sendMessage = this.sendMessage.bind(this);
        this.handleKeyPress = this.handleKeyPress.bind(this);
    }

    sendMessage() {
        let value = this.refs.message.value;
        this.props.socket.emit('message', {user: this.props.user, message: value});
        this.refs.message.value = '';
    }

    handleKeyPress(e) {
        if (e.key === 'Enter') {
            this.sendMessage();
        }
        return false;
    }

    render() {
        return (
            <div className="input-container">
                <input ref="message" className="input-box" onKeyPress={(e => {this.handleKeyPress(e)})} autoFocus/>
                <button onClick={this.sendMessage} className="send-btn">Send</button> 
            </div>
        );
    }
}

export default ChatInput;