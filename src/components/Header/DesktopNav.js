import React from 'react';
import SecureLink from '../Security/SecureLink';

const DesktopNav = () => {
  return (
    <nav className="desktop-nav">
      <SecureLink to="/">Home</SecureLink>
      <SecureLink to="/about">About Us</SecureLink>
      <SecureLink to="/services">Our Services</SecureLink>
      <SecureLink to="/projects">Projects</SecureLink>
      <SecureLink to="/contact">Contact</SecureLink>
    </nav>
  );
};

export default DesktopNav;