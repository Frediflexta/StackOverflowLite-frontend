import {
  NOTIFY_SUCCESS,
  NOTIFY_FAILURE
} from '../../types/notificationType';

const initialState = {
  type: null,
  message: null
};

const notificationReducer = (state = initialState, action) => {
  switch (action.type) {
  case NOTIFY_SUCCESS:
    return {
      ...state,
      type: 'success',
      message: action.payload
    };
  case NOTIFY_FAILURE:
    return {
      ...state,
      type: 'error',
      message: action.payload
    };
  default:
    return state;
  }
};

export default notificationReducer;
