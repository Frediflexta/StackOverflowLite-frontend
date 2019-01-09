import {
  NOTIFY_SUCCESS,
  NOTIFY_FAILURE
} from '../../types/notificationType';

/**
 * @param {*} message a string from the server
 * @returns object
 */
export const notificationSuccess = message => ({
  type: NOTIFY_SUCCESS,
  payload: message,
});

/**
 * @param {*} message a string from the server
 * @returns object
 */
export const notificationFailure = message => ({
  type: NOTIFY_FAILURE,
  payload: message,
});
