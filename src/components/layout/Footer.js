import React from 'react';

function Footer() {
  const footerStyle = {
    backgroundColor: '#333',
    color: '#fff',
    textAlign: 'center',
    padding: '10px 0',
    position: 'relative',
    width: '100%',
    marginTop: '20px',
    fontSize: '14px',
    lineHeight: '1.5',
  };

  const linkStyle = {
    color: '#00aaff',
    textDecoration: 'underline',
  };

  // Media query for mobile devices
  const mobileFooterStyle = {
    ...footerStyle,
    fontSize: '12px', // Smaller font size for mobile
    padding: '8px 0', // Adjust padding for mobile
  };

  const isMobile = window.innerWidth <= 768; // You can adjust the width as needed

  return (
    <footer style={isMobile ? mobileFooterStyle : footerStyle}>
      <p> Copyright&copy; 2024 ตัวแทนประกันชีวิตเอไอเอ คุณดาระวี บุญสิริเวทย์</p>
      <p>เว็บไซต์นี้ไม่ใช่เว็บไซต์ของบริษัท เอไอเอ จำกัด (เอไอเอ) หากต้องการติดต่อ เอไอเอ กรุณาคลิก <a href="https://www.aia.co.th" target="_blank" rel="noopener noreferrer" style={linkStyle}>www.aia.co.th</a></p>
    </footer>
  );
}

export default Footer;
