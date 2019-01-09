import React from 'react';
import { shallow } from 'enzyme';
import Input from './Inputs';

describe('<Input /> shallow rendering tests', () => {
  const handleChange = jest.fn();
  const wrapper = shallow(
    <Input
      className="test"
      type="text"
      value="Smurf"
      name="Mia"
      title="Mia"
      onChange={handleChange}
    />
  );

  // it('should render Input with props successfully', () => {
  //   console.log(wrapper.debug());
  //   expect(wrapper.find('input').hasClass('test')).toBe(true);
  //   expect(wrapper.find('Mia').exists()).to.equal(true);
  //   expect(wrapper.find('input[type="text"]').exists()).toBe(true);
  // });

  it('should pass in the onChange prop successfully', () => {
    wrapper.find('input').simulate(
      'change',
      {
        target: {
          name: 'Mia',
          value: 'This is me'
        }
      }
    );
    expect(handleChange.mock.calls.length).toBe(1);
  });

  it('matches the snapshot', () => {
    const tree = shallow(<Input />);
    expect(tree).toMatchSnapshot();
  });
});
