import getAllAvailableQuestions from './getallQuestionsReducer';
import * as types from '../../types/getallQuestionType';

const state = {
  error: null,
  loading: false,
  questions: [],
  success: false
};

describe('get all questions reducer test', () => {
  it('should return the initial state', () => {
    expect(getAllAvailableQuestions(undefined, {})).toEqual(state);
  });

  it('should handle GETTING_QUESTIONS_BEGINS', () => {
    state.loading = true;

    expect(getAllAvailableQuestions(state, {
      type: types.GETTING_QUESTIONS_BEGINS,
    })).toEqual(state);
  });

  it('should handle GETTING_QUESTIONS_SUCCESS', () => {
    state.loading = false;
    state.success = true;
    state.questions = [
      {
        questitle: 'This is a test question',
        quesbody: 'This is a test question body'
      }
    ];

    expect(getAllAvailableQuestions(state, {
      type: types.GETTING_QUESTIONS_SUCCESS,
      payload: state.questions
    })).toEqual(state);
  });

  it('should handle LOGIN_FAILURE', () => {
    state.loading = false;
    state.success = false;
    state.error = 'error';

    expect(getAllAvailableQuestions(state, {
      type: types.GETTING_QUESTIONS_FAILURE,
      payload: 'error'
    })).toEqual(state);
  });
});
