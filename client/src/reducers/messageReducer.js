import { SEND_LOGIN_MSG, SEND_LOGOUT_MSG, SEND_NORMAL_MSG } from '../actions/types';

const initialState = []

export default function(state = initialState, action) {
    switch(action.type) {
        case SEND_LOGIN_MSG:
            return [
                ...state, 
                {
                    type: action.payload.type,
                    username: action.payload.username,
                    uid: action.payload.uid,
                    action: action.payload.action,
                    id: action.payload.id,
                    time: action.payload.time
                }
            ];

        case SEND_LOGOUT_MSG:
            return [
                ...state,
                {
                    type: action.payload.type,
                    username: action.payload.username,
                    uid: action.payload.uid,
                    action: action.payload.action,
                    id: action.payload.id,
                    time: action.payload.time
                }
            ]
        case SEND_NORMAL_MSG:
            return [
                ...state,
                {
                    type: action.payload.type,
                    username: action.payload.username,
                    uid: action.payload.uid,
                    message: action.payload.message,
                    action: action.payload.action,
                    id: action.payload.id,
                    time: action.payload.time
                }
            ]
            
        default:
            return state;
    }
}