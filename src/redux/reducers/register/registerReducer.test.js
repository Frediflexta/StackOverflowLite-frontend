import reducer from './registerReducer';
import * as types from '../../types/registerType';

describe('register reducers', () => {
  const state = {
    loading: false,
    success: false,
    error: null,
    user: {},
  };
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(state);
  });

  it('should handle REGISTER_BEGIN', () => {
    state.loading = true;
    expect(reducer(state, {
      type: types.REGISTER_BEGIN
    })).toEqual(state);
  });

  it('should handle REGISTER_SUCCESS', () => {
    state.loading = false;
    state.success = true;
    state.error = null;
    state.user = {
      data: { userId: 3 },
      message: 'Your Account has been created',
      token: 'Somereallylongstringwithnumbers'
    };
    expect(reducer(state, {
      type: types.REGISTER_SUCCESS,
      payload: state.user,
    })).toEqual(state);
  });

  it('should handle REGISTER_FAILURE', () => {
    state.loading = false;
    state.error = 'Some Error Message';
    state.user = null;
    expect(reducer(state, {
      type: types.REGISTER_FAILURE,
      payload: 'Some Error Message',
    })).toEqual(state);
  });
});
