// C:\Users\user.DESKTOP-9V4975E\const\src\pages\Services\Services.js
import React, { useState, useEffect } from "react";

const Services = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [activeGallery, setActiveGallery] = useState("all");
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);
useEffect(() => {
  window.scrollTo(0, 0);
}, []);
  const roadServices = [
    "Layout Development",
    "Arch Construction",
    "Drainage Systems",
    "Compound Wall",
    "Culvert Construction",
    "CC Work",
    "Mini Bridge Construction",
    "Laying & Spreading WMM",
    "Road Marking",
    "Stud Installation",
    "Color Code Application",
  ];

  const vehicles = [
    "Tipper",
    "Pickup and 407",
    "JCB",
    "Ajax",
    "Roller",
    "Baby Roller",
    "Joshop Roller",
    "Tandem Roller",
    "Paver",
    "Soil Compactor",
    "Tractor Mount Sprayer",
    "Tanker Lorry",
    "Power Traveller",
    "Earth Rammer",
  ];

  const cementBrands = [
    "Sankar - Vailmai",
    "Ultratech",
    "Ranco",
    "dalmia",
    "Ambuja",
    "Chettinad",
  ];

  const tmtBrands = [
    "Tata - Indrola",
    "Jsw - Amman",
    "Vaizag - Jathi",
    "Sali - Sun",
    "Agni",
  ];

  // Service Images (same as before)
  const layoutImages = [
    "/uploads/our services/lAYOUT/ARCH.jpeg",
    "/uploads/our services/lAYOUT/ARCH...jpeg",
    "/uploads/our services/lAYOUT/COLOR CODE.jpeg",
    "/uploads/our services/lAYOUT/COMPOUND WALL...jpeg",
    "/uploads/our services/lAYOUT/COMPOUND WALL.jpeg",
    "/uploads/our services/lAYOUT/Copy of COLOR CODE.jpeg",
    "/uploads/our services/lAYOUT/CULVERT.jpeg",
    "/uploads/our services/lAYOUT/LAYOUT.jpg",
    "/uploads/our services/lAYOUT/DRAINAGE.jpeg",
    "/uploads/our services/lAYOUT/MINI BRIDGE.jpeg",
    "/uploads/our services/lAYOUT/Road marking_.jpg",
    "/uploads/our services/lAYOUT/STUD.jpeg",
  ];

  const roadConstructionImages = [
    "/uploads/our services/ROAD CONSTRUCTION/4.1 GSB SPREADING AND LAYING.jpg",
    "/uploads/our services/ROAD CONSTRUCTION/BITUMEN CONCRET 11.jpg",
    "/uploads/our services/ROAD CONSTRUCTION/bitumen concrete.jpg",
    "/uploads/our services/ROAD CONSTRUCTION/bitumen macadam.jpg",
  ];

  const buildingConstructionImages = [
    "/uploads/our services/BUILDING CONSTRUCTION/1.jpg",
    "/uploads/our services/BUILDING CONSTRUCTION/2.jpg",
    "/uploads/our services/BUILDING CONSTRUCTION/BUILDING CONSTRUCTION.jpg",
  ];

  const vehicleImages = [
    "/uploads/our services/FOR HIRE/ajax.jpg",
    "/uploads/our services/FOR HIRE/BABY ROLLER.jpg",
    "/uploads/our services/FOR HIRE/jcb (2).jpg",
    "/uploads/our services/FOR HIRE/jcb.jpg",
    "/uploads/our services/FOR HIRE/JOSEPH  ROLLER.jpg",
    "/uploads/our services/FOR HIRE/paver.jpg",
    "/uploads/our services/FOR HIRE/pickup and 407.jpg",
    "/uploads/our services/FOR HIRE/roller.jpg",
    "/uploads/our services/FOR HIRE/SOIL COMPACTOR.jpg",
    "/uploads/our services/FOR HIRE/TANDEM ROLLER.jpg",
    "/uploads/our services/FOR HIRE/TRACTOR MOUNT SPRAYER.jpg",
    "/uploads/our services/FOR HIRE/vehicles.jpg",
  ];

  const materialImages = [
    "/uploads/our services/SALES AND SERVICES/BRICKS.jpeg",
    "/uploads/our services/SALES AND SERVICES/FLY ASH BRICKS.jpeg",
    "/uploads/our services/SALES AND SERVICES/HOLLOW BLOCKS.jpeg",
    "/uploads/our services/SALES AND SERVICES/SOLID BLOCKS.jpeg",
  ];

  const allServiceImages = [
    ...layoutImages,
    ...roadConstructionImages,
    ...buildingConstructionImages,
    ...vehicleImages,
    ...materialImages,
  ];

  const getGalleryImages = () => {
    switch (activeGallery) {
      case "layout":
        return layoutImages;
      case "road":
        return roadConstructionImages;
      case "building":
        return buildingConstructionImages;
      case "vehicles":
        return vehicleImages;
      case "materials":
        return materialImages;
      default:
        return allServiceImages;
    }
  };

  const serviceStats = [
    { number: "50+", label: "Projects Completed", icon: "🏗️" },
    { number: "14+", label: "Service Categories", icon: "📊" },
    { number: "20+", label: "Vehicle Fleet", icon: "🚛" },
    { number: "10+", label: "Material Brands", icon: "🏭" },
  ];

  return (
    <div className={`container-full ${isVisible ? "page-visible" : ""}`}>
      {/* Enhanced Services Hero Section */}
      <section className="services-hero-section">
        <div className="services-hero-background">
          <div className="hero-gradient"></div>
          <div className="hero-pattern"></div>
        </div>
        <div className="services-hero-content">
          <div className="hero-text-content">
            {/* <div className="company-badge">
              <span>Comprehensive Solutions</span>
            </div> */}
            <h1 className="hero-main-title">
              Our <span className="highlights">Services</span>
            </h1>
            <p className="hero-descriptions">
              End-to-end construction solutions with quality assurance, modern
              equipment, and premium materials under one roof.
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
      <div className="service-icon">
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" viewBox="0 0 16 16">
          <path d="M4.5 9a.5.5 0 0 0-.5.5v1.5a.5.5 0 0 0 1 0V10h1v3.5a.5.5 0 0 0 1 0v-6a.5.5 0 0 0-.5-.5h-2ZM7 10h1v3.5a.5.5 0 0 0 1 0v-6a.5.5 0 0 0-.5-.5h-2a.5.5 0 0 0-.5.5v6a.5.5 0 0 0 1 0V10Z"/>
          <path d="M14 3a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h12ZM2 2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H2Z"/>
        </svg>
      </div>
      <div className="icon-backdrop"></div>
    </div>
    <h3>Road Construction Services</h3>
    <p className="services-description">
      Complete end-to-end road construction solutions with quality
      assurance and modern techniques
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
      <div className="feature-icon">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 16 16">
          <path d="M1 2.5A1.5 1.5 0 0 1 2.5 1h3A1.5 1.5 0 0 1 7 2.5v3A1.5 1.5 0 0 1 5.5 7h-3A1.5 1.5 0 0 1 1 5.5v-3zm6 0A1.5 1.5 0 0 1 8.5 1h3A1.5 1.5 0 0 1 13 2.5v3A1.5 1.5 0 0 1 11.5 7h-3A1.5 1.5 0 0 1 7 5.5v-3z"/>
          <path d="M0 12.5A1.5 1.5 0 0 1 1.5 11h3A1.5 1.5 0 0 1 6 12.5v3A1.5 1.5 0 0 1 4.5 17h-3A1.5 1.5 0 0 1 0 15.5v-3zm6 0A1.5 1.5 0 0 1 7.5 11h3a1.5 1.5 0 0 1 1.5 1.5v3a1.5 1.5 0 0 1-1.5 1.5h-3A1.5 1.5 0 0 1 6 15.5v-3z"/>
        </svg>
      </div>
      <div className="feature-content">
        <h4>Bitumen Thar Plant</h4>
        <p>
          We operate our own Bitumen Plant to ensure quality control and
          timely project completion
        </p>
      </div>
    </div>
  </div>

  {/* Vehicle Rentals */}
  <div className="service-showcase-card">
    <div className="service-icon-wrapper">
      <div className="service-icon">
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" viewBox="0 0 16 16">
          <path d="M0 3.5A1.5 1.5 0 0 1 1.5 2h9A1.5 1.5 0 0 1 12 3.5V5h1.02a1.5 1.5 0 0 1 1.17.563l1.481 1.85a1.5 1.5 0 0 1 .329.938V10.5a1.5 1.5 0 0 1-1.5 1.5H14a2 2 0 1 1-4 0H5a2 2 0 1 1-3.998-.085A1.5 1.5 0 0 1 0 10.5v-7zm1.294 7.456A1.999 1.999 0 0 1 4.732 11h5.536a2.01 2.01 0 0 1 .732-.732V3.5a.5.5 0 0 0-.5-.5h-9a.5.5 0 0 0-.5.5v7a.5.5 0 0 0 .294.456zM12 10a2 2 0 0 1 1.732 1h.768a.5.5 0 0 0 .5-.5V8.35a.5.5 0 0 0-.11-.312l-1.48-1.85A.5.5 0 0 0 13.02 6H12v4zm-9 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm9 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"/>
        </svg>
      </div>
      <div className="icon-backdrop"></div>
    </div>
    <h3>Vehicle Rentals</h3>
    <p className="service-description">
      Well-maintained equipment fleet operated by highly skilled
      professionals
    </p>
    <div className="vehicles-grid-enhanced">
      {vehicles.map((vehicle, index) => (
        <div key={index} className="vehicle-item-enhanced">
          <span className="vehicle-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
              <path d="M8 0a.5.5 0 0 1 .5.5v.518A7 7 0 0 1 14.982 7.5h.518a.5.5 0 0 1 0 1h-.518A7 7 0 0 1 8.5 14.982v.518a.5.5 0 0 1-1 0v-.518A7 7 0 0 1 1.018 8.5H.5a.5.5 0 0 1 0-1h.518A7 7 0 0 1 7.5 1.018V.5A.5.5 0 0 1 8 0zM7 8a1 1 0 1 0 2 0 1 1 0 0 0-2 0z"/>
            </svg>
          </span>
          <span>{vehicle}</span>
        </div>
      ))}
    </div>
  </div>

  {/* Building Materials */}
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
    <h3>Building Materials</h3>
    <p className="service-description">
      Authorized dealer for premium quality construction materials
    </p>

    <div className="materials-showcase">
      <div className="material-category-enhanced">
        <h4>
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16" style={{marginRight: '8px', verticalAlign: 'middle'}}>
            <path d="M8 1.288l-6 4.5V15a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V5.788l-6-4.5zM8 2.434l5 3.75V15H3V6.184l5-3.75z"/>
            <path d="M4.5 9h7a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-7a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5zM5 10h6v-1H5v1z"/>
          </svg>
          Wholesale Cement Dealer
        </h4>
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
        <h4>
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16" style={{marginRight: '8px', verticalAlign: 'middle'}}>
            <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
          </svg>
          TMT Steel Bars Dealer
        </h4>
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
            Visual journey through our comprehensive construction services and
            capabilities
          </p>
        </div>

        {/* Enhanced Gallery Filter */}
<div className="gallery-filter-enhanced">
  <button
    onClick={() => setActiveGallery("all")}
    className={`filter-card ${activeGallery === "all" ? "active" : ""}`}
  >
    <div className="filter-icon">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 16 16">
        <path d="M10.5 8.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z"/>
        <path d="M2 4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2H2zm10.5 5.5a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0zM8 9a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"/>
      </svg>
    </div>
    <span>All Services</span>
  </button>
  <button
    onClick={() => setActiveGallery("layout")}
    className={`filter-card ${
      activeGallery === "layout" ? "active" : ""
    }`}
  >
    <div className="filter-icon">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 16 16">
        <path d="M1 2.5A1.5 1.5 0 0 1 2.5 1h3A1.5 1.5 0 0 1 7 2.5v3A1.5 1.5 0 0 1 5.5 7h-3A1.5 1.5 0 0 1 1 5.5v-3zM2.5 2a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5h-3zm6.5.5A1.5 1.5 0 0 1 10.5 1h3A1.5 1.5 0 0 1 15 2.5v3A1.5 1.5 0 0 1 13.5 7h-3A1.5 1.5 0 0 1 9 5.5v-3zm1.5-.5a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5h-3zM1 10.5A1.5 1.5 0 0 1 2.5 9h3A1.5 1.5 0 0 1 7 10.5v3A1.5 1.5 0 0 1 5.5 15h-3A1.5 1.5 0 0 1 1 13.5v-3zm1.5-.5a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5h-3zm6.5.5A1.5 1.5 0 0 1 10.5 9h3a1.5 1.5 0 0 1 1.5 1.5v3a1.5 1.5 0 0 1-1.5 1.5h-3A1.5 1.5 0 0 1 9 13.5v-3zm1.5-.5a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5h-3z"/>
      </svg>
    </div>
    <span>Layout</span>
  </button>
  <button
    onClick={() => setActiveGallery("road")}
    className={`filter-card ${
      activeGallery === "road" ? "active" : ""
    }`}
  >
    <div className="filter-icon">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 16 16">
        <path d="M4.5 9a.5.5 0 0 0-.5.5v1.5a.5.5 0 0 0 1 0V10h1v3.5a.5.5 0 0 0 1 0v-6a.5.5 0 0 0-.5-.5h-2ZM7 10h1v3.5a.5.5 0 0 0 1 0v-6a.5.5 0 0 0-.5-.5h-2a.5.5 0 0 0-.5.5v6a.5.5 0 0 0 1 0V10Z"/>
        <path d="M14 3a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h12ZM2 2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H2Z"/>
      </svg>
    </div>
    <span>Road Construction</span>
  </button>
  <button
    onClick={() => setActiveGallery("building")}
    className={`filter-card ${
      activeGallery === "building" ? "active" : ""
    }`}
  >
    <div className="filter-icon">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 16 16">
        <path d="M12.5 3a.5.5 0 0 1 0 1h-5a.5.5 0 0 1 0-1h5zm0 3a.5.5 0 0 1 0 1h-5a.5.5 0 0 1 0-1h5zm.5 3.5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h5a.5.5 0 0 0 .5-.5zm-.5 2.5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1 0-1h5z"/>
        <path d="M16 2a2 2 0 0 0-2-2H2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2zM4 1v14H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h2zm1 0h9a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H5V1z"/>
      </svg>
    </div>
    <span>Building Construction</span>
  </button>
  <button
    onClick={() => setActiveGallery("vehicles")}
    className={`filter-card ${
      activeGallery === "vehicles" ? "active" : ""
    }`}
  >
    <div className="filter-icon">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 16 16">
        <path d="M0 3.5A1.5 1.5 0 0 1 1.5 2h9A1.5 1.5 0 0 1 12 3.5V5h1.02a1.5 1.5 0 0 1 1.17.563l1.481 1.85a1.5 1.5 0 0 1 .329.938V10.5a1.5 1.5 0 0 1-1.5 1.5H14a2 2 0 1 1-4 0H5a2 2 0 1 1-3.998-.085A1.5 1.5 0 0 1 0 10.5v-7zm1.294 7.456A1.999 1.999 0 0 1 4.732 11h5.536a2.01 2.01 0 0 1 .732-.732V3.5a.5.5 0 0 0-.5-.5h-9a.5.5 0 0 0-.5.5v7a.5.5 0 0 0 .294.456zM12 10a2 2 0 0 1 1.732 1h.768a.5.5 0 0 0 .5-.5V8.35a.5.5 0 0 0-.11-.312l-1.48-1.85A.5.5 0 0 0 13.02 6H12v4zm-9 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm9 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"/>
      </svg>
    </div>
    <span>Vehicles</span>
  </button>
  <button
    onClick={() => setActiveGallery("materials")}
    className={`filter-card ${
      activeGallery === "materials" ? "active" : ""
    }`}
  >
    <div className="filter-icon">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 16 16">
        <path d="M8 1.288l-6 4.5V15a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V5.788l-6-4.5zM8 2.434l5 3.75V15H3V6.184l5-3.75z"/>
        <path d="M4.5 9h7a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-7a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5zM5 10h6v-1H5v1z"/>
      </svg>
    </div>
    <span>Materials</span>
  </button>
</div>

        {/* Enhanced Gallery Images */}
        <div className="service-gallery-showcase-grid">
          {getGalleryImages().map((image, index) => (
            <div
              key={index}
              className="service-gallery-showcase-item"
              // onClick={() => setSelectedImage(image)}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <img
                src={image}
                alt={`Service ${index + 1}`}
                className="service-gallery-showcase-image"
              />
              {/* <div className="service-gallery-overlay">
                <div className="zoom-icon">🔍</div>
              </div> */}
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
          <p>
            Get comprehensive construction solutions with competitive pricing
            and quality assurance
          </p>
          <div className="cta-actions">
            <a href="/contact" className="btn btn-large btn-primary">
              <span>Get Free Quote</span>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path
                  d="M21 11.5C21 16.75 16.75 21 11.5 21C6.25 21 2 16.75 2 11.5C2 6.25 6.25 2 11.5 2C16.75 2 21 6.25 21 11.5Z"
                  stroke="currentColor"
                  strokeWidth="2"
                />
                <path
                  d="M16 11.5H11.5M11.5 11.5L11.5 7M11.5 11.5L7 11.5"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </a>
            <a href="tel:+919965555652" className="btn btn-large btn-secondary">
              <span>Call: +91 99655 55652</span>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path
                  d="M5 4H9L11 9L8.5 10.5C9.57096 12.6715 11.3285 14.429 13.5 15.5L15 13L20 15V19C20 19.5304 19.7893 20.0391 19.4142 20.4142C19.0391 20.7893 18.5304 21 18 21C14.0993 20.763 10.4202 19.1065 7.65683 16.3432C4.8935 13.5798 3.23705 9.90074 3 6C3 5.46957 3.21071 4.96086 3.58579 4.58579C3.96086 4.21071 4.46957 4 5 4Z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* Enhanced Image Modal */}
      {selectedImage && (
        <div
          className="image-modal-enhanced"
          onClick={() => setSelectedImage(null)}
        >
          <div className="modal-content">
            <img
              src={selectedImage}
              alt="Enlarged view"
              className="modal-image-enhanced"
            />
            <button className="modal-close">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path
                  d="M18 6L6 18M6 6L18 18"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Services;
