import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Services from './pages/Services/Services';
import Projects from './pages/Projects/Projects';
import Contact from './pages/Contact/Contact';
import SecureRedirect from './components/Security/SecureRedirect';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        {/* Secure route handler - this will decrypt and redirect */}
        <Route path="/secure" element={<SecureRedirect />} />
      </Routes>
    </Layout>
  );
}

export default App;