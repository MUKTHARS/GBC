// C:\Users\user.DESKTOP-9V4975E\const\src\pages\Home\Home.js
import React, { useState, useEffect, useRef } from 'react';

const Home = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const [statsVisible, setStatsVisible] = useState(false);    
  useEffect(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setStatsVisible(true);
        }
      });
    },
    { threshold: 0.3 } // Trigger when 30% of the element is visible
  );

  if (statsRef.current) {
    observer.observe(statsRef.current);
  }

  return () => {
    if (statsRef.current) {
      observer.unobserve(statsRef.current);
    }
  };
}, []);
  useEffect(() => {
    setIsVisible(true);
  }, []);
useEffect(() => {
  if (statsVisible) {
    const duration = 2000;
    const steps = 60;
    const stepDuration = duration / steps;
    
    stats.forEach((stat, index) => {
      const targetNumber = parseInt(stat.number.replace('+', ''));
      let currentStep = 0;
      
      const counter = setInterval(() => {
        currentStep++;
        const progress = currentStep / steps;
        const currentValue = Math.floor(targetNumber * progress);
        
        setAnimatedStats(prev => {
          const newStats = [...prev];
          newStats[index] = `${currentValue}+`;
          return newStats;
        });
        
        if (currentStep >= steps) {
          clearInterval(counter);
          setAnimatedStats(prev => {
            const newStats = [...prev];
            newStats[index] = stat.number;
            return newStats;
          });
        }
      }, stepDuration);
    });
  }
}, [statsVisible]);
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
const [animatedStats, setAnimatedStats] = useState(stats.map(() => '0+'));
const statsRef = useRef(null);

