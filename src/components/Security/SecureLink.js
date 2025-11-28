import React from 'react';
import { useNavigate } from 'react-router-dom';
import { encryptUrl } from '../../utils/encryption';

const SecureLink = ({ to, children, className, onClick, ...props }) => {
  const navigate = useNavigate();
  
  const handleClick = (e) => {
    e.preventDefault();
    
    // Call custom onClick handler if provided
    if (onClick) {
      onClick(e);
    }
    
    // For internal routes, use encrypted navigation
    if (to.startsWith('/')) {
      const encryptedPath = encryptUrl(to);
      // Navigate through secure route
      navigate(`/secure?token=${encodeURIComponent(encryptedPath)}`);
    } else {
      // For external links, open in new tab with encryption
      const encryptedUrl = encryptUrl(to);
      window.open(`/secure?token=${encodeURIComponent(encryptedUrl)}`, '_blank', 'noopener,noreferrer');
    }
  };

  // Generate encrypted href for all links
  const encryptedHref = `/secure?token=${encodeURIComponent(encryptUrl(to))}`;

  return (
    <a 
      href={encryptedHref} 
      onClick={handleClick} 
      className={className}
      data-actual-url={to}
      {...props}
    >
      {children}
    </a>
  );
};

export default SecureLink;