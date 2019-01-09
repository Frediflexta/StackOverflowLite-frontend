import React from 'react';
import { shallow } from 'enzyme';
import Button from './Button';

describe('<Button /> shallow rendering tests', () => {
  const wrapper = shallow(
    <Button
      className="test"
      type="button"
      text="Smurf"
    />
  );

  it('should render Button with props successfully', () => {
    expect(wrapper.find('.test').exists()).toBe(true);
    expect(wrapper.find('button').text()).toBe('Smurf');
  });

  it('matches the snapshot', () => {
    const tree = shallow(<Button />);
    expect(tree).toMatchSnapshot();
  });
});
