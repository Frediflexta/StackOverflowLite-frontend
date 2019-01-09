import loginReducer from './loginReducer';
import * as types from '../../types/loginType';

const state = {
  loading: false,
  success: false,
  error: null,
  user: {}
};

describe('login reducer test', () => {
  it('should return the initial state', () => {
    expect(loginReducer(undefined, {})).toEqual(state);
  });

  it('should handle LOGIN_BEGIN', () => {
    state.loading = true;

    expect(loginReducer(state, {
      type: types.LOGIN_BEGIN,
    })).toEqual(state);
  });

  it('should handle LOGIN_SUCCESS', () => {
    state.loading = false;
    state.success = true;
    state.user = {
      data: { userId: 3 },
      message: 'Welcome back...',
      token: 'Somereallylongstringwithnumbers'
    };

    expect(loginReducer(state, {
      type: types.LOGIN_SUCCESS,
      payload: state.user
    })).toEqual(state);
  });

  it('should handle LOGIN_FAILURE', () => {
    state.loading = false;
    state.success = false;
    state.error = 'error';

    expect(loginReducer(state, {
      type: types.LOGIN_FAILURE,
      payload: 'error'
    })).toEqual(state);
  });
});
