'use client';

import React, { useEffect } from 'react';
import './globals.css';

function App() {
  useEffect(() => {
    const layers = document.querySelectorAll('.layer') as NodeListOf<HTMLElement>;
  
    let lastScrollTop = 0;
    let ticking = false;
  
    const handleScroll = () => {
      lastScrollTop = window.pageYOffset || document.documentElement.scrollTop;
  
      if (!ticking) {
        window.requestAnimationFrame(() => {
          layers.forEach((layer) => {
            const speedAttr = layer.getAttribute('data-speed');
            const speed = speedAttr ? parseFloat(speedAttr) : 0;
  
            layer.style.transform = `translateY(-${lastScrollTop * speed}px)`;
          });
  
          ticking = false;
        });
  
        ticking = true;
      }
    };
  
    handleScroll();
  
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="container">
      <div className="logoContainer">
        <img src="simplelogo-1.png" alt="logo" />
      </div>

      <div className="eyeContainer">
        <div className="eyeWrapper">
          <img src="eyewithwhite.png" className="eye" alt="eye" />
          <div className="parallax">
            <img src="upper.png" className="layer" data-speed="0.3" alt="upper" />
            <img src="middle.png" className="layer" data-speed="0.4" alt="middle" />
            <img src="secondtrees.png" className="layer" data-speed="0.5" alt="second trees" />
            <img src="lowertrees.png" className="layer" data-speed="0.6" alt="lower trees" />
            <img src="clueless.png" className="layer" data-speed="0.7" alt="clueless" />
          </div>
        </div>
        <div className="whiteCover"></div>
      </div>


      <div className="bioWrapper">
        <img src="tree.png" alt="Trees" className="treesImage" />
        
        <div className="bioSection">


            <h2>prodclueless</h2>
            <p>
              tutorials, beats, and serum presets
            </p>

            <div className="socialIcons">
              <a href="https://open.spotify.com/artist/6JsakuHNJCFmLAVvhpjHLz?si=aDVrMJrMTkqO0aBn-fMMfQ&utm_medium=share&utm_source=linktree&nd=1&dlsi=76b2aeca904d48ee" target="_blank" rel="noopener noreferrer" className="social-icon">
                <img src="spotify.png" alt="Spotify" />
              </a>
              <a href="https://www.youtube.com/@prodclueless" target="_blank" rel="noopener noreferrer" className="social-icon">
                <img src="youtube.png" alt="YouTube" />
              </a>
              <a href="https://www.beatstars.com/prodclueless" target="_blank" rel="noopener noreferrer" className="social-icon">
                <img src="beatstars.png" alt="BeatStars" />
              </a>
              <a href="https://soundcloud.com/clueless27" target="_blank" rel="noopener noreferrer" className="social-icon">
                <img src="soundcloud.png" alt="SoundCloud" />
              </a>
              <a href="https://www.fiverr.com/prodclueless/mix-and-produce-your-music-with-a-professional-sound?utm_campaign=gigs_show&utm_medium=shared&utm_source=copy_link&utm_term=b4ebbk" target="_blank" rel="noopener noreferrer" className="social-icon">
                <img src="fiver.png" alt="Fiverr" />
              </a>
              <a href="https://www.instagram.com/prodclueless/" target="_blank" rel="noopener noreferrer" className="social-icon">
                <img src="instagram.png" alt="Instagram" />
              </a>
              <a href="https://www.patreon.com/prodcluelesspacks" target="_blank" rel="noopener noreferrer" className="social-icon">
                <img src="patreon.png" alt="Patreon" />
              </a>
            </div>
        </div>
      </div>

      <footer className="footer">
        <div className="footer-content">
          made by{' '}
          <a
            href="https://mistcreep.com"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-link"
          >
            mistcreep
            <img src="mistcreeplogo.png" alt="mistcreep logo" className="footer-logo" />
          </a>
        </div>
      </footer>

    </div>
  );
}

export default App;