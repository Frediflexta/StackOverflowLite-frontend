import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import Axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import * as actions from './loginAction';
import * as types from '../../types/loginType';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const expectedAction = {};

describe('login actions test', () => {
  it('should handle LOGIN_BEGIN', () => {
    expectedAction.type = types.LOGIN_BEGIN;
    expect(actions.loginBegins()).toEqual(expectedAction);
  });

  it('should handle LOGIN_SUCCESS', () => {
    expectedAction.type = types.LOGIN_SUCCESS;
    expectedAction.payload = {
      foo: 'foo',
      bar: 'bar',
    };
    expect(actions.loginSuccess({ foo: 'foo', bar: 'bar' }))
      .toEqual(expectedAction);
  });

  it('should handle LOGIN_FAILURE', () => {
    expectedAction.type = types.LOGIN_FAILURE;
    expectedAction.payload = 'error';
    expect(actions.loginFailure('error'))
      .toEqual(expectedAction);
  });

  describe('async login actions test', () => {
    it('should dispatch LOGIN_BEGIN and LOGIN_SUCCESS when sendLoginRequest is successful', () => {
      const mock = new MockAdapter(Axios);
      const mockData = {
        success: true,
        message: 'successfully logged in',
        user: {
          data: { userId: 3 },
          message: 'Welcome back...',
          token: 'Somereallylongstringwithnumbers'
        }
      };
      mock
        .onPost()
        .reply(200, mockData);

      const user = {
        username: 'papasmurf',
        password: 'GastricJuice',
      };

      const expectedActions = [
        { type: types.LOGIN_BEGIN },
        { type: types.LOGIN_SUCCESS, payload: mockData },
        { payload: 'successfully logged in', type: 'NOTIFY_SUCCESS' },
      ];

      const store = mockStore({ user: {} });
      return store.dispatch(actions.sendLoginRequest(user)).then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
    });

    it('should dispatch LOGIN_BEGIN and LOGIN_FAILURE when sendLoginRequest fails', () => {
      const mock = new MockAdapter(Axios);
      const mockData = {
        success: false,
        message: 'username or password incorrect',
      };
      mock
        .onPost()
        .reply(400, mockData);

      const user = {
        username: 'papasmurfs',
        password: 'GastricJuice',
      };

      const expectedActions = [
        { type: types.LOGIN_BEGIN },
        {
          type: 'NOTIFY_FAILURE',
          payload: mockData.message,
        },
        { payload: 'username or password incorrect', type: types.LOGIN_FAILURE },
      ];

      const store = mockStore({ user: {} });
      return store.dispatch(actions.sendLoginRequest(user)).then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
    });
  });
});
