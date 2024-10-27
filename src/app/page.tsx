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
  
    // Initial call to set the position when the component mounts
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

      <div className="socialIcons"></div>
    </div>
  );
}

export default App;