import axios from 'axios';
import {
  POSTQUESTION_BEGINS,
  POSTQUESTION_SUCCESS,
  POSTQUESTION_FAILURE,
} from '../../types/postQuestionType';

import {
  notificationSuccess,
  notificationFailure
} from '../notification/notificationAction';

/**
 * @param {*} bool triggered when the getting questions process begins
 * @returns object
 */
export const postQuestionsBegin = () => ({
  type: POSTQUESTION_BEGINS
});

/**
 * @param data return the payload
 * @returns object
 */
export const postQuestionsSuccess = data => ({
  type: POSTQUESTION_SUCCESS,
  payload: data
});

/**
 * @param {*} error when a problem is encountered.
 * @returns object
 */
export const getQuestionsFailure = error => ({
  type: POSTQUESTION_FAILURE,
  payload: error
});

/**
 * @param {object} data user information is sent to the backend
 * @returns {object} a promise that resolves to an object
 */
export const postQuestionRequest = (data) => {
  return async (dispatch) => {
    try {
      dispatch(postQuestionsBegin());
      const url = 'https://freddie-stackoverflowlite.herokuapp.com/api/v1/questions';
      const postQuestion = await axios({
        method: 'POST',
        url,
        data: {
          questitle: data.title,
          quesbody: data.body
        },
        headers: {
          'x-access-token': localStorage.getItem('x-access')
        }
      });
      dispatch(postQuestionsSuccess(postQuestion.data));
      dispatch(notificationSuccess(postQuestion.data.message));
    } catch (error) {
      dispatch(getQuestionsFailure(error));
      dispatch(notificationFailure(error.response.data.message));
    }
  };
};
