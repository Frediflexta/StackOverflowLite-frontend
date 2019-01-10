import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { mount, shallow } from 'enzyme';
import QuestionContainer from './QuestionContainer';
import store from '../../../redux/store/index';

describe('<QuestionContainer /> rendering tests', () => {
  const props = {
    getQuestions: jest.fn(),
    questions: [{ question: 'test question' }]
  };
  let wrapper;

  beforeEach(() => {
    jest.setTimeout(10000);
    wrapper = mount(
      <MemoryRouter>
        <QuestionContainer {...props} store={store}/>
      </MemoryRouter>
    );
  });


  it('should render QuestionContainer successfully', () => {
    expect(wrapper.find('section').exists()).toBe(true);
  });

  it('matches the snapshot', () => {
    const tree = shallow(<QuestionContainer {...props} store={store}/>);
    expect(tree).toMatchSnapshot();
  });

  it('should handle successfully getting questions successfully', () => {
    const instance = wrapper.find('QuestionContainer').instance();

    instance.props.getQuestions();
  });
});