return (
    <div className={`container-full ${isVisible ? 'page-visible' : ''}`}>
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
    <div className="video-fallback">
      <div className="parallax-layer layer-1"></div>
      <div className="parallax-layer layer-2"></div>
      <div className="parallax-layer layer-3"></div>
    </div>
  </video>
  {/* <div className="video-overlay"></div> */}
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
              {/* <a href="/services" className="btn btn-primary">
                <span>Explore Services</span>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a> */}
              <a href="/#/services" className="btn btn-secondary">
                <span>Explore Services</span>
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
<section className="stats-section" ref={statsRef}>
  <div className="stats-container">
    {stats.map((stat, index) => (
      <div key={index} className="stat-item" style={{ animationDelay: `${index * 0.1}s` }}>
        <div className="stat-number">{animatedStats[index]}</div>
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
      <div className="service-icon">
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" viewBox="0 0 16 16">
          <path d="M4.5 9a.5.5 0 0 0-.5.5v1.5a.5.5 0 0 0 1 0V10h1v3.5a.5.5 0 0 0 1 0v-6a.5.5 0 0 0-.5-.5h-2ZM7 10h1v3.5a.5.5 0 0 0 1 0v-6a.5.5 0 0 0-.5-.5h-2a.5.5 0 0 0-.5.5v6a.5.5 0 0 0 1 0V10Z"/>
          <path d="M14 3a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h12ZM2 2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H2Z"/>
        </svg>
      </div>
      <div className="icon-backdrop"></div>
    </div>
    <h3>Road Construction</h3>
    <p>Complete road development solutions including BT works, drainage systems, and quality-approved execution</p>
  </div>

  <div className="service-showcase-card">
    <div className="service-icon-wrapper">
      <div className="service-icon">
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" viewBox="0 0 16 16">
          <path d="M12.5 3a.5.5 0 0 1 0 1h-5a.5.5 0 0 1 0-1h5zm0 3a.5.5 0 0 1 0 1h-5a.5.5 0 0 1 0-1h5zm.5 3.5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h5a.5.5 0 0 0 .5-.5zm-.5 2.5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1 0-1h5z"/>
          <path d="M16 2a2 2 0 0 0-2-2H2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2zM4 1v14H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h2zm1 0h9a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H5V1z"/>
        </svg>
      </div>
      <div className="icon-backdrop"></div>
    </div>
    <h3>Building Construction</h3>
    <p>Commercial and residential construction with modern techniques and premium materials</p>
  </div>

  <div className="service-showcase-card">
    <div className="service-icon-wrapper">
      <div className="service-icon">
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" viewBox="0 0 16 16">
          <path d="M1 2.828c.885-.37 2.154-.769 3.388-.893 1.33-.134 2.458.063 3.112.752v9.746c-.935-.53-2.12-.603-3.213-.493-1.18.12-2.37.461-3.287.811V2.828zm7.5-.141c.654-.689 1.782-.886 3.112-.752 1.234.124 2.503.523 3.388.893v9.923c-.918-.35-2.107-.692-3.287-.81-1.094-.111-2.278-.039-3.213.492V2.687zM8 1.783C7.015.936 5.587.81 4.287.94c-1.514.153-3.042.672-3.994 1.105A.5.5 0 0 0 0 2.5v11a.5.5 0 0 0 .707.455c.882-.4 2.303-.881 3.68-1.02 1.409-.142 2.59.087 3.223.877a.5.5 0 0 0 .78 0c.633-.79 1.814-1.019 3.222-.877 1.378.139 2.8.62 3.681 1.02A.5.5 0 0 0 16 13.5v-11a.5.5 0 0 0-.293-.455c-.952-.433-2.48-.952-3.994-1.105C10.413.809 8.985.936 8 1.783z"/>
        </svg>
      </div>
      <div className="icon-backdrop"></div>
    </div>
    <h3>Layout Development</h3>
    <p>Professional layout planning and development with proper infrastructure and utilities</p>
  </div>

  <div className="service-showcase-card">
    <div className="service-icon-wrapper">
      <div className="service-icon">
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" viewBox="0 0 16 16">
          <path d="M0 3.5A1.5 1.5 0 0 1 1.5 2h9A1.5 1.5 0 0 1 12 3.5V5h1.02a1.5 1.5 0 0 1 1.17.563l1.481 1.85a1.5 1.5 0 0 1 .329.938V10.5a1.5 1.5 0 0 1-1.5 1.5H14a2 2 0 1 1-4 0H5a2 2 0 1 1-3.998-.085A1.5 1.5 0 0 1 0 10.5v-7zm1.294 7.456A1.999 1.999 0 0 1 4.732 11h5.536a2.01 2.01 0 0 1 .732-.732V3.5a.5.5 0 0 0-.5-.5h-9a.5.5 0 0 0-.5.5v7a.5.5 0 0 0 .294.456zM12 10a2 2 0 0 1 1.732 1h.768a.5.5 0 0 0 .5-.5V8.35a.5.5 0 0 0-.11-.312l-1.48-1.85A.5.5 0 0 0 13.02 6H12v4zm-9 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm9 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"/>
        </svg>
      </div>
      <div className="icon-backdrop"></div>
    </div>
    <h3>Vehicle & Equipment</h3>
    <p>Complete fleet of construction vehicles and equipment available for rental</p>
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
        <div className="material-category-header">
          <div className="material-icon-wrapper">
            <img 
              src="/uploads/cement.png" 
              alt="Cement" 
              className="material-icon"
              loading="lazy"
            />
          </div>
          <h4>Cement & Concrete</h4>
        </div>
        <div className="brands-list">
          <div className="brand-item">
            <img 
              src="/uploads/ultra.jpg" 
              alt="UltraTech" 
              className="brand-logo"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = "https://images.unsplash.com/photo-1597634285595-d41d7b0d0d79?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80";
              }}
            />
            <span>UltraTech Cement</span>
          </div>
          <div className="brand-item">
            <img 
              src="/uploads/acc.jpeg" 
              alt="ACC" 
              className="brand-logo"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = "https://images.unsplash.com/photo-1597634285595-d41d7b0d0d79?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80";
              }}
            />
            <span>ACC Cement</span>
          </div>
          <div className="brand-item">
            <img 
              src="/uploads/ambuja.png" 
              alt="Ambuja" 
              className="brand-logo"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = "https://images.unsplash.com/photo-1597634285595-d41d7b0d0d79?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80";
              }}
            />
            <span>Ambuja Cement</span>
          </div>
          <div className="brand-item">
            <img 
              src="/uploads/birla.webp" 
              alt="Birla" 
              className="brand-logo"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = "https://images.unsplash.com/photo-1597634285595-d41d7b0d0d79?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80";
              }}
            />
            <span>Birla Cement</span>
          </div>
        </div>
      </div>
      
      <div className="material-category">
        <div className="material-category-header">
          <div className="material-icon-wrapper">
            <img 
              src="/uploads/steel.jpg" 
              alt="Steel Bars" 
              className="material-icon"
              loading="lazy"
            />
          </div>
          <h4>TMT Steel Bars</h4>
        </div>
        <div className="brands-list">
          <div className="brand-item">
            <img 
              src="/uploads/sail.jpg" 
              alt="SAIL" 
              className="brand-logo"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = "https://images.unsplash.com/photo-1542751110-97427bbecf20?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80";
              }}
            />
            <span>SAIL TMT</span>
          </div>
          <div className="brand-item">
            <img 
              src="/uploads/jswsteel.png" 
              alt="JSW" 
              className="brand-logo"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = "https://images.unsplash.com/photo-1542751110-97427bbecf20?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80";
              }}
            />
            <span>JSW Steel</span>
          </div>
          <div className="brand-item">
            <img 
              src="/uploads/tiscon.png" 
              alt="TATA" 
              className="brand-logo"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = "https://images.unsplash.com/photo-1542751110-97427bbecf20?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80";
              }}
            />
            <span>TATA Tiscon</span>
          </div>
          <div className="brand-item">
            <img 
              src="/uploads/kamahenu.jpeg" 
              alt="Kamdhenu" 
              className="brand-logo"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = "https://images.unsplash.com/photo-1542751110-97427bbecf20?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80";
              }}
            />
            <span>Kamdhenu TMT</span>
          </div>
        </div>
      </div>
      
      <div className="material-category">
        <div className="material-category-header">
          <div className="material-icon-wrapper">
            <img 
              src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80" 
              alt="Construction Materials" 
              className="material-icon"
              loading="lazy"
            />
          </div>
          <h4>Construction Materials</h4>
        </div>
        <div className="brands-list">
          <div className="brand-item">
            <img 
              src="/uploads/bb.jpg" 
              alt="Bricks" 
              className="brand-logo"
            />
            <span>Bricks & Blocks</span>
          </div>
          <div className="brand-item">
            <img 
              src="/uploads/sand.jpg" 
              alt="Sand" 
              className="brand-logo"
            />
            <span>Sand & Aggregates</span>
          </div>
          <div className="brand-item">
            <img 
              src="/uploads/rmc.jpg" 
              alt="Concrete" 
              className="brand-logo"
            />
            <span>RMC Concrete</span>
          </div>
          <div className="brand-item">
            <img 
              src="/uploads/needs.jpeg" 
              alt="Construction" 
              className="brand-logo"
            />
            <span>All Construction Needs</span>
          </div>
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
              // onClick={() => setSelectedImage(image)}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <img 
                src={image} 
                alt={`Construction work ${index + 1}`}
                className="gallery-showcase-image"
              />
              {/* <div className="gallery-overlay">
                <div className="zoom-icon">🔍</div>
              </div> */}
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
              <span>Call: +91 99655 55652</span>
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
