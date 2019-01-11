import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import propTypes from 'prop-types';
import Questions from '../../presentation/questions/Questions';
// import Button from '../../presentation/button/Button';
import Loading from '../../presentation/loader/Loader';
import { sendGetAllQuestions } from '../../../redux/actions/getallQuestions/getallQuestionsAction';

class QuestionContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      questions: []
    };
  }

  async componentWillMount() {
    const {
      getQuestions
    } = this.props;

    await getQuestions();

    this.setState({
      questions: this.props.questions
    });
  }

  render() {
    const { loading } = this.props;
    if (loading === true) {
      return (
        <main>
          <section>
            <div className="h-content">
              <div id="content-header">
                <h1 className="title is-4">Recent Questions</h1>
              </div>
              <div id="ask">
                <Link
                  to="/postQuestion"
                  className="button is-info is-large is-small"
                >Ask Question</Link>
              </div>
            </div>
            {<Loading />}
          </section>
        </main>
      );
    }

    const {
      questions
    } = this.state;

    return (
      <main>
        <section>
          <div className="h-content">
            <div id="content-header">
              <h1 className="title is-4">Recent Questions</h1>
            </div>
            <div id="ask">
              <Link
                to="/postQuestion"
                className="button is-info is-large is-small"
              >Ask Question</Link>
            </div>
          </div>
          {questions && questions.map(question => <Questions key={question.id} question={question} />)}
        </section>
      </main>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  getQuestions: () => dispatch(sendGetAllQuestions())
});

const mapStateToProps = state => ({
  loading: state.getAllAvailableQuestions.loading,
  questions: state.getAllAvailableQuestions.questions,
});

QuestionContainer.propTypes = {
  getQuestions: propTypes.func,
  loading: propTypes.bool,
  questions: propTypes.array
};

export default connect(mapStateToProps, mapDispatchToProps)(QuestionContainer);
