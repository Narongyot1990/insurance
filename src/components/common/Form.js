// src/common/Form.js

import React, { useReducer } from 'react';
import PropTypes from 'prop-types';
import InputField from './InputField';
import Button from './Button';
import { formReducer, initialState } from '../../reducers/formReducer';

function Form({ onSubmit, fields, buttonLabel, className = '', style = {} }) {
  const [state, dispatch] = useReducer(formReducer, initialState);

  const handleInputChange = (value, field) => {
    dispatch({ type: 'SET_VALUE', field: field.label, value });

    if (field.validator) {
      const isValid = field.validator(value);
      if (!isValid) {
        dispatch({
          type: 'SET_ERROR',
          field: field.label,
          error: `กรุณากรอก${field.label}ให้ถูกต้อง`,
        });
      } else {
        dispatch({ type: 'CLEAR_ERROR', field: field.label });
      }
    }
    field.onChange(value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    let hasErrors = false;

    fields.forEach((field) => {
      const value = state.values[field.label] || '';
      if (field.validator && !field.validator(value)) {
        dispatch({
          type: 'SET_ERROR',
          field: field.label,
          error: `กรุณากรอก${field.label}ให้ถูกต้อง`,
        });
        hasErrors = true;
      }
    });

    if (!hasErrors) {
      onSubmit(state.values);
    }
  };

  const defaultStyle = {
    display: 'flex',
    flexDirection: 'column',
    gap: '15px',
    ...style,
  };

  return (
    <form onSubmit={handleSubmit} className={className} style={defaultStyle}>
      {fields.map((field, index) => (
        <div key={index} style={{ marginBottom: '20px' }}>
          {state.errors[field.label] && (
            <div style={{ color: 'red', marginBottom: '5px' }}>
              {state.errors[field.label]}
            </div>
          )}
          <InputField
            label={field.label}
            value={state.values[field.label] || ''}
            onChange={(value) => handleInputChange(value, field)}
            type={field.type}
            placeholder={field.placeholder}
          />
        </div>
      ))}
      <Button label={buttonLabel} type="submit" />
    </form>
  );
}

Form.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  fields: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired,
      onChange: PropTypes.func.isRequired,
      type: PropTypes.string,
      placeholder: PropTypes.string,
      validator: PropTypes.func,
    })
  ).isRequired,
  buttonLabel: PropTypes.string.isRequired,
  className: PropTypes.string,
  style: PropTypes.object,
};

export default Form;