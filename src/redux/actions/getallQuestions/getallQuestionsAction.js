import axios from 'axios';
import {
  GETTING_QUESTIONS_BEGINS,
  GETTING_QUESTIONS_SUCCESS,
  GETTING_QUESTIONS_FAILURE
} from '../../types/getallQuestionType';

/**
 * @param {*} bool triggered when the getting questions process begins
 * @returns object
 */
export const getQuestionsBegin = () => ({
  type: GETTING_QUESTIONS_BEGINS
});

/**
 * @param payload return the payoload
 * @returns object
 */
export const getQuestionsSuccess = payload => ({
  type: GETTING_QUESTIONS_SUCCESS,
  payload
});

/**
 * @param {*} error when a problem is encountered.
 * @returns object
 */
export const getQuestionsFailure = error => ({
  type: GETTING_QUESTIONS_FAILURE,
  payload: error
});

/**
 * @param {object} user user information is sent to the backend
 * @returns {object} a promise that resolves to an object
 */
export const sendGetAllQuestions = () => {
  return async (dispatch) => {
    try {
      dispatch(getQuestionsBegin());
      const url = 'https://freddie-stackoverflowlite.herokuapp.com/api/v1/questions';
      const returnedQuestions = await axios.get(url);
      dispatch(getQuestionsSuccess(returnedQuestions.data.data));
    } catch (error) {
      dispatch(getQuestionsFailure(error.data));
    }
  };
};
