import React, { useState, useEffect, useCallback } from 'react';
import './Carousel.css';

function Carousel({ slides }) {
  const [currentIndex, setCurrentIndex] = useState(1); // Start at 1 because we duplicate the last slide at index 0
  const [isAnimating, setIsAnimating] = useState(false);
  const totalSlides = slides.length;

  const goToNextSlide = useCallback(() => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentIndex((prevIndex) => prevIndex + 1);
    }
  }, [isAnimating]);

  const goToPreviousSlide = useCallback(() => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentIndex((prevIndex) => prevIndex - 1);
    }
  }, [isAnimating]);

  const goToSlide = useCallback((index) => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentIndex(index + 1); // Offset by 1 to account for the duplicated first slide
    }
  }, [isAnimating]);

  useEffect(() => {
    const interval = setInterval(goToNextSlide, 7000);
    return () => clearInterval(interval);
  }, [goToNextSlide]);

  useEffect(() => {
    if (isAnimating) {
      const timeout = setTimeout(() => {
        setIsAnimating(false);

        // Handle seamless looping
        if (currentIndex === 0) {
          setCurrentIndex(totalSlides); // Jump to the last slide without animation
        } else if (currentIndex === totalSlides + 1) {
          setCurrentIndex(1); // Jump to the first slide without animation
        }
      }, 500);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, isAnimating, totalSlides]);

  return (
    <div className="carousel">
      <div
        className="carousel-track"
        style={{
          transform: `translateX(-${currentIndex * 100}%)`,
          transition: isAnimating ? 'transform 0.5s ease' : 'none', // Disable transition during jump
        }}
      >
        {/* Duplicate last slide */}
        <div className="carousel-slide">
          <img src={slides[totalSlides - 1].image} alt={slides[totalSlides - 1].caption} />
          <div className="carousel-caption">{slides[totalSlides - 1].caption}</div>
        </div>
        {slides.map((slide, index) => (
          <div className="carousel-slide" key={index}>
            <img src={slide.image} alt={slide.caption} />
            <div className="carousel-caption">{slide.caption}</div>
          </div>
        ))}
        {/* Duplicate first slide */}
        <div className="carousel-slide">
          <img src={slides[0].image} alt={slides[0].caption} />
          <div className="carousel-caption">{slides[0].caption}</div>
        </div>
      </div>
      <button className="carousel-button carousel-button-left" onClick={goToPreviousSlide} disabled={isAnimating}>
        &lt;
      </button>
      <button className="carousel-button carousel-button-right" onClick={goToNextSlide} disabled={isAnimating}>
        &gt;
      </button>
      <div className="carousel-indicators">
        {slides.map((_, index) => (
          <span
            key={index}
            className={`carousel-indicator ${index + 1 === currentIndex ? 'active' : ''}`}
            onClick={() => goToSlide(index)}
          ></span>
        ))}
      </div>
    </div>
  );
}

export default Carousel;
