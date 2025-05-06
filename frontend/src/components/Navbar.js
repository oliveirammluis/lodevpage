import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';

function Navbar() {
  const [menuActive, setMenuActive] = useState(false);

  const toggleMenu = () => {
    setMenuActive(!menuActive);
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
          <Link to="/">
            Home
            <span></span>
          </Link>
        </li>
        <li>
          <Link to="/work">
            Work
            <span></span>
          </Link>
        </li>
        <li>
          <Link to="/about">
            About
            <span></span>
          </Link>
        </li>
        <li>
          <Link to="/blog">
            Blog
            <span></span>
          </Link>
        </li>
        <li>
          <Link to="/more">
            More
            <span></span>
          </Link>
        </li>
        <li>
          <Link to="/book-a-call">
            Book a Call
            <span></span>
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
