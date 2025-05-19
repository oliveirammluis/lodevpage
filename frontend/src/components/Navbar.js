import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';

function Navbar() {
  const [menuActive, setMenuActive] = useState(false);

  const toggleMenu = () => {
    setMenuActive(!menuActive);
  };

  const handleLinkClick = () => {
    setMenuActive(false); // Fecha o menu quando um link é clicado
  };

  return (
    <nav className="navbar">
      <div className={`menu-toggle ${menuActive ? 'active' : ''}`} id="menu-toggle" onClick={toggleMenu}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
      <ul className={`nav-links ${menuActive ? 'active' : ''}`} id="nav-links">
        <li>
          <Link to="/" onClick={handleLinkClick}>
            Home
            <span></span>
          </Link>
        </li>
        <li>
          <Link to="/work" onClick={handleLinkClick}>
            Work
            <span></span>
          </Link>
        </li>
        <li>
          <Link to="/about" onClick={handleLinkClick}>
            About
            <span></span>
          </Link>
        </li>
        <li>
          <Link to="/blog" onClick={handleLinkClick}>
            Blog
            <span></span>
          </Link>
        </li>
        <li>
          <Link to="/more" onClick={handleLinkClick}>
            More
            <span></span>
          </Link>
        </li>
        <li>
          <Link to="/book-a-call" onClick={handleLinkClick}>
            Book a Call
            <span></span>
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
