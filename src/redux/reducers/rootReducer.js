import { combineReducers } from 'redux';
import loginReducer from './login/loginReducer';
import registerReducer from './register/registerReducer';
import notificationReducer from './notification/notificationReducer';

export default combineReducers({
  loginReducer,
  registerReducer,
  notificationReducer
});
