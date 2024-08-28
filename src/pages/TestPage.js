import React, { useState, useEffect } from 'react';

const TextToSpeech = ({ text }) => {
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [progress, setProgress] = useState(0);
  const [utterance, setUtterance] = useState(null);

  useEffect(() => {
    if (utterance) {
      const interval = setInterval(() => {
        const synth = window.speechSynthesis;
        if (synth.speaking) {
          setProgress(
            ((synth.getVoices().indexOf(utterance.voice) + 1) /
              synth.getVoices().length) *
              100
          );
        } else {
          clearInterval(interval);
        }
      }, 100);
    }
  }, [utterance]);

  const speak = () => {
    const newUtterance = new SpeechSynthesisUtterance(text);
    newUtterance.lang = 'th-TH';
    newUtterance.onstart = () => setIsSpeaking(true);
    newUtterance.onend = () => {
      setIsSpeaking(false);
      setProgress(0);
    };
    setUtterance(newUtterance);
    window.speechSynthesis.speak(newUtterance);
  };

  const handlePause = () => {
    window.speechSynthesis.pause();
  };

  const handleResume = () => {
    window.speechSynthesis.resume();
  };

  const handleStop = () => {
    window.speechSynthesis.cancel();
    setIsSpeaking(false);
    setProgress(0);
  };

  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <button
        onClick={speak}
        style={{
          cursor: 'pointer',
          padding: '10px',
          backgroundColor: '#007bff',
          color: 'white',
          border: 'none',
          borderRadius: '5px',
          marginBottom: '20px'
        }}
      >
        🔊 อ่านออกเสียง
      </button>

      {isSpeaking && (
        <div
          style={{
            position: 'fixed',
            bottom: '20px',
            left: '50%',
            transform: 'translateX(-50%)',
            width: '80%',
            backgroundColor: '#f1f1f1',
            borderRadius: '5px',
            padding: '20px',
            zIndex: '1000',
            boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
          }}
        >
          <div
            style={{
              width: '100%',
              backgroundColor: '#ccc',
              borderRadius: '5px',
              overflow: 'hidden',
            }}
          >
            <div
              style={{
                width: `${progress}%`,
                height: '10px',
                backgroundColor: '#007bff',
                transition: 'width 0.5s ease',
              }}
            ></div>
          </div>
          <div
            style={{
              marginTop: '10px',
              display: 'flex',
              justifyContent: 'space-between',
            }}
          >
            <button
              onClick={handlePause}
              style={{
                cursor: 'pointer',
                padding: '10px',
                backgroundColor: '#f39c12',
                color: 'white',
                border: 'none',
                borderRadius: '5px',
              }}
            >
              ⏸ หยุดชั่วคราว
            </button>
            <button
              onClick={handleResume}
              style={{
                cursor: 'pointer',
                padding: '10px',
                backgroundColor: '#27ae60',
                color: 'white',
                border: 'none',
                borderRadius: '5px',
              }}
            >
              ▶️ เล่นต่อ
            </button>
            <button
              onClick={handleStop}
              style={{
                cursor: 'pointer',
                padding: '10px',
                backgroundColor: '#e74c3c',
                color: 'white',
                border: 'none',
                borderRadius: '5px',
              }}
            >
              ⏹ ยกเลิก
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

const TestPage = () => {
  return (
    <div style={{ padding: '20px' }}>
      <h1>ทดสอบการอ่านออกเสียง</h1>
      <TextToSpeech text="สวัสดีครับ นี่คือการทดสอบการอ่านออกเสียง" />
    </div>
  );
};

export default TestPage;
