import React from 'react';
import { mount } from 'enzyme';
import NotFound from './Not-found';

describe('404 shallow rendering test', () => {
  const wrapper = mount(<NotFound />);
  it('should render without crashing', () => {
    expect(wrapper.find('.test').exists());
  });
});
