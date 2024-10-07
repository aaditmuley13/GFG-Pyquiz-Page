import React from 'react';
import './App.css'; 
import logo from './logo.png'; 

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
      <img src={logo}  />
      </div>
      <nav className="nav">
        <a>Products</a>
        <a>Resources</a>
        <a>Developers</a>
      </nav>
      <button className="open-app-btn">Open App</button>
    </header>
  );
};

export default Header;
