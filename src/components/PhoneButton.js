// src/components/PhoneButton.js
import React from 'react';
import './PhoneButton.css'; // สร้างไฟล์ CSS ใหม่สำหรับ PhoneButton
import phoneIcon from '../assets/images/phone2.png'; // ใส่ path ที่ถูกต้องของไอคอนโทรศัพท์

function PhoneButton({ isOpen }) {
  return (
    <a
      href="tel:0951192491" // เปลี่ยนเป็นเบอร์โทรของคุณ
      className={`phone-button ${isOpen ? 'open' : ''}`}
    >
      <img src={phoneIcon} alt="Phone Icon" />
    </a>
  );
}

export default PhoneButton;
