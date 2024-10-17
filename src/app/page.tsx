import React from 'react';
import './globals.css';

function App() {
  return (
    <div className="container">
      <div className="logoContainer">
        <img src="logo.png" alt="logo"/>
      </div>
      
      
      <div className="eyeContainer">
        <img src="eye.png" alt="eye"/>
      </div>

      <div className="socialIcons">
        <a href="https://www.spotify.com" target="_blank" rel="noopener noreferrer">
          <img className="icon" src="spotify.png" alt="Spotify" />
        </a>
        <a href="https://soundcloud.com/mistcreep-259157587" target="_blank" rel="noopener noreferrer">
          <img className="icon" src="soundcloud.png" alt="SoundCloud" />
        </a>
        <a href="https://www.instagram.com/mistcreeep/" target="_blank" rel="noopener noreferrer">
          <img className="icon" src="insta.png" alt="Instagram" />
        </a>
        <a href="https://www.youtube.com/@mistcreeep" target="_blank" rel="noopener noreferrer">
          <img className="icon" src="youtube.png" alt="YouTube" />
        </a>
        <a href="https://www.linkedin.com/in/mist-creep-0ab145330/" target="_blank" rel="noopener noreferrer">
          <img className="icon" src="linkedin.png" alt="LinkedIn" />
        </a>
        <a href="https://www.tiktok.com/@mistcreep" target="_blank" rel="noopener noreferrer">
          <img className="icon" src="tiktok.png" alt="TikTok" />
        </a>

      </div>
    </div>
  );
}

export default App;
