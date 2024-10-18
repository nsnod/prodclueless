import React from 'react';
import './globals.css';

function App() {
  return (
    <div className="container">
      <div className="logoContainer">
        <img src="logo.png" alt="logo"/>
      </div>
      
      <div className="eyeContainer">
        <img src="eye.png" className="eye" alt="eye" />
        <div className="parallax">
          <img src="upper.png" className="layer layer-back" alt="upper" />
          <img src="middle.png" className="layer layer-middle" alt="middle" />
          <img src="secondtrees.png" className="layer layer-second-trees" alt="second trees" />
          <img src="lowertrees.png" className="layer layer-lower-trees" alt="lower trees" />
          <img src="clueless.png" className="layer layer-front" alt="clueless" />
        </div>
      </div>

      <div className="socialIcons">
      </div>
    </div>
  );
}

export default App;