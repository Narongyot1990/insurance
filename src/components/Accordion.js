import React, { useState } from 'react';
import './Accordion.css';

function Accordion({ title, children }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="accordion">
      <div className={`accordion-header ${isOpen ? 'open' : ''}`} onClick={toggleAccordion}>
          {title}
        <div className="accordion-controls">
          <div className="accordion-icon">
            {isOpen ? '-' : '+'} 
          </div>
        </div>
      </div>
      <div className={`accordion-content ${isOpen ? 'open' : ''}`}>
        {children}
      </div>
    </div>
  );
}

export default Accordion;
