// src/components/PhoneButton.js
import React from 'react';
import phoneIcon from '../assets/images/phone2.png'; 

function PhoneButton({ isOpen }) {
  return (
    <a
      href="tel:0951192491" 
      className={`phone-button ${isOpen ? 'open' : ''}`}
    >
      <img src={phoneIcon} alt="Phone Icon" />
    </a>
  );
}

export default PhoneButton;
