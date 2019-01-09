import React from 'react';
import propTypes from 'prop-types';

const Button = (props) => {
  const {
    className, type, text,
  } = props;

  return (
    <button
      type={type}
      className={className}
    >
      {text}
    </button>
  );
};

Button.propTypes = {
  className: propTypes.string.isRequired,
  type: propTypes.string,
  text: propTypes.string,
};

Button.defaultProps = {
  className: 'form-button',
  type: 'button',
  text: 'button'
};

export default Button;
