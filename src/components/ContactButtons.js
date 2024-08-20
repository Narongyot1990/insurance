// src/components/ContactButtons.js
import React, { useState } from 'react';
import MessengerButton from './MessengerButton';
import LineButton from './LineButton';
import PhoneButton from './PhoneButton';
import './ContactButtons.css';
import img from '../assets/images/msg.png';

function ContactButtons() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleButtons = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="contact-buttons-container">
      <div className="main-button-label">
        <span>{/* เพิ่ม label ที่นี่ */}</span> 
        <button
          onClick={toggleButtons}
          className={`main-contact-button ${isOpen ? 'open' : ''}`}
        >
          <img src={img} alt="Messenger Icon" />
        </button>
      </div>
      <MessengerButton isOpen={isOpen} />
      <LineButton isOpen={isOpen} />
      <PhoneButton isOpen={isOpen} />
    </div>
  );
}

export default ContactButtons;
