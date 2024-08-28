import React, { useState, useEffect, useCallback } from 'react';
import './Carousel.css';

function Carousel({ slides }) {
  const [currentIndex, setCurrentIndex] = useState(1); 
  const [isAnimating, setIsAnimating] = useState(false);
  const [touchStartX, setTouchStartX] = useState(0);
  const [touchEndX, setTouchEndX] = useState(0);
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
      setCurrentIndex(index + 1); 
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

        if (currentIndex === 0) {
          setCurrentIndex(totalSlides);
        } else if (currentIndex === totalSlides + 1) {
          setCurrentIndex(1); 
        }
      }, 500);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, isAnimating, totalSlides]);

  // Handle touch start
  const handleTouchStart = (e) => {
    setTouchStartX(e.touches[0].clientX);
  };

  // Handle touch move (optional: to detect the direction of swipe while touching)
  const handleTouchMove = (e) => {
    setTouchEndX(e.touches[0].clientX);
  };

  // Handle touch end
  const handleTouchEnd = () => {
    if (touchStartX - touchEndX > 50) {
      goToNextSlide(); // Swipe left, go to next slide
    }

    if (touchStartX - touchEndX < -50) {
      goToPreviousSlide(); // Swipe right, go to previous slide
    }
  };

  return (
    <div
      className="carousel"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <div
        className="carousel-track"
        style={{
          transform: `translateX(-${currentIndex * 100}%)`,
          transition: isAnimating ? 'transform 0.5s ease' : 'none',
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
      <button className="carousel-button carousel-button-left" onClick={goToPreviousSlide} disabled={isAnimating}></button>
      <button className="carousel-button carousel-button-right" onClick={goToNextSlide} disabled={isAnimating}></button>
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
