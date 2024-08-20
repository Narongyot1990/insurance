import React from 'react';
import PropTypes from 'prop-types';

function Container({ children, className = '', style = {} }) {
  const defaultStyle = {
    margin: '0 auto',
    padding: '20px',
    maxWidth: '1200px',
    ...style,
  };

  return <div style={defaultStyle} className={className}>{children}</div>;
}

Container.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  style: PropTypes.object,
};

export default Container;
