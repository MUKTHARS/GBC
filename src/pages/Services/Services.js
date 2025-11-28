// C:\Users\user.DESKTOP-9V4975E\const\src\pages\Services\Services.js
import React, { useState, useEffect } from 'react';

const Services = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [activeGallery, setActiveGallery] = useState('all');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const roadServices = [
    'Layout Development',
    'Arch Construction',
    'Drainage Systems',
    'Compound Wall',
    'Culvert Construction',
    'CC Work',
    'Mini Bridge Construction',
    'Laying & Spreading WMM',
    'Road Marking',
    'Stud Installation',
    'Color Code Application'
  ];

  const vehicles = [
    'Tipper',
    'Pickup and 407',
    'JCB',
    'Ajax',
    'Roller',
    'Baby Roller',
    'Joshop Roller',
    'Tandem Roller',
    'Paver',
    'Soil Compactor',
    'Tractor Mount Sprayer',
    'Tanker Lorry',
    'Power Traveller',
    'Earth Rammer'
  ];

  const cementBrands = [
    'Sankar - Vailmai',
    'Ultratech',
    'Ranco',
    'Dolmia',
    'Ambuja',
    'Chattinad'
  ];

  const tmtBrands = [
    'Tata - Indrola',
    'Jsw - Amman',
    'Vaizag - Jathi',
    'Sali - Sun',
    'Agni'
  ];

  // Service Images (same as before)
  const layoutImages = [
    '/uploads/our services/lAYOUT/ARCH.jpeg',
    '/uploads/our services/lAYOUT/ARCH...jpeg',
    '/uploads/our services/lAYOUT/COLOR CODE.jpeg',
    '/uploads/our services/lAYOUT/COMPOUND WALL...jpeg',
    '/uploads/our services/lAYOUT/COMPOUND WALL.jpeg',
    '/uploads/our services/lAYOUT/Copy of COLOR CODE.jpeg',
    '/uploads/our services/lAYOUT/CULVERT.jpeg',
    '/uploads/our services/lAYOUT/LAYOUT.jpg',
    '/uploads/our services/lAYOUT/DRAINAGE.jpeg',
    '/uploads/our services/lAYOUT/MINI BRIDGE.jpeg',
    '/uploads/our services/lAYOUT/Road marking_.jpg',
    '/uploads/our services/lAYOUT/STUD.jpeg'
  ];

  const roadConstructionImages = [
    '/uploads/our services/ROAD CONSTRUCTION/4.1 GSB SPREADING AND LAYING.jpg',
    '/uploads/our services/ROAD CONSTRUCTION/BITUMEN CONCRET 11.jpg',
    '/uploads/our services/ROAD CONSTRUCTION/bitumen concrete.jpg',
    '/uploads/our services/ROAD CONSTRUCTION/bitumen macadam.jpg'
  ];

  const buildingConstructionImages = [
    '/uploads/our services/BUILDING CONSTRUCTION/1.jpg',
    '/uploads/our services/BUILDING CONSTRUCTION/2.jpg',
    '/uploads/our services/BUILDING CONSTRUCTION/BUILDING CONSTRUCTION.jpg'
  ];

  const vehicleImages = [
    '/uploads/our services/FOR HIRE/ajax.jpg',
    '/uploads/our services/FOR HIRE/BABY ROLLER.jpg',
    '/uploads/our services/FOR HIRE/jcb (2).jpg',
    '/uploads/our services/FOR HIRE/jcb.jpg',
    '/uploads/our services/FOR HIRE/JOSEPH  ROLLER.jpg',
    '/uploads/our services/FOR HIRE/paver.jpg',
    '/uploads/our services/FOR HIRE/pickup and 407.jpg',
    '/uploads/our services/FOR HIRE/roller.jpg',
    '/uploads/our services/FOR HIRE/SOIL COMPACTOR.jpg',
    '/uploads/our services/FOR HIRE/TANDEM ROLLER.jpg',
    '/uploads/our services/FOR HIRE/TRACTOR MOUNT SPRAYER.jpg',
    '/uploads/our services/FOR HIRE/vehicles.jpg'
  ];

  const materialImages = [
    '/uploads/our services/SALES AND SERVICES/BRICKS.jpeg',
    '/uploads/our services/SALES AND SERVICES/FLY ASH BRICKS.jpeg',
    '/uploads/our services/SALES AND SERVICES/HOLLOW BLOCKS.jpeg',
    '/uploads/our services/SALES AND SERVICES/SOLID BLOCKS.jpeg'
  ];

  const allServiceImages = [
    ...layoutImages,
    ...roadConstructionImages,
    ...buildingConstructionImages,
    ...vehicleImages,
    ...materialImages
  ];

  const getGalleryImages = () => {
    switch(activeGallery) {
      case 'layout': return layoutImages;
      case 'road': return roadConstructionImages;
      case 'building': return buildingConstructionImages;
      case 'vehicles': return vehicleImages;
      case 'materials': return materialImages;
      default: return allServiceImages;
    }
  };

  const serviceStats = [
    { number: '50+', label: 'Projects Completed', icon: '🏗️' },
    { number: '14+', label: 'Service Categories', icon: '📊' },
    { number: '20+', label: 'Vehicle Fleet', icon: '🚛' },
    { number: '10+', label: 'Material Brands', icon: '🏭' }
  ];

  return (
    <div className={`container ${isVisible ? 'page-visible' : ''}`}>
      {/* Enhanced Services Hero Section */}
      <section className="services-hero-section">
        <div className="services-hero-background">
          <div className="hero-gradient"></div>
          <div className="hero-pattern"></div>
        </div>
        <div className="services-hero-content">
          <div className="hero-text-content">
            <div className="company-badge">
              <span>Comprehensive Solutions</span>
            </div>
            <h1 className="hero-main-title">
              Our <span className="highlight">Services</span>
            </h1>
            <p className="hero-description">
              End-to-end construction solutions with quality assurance, modern equipment, 
              and premium materials under one roof.
            </p>
            <div className="hero-stats">
              {serviceStats.map((stat, index) => (
                <div key={index} className="hero-stat">
                  <div className="stat-number">{stat.number}</div>
                  <div className="stat-label">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="hero-visual">
            <div className="floating-shape shape-1"></div>
            <div className="floating-shape shape-2"></div>
            <div className="service-visual-card">
              <div className="service-icon">⚡</div>
              <h4>One-Stop Solution</h4>
              <p>All construction needs covered</p>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Services Showcase */}
      <section className="services-showcase-section">
        <div className="services-showcase-container">
          {/* Road Construction Services */}
          <div className="service-showcase-card featured">
            <div className="service-icon-wrapper">
              <div className="service-icon">🛣️</div>
              <div className="icon-backdrop"></div>
            </div>
            <h3>Road Construction Services</h3>
            <p className="service-description">
              Complete end-to-end road construction solutions with quality assurance and modern techniques
            </p>
            <div className="service-features-grid">
              {roadServices.map((service, index) => (
                <div key={index} className="service-feature-item">
                  <span className="feature-bullet">✓</span>
                  <span>{service}</span>
                </div>
              ))}
            </div>
            <div className="special-feature-card">
              <div className="feature-icon">🏭</div>
              <div className="feature-content">
                <h4>Bitumen Thar Plant</h4>
                <p>We operate our own Bitumen Plant to ensure quality control and timely project completion</p>
              </div>
            </div>
          </div>

          {/* Vehicle Rentals */}
          <div className="service-showcase-card">
            <div className="service-icon-wrapper">
              <div className="service-icon">🚛</div>
              <div className="icon-backdrop"></div>
            </div>
            <h3>Vehicle Rentals</h3>
            <p className="service-description">
              Well-maintained equipment fleet operated by highly skilled professionals
            </p>
            <div className="vehicles-grid-enhanced">
              {vehicles.map((vehicle, index) => (
                <div key={index} className="vehicle-item-enhanced">
                  <span className="vehicle-icon">⚡</span>
                  <span>{vehicle}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Building Materials */}
          <div className="service-showcase-card">
            <div className="service-icon-wrapper">
              <div className="service-icon">🏗️</div>
              <div className="icon-backdrop"></div>
            </div>
            <h3>Building Materials</h3>
            <p className="service-description">
              Authorized dealer for premium quality construction materials
            </p>
            
            <div className="materials-showcase">
              <div className="material-category-enhanced">
                <h4>🪨 Wholesale Cement Dealer</h4>
                <p>Premium quality cement brands for all construction needs</p>
                <div className="brands-showcase">
                  {cementBrands.map((brand, index) => (
                    <div key={index} className="brand-item-enhanced">
                      {brand}
                    </div>
                  ))}
                </div>
              </div>

              <div className="material-category-enhanced">
                <h4>⚡ TMT Steel Bars Dealer</h4>
                <p>High-quality TMT brands for structural strength</p>
                <div className="brands-showcase">
                  {tmtBrands.map((brand, index) => (
                    <div key={index} className="brand-item-enhanced">
                      {brand}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Tamil Content Section */}
      <section className="tamil-services-section">
        <div className="tamil-background">
          <div className="tamil-pattern"></div>
        </div>
        <div className="tamil-services-content">
          <h3 className="tamil-services-title">எங்கள் சேவைகள்</h3>
          <p className="tamil-services-text">
            எங்களிடம் ரோடு வேலை செய்வதற்கு தேவையான அனைத்து உபகரணங்களும், 
            வாகனங்களும் உள்ளது. எங்கள் இயந்திரங்கள் நன்கு பராமரிக்கப்பட்டு, 
            மிகவும் திறமையான நிபுணர்களால் இயக்கப்படுகிறது. கட்டுமானப் பொருட்கள் 
            அனைத்தும் குறைந்த விலையில் இலவச டோர் டெலிவரி செய்யப்படும்.
          </p>
        </div>
      </section>

      {/* Enhanced Service Gallery */}
      <section className="service-gallery-showcase">
        <div className="section-header">
          <h2 className="section-title">Our Service Gallery</h2>
          <p className="section-subtitle">
            Visual journey through our comprehensive construction services and capabilities
          </p>
        </div>
        
        {/* Enhanced Gallery Filter */}
        <div className="gallery-filter-enhanced">
          <button 
            onClick={() => setActiveGallery('all')}
            className={`filter-card ${activeGallery === 'all' ? 'active' : ''}`}
          >
            <div className="filter-icon">📷</div>
            <span>All Services</span>
          </button>
          <button 
            onClick={() => setActiveGallery('layout')}
            className={`filter-card ${activeGallery === 'layout' ? 'active' : ''}`}
          >
            <div className="filter-icon">📐</div>
            <span>Layout</span>
          </button>
          <button 
            onClick={() => setActiveGallery('road')}
            className={`filter-card ${activeGallery === 'road' ? 'active' : ''}`}
          >
            <div className="filter-icon">🛣️</div>
            <span>Road Construction</span>
          </button>
          <button 
            onClick={() => setActiveGallery('building')}
            className={`filter-card ${activeGallery === 'building' ? 'active' : ''}`}
          >
            <div className="filter-icon">🏢</div>
            <span>Building Construction</span>
          </button>
          <button 
            onClick={() => setActiveGallery('vehicles')}
            className={`filter-card ${activeGallery === 'vehicles' ? 'active' : ''}`}
          >
            <div className="filter-icon">🚛</div>
            <span>Vehicles</span>
          </button>
          <button 
            onClick={() => setActiveGallery('materials')}
            className={`filter-card ${activeGallery === 'materials' ? 'active' : ''}`}
          >
            <div className="filter-icon">🧱</div>
            <span>Materials</span>
          </button>
        </div>

        {/* Enhanced Gallery Images */}
        <div className="service-gallery-showcase-grid">
          {getGalleryImages().map((image, index) => (
            <div 
              key={index} 
              className="service-gallery-showcase-item"
              onClick={() => setSelectedImage(image)}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <img 
                src={image} 
                alt={`Service ${index + 1}`}
                className="service-gallery-showcase-image"
              />
              <div className="service-gallery-overlay">
                <div className="zoom-icon">🔍</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Enhanced CTA Section */}
      <section className="services-cta-premium">
        <div className="cta-background">
          <div className="cta-pattern"></div>
        </div>
        <div className="cta-content">
          <h2>Ready to Start Your Project?</h2>
          <p>Get comprehensive construction solutions with competitive pricing and quality assurance</p>
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

export default Services;