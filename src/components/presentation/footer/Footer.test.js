import React from 'react';
import { shallow } from 'enzyme';
import Footer from './Footer';

describe('test footer', () => {
  const footer = shallow(<Footer />);
  it('should render the footer', () => {
    expect(footer.find('p').text()).toEqual('StackOverflowLite-React© 2018');
  });
});
