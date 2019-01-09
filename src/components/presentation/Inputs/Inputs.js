import React from 'react';
import propTypes from 'prop-types';

const Input = (props) => {
  const {
    name, type,
    value, onChange, placeholder, fieldClassName, inputClassName, required, pattern
  } = props;

  return (
    <div className={fieldClassName}>
      <input
        className={inputClassName}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        pattern={pattern}
      />
    </div>
  );
};

Input.propTypes = {
  name: propTypes.string,
  fieldClassName: propTypes.string,
  inputClassName: propTypes.string,
  title: propTypes.string,
  type: propTypes.string,
  value: propTypes.string,
  onChange: propTypes.func,
  placeholder: propTypes.string,
  className: propTypes.string,
  maxlength: propTypes.number,
  id: propTypes.string,
  required: propTypes.bool,
  pattern: propTypes.string,
};

Input.defaultProps = {
  name: '',
  title: '',
  type: '',
  value: '',
  placeholder: '',
  className: 'form-control',
  id: '',
  required: false,
  pattern: null,
};

export default Input;
