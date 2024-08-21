import React from 'react';
import './LineButton.css'; 
import lineIcon from '../assets/images/line.png';

function LineButton({ isOpen }) {
  return (
    <a
      href="https://line.me/R/ti/p/noomnim_ja" // ลิงก์เข้าสู่การสนทนาใน Line โดยตรง
      target="_blank"
      rel="noopener noreferrer"
      className={`line-button ${isOpen ? 'open' : ''}`}
    >
      <img src={lineIcon} alt="Line Icon" />
    </a>
  );
}

export default LineButton;
