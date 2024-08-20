import React from 'react';
import PropTypes from 'prop-types';

function Heading({ level, text, className = '', style = {} }) {
  const Tag = `h${level}`;
  const defaultStyle = {
    fontFamily: '"Noto Sans Thai", AIAEverest, NotoSansTamil, NotoSansSinhala, PingFang, Helvetica, sans-serif',
    fontStyle: 'normal',
    fontWeight: 700,
    color: 'rgb(51, 61, 71)',
    fontSize: level === 1 ? '32px' : 'inherit',
    lineHeight: level === 1 ? '40px' : 'inherit',
    ...style,
  };

  return <Tag style={defaultStyle} className={className}>{text}</Tag>;
}

Heading.propTypes = {
  level: PropTypes.oneOf([1, 2, 3, 4, 5, 6]).isRequired,
  text: PropTypes.string.isRequired,
  className: PropTypes.string,
  style: PropTypes.object,
};

export default Heading;
