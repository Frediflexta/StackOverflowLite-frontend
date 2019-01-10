import {
  LOGIN_BEGIN,
  LOGIN_SUCCESS,
  LOGIN_FAILURE
} from '../../types/loginType';

let initialState;

try {
  const persistedLogin = JSON.parse(localStorage.getItem('login'));
  if (persistedLogin) {
    initialState = persistedLogin;
  } else {
    initialState = {
      loading: false,
      success: false,
      error: null,
      user: {}
    };
  }
} catch (error) {
  initialState = {
    loading: false,
    success: false,
    error: true,
    user: {}
  };
}

const loginReducer = (state = initialState, action) => {
  switch (action.type) {
  case LOGIN_BEGIN:
    return {
      ...state,
      loading: true
    };
  case LOGIN_SUCCESS:
    return {
      ...state,
      loading: false,
      success: true,
      user: action.payload
    };
  case LOGIN_FAILURE:
    return {
      ...state,
      loading: false,
      error: action.payload,
    };

  default:
    return state;
  }
};

export default loginReducer;
