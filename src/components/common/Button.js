import React from 'react';
import PropTypes from 'prop-types';

function Button({ label, onClick, type = 'button', disabled = false, className = '', style = {} }) {
  const defaultStyle = {
    padding: '10px 20px',
    backgroundColor: '#007BFF',
    border: 'none',
    borderRadius: '4px',
    color: '#fff',
    cursor: 'pointer',
    ...style,
  };

  return (
    <button type={type} onClick={onClick} disabled={disabled} style={defaultStyle} className={className}>
      {label}
    </button>
  );
}

Button.propTypes = {
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  type: PropTypes.oneOf(['button', 'submit', 'reset']),
  disabled: PropTypes.bool,
  className: PropTypes.string,
  style: PropTypes.object,
};

export default Button;
