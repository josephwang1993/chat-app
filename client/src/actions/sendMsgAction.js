import { SEND_LOGIN_MSG, SEND_LOGOUT_MSG, SEND_NORMAL_MSG } from './types';

export function sendLoginMessage(messageObj) {
    return function(dispatch) {
        dispatch({
            type: SEND_LOGIN_MSG,
            payload: {
                type: messageObj.type,
                username: messageObj.username,
                uid: messageObj.uid,
                action: messageObj.action,
                id: messageObj.id,
                time: messageObj.time
            }
        });
    }
}

export function sendLogoutMessage(messageObj) {
    return function(dispatch) {
        dispatch({
            type: SEND_LOGOUT_MSG,
            payload: {
                type: messageObj.type,
                username: messageObj.username,
                uid: messageObj.uid,
                action: messageObj.action,
                id: messageObj.id,
                time: messageObj.time
            }
        });
    }
}

export function sendNormalMessage(messageObj) {
    return function(dispatch) {
        dispatch({
            type: SEND_NORMAL_MSG,
            payload: {
                type: messageObj.type,
                username: messageObj.username,
                uid: messageObj.uid,
                action: messageObj.action,
                message: messageObj.message,
                id: messageObj.id,
                time: messageObj.time
            }
        });
    }
}