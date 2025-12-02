import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <p>
          &copy; {currentYear} Sathguru babaji Traders. All rights reserved.
        </p>
        <p>Building dreams into reality</p>
      </div>
    </footer>
  );
};

export default Footer;
