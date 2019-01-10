import React from 'react';
// import { MemoryRouter } from 'react-router-dom';
import { shallow } from 'enzyme';
import Questions from './Questions';

describe('<Questions /> shallow rendering tests', () => {
  const props = {
    question: {
      totalanswers: '1',
      id: '2',
      questitle: 'something',
      quesbody: 'something here too'
    }
  };
  const wrapper = shallow(
    <Questions {...props} />
  );

  it('should render Questions with props successfully', () => {
    expect(wrapper.find('.content-container').exists()).toBe(true);
    expect(wrapper.find('.quote').exists()).toBe(true);
  });

  it('matches the snapshot', () => {
    const tree = shallow(<Questions {...props} />);
    expect(tree).toMatchSnapshot();
  });
});
