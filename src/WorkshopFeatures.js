import React from 'react';
import './App.css';
import backgroundImg from './Screenshot (9).png'; // Adjust this path

const WorkshopFeatures = () => {
  const features = [
    { 
      title: "Game Mechanics", 
      description: "Master physics, collision detection, AI, and game loops.", 
      link: "#game-mechanics" 
    },
    { 
      title: "Visual Effects", 
      description: "Create 2D/3D graphics and animations.", 
      link: "#visual-effects" 
    },
    { 
      title: "Game Balancing", 
      description: "Balance difficulty and progression.", 
      link: "#game-balancing"
    },
    { 
      title: "Cross-Platform Dev", 
      description: "Deploy games on PC, web, and mobile.", 
      link: "#cross-platform-dev" 
    },
  ];

  return (
    <section className="features-section">
      <h2>Workshop Features</h2>
      <div className="features-grid">
        {features.map((feature, index) => (
          <a key={index} href={feature.link} className="feature-card-link">
            <div 
              className="feature-card"
              style={{
                backgroundImage: `url(${backgroundImg})`
              }}
            >
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default WorkshopFeatures;
