import React from 'react';
import SecureLink from '../Security/SecureLink';

const MobileNav = ({ isOpen, onClose }) => {
  return (
    <nav className={`mobile-nav ${isOpen ? 'active' : ''}`}>
      <SecureLink to="/" onClick={onClose}>Home</SecureLink>
      <SecureLink to="/about" onClick={onClose}>About Us</SecureLink>
      <SecureLink to="/services" onClick={onClose}>Our Services</SecureLink>
      <SecureLink to="/projects" onClick={onClose}>Projects</SecureLink>
      <SecureLink to="/contact" onClick={onClose}>Contact</SecureLink>
    </nav>
  );
};

export default MobileNav;