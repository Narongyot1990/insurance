import React, { useState, useRef, useEffect } from 'react';
import './Accordion.css';

function Accordion({ title, children }) {
  const [isOpen, setIsOpen] = useState(false);
  const [contentHeight, setContentHeight] = useState(0);
  const contentRef = useRef(null);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    if (contentRef.current) {
      setContentHeight(contentRef.current.scrollHeight);
    }
  }, [isOpen, children]); 

  return (
    <div className="accordion">
      <div className={`accordion-header ${isOpen ? 'open' : ''}`} onClick={toggleAccordion}>
        <h3>{title}</h3>
        <div className="accordion-icon">
          {isOpen ? '-' : '+'} 
        </div>
      </div>
      <div
        className={`accordion-content ${isOpen ? 'open' : ''}`}
        style={{ maxHeight: isOpen ? `${contentHeight}px` : '0px' }}
        ref={contentRef}
      >
        {children}
      </div>
    </div>
  );
}

export default Accordion;
