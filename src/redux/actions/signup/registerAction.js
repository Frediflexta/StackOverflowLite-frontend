import axios from 'axios';
import {
  REGISTER_BEGIN,
  REGISTER_SUCCESS,
  REGISTER_FAILURE,
} from '../../types/registerType';

import {
  notificationSuccess,
  notificationFailure
} from '../notification/notificationAction';

/**
 * @param {*} bool triggered when the register process begins
 * @returns object
 */
export const registerBegins = () => ({
  type: REGISTER_BEGIN
});

/**
 * @param {*} user when user request has been sent
 * @returns object
 */
export const registerSuccess = user => ({
  type: REGISTER_SUCCESS,
  payload: user
});

/**
 * @param {*} error when a problem is encountered.
 * @returns object
 */
export const registerFailure = error => ({
  type: REGISTER_FAILURE,
  payload: error
});


/**
 * @param {object} user user information is sent to the backend
 * @returns {object} a promise that resolves to an object
 */
export const sendRegisterRequest = (user) => {
  return async (dispatch) => {
    try {
      const url = 'https://freddie-stackoverflowlite.herokuapp.com/api/v1/auth/signup';
      dispatch(registerBegins());
      const registerUser = await axios.post(url, user);
      dispatch(registerSuccess(registerUser.data));
      dispatch(notificationSuccess(registerUser.data.message));
    } catch (error) {
      dispatch(registerFailure(error.response.data.message));
      dispatch(notificationFailure(error.response.data.message));
    }
  };
};
