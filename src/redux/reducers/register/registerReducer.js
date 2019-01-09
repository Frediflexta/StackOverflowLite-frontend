import {
  REGISTER_BEGIN,
  REGISTER_SUCCESS,
  REGISTER_FAILURE,
} from '../../types/registerType';

const initialState = {
  loading: false,
  success: false,
  error: null,
  user: {}
};

const registerReducer = (state = initialState, action) => {
  switch (action.type) {
  case REGISTER_BEGIN:
    return {
      ...state,
      loading: true
    };
  case REGISTER_SUCCESS:
    return {
      ...state,
      loading: false,
      success: true,
      user: action.payload,
    };
  case REGISTER_FAILURE:
    return {
      ...state,
      loading: false,
      error: action.payload
    };
  default:
    return state;
  }
};

export default registerReducer;
