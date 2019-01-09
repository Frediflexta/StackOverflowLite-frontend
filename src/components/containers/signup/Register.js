import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import { sendRegisterRequest } from '../../../redux/actions/signup/registerAction';
import Input from '../../presentation/Inputs/Inputs';
import Button from '../../presentation/button/Button';
import Notification from '../../presentation/notification/Notification';

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      email: '',
      password: '',
      status: '',
      message: '',
      display: 'none',
    };

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange = (event) => {
    const { value } = event.target;
    this.setState({
      [event.target.name]: value
    });
  }

  handleSubmit = async (event) => {
    event.preventDefault();
    const {
      history, register
    } = this.props;

    try {
      await register({ ...this.state });
      this.setState({
        display: 'block',
        message: this.props.notification.message,
        status: this.props.notification.type,
      });
      if (this.props.notification.type === 'success') {
        return setTimeout(() => history.push('/', { prev: 'register' }), 500);
      }
    } catch (error) {
      /* do nothing */
    }
  }


  render() {
    const {
      username, email, password,
      status, message, display
    } = this.state;
    return (
      <section className="hero is-light is-fullheight">
        <div className="hero-body">
          <div className="container has-text-centered">
            <div className="column is-4 is-offset-4">
              <h3 className="title has-text-grey">Please register to proceed</h3>
              <div className="box">
                <form onSubmit={this.handleSubmit}>
                  <Notification
                    status={status}
                    message={message}
                    display={display}
                  />
                  <Input
                    fieldClassName="field"
                    controlClassName="control"
                    inputClassName="input is-large"
                    name="username"
                    type="username"
                    placeholder="Your Username"
                    value={username}
                    onChange={this.handleInputChange}
                    required
                  />
                  <Input
                    fieldClassName="field"
                    controlClassName="control"
                    inputClassName="input is-large"
                    name="email"
                    type="email"
                    placeholder="Your Email"
                    value={email}
                    onChange={this.handleInputChange}
                    required
                  />
                  <Input
                    fieldClassName="field"
                    controlClassName="control"
                    inputClassName="input is-large"
                    name="password"
                    type="password"
                    placeholder="Your Password"
                    // Password must contain 6 or more characters
                    // a digit
                    // a lower-case letter
                    // an upper-case letter
                    pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,12}"
                    value={password}
                    onChange={this.handleInputChange}
                    required
                  />
                  <Button
                    className="button is-block is-info is-large is-fullwidth"
                    type="submit"
                    text="Register"
                  />
                </form>
              </div>
              <p className="has-text-grey">
                Already have an account? <Link to="login">Login</Link>
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

Register.propTypes = {
  history: propTypes.object,
  register: propTypes.func,
  dispatch: propTypes.func,
  notification: propTypes.object,
};

const mapDispatchToProps = dispatch => ({
  register: user => dispatch(sendRegisterRequest(user))
});

const mapStateToProps = state => ({
  notification: state.notificationReducer,
});

const RegisterContainer = connect(mapStateToProps, mapDispatchToProps)(Register);
export default RegisterContainer;
