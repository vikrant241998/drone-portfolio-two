"use client"
import React, { useState } from 'react';
import '../styles/header.css';

interface NavLink {
  label: string;
  href: string;
}

const navLinks: NavLink[] = [
  { label: 'HOME', href: '#/' },
  { label: 'ABOUT', href: '#about-us' },
  { label: 'PORTFOLIO', href: '#portfolio' },
  // { label: 'SERVICES', href: '#services' },
  { label: 'CONTACT', href: '#contact-us' },
];

const Header: React.FC = () => {
  // Mobile menu state
  const [isOpen, setIsOpen] = useState(false);

  // Hamburger button click handler
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="header">
      <div className="container">
        <div className="logo">Skyline Tech</div>
        
        <button 
          className="hamburger" 
          onClick={toggleMenu} 
          aria-label="Toggle Menu"
          data-is-open={isOpen}
        >
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
        </button>

        {/* Desktop Navigation */}
        <nav className={`nav ${isOpen ? 'nav-open' : ''}`}>
          {navLinks.map((link) => (
            <a 
              key={link.href} 
              href={link.href} 
              className="nav-link" 
              onClick={() => setIsOpen(false)} 
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;