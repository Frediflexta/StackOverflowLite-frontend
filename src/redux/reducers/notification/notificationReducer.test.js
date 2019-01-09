import notificationReducer from './notificationReducer';
import * as types from '../../types/notificationType';

const state = { message: null, type: null };

describe('notification reducer tests', () => {
  it('should return the initial state', () => {
    expect(notificationReducer(undefined, {})).toEqual(state);
  });

  it('should handle NOTIFY_SUCCESS', () => {
    state.type = 'success';
    state.message = 'A successful message';

    expect(notificationReducer(state, {
      type: types.NOTIFY_SUCCESS,
      payload: state.message,
    })).toEqual(state);
  });

  it('should handle NOTIFY_FAILURE', () => {
    state.type = 'error';
    state.message = 'error';

    expect(notificationReducer(state, {
      type: types.NOTIFY_FAILURE,
      payload: 'error',
    })).toEqual(state);
  });
});
