import PostQuestions from './postQuestionReducer';
import * as types from '../../types/postQuestionType';

const state = {
  loading: false,
  success: false,
  error: false,
  data: {}
};

describe('post question reducer test', () => {
  it('should return the initial state', () => {
    expect(PostQuestions(undefined, {})).toEqual(state);
  });

  it('should handle POSTQUESTION_BEGINS', () => {
    state.loading = true;

    expect(PostQuestions(state, {
      type: types.POSTQUESTION_BEGINS,
    })).toEqual(state);
  });

  it('should handle POSTQUESTION_SUCCESS', () => {
    state.loading = false;
    state.success = true;
    state.data = {};

    expect(PostQuestions(state, {
      type: types.POSTQUESTION_SUCCESS,
      payload: state.data
    })).toEqual(state);
  });

  it('should handle POSTQUESTION_FAILURE', () => {
    state.loading = false;
    state.success = false;
    state.error = 'error';

    expect(PostQuestions(state, {
      type: types.POSTQUESTION_FAILURE,
      payload: 'error'
    })).toEqual(state);
  });
});
