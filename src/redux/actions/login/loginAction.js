import axios from 'axios';
import {
  LOGIN_BEGIN,
  LOGIN_SUCCESS,
  LOGIN_FAILURE
} from '../../types/loginType';

import {
  notificationSuccess,
  notificationFailure
} from '../notification/notificationAction';

/**
 * @param {*} bool triggered when the login process begins
 * @returns object
 */
export const loginBegins = () => ({
  type: LOGIN_BEGIN
});

/**
 * @param {*} user when user request has been sent
 * @returns object
 */
export const loginSuccess = user => ({
  type: LOGIN_SUCCESS,
  payload: user
});

/**
 * @param {*} error when a problem is encountered.
 * @returns object
 */
export const loginFailure = error => ({
  type: LOGIN_FAILURE,
  payload: error
});

/**
 * @param {object} user user information is sent to the backend
 * @returns {object} a promise that resolves to an object
 */
export const sendLoginRequest = (user) => {
  return async (dispatch) => {
    try {
      const url = 'https://freddie-stackoverflowlite.herokuapp.com/api/v1/auth/login';

      dispatch(loginBegins());
      const loginUser = await axios.post(url, user);
      dispatch(loginSuccess(loginUser.data));
      dispatch(notificationSuccess(loginUser.data.message));
    } catch (error) {
      dispatch(notificationFailure(error.response.data.message));
      dispatch(loginFailure(error.response.data.message));
    }
  };
};
