import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Editor } from '@tinymce/tinymce-react';
import propTypes from 'prop-types';
import Button from '../../presentation/button/Button';
import Notification from '../../presentation/notification/Notification';
import { postQuestionRequest } from '../../../redux/actions/postQuestions/postQuestionAction';
import '../../../utils/styles.scss';

class PostQuestion extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      body: '',
      status: '',
      message: '',
      display: 'none',
    };
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleEditorChange = (e) => {
    e.target.getContent();
  }

  handleInputChange(event) {
    this.setState({
      [event.target.id]: event.target.value,
    });
  }

  handleQuestionSubmit = async (event) => {
    event.preventDefault();
    const {
      postQues
    } = this.props;
    try {
      await postQues({ ...this.state });
      this.setState({
        display: 'block',
        message: this.props.notification.message,
        status: this.props.notification.type,
      });
      setTimeout(() => {
        this.setState({
          display: 'none',
          message: '',
          status: '',
          title: '',
          body: '',
        });
      }, 3000);
    } catch (error) {
      // do nothing
    }
  }

  render() {
    const {
      status,
      message,
      display
    } = this.state;

    return (
      <div className="columns is-mt-10">
        <div className="column is-4 is-offset-4">
          <h1 className="title is-4">Ask Your Questions</h1>
          <form onSubmit={this.handleQuestionSubmit}>
            <Notification
              status={status}
              message={message}
              display={display}
            />
            <input
              className="input"
              type="text"
              placeholder="Question title"
              id="title"
              value={this.state.title}
              onChange={this.handleInputChange}
            />
            <br /><br />
            {/* <textarea
              className="textarea"
              placeholder="Say something..."
              rows="10"
              id="body"
              value={this.state.body}
              onChange={this.handleInputChange}
            /> */}
            <Editor
              placeholder="Say something..."
              init={{
                plugins: 'link image code',
                toolbar: 'undo redo | bold italic | alignleft aligncenter alignright | code'
              }}
              id="body"
              onChange={this.handleEditorChange}
            />
            <br/> <br/>
            <Button
              className="button is-info"
              type="submit"
              text="Post Question"
            />
          </form>
        </div>
      </div>
    );
  }
}

PostQuestion.propTypes = {
  loading: propTypes.bool,
  postQues: propTypes.func,
  notification: propTypes.object,
};

const mapStateToProps = state => ({
  questionBody: state.PostQuestions,
  notification: state.notificationReducer,
});

const mapDispatchToProps = dispatch => ({
  postQues: data => dispatch(postQuestionRequest(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(PostQuestion);
