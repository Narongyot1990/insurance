import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const TextToSpeech = ({ text }) => {
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [utterance, setUtterance] = useState(null);

  const speakContent = () => {
    if (utterance) {
      window.speechSynthesis.cancel();
    }
    const newUtterance = new SpeechSynthesisUtterance(text);
    newUtterance.lang = 'th-TH';
    newUtterance.onstart = () => {
      setIsSpeaking(true);
      setIsPaused(false);
    };
    newUtterance.onend = () => {
      setIsSpeaking(false);
      setIsPaused(false);
    };
    setUtterance(newUtterance);
    window.speechSynthesis.speak(newUtterance);
  };

  const handlePause = () => {
    window.speechSynthesis.pause();
    setIsPaused(true);
  };

  const handleResume = () => {
    window.speechSynthesis.resume();
    setIsPaused(false);
  };

  const handleStop = () => {
    window.speechSynthesis.cancel();
    setIsSpeaking(false);
    setIsPaused(false);
  };

  const handleRewind = () => {
    if (utterance) {
      window.speechSynthesis.cancel();
      speakContent();
    }
  };

  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <button
        onClick={speakContent} // เปลี่ยนจาก speak เป็น speakContent
        style={{
          border: 'none',
          borderRadius: '50px',
          boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
          fontSize: '2rem', // ขยายปุ่มเสียงให้ใหญ่ขึ้น
        }}
      >
        🔊 
      </button>

      {ReactDOM.createPortal(
        isSpeaking && (
          <div
            style={{
              position: 'fixed',
              bottom: '20px',
              left: '50%',
              transform: 'translateX(-50%)',
              width: '300px',
              backgroundColor: 'rgba(255, 255, 255, 0.9)',
              borderRadius: '20px',
              padding: '10px',
              zIndex: 1000,
              boxShadow: '0px 10px 30px rgba(0, 0, 0, 0.2)',
              display: 'flex',
              justifyContent: 'space-around',
              alignItems: 'center',
            }}
          >
            <button
              onClick={handleRewind}
              style={{
                cursor: 'pointer',
                padding: '10px',
                backgroundColor: 'transparent',
                color: 'black',
                border: 'none',
                borderRadius: '50%',
                fontSize: '16px',
                width: '50px',
                height: '50px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              ⏪
            </button>
            {isPaused ? (
              <button
                onClick={handleResume}
                style={{
                  cursor: 'pointer',
                  padding: '10px',
                  backgroundColor: 'transparent',
                  color: 'black',
                  border: 'none',
                  borderRadius: '50%',
                  fontSize: '36px',
                  width: '50px',
                  height: '50px',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                ▶️
              </button>
            ) : (
              <button
                onClick={handlePause}
                style={{
                  cursor: 'pointer',
                  padding: '10px',
                  backgroundColor: 'transparent',
                  color: 'black',
                  border: 'none',
                  borderRadius: '50%',
                  fontSize: '32px',
                  width: '50px',
                  height: '50px',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                ⏸
              </button>
            )}
            <button
              onClick={handleStop}
              style={{
                cursor: 'pointer',
                padding: '10px',
                backgroundColor: 'transparent',
                color: 'black',
                border: 'none',
                borderRadius: '50%',
                fontSize: '32px',
                width: '50px',
                height: '50px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              ⏹
            </button>
          </div>
        ),
        document.body
      )}
    </div>
  );
};

export default TextToSpeech;
