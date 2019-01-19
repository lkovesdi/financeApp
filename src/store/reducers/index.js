import { combineReducers } from 'redux';
import data from './githubReducer';
// import user from './userReducer'

export default combineReducers({
   data: data
});