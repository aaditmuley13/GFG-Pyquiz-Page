import React from 'react';
import './App.css';
import Header from './Header';
import HeroSection from './HeroSection';
import WorkshopFeatures from './WorkshopFeatures';
import AboutPyHack from './AboutPyHack'; 
import FAQSection from './FAQSection';
import Footer from './Footer';

function App() {
  return (
    <div>
      <Header />
      <HeroSection />
      <WorkshopFeatures />
      <AboutPyHack />    
      <FAQSection />      
      <Footer />          
    </div>
  );
}

export default App;
