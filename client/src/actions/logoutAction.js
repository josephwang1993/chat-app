import { LOGOUT } from './types';

export function logout(username, uid, userInfo) {
    return function(dispatch) {
            dispatch({
                type: LOGOUT,
                payload: {
                    username: username,
                    uid: uid,
                    onlineUsers: userInfo.onlineUsers,
                }
            });
    }
}