import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { mount, shallow } from 'enzyme';
import Login from './Login';
import store from '../../../redux/store/index';

describe('<Login /> shallow rendering tests', () => {
  const props = {
    login: jest.fn(),
    history: { push: jest.fn() },
    notification: { type: 'success' },
  };
  let wrapper;

  beforeEach(() => {
    wrapper = mount(
      <MemoryRouter>
        <Login {...props} store={store}/>
      </MemoryRouter>
    );
  });

  it('should render Login successfully', () => {
    expect(wrapper.find('form').exists()).toBe(true);
    // expect(wrapper.find('.login-intro').length).toBe(2);
    expect(wrapper.find('h3').text()).toBe('Please login to proceed');
  });

  it('matches the snapshot', () => {
    const tree = shallow(<Login {...props} store={store}/>);
    expect(tree).toMatchSnapshot();
  });

  it('should render all the children components successfully', () => {
    expect(wrapper.find('Notification').exists()).toBe(true);
    expect(wrapper.find('Input').exists()).toBe(true);
    expect(wrapper.find('Button').exists()).toBe(true);
  });

  it('should handle input changes successfully', () => {
    const instance = wrapper.find('Login').instance();
    const event = {
      target: {
        value: 'test',
        name: 'email'
      },
    };

    instance.handleInputChange(event);
    expect(instance.state.email).toEqual('test');
  });

  it('should handle submit form successfully', async () => {
    const instance = wrapper.find('Login').instance();
    const event = {
      preventDefault: jest.fn()
    };

    await instance.handleSubmit(event);
    // expect(instance.state.email).toEqual('test');
  });
});
