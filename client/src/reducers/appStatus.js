import { LOGIN, LOGOUT } from '../actions/types';

const initialState = {
    uid: 0,
    username: '',
    onlineUsers: {}
}

export default function(state = initialState, action) {
    switch(action.type) {
        case LOGIN:
            return {
                username: action.payload.username, 
                uid: action.payload.uid,
                onlineUsers: action.payload.onlineUsers
            };
        case LOGOUT:
            return {
                username: action.payload.username, 
                uid: action.payload.uid,
                onlineUsers: action.payload.onlineUsers
            };
        default:
            return state;
    }
}