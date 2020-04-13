import {combineReducers} from 'redux';
import authReducers from './authReducers';
import mainReducers from './mainReducers';


export default combineReducers({
    auth:authReducers,
    main:mainReducers
  
})