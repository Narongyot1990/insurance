import React, { useEffect, useState } from 'react';
import './health-insurance.css';

const sections_heading = [
  {
    name: 'Glitch Effect',
    effectClass: 'glitch-bg',
    content: (
      <div className="section-content">
        <h1>Glitch Effect</h1>
        <p>This background simulates a glitchy effect.</p>
      </div>
    ),
  },
  {
    name: 'Particle Effect',
    effectClass: 'particle-bg',
    content: (
      <div className="section-content">
        <h1>Particle Effect</h1>
        <p>Particles are moving upwards, giving a dynamic look.</p>
      </div>
    ),
  },
  {
    name: 'Neon Glow Effect',
    effectClass: 'neon-bg',
    content: (
      <div className="section-content">
        <h1>Neon Glow Effect</h1>
        <p>A bright and glowing neon effect is applied to the background.</p>
      </div>
    ),
  },
  {
    name: 'Aurora Borealis Effect',
    effectClass: 'aurora-bg',
    content: (
      <div className="section-content">
        <h1>Aurora Borealis Effect</h1>
        <p>This background simulates the Northern Lights.</p>
      </div>
    ),
  },
];

function MultiEffectBackground() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleScroll = () => {
    const scrollY = window.scrollY;
    const windowHeight = window.innerHeight;
    const newIndex = Math.min(
    sections_heading.length - 1,
      Math.floor(scrollY / windowHeight)
    );
    setActiveIndex(newIndex);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="multi-effect-container">
      {sections_heading.map((section, index) => (
        <div
          key={index}
          className={`background ${section.effectClass} ${index === activeIndex ? 'visible' : 'hidden'}`}
        >
          {section.effectClass === 'glitch-bg' &&
            Array.from({ length: 100 }).map((_, i) => (
              <div key={i} className="glitch-line" style={{ '--i': i }}></div>
            ))}
        </div>
      ))}
      {sections_heading.map((section, index) => (
        <div
          key={index}
          className={`overlay-content ${index === activeIndex ? 'visible' : 'hidden'}`}
        >
          {section.content}
        </div>
      ))}
    </div>
  );
}

export default MultiEffectBackground;
