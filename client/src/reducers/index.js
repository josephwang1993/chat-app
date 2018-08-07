import { combineReducers } from 'redux';
import statusReducer from './appStatus';
import messageReducer from './messageReducer';

export default combineReducers({
    appStatus: statusReducer,
    messages: messageReducer
});