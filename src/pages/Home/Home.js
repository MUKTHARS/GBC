// C:\Users\user.DESKTOP-9V4975E\const\src\pages\Home\Home.js
import React, { useState, useEffect } from 'react';

const Home = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const homeImages = [
    '/uploads/HOME PAGE/building trust.jpg',
    '/uploads/HOME PAGE/drainage_.jpg',
    '/uploads/HOME PAGE/for hire...jpg',
    '/uploads/HOME PAGE/Layout.jpg',
    '/uploads/HOME PAGE/PREMIUM MATERIAL SUPPLIER.avif',
    '/uploads/HOME PAGE/road construction.jpg',
    '/uploads/HOME PAGE/ROAD WORK.jpg',
    '/uploads/HOME PAGE/Vehicles.jpg'
  ];

  const stats = [
    { number: '250+', label: 'Projects Completed' },
    { number: '14+', label: 'Years Experience' },
    { number: '50+', label: 'Team Members' },
    { number: '15+', label: 'Cities Served' }
  ];

  return (
    <div className={`container ${isVisible ? 'page-visible' : ''}`}>
      {/* Enhanced Hero Section */}
      <section className="hero-parallax-section">
        {/* <div className="parallax-background">
          <div className="parallax-layer layer-1"></div>
          <div className="parallax-layer layer-2"></div>
          <div className="parallax-layer layer-3"></div>
        </div> */}

<div className="video-background">
    <video 
      autoPlay 
      muted 
      loop 
      playsInline
      className="background-video"
    >
      <source src="/uploads/mainvdeo.mp4" type="video/mp4" />
      {/* Fallback for browsers that don't support video */}
      <div className="video-fallback">
        <div className="parallax-layer layer-1"></div>
        <div className="parallax-layer layer-2"></div>
        <div className="parallax-layer layer-3"></div>
      </div>
    </video>
    <div className="video-overlay"></div>
  </div>

        <div className="hero-content-wrapper">
          <div className="hero-main-content">
            <div className="hero-badge">
              <span>Trusted Since 2010</span>
            </div>
            <h1 className="hero-main-title">
              Building <span className="highlight">Tomorrow's</span> Landscapes Today
            </h1>
            <p className="hero-description">
              Premier construction partners specializing in road development, building construction, 
              layout planning, and premium material supply across Tamil Nadu.
            </p>
            <div className="hero-actions">
              <a href="/services" className="btn btn-primary">
                <span>Explore Services</span>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
              <a href="/contact" className="btn btn-secondary">
                <span>Get Free Quote</span>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path d="M21 11.5C21 16.75 16.75 21 11.5 21C6.25 21 2 16.75 2 11.5C2 6.25 6.25 2 11.5 2C16.75 2 21 6.25 21 11.5Z" stroke="currentColor" strokeWidth="2"/>
                  <path d="M16 11.5H11.5M11.5 11.5L11.5 7M11.5 11.5L7 11.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </a>
            </div>
          </div>
          <div className="hero-visual">
            {/* <div className="floating-card card-1">
              <div className="card-icon">🏗️</div>
              <h4>Road Construction</h4>
            </div>
            <div className="floating-card card-2">
              <div className="card-icon">🏢</div>
              <h4>Building Works</h4>
            </div>
            <div className="floating-card card-3">
              <div className="card-icon">🚛</div>
              <h4>Vehicle Rentals</h4>
            </div> */}
          </div>
        </div>
        <div className="scroll-indicator">
          <div className="scroll-arrow"></div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="stats-section">
        <div className="stats-container">
          {stats.map((stat, index) => (
            <div key={index} className="stat-item" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="stat-number">{stat.number}</div>
              <div className="stat-label">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Enhanced Services Overview */}
      <section className="services-showcase-section">
        <div className="section-header">
          <h2 className="section-title">Comprehensive Construction Solutions</h2>
          <p className="section-subtitle">End-to-end services from planning to execution</p>
        </div>
        
        <div className="services-showcase-grid">
          <div className="service-showcase-card">
            <div className="service-icon-wrapper">
              <div className="service-icon">🛣️</div>
              <div className="icon-backdrop"></div>
            </div>
            <h3>Road Construction</h3>
            <p>Complete road development solutions including BT works, drainage systems, and quality-approved execution</p>
            <ul className="service-features">
              <li>Highway Development</li>
              <li>Municipal Roads</li>
              <li>Village Panchayat Roads</li>
              <li>Quality Assured</li>
            </ul>
          </div>

          <div className="service-showcase-card">
            <div className="service-icon-wrapper">
              <div className="service-icon">🏗️</div>
              <div className="icon-backdrop"></div>
            </div>
            <h3>Building Construction</h3>
            <p>Commercial and residential construction with modern techniques and premium materials</p>
            <ul className="service-features">
              <li>Residential Complexes</li>
              <li>Commercial Buildings</li>
              <li>Government Projects</li>
              <li>Quality Monitoring</li>
            </ul>
          </div>

          <div className="service-showcase-card">
            <div className="service-icon-wrapper">
              <div className="service-icon">📐</div>
              <div className="icon-backdrop"></div>
            </div>
            <h3>Layout Development</h3>
            <p>Professional layout planning and development with proper infrastructure and utilities</p>
            <ul className="service-features">
              <li>Site Planning</li>
              <li>Infrastructure Setup</li>
              <li>Utility Management</li>
              <li>Approved Layouts</li>
            </ul>
          </div>

          <div className="service-showcase-card">
            <div className="service-icon-wrapper">
              <div className="service-icon">🚚</div>
              <div className="icon-backdrop"></div>
            </div>
            <h3>Vehicle & Equipment</h3>
            <p>Complete fleet of construction vehicles and equipment available for rental</p>
            <ul className="service-features">
              <li>Tipper Trucks</li>
              <li>JCB & Excavators</li>
              <li>Concrete Mixers</li>
              <li>Well Maintained</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Premium Materials Section */}
      <section className="materials-section">
        <div className="materials-background">
          <div className="material-overlay"></div>
        </div>
        <div className="materials-content">
          <div className="section-header">
            <h2 className="section-title">Premium Material Supply</h2>
            <p className="section-subtitle">Wholesale dealer of quality construction materials</p>
          </div>
          
          <div className="materials-grid">
            <div className="material-category">
              <h4>🪨 Cement & Concrete</h4>
              <div className="brands-list">
                <span>UltraTech Cement</span>
                <span>ACC Cement</span>
                <span>Ambuja Cement</span>
                <span>Birla Cement</span>
              </div>
            </div>
            
            <div className="material-category">
              <h4>⚡ TMT Steel Bars</h4>
              <div className="brands-list">
                <span>SAIL TMT</span>
                <span>JSW Steel</span>
                <span>TATA Tiscon</span>
                <span>Kamdhenu TMT</span>
              </div>
            </div>
            
            <div className="material-category">
              <h4>🧱 Construction Materials</h4>
              <div className="brands-list">
                <span>Bricks & Blocks</span>
                <span>Sand & Aggregates</span>
                <span>RMC Concrete</span>
                <span>All Construction Needs</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Gallery Section */}
      <section className="gallery-showcase-section">
        <div className="section-header">
          <h2 className="section-title">Our Work Gallery</h2>
          <p className="section-subtitle">Showcasing our quality construction projects</p>
        </div>
        
        <div className="gallery-showcase">
          {homeImages.map((image, index) => (
            <div 
              key={index} 
              className="gallery-showcase-item"
              onClick={() => setSelectedImage(image)}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <img 
                src={image} 
                alt={`Construction work ${index + 1}`}
                className="gallery-showcase-image"
              />
              <div className="gallery-overlay">
                <div className="zoom-icon">🔍</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Enhanced CTA Section */}
      <section className="cta-premium-section">
        <div className="cta-background">
          <div className="cta-pattern"></div>
        </div>
        <div className="cta-content">
          <h2>Ready to Start Your Construction Project?</h2>
          <p>Get a free consultation and quote from our experienced team</p>
          <div className="cta-actions">
            <a href="/contact" className="btn btn-large btn-primary">
              <span>Get Free Quote</span>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path d="M21 11.5C21 16.75 16.75 21 11.5 21C6.25 21 2 16.75 2 11.5C2 6.25 6.25 2 11.5 2C16.75 2 21 6.25 21 11.5Z" stroke="currentColor" strokeWidth="2"/>
                <path d="M16 11.5H11.5M11.5 11.5L11.5 7M11.5 11.5L7 11.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </a>
            <a href="tel:+919965555652" className="btn btn-large btn-secondary">
              <span>Call Now: +91 99655 55652</span>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path d="M5 4H9L11 9L8.5 10.5C9.57096 12.6715 11.3285 14.429 13.5 15.5L15 13L20 15V19C20 19.5304 19.7893 20.0391 19.4142 20.4142C19.0391 20.7893 18.5304 21 18 21C14.0993 20.763 10.4202 19.1065 7.65683 16.3432C4.8935 13.5798 3.23705 9.90074 3 6C3 5.46957 3.21071 4.96086 3.58579 4.58579C3.96086 4.21071 4.46957 4 5 4Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* Enhanced Image Modal */}
      {selectedImage && (
        <div className="image-modal-enhanced" onClick={() => setSelectedImage(null)}>
          <div className="modal-content">
            <img 
              src={selectedImage} 
              alt="Enlarged view"
              className="modal-image-enhanced"
            />
            <button className="modal-close">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;