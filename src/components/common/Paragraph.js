import React from 'react';
import PropTypes from 'prop-types';

function Paragraph({ text, className = '', style = {} }) {
  const defaultStyle = {
    fontFamily: '"Noto Sans Thai", OpenSans, NotoSansTamil, NotoSansSinhala, PingFang, Helvetica, sans-serif',
    fontStyle: 'normal',
    fontWeight: 400,
    color: 'rgb(0, 0, 0)',
    fontSize: '16px',
    lineHeight: '24px',
    ...style,
  };

  return <p style={defaultStyle} className={className}>{text}</p>;
}

Paragraph.propTypes = {
  text: PropTypes.string.isRequired,
  className: PropTypes.string,
  style: PropTypes.object,
};

export default Paragraph;
