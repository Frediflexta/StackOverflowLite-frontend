import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { mount, shallow } from 'enzyme';
import PostQuestion from './PostQuestion';
import store from '../../../redux/store/index';

describe('<PostQuestion /> rendering tests', () => {
  const props = {
    handleQuestionSubmit: jest.fn(),
    questions: [
      { title: 'test question' },
      { body: 'test body' },
    ],
    notification: { type: 'success' },
  };
  let wrapper;

  beforeEach(() => {
    jest.setTimeout(10000);
    wrapper = mount(
      <MemoryRouter>
        <PostQuestion {...props} store={store}/>
      </MemoryRouter>
    );
  });

  it('should render PostQuestion successfully', () => {
    expect(wrapper.find('input').exists()).toBe(true);
  });

  it('matches the snapshot', () => {
    const tree = shallow(<PostQuestion {...props} store={store}/>);
    expect(tree).toMatchSnapshot();
  });

  // it('should handle input changes successfully', () => {
  //   const instance = wrapper.find('PostQuestion').instance();

  //   const ques = {
  //     title: 'test',
  //     body: 'email'
  //   };

  //   instance.handleInputChange(ques);
  //   expect(instance.state.title).toEqual('test');
  // });

  it('should handle submit question form successfully', () => {
    const instance = wrapper.find('PostQuestion').instance();
    const event = {
      preventDefault: jest.fn()
    };

    instance.props.handleQuestionSubmit(event);
  });
});
