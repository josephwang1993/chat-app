import { LOGIN } from '../actions/types';

const initialState = {
    uid: 0,
    username: ''
}

export default function(state = initialState, action) {
    switch(action.type) {
        case LOGIN:
            return {
                username: action.payload.username, 
                uid: action.payload.uid}
            ;
        default:
            return state;
    }
}