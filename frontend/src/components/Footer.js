import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">

        <div className="social-icons">
          <a
            href="https://github.com/oliveirammluis"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub size={20} />
          </a>
          <a
            href="https://www.linkedin.com/in/oliveirammluis/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin size={20} />
          </a>
          
        </div>
        <p className="footer-text">
          © {new Date().getFullYear()} Luís Oliveira - All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
