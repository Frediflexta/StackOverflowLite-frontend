import React from 'react';
import { shallow } from 'enzyme';
import Loading from './Loader';


describe('Testing the loading functionality', () => {
  it('should render the loader', () => {
    const header = shallow(<Loading />);
    expect(header.find('.xyz').text()).toEqual('<Loader />');
  });
});
