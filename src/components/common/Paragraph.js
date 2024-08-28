import React from 'react';
import PropTypes from 'prop-types';

function Paragraph({ text, color, fontSize, className = '', style = {} }) {
  const calculateResponsiveFontSize = () => {
    const baseFontSize = parseFloat(fontSize || '20px');
    const screenWidth = window.innerWidth;

    // ปรับฟอนต์ขนาดตามความกว้างของหน้าจอ
    if (screenWidth <= 768) {
      return `${baseFontSize * 0.8}px`; // ลดขนาดฟอนต์ลงเล็กน้อยในมือถือ
    }
    return `${baseFontSize}px`;
  };

  const defaultStyle = {
    fontFamily: '"Noto Sans Thai", OpenSans, NotoSansTamil, NotoSansSinhala, PingFang, Helvetica, sans-serif',
    fontStyle: 'normal',
    fontWeight: 300,
    color: color || 'rgb(51, 61, 71)',
    fontSize: calculateResponsiveFontSize(),
    lineHeight: `${parseFloat(calculateResponsiveFontSize()) * 1.65}px`,
    ...style,
  };

  return <p style={defaultStyle} className={className}>{text}</p>;
}


Paragraph.propTypes = {
  text: PropTypes.string.isRequired,
  color: PropTypes.string, // กำหนด prop สำหรับสี
  fontSize: PropTypes.string, // กำหนด prop สำหรับขนาดฟอนต์
  className: PropTypes.string,
  style: PropTypes.object,
};

export default Paragraph;


