import React from 'react';
import PropTypes from 'prop-types';

function Heading({ level, text, style = {}, fontWeight = 500, color = 'rgb(51, 61, 71)' }) {
  const Tag = `h${level}`;

  // กำหนดขนาดฟอนต์พื้นฐานสำหรับแต่ละระดับ
  const sizeMap = {
    1: { fontSize: '32px', lineHeight: '46px' },
    2: { fontSize: '28px', lineHeight: '40px' },
    3: { fontSize: '24px', lineHeight: '34px' },
    4: { fontSize: '20px', lineHeight: '30px' },
    5: { fontSize: '18px', lineHeight: '28px' },
    6: { fontSize: '16px', lineHeight: '24px' },
  };

  // ฟังก์ชันในการคำนวณขนาดฟอนต์แบบ responsive
  const calculateResponsiveFontSize = () => {
    const baseFontSize = parseFloat(sizeMap[level].fontSize);
    const screenWidth = window.innerWidth;

    // ปรับฟอนต์ขนาดตามความกว้างของหน้าจอ
    if (screenWidth <= 768) {
      return `${baseFontSize * 0.8}px`; // ลดขนาดฟอนต์ลงเล็กน้อยในมือถือ
    }
    return `${baseFontSize}px`;
  };

  const defaultStyle = {
    fontFamily: '"Noto Sans Thai", AIAEverest, NotoSansTamil, NotoSansSinhala, PingFang, Helvetica, sans-serif',
    fontStyle: 'normal',
    fontWeight: fontWeight,
    color: color,
    fontSize: calculateResponsiveFontSize(),
    lineHeight: `${parseFloat(calculateResponsiveFontSize()) * (parseFloat(sizeMap[level].lineHeight) / parseFloat(sizeMap[level].fontSize))}px`,
    ...style,
  };

  return <Tag style={defaultStyle}>{text}</Tag>;
}

Heading.propTypes = {
  level: PropTypes.oneOf([1, 2, 3, 4, 5, 6]).isRequired,
  text: PropTypes.string.isRequired,
  style: PropTypes.object,
  fontWeight: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  color: PropTypes.string,
};

export default Heading;
