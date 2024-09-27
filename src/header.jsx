import React, { useState } from 'react';
import './Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="mobile-header">
      
      <nav className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
      </nav>
      <div className="menu-icon" onClick={toggleMenu}>
        <span>&#9776;</span> {/* Иконка гамбургера */}
      </div>
    </header>
  );
};

export default Header;