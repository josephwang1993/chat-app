import { LOGIN } from './types';
import axios from 'axios';

export function login(username, uid) {
    return function(dispatch) {
        axios.post('/login', {
            username: username
        })
        .then(function (response) {
            dispatch({
                type: LOGIN,
                payload: {username: username, uid: uid}
            })
        })
        .catch(function (error) {
            console.log(error);
        }) 
    }
}