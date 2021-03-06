import { LOGIN } from './types';

export function login(username, uid, userInfo) {
    return function(dispatch) {
            dispatch({
                type: LOGIN,
                payload: {
                    username: username,
                    uid: uid,
                    onlineUsers: userInfo.onlineUsers
                }
            });
    }
}