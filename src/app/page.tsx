'use client';

import React, { useEffect } from 'react';
import './globals.css';

function App() {
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.pageYOffset;
      const layers = document.querySelectorAll('.layer') as NodeListOf<HTMLElement>;
      layers.forEach((layer) => {
        const speedAttr = layer.getAttribute('data-speed');
        const speed = speedAttr ? parseFloat(speedAttr) : 0;
        // Reverse the direction by subtracting the scroll offset
        layer.style.transform = `translate(-50%, calc(-50% - ${scrollPosition * speed}px))`;
      });
    };
  
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="container">
      <div className="logoContainer">
        <img src="simplelogo-1.png" alt="logo"/>
      </div>
      
      <div className="eyeContainer">
        <img src="eyewithwhite.png" className="eye" alt="eye" />
        <div className="parallax">
          <img src="upper.png" className="layer" data-speed="0.1" alt="upper" />
          <img src="middle.png" className="layer" data-speed="0.2" alt="middle" />
          <img src="secondtrees.png" className="layer" data-speed="0.3" alt="second trees" />
          <img src="lowertrees.png" className="layer" data-speed="0.4" alt="lower trees" />
          <img src="clueless.png" className="layer" data-speed="0.5" alt="clueless" />
        </div>
        <div className="whiteCover"></div>
      </div>

      <div className="socialIcons"></div>
    </div>
  );
}

export default App;