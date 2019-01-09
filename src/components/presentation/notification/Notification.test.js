import React from 'react';
import { shallow } from 'enzyme';
import Notification from './Notification';

describe('<Notification /> shallow rendering tests', () => {
  const wrapper = shallow(
    <Notification
      status="success"
      message="This rendered successfully"
      display="block"
    />
  );

  it('should render with props successfully', () => {
    expect(wrapper.find('div').hasClass('is-success')).toBe(true);
    expect(wrapper.find('div').text()).toBe('This rendered successfully');
  });

  it('should render with is-danger class based on the status prop', () => {
    wrapper.setProps({
      status: 'error'
    });
    expect(wrapper.find('div').hasClass('is-danger')).toBe(true);
    expect(wrapper.find('div').hasClass('is-success')).toBe(false);
  });

  it('should render with is-info class when no status prop', () => {
    wrapper.setProps({
      status: null
    });
    expect(wrapper.find('div').hasClass('is-info')).toBe(true);
    expect(wrapper.find('div').hasClass('is-danger')).toBe(false);
    expect(wrapper.find('div').hasClass('is-success')).toBe(false);
  });

  it('matches the snapshot', () => {
    const tree = shallow(<Notification />);
    expect(tree).toMatchSnapshot();
  });
});
