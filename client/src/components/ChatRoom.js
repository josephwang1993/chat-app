import React, { Component } from 'react';
import RoomStatus from './RoomStatus';
import Messages from './Messages';
import ChatInput from './ChatInput';
import { connect } from 'react-redux';
import { logout } from '../actions/logoutAction';
import { sendLogoutMessage, sendNormalMessage } from '../actions/sendMsgAction';

class ChatRoom extends Component {
    constructor(props) {
        super(props);
        this.socket = props.socket;
    }

    componentDidMount() {
        let self = this;
        this.socket.on('logout', function(userInfo) {
            self.props.logout(self.props.username, self.props.uid , userInfo);
            self.props.sendLogoutMessage({
                type: 'system',
                username: userInfo.leftUser,
                uid: userInfo.leftUserId,
                action: 'logout',
                id: 'sys_msg'+ new Date().getTime(),
                time: new Date().getTime()
            })
        });
        this.socket.on('message', function(messageObj) {
            self.props.sendNormalMessage({
                type: 'chat',
                username: messageObj.user.username,
                uid: messageObj.user.uid,
                message: messageObj.message,
                action: 'chat',
                id: 'chat_msg'+ new Date().getTime(),
                time: new Date().getTime()
            });
        })
    }

    render() {
        return (
            <div>
                <RoomStatus onlineUsers={this.props.onlineUsers}/>
                <Messages myId={this.props.uid} messages={this.props.messages}/>
                <ChatInput socket={this.socket} user={{username: this.props.username, uid: this.props.uid}}/>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
      username: state.appStatus.username,
      uid: state.appStatus.uid,
      onlineUsers: state.appStatus.onlineUsers,
      messages: state.messages
    }
  }

export default connect(mapStateToProps, { logout, sendLogoutMessage, sendNormalMessage })(ChatRoom);