import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import WhatsAppButton from '../WhatsAppButton/WhatsAppButton';

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main className="main-content">
        {children}
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
};

export default Layout;