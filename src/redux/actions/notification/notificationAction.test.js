import * as actions from './notificationAction';
import * as types from '../../types/notificationType';

const expectedAction = {};

describe('notification actions test', () => {
  it('should handle NOTIFy_SUCCESS', () => {
    expectedAction.type = types.NOTIFY_SUCCESS;
    expectedAction.payload = 'success';

    expect(actions.notificationSuccess('success')).toEqual(expectedAction);
  });

  it('should handle NOTIFY_FAILURE', () => {
    expectedAction.type = types.NOTIFY_FAILURE;
    expectedAction.payload = 'error';

    expect(actions.notificationFailure('error')).toEqual(expectedAction);
  });
});
