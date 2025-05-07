import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-4">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <p className="text-sm text-gray-400"> © {new Date().getFullYear()} Luís Oliveira - All rights reserved.</p>
        <div className="flex gap-6 text-gray-400">
          <a
            href="https://github.com/oliveirammluis"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition"
          >
            <FaGithub size={20} />
          </a>
          <a
            href="https://www.linkedin.com/in/oliveirammluis/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition"
          >
            <FaLinkedin size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
