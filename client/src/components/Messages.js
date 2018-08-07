import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Message from './Message';
import './message.css';

export default class Messages extends Component {

    componentDidUpdate() {
        const messages = ReactDOM.findDOMNode(this.refs.messages);
        window.scrollTo(0, messages.clientHeight + 50);
    }

    render() {
        const myId = this.props.myId;
        const message = this.props.messages.map((message) => {
            let msgClass;
            if(message.type === 'system') {
                msgClass = 'system-msg';
            } else {
                if(message.uid===myId) {
                    msgClass = 'self-msg';
                } else {
                    msgClass = 'others-msg';
                }
            }
            return <Message message={message} styleClass={msgClass} key={message.id}/>
        });
        return (
            <div className="msg-container" ref="messages">
                {message}
            </div>
        );
    }
}