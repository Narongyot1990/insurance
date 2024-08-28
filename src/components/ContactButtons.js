import React, { useState, useRef, useEffect } from 'react';
import MessengerButton from './MessengerButton';
import LineButton from './LineButton';
import PhoneButton from './PhoneButton';
import './ContactButtons.css';
import img from '../assets/images/msg.png';

function ContactButtons() {
  const [isOpen, setIsOpen] = useState(false);
  const buttonRef = useRef(null);
  const [position, setPosition] = useState({ top: '85%', left: 'auto', right: '25px', bottom: 'auto' });
  const [isShrunk, setIsShrunk] = useState(false); // สถานะการย่อขนาด
  const shrinkTimeout = useRef(null);

  const toggleButtons = () => {
    setIsOpen(!isOpen);
  };

  const disableScroll = (e) => {
    e.preventDefault();
  };

  const handleDragStart = (e) => {
    e.preventDefault();
    const target = buttonRef.current;
    let shiftX, shiftY;

    if (e.type === 'touchstart') {
      document.body.addEventListener('touchmove', disableScroll, { passive: false });
      shiftX = e.touches[0].clientX - target.getBoundingClientRect().left;
      shiftY = e.touches[0].clientY - target.getBoundingClientRect().top;
    } else {
      shiftX = e.clientX - target.getBoundingClientRect().left;
      shiftY = e.clientY - target.getBoundingClientRect().top;
    }

    const onMove = (moveEvent) => {
      let clientX, clientY;

      if (moveEvent.type === 'touchmove') {
        clientX = moveEvent.touches[0].clientX;
        clientY = moveEvent.touches[0].clientY;
      } else {
        clientX = moveEvent.clientX;
        clientY = moveEvent.clientY;
      }

      const newLeft = clientX - shiftX;
      const newTop = clientY - shiftY;

      setPosition({ top: `${newTop}px`, left: `${newLeft}px`, right: 'auto', bottom: 'auto' });
    };

    const onStop = () => {
      document.removeEventListener('mousemove', onMove);
      document.removeEventListener('mouseup', onStop);
      document.removeEventListener('touchmove', onMove);
      document.removeEventListener('touchend', onStop);
      document.body.removeEventListener('touchmove', disableScroll); // เปิดการเลื่อนกลับมา
    };

    document.addEventListener('mousemove', onMove);
    document.addEventListener('mouseup', onStop);
    document.addEventListener('touchmove', onMove);
    document.addEventListener('touchend', onStop);
  };

  const resetShrinkTimeout = () => {
    clearTimeout(shrinkTimeout.current);
    setIsShrunk(false);

    shrinkTimeout.current = setTimeout(() => {
      setIsShrunk(true);
    }, 5000);
  };

  useEffect(() => {
    window.addEventListener('scroll', resetShrinkTimeout);

    resetShrinkTimeout(); // เริ่มต้นการจับเวลา

    return () => {
      window.removeEventListener('scroll', resetShrinkTimeout);
      clearTimeout(shrinkTimeout.current);
    };
  }, []);

  return (
    <div
      className={`contact-buttons-container ${isShrunk ? 'shrunk' : ''}`} // เพิ่มคลาส shrunk เมื่อย่อขนาด
      ref={buttonRef}
      onMouseDown={handleDragStart}
      onTouchStart={handleDragStart}
      style={{ top: position.top, left: position.left, right: position.right, bottom: position.bottom }}
    >
      <div className="main-button-label">
        <span>{/* เพิ่ม label ที่นี่ */}</span>
        <button
          onClick={toggleButtons}
          className={`main-contact-button ${isOpen ? 'open' : ''}`}
        >
          <img src={img} alt="Messenger Icon" />
        </button>
      </div>
      <MessengerButton isOpen={isOpen} style={{ top: '60px', left: '0px' }} />
      <LineButton isOpen={isOpen} style={{ top: '120px', left: '0px' }} />
      <PhoneButton isOpen={isOpen} style={{ top: '180px', left: '0px' }} />
    </div>
  );
}

export default ContactButtons;
