import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';
import InputField from './InputField';

function Form({ onSubmit, fields, buttonLabel, className = '', style = {} }) {
  const defaultStyle = {
    display: 'flex',
    flexDirection: 'column',
    gap: '15px',
    ...style,
  };

  return (
    <form onSubmit={onSubmit} className={className} style={defaultStyle}>
      {fields.map((field, index) => (
        <InputField
          key={index}
          label={field.label}
          value={field.value}
          onChange={field.onChange}
          type={field.type}
          placeholder={field.placeholder}
        />
      ))}
      <Button label={buttonLabel} type="submit" />
    </form>
  );
}

Form.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  fields: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      value: PropTypes.string.isRequired,
      onChange: PropTypes.func.isRequired,
      type: PropTypes.string,
      placeholder: PropTypes.string,
    })
  ).isRequired,
  buttonLabel: PropTypes.string.isRequired,
  className: PropTypes.string,
  style: PropTypes.object,
};

export default Form;
