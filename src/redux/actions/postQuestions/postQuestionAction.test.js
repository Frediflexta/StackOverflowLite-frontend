import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import Axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import * as actions from './postQuestionAction';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const expectedAction = {};

describe('post question actions test', () => {
  it('should handle POSTQUESTION_BEGINS', () => {
    expectedAction.type = 'POSTQUESTION_BEGINS';
    expect(actions.postQuestionsBegin()).toEqual(expectedAction);
  });

  it('should handle POSTQUESTION_SUCCESS', () => {
    expectedAction.type = 'POSTQUESTION_SUCCESS';
    expectedAction.payload = {
      foo: 'foo',
      bar: 'bar',
    };
    expect(actions.postQuestionsSuccess({ foo: 'foo', bar: 'bar' }))
      .toEqual(expectedAction);
  });

  it('should handle POSTQUESTION_FAILURE', () => {
    expectedAction.type = 'POSTQUESTION_FAILURE';
    expectedAction.payload = 'error';
    expect(actions.getQuestionsFailure('error'))
      .toEqual(expectedAction);
  });

  describe('async login actions test', () => {
    it('should dispatch POSTQUESTION_BEGINS and POSTQUESTION_SUCCESS when post questions is successful', () => {
      const mock = new MockAdapter(Axios);
      const mockData = {
        success: true,
        message: 'Your question has been posted',
        data: {}
      };
      mock
        .onPost()
        .reply(200, mockData);

      const data = {
        title: 'papasmurf',
        body: 'GastricJuice',
      };

      const expectedActions = [
        { type: 'POSTQUESTION_BEGINS' },
        { type: 'POSTQUESTION_SUCCESS', payload: mockData },
        { payload: 'Your question has been posted', type: 'NOTIFY_SUCCESS' },
      ];

      const store = mockStore({ data: {} });
      return store.dispatch(actions.postQuestionRequest(data)).then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
    });

    it('should dispatch POSTQUESTION_BEGINS and POSTQUESTION_FAILURE when post questions fails', () => {
      const mock = new MockAdapter(Axios);
      const mockData = {
        error: new Error('Request failed with status code 400'),
        message: 'Request failed with status code 400',
      };
      mock
        .onPost()
        .reply(400, mockData.error);

      const data = {
        title: 'papasmurfs',
        body: '',
      };

      const expectedActions = [
        { type: 'POSTQUESTION_BEGINS' },
        { payload: mockData.error, type: 'POSTQUESTION_FAILURE' },
        {
          type: 'NOTIFY_FAILURE',
          payload: mockData.message,
        },
      ];

      const store = mockStore({ data: {} });
      return store.dispatch(actions.postQuestionRequest(data)).then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
    });
  });
});
