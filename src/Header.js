import React from 'react';
import './App.css'; 
import logo from './logo.png'; 

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
      <img src={logo} alt="Placeholder Image" />
      </div>
      <nav className="nav">
        <a href="#">Products</a>
        <a href="#">Resources</a>
        <a href="#">Developers</a>
      </nav>
      <button className="open-app-btn">Open App</button>
    </header>
  );
};

export default Header;
