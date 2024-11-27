// src/BackgroundAudio.jsx
import React, { useState, useRef, useEffect } from 'react';

const BackgroundAudio = () => {
  const [isMuted, setIsMuted] = useState(true); // Audio starts muted
  const audioRef = useRef(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (audio) {
      audio.muted = isMuted;
      audio.play().catch((error) => {
        console.warn('Autoplay was prevented:', error);
      });
    }
  }, [isMuted]);

  const toggleMute = () => {
    setIsMuted((prevMuted) => !prevMuted);
  };

  return (
    <>
      <audio ref={audioRef} autoPlay loop muted>
        <source src="/song.mp3" type="audio/mpeg" />
        <source src="/song.ogg" type="audio/ogg" />
        Your browser does not support the audio element.
      </audio>

      <div className="audio-controls">
        <button onClick={toggleMute} style={styles.audioButton} aria-label={isMuted ? 'Unmute background music' : 'Mute background music'}>
          {isMuted ? 'Unmute Music' : 'Mute Music'}
        </button>
      </div>
    </>
  );
};

const styles = {
  audioButton: {
    position: 'fixed',
    bottom: '20px',
    right: '20px',
    padding: '0.5rem 1rem',
    backgroundColor: '#000000',
    color: '#ffffff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '1rem',
    transition: 'background-color 0.3s ease',
    zIndex: 1000,
  },
};

export default BackgroundAudio;