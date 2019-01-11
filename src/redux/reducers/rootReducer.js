import { combineReducers } from 'redux';
import loginReducer from './login/loginReducer';
import registerReducer from './register/registerReducer';
import notificationReducer from './notification/notificationReducer';
import getAllAvailableQuestions from './getallQuestions/getallQuestionsReducer';
import PostQuestions from './postQestion/postQuestionReducer';

export default combineReducers({
  loginReducer,
  registerReducer,
  notificationReducer,
  getAllAvailableQuestions,
  PostQuestions
});
