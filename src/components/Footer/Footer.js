import "./Footer.css"
import React from 'react';
import { FaInstagram, FaEnvelope, FaPhone } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-icons">
        <a href="https://www.instagram.com/calmerpde" target="_blank" rel="noopener noreferrer">
          <FaInstagram />
        </a>
        <a href="mailto:calmerstore@gmail.com">
          <FaEnvelope />
        </a>
        <a href="tel:+95 047 939">
          <FaPhone />
        </a>
      </div>
    </footer>
  );
};

export default Footer;











