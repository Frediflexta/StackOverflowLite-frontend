import React from 'react';
import propTypes from 'prop-types';
// import '../styles/Notification.scss';

const Notification = (props) => {
  const {
    message,
    display,
    status
  } = props;

  const style = {
    display
  };

  let color = '';

  if (status === 'success') {
    color = 'is-success';
  } else if (status === 'error') {
    color = 'is-danger';
  } else {
    color = 'is-info';
  }

  return (
    <div style={style}
      className={`notification ${color}`}
    >
      {message}
    </div>
  );
};

Notification.propTypes = {
  status: propTypes.string,
  message: propTypes.string,
  display: propTypes.string,
};

Notification.defaultProps = {
  status: '',
  message: '',
  display: 'none',
};

export default Notification;
