import React from 'react';
import PropTypes from 'prop-types';
import { Link as RouterLink } from 'react-router-dom';
import './Link.css';

function Link({ to, label, className = '' }) {
  return (
    <RouterLink to={to} className={`link ${className}`}>
      {label}
    </RouterLink>
  );
}

Link.propTypes = {
  to: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  className: PropTypes.string,
};

export default Link;
