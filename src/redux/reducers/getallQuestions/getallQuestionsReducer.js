import {
  GETTING_QUESTIONS_BEGINS,
  GETTING_QUESTIONS_SUCCESS,
  GETTING_QUESTIONS_FAILURE
} from '../../types/getallQuestionType';

const initialState = {
  loading: false,
  success: false,
  error: null,
  questions: []
};

const getAllAvailableQuestions = (state = initialState, action) => {
  switch (action.type) {
  case GETTING_QUESTIONS_BEGINS:
    return {
      ...state,
      loading: true
    };
  case GETTING_QUESTIONS_SUCCESS:
    return {
      ...state,
      loading: false,
      success: true,
      questions: action.payload
    };
  case GETTING_QUESTIONS_FAILURE:
    return {
      ...state,
      error: action.payload,

    };
  default:
    return state;
  }
};

export default getAllAvailableQuestions;
