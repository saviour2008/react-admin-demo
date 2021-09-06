import { combineReducers } from 'redux';
import userInfo from './userInfo';
import masterData from './masterData';
export default combineReducers({
    userInfo,
    masterData,
});
