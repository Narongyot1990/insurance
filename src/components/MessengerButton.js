import React from 'react';
import './MessengerButton.css';
import fb from '../assets/images/pngwing.com.png';

function MessengerButton({ isOpen }) {
  return (
    <a
      href="https://m.me/leave.my"
      target="_blank"
      rel="noopener noreferrer"
      className={`messenger-button ${isOpen ? 'open' : ''}`}
    >
      <img src={fb} alt="Messenger Icon" />
    </a>
  );
}

export default MessengerButton;
