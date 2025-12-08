import React, { useState } from 'react';
import DesktopNav from './DesktopNav';
import MobileNav from './MobileNav';

const Header = () => {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  const toggleMobileNav = () => {
    setIsMobileNavOpen(!isMobileNavOpen);
  };

  return (
    <header className="header">
      <div className="nav-container">
       <div 
  className="logo"
  style={{
    background: "url('/uploads/2.jpeg') no-repeat center center",
    backgroundSize: 'contain',
    width: '200px',
    height: '50px'
  }}
>
  Sathguru Balaji Traders
</div>
        
        <DesktopNav />
        
        <div className="hamburger" onClick={toggleMobileNav}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      
      <MobileNav isOpen={isMobileNavOpen} onClose={toggleMobileNav} />
    </header>
  );
};

export default Header;