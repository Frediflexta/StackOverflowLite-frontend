import React from 'react';
import { shallow } from 'enzyme';
import Routes from './Routes';

describe('Routes.js shallow tests', () => {
  const mockedDispatch = jest.fn();
  const wrapper = shallow(<Routes dispatch={mockedDispatch} />);

  it('should render the app correctly', () => {
    expect(wrapper.find('Router').exists()).toBe(true);
  });
});
