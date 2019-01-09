import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { mount, shallow } from 'enzyme';
import Register from './Register';
import store from '../../../redux/store/index';

describe('<Login /> shallow rendering tests', () => {
  const props = {
    login: jest.fn(),
    history: { push: jest.fn() },
    notification: { type: 'success' },
  };

  let wrapper;

  beforeEach(() => {
    jest.setTimeout(10000);
    wrapper = mount(
      <MemoryRouter>
        <Register {...props} store={store}/>
      </MemoryRouter>
    );
  });

  it('should render Login successfully', () => {
    expect(wrapper.find('form').exists()).toBe(true);
    // expect(wrapper.find('.login-intro').length).toBe(2);
    expect(wrapper.find('h3').text()).toBe('Please register to proceed');
  });

  it('matches the snapshot', () => {
    const tree = shallow(<Register {...props} store={store}/>);
    expect(tree).toMatchSnapshot();
  });

  it('should render all the children components successfully', () => {
    expect(wrapper.find('Notification').exists()).toBe(true);
    expect(wrapper.find('Input').exists()).toBe(true);
    expect(wrapper.find('Button').exists()).toBe(true);
  });

  it('should handle input changes', () => {
    const instance = wrapper.find('Register').instance();
    const event = {
      target: {
        value: 'test',
        name: 'username'
      }
    };
    instance.handleInputChange(event);
    expect(instance.state.username).toEqual('test');
  });

  it('should handle submit form successfully', async () => {
    const instance = wrapper.find('Register').instance();
    const event = {
      preventDefault: jest.fn()
    };

    await instance.handleSubmit(event);
    // expect(instance.state.email).toEqual('test');
  });
});
