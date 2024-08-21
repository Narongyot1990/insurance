import React from 'react';
import PropTypes from 'prop-types';

function InputField({ label, value, onChange, type = 'text', placeholder = '', className = '', style = {} }) {
  const defaultStyle = {
    padding: '10px',
    borderRadius: '4px',
    border: '1px solid #ccc',
    width: '100%',
    boxSizing: 'border-box',
    ...style,
  };

  return (
    <div className={`input-field ${className}`}>
      {label && <label>{label}</label>}
      <input
        type={type}
        value={value || ''}
        onChange={(e) => onChange && onChange(e.target.value)}
        placeholder={placeholder}
        style={defaultStyle}
      />
    </div>
  );
}

InputField.propTypes = {
  label: PropTypes.string,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  className: PropTypes.string,
  style: PropTypes.object,
};

export default InputField;
