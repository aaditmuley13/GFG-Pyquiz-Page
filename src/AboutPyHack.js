import React from 'react';
import smiley from './smiley.png'; 
import tt from './tt.png';
function AboutPyHack() {
  return (
    <section className="about-pyhack">
      <h2>About PyHack</h2>
      <p>PyHack is a dynamic, community-driven workshop designed to teach game development using Python.</p>
      <a className="learn-more">Learn More &rarr;</a>

      <div className="about-grid">
        <div className="about-card">
        <img src={smiley}  />
        </div>
        <div className="about-card">
          <img src={tt}  />

          
        </div>
      </div>
    </section>
  );
}

export default AboutPyHack;
