import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import Axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import * as actions from './registerAction';
import * as types from '../../types/registerType';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('signup Actions', () => {
  it('should dispatch REGISTER_BEGIN and REGISTER_FAILURE when sendRegisterRequest fails', () => {
    const mock = new MockAdapter(Axios);
    mock.onPost('https://freddie-stackoverflowlite.herokuapp.com/api/v1/auth/signup')
      .reply(400, { message: 'error' });

    const user = {
      email: 'anasey@outlook.com',
      username: 'anasey',
      password: 'password123',
    };
    const expectedActions = [
      { type: types.REGISTER_BEGIN },
      { type: types.REGISTER_FAILURE, payload: 'error' },
      { type: 'NOTIFY_FAILURE', payload: 'error' },
    ];
    const store = mockStore({ user: {} });
    return store.dispatch(actions.sendRegisterRequest(user)).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it('should dispatch REGISTER_BEGIN and REGISTER_SUCCESS when sendRegisterRequest is successful', () => {
    const mock = new MockAdapter(Axios);
    const user = {
      email: 'anasey001@outlook.com',
      username: 'anasey001',
      password: 'password123',
    };
    const mockData = {
      message: 'success',
      user,
    };
    mock.onPost()
      .reply(200, mockData);

    const expectedActions = [
      { type: types.REGISTER_BEGIN },
      { type: types.REGISTER_SUCCESS, payload: mockData },
      {
        type: 'NOTIFY_SUCCESS',
        payload: mockData.message,
      },
    ];
    const store = mockStore({ user: {} });
    return store.dispatch(actions.sendRegisterRequest(user)).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
});
