import {
  POSTQUESTION_BEGINS,
  POSTQUESTION_SUCCESS,
  POSTQUESTION_FAILURE,
} from '../../types/postQuestionType';

const initialState = {
  loading: false,
  success: false,
  error: false,
  data: {}
};

const PostQuestions = (state = initialState, action) => {
  switch (action.type) {
  case POSTQUESTION_BEGINS:
    return {
      ...state,
      loading: true
    };
  case POSTQUESTION_SUCCESS:
    return {
      ...state,
      loading: false,
      success: true,
      data: action.payload
    };
  case POSTQUESTION_FAILURE:
    return {
      ...state,
      error: action.payload,

    };
  default:
    return state;
  }
};

export default PostQuestions;
