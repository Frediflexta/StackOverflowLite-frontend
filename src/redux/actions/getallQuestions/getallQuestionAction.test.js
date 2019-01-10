import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import Axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import * as actions from './getallQuestionsAction';
import * as types from '../../types/getallQuestionType';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const expectedAction = {};

// GETTING_QUESTIONS_BEGINS,
// GETTING_QUESTIONS_SUCCESS,
// GETTING_QUESTIONS_FAILURE

describe('login actions test', () => {
  it('should handle GETTING_QUESTIONS_BEGINS', () => {
    expectedAction.type = types.GETTING_QUESTIONS_BEGINS;
    expect(actions.getQuestionsBegin()).toEqual(expectedAction);
  });

  it('should handle GETTING_QUESTIONS_SUCCESS', () => {
    expectedAction.type = types.GETTING_QUESTIONS_SUCCESS;

    expect(actions.getQuestionsSuccess())
      .toEqual(expectedAction);
  });

  it('should handle GETTING_QUESTIONS_FAILURE', () => {
    expectedAction.type = types.GETTING_QUESTIONS_FAILURE;
    expectedAction.payload = 'error';
    expect(actions.getQuestionsFailure('error'))
      .toEqual(expectedAction);
  });

  describe('async get all question actions test', () => {

    it('should dispatch GETTING_QUESTIONS_BEGINS and GETTING_QUESTIONS_FAILURE when getting questions fails', () => {
      const mock = new MockAdapter(Axios);
      mock
        .onPost()
        .reply(400);

      const expectedActions = [
        { type: types.GETTING_QUESTIONS_BEGINS },
        { type: types.GETTING_QUESTIONS_FAILURE },
      ];

      const store = mockStore({});
      return store.dispatch(actions.sendGetAllQuestions()).then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
    });
  });
});
