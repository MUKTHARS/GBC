// C:\Users\user.DESKTOP-9V4975E\const\src\pages\About\About.js
import React, { useState, useEffect } from "react";

const About = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [activeTab, setActiveTab] = useState("milestones");
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const siteInspectionImages = [
    "/uploads/Site Inspection/OUR SITE INSPECTED BY DISTRICT COLLECTOR1.jpg",
    "/uploads/Site Inspection/OUR SITE INSPECTED BY DISTRICT COLLECTOR2.jpg",
    "/uploads/Site Inspection/OUR SITE INSPECTED BY DISTRICT COLLECTOR3.jpg",
    "/uploads/Site Inspection/OUR SITE INSPECTED BY DISTRICT COLLECTOR4.jpg",
    "/uploads/Site Inspection/OUR SITE INSPECTED BY STATE QUALITY MONITOR1.jpg",
    "/uploads/Site Inspection/OUR SITE INSPECTED BY STATE QUALITY MONITOR2.jpg",
    "/uploads/Site Inspection/OUR SITE INSPECTED BY STATE QUALITY MONITOR3.jpg",
    "/uploads/Site Inspection/OUR SITE INSPECTED BY STATE QUALITY MONITOR4.jpg",
    "/uploads/Site Inspection/OUR SITE INSPECTED BY STATE QUALITY MONITOR5.jpg",
    "/uploads/Site Inspection/OUR SITE INSPECTED BY STATE QUALITY MONITOR6.jpg",
    "/uploads/Site Inspection/OUR SITE INSPECTED BY STATE QUALITY MONITOR7.jpg",
  ];

  const milestones = [
    {
      year: "2010",
      title: "Company Founded",
      description: "Started as local construction service provider",
    },
    {
      year: "2013",
      title: "Government Projects",
      description: "Awarded first major government road contract",
    },
    {
      year: "2016",
      title: "Expansion",
      description: "Expanded services to material supply and equipment rental",
    },
    {
      year: "2020",
      title: "Regional Leader",
      description: "Became leading contractor in Nilgiris region",
    },
    {
      year: "2024",
      title: "Current Status",
      description: "250+ projects completed across multiple sectors",
    },
  ];

  const values = [
    {
      icon: "🎯",
      title: "Quality Excellence",
      description: "Uncompromising quality in every project we undertake",
    },
    {
      icon: "⏱️",
      title: "Timely Delivery",
      description: "Commitment to project timelines and deadlines",
    },
    {
      icon: "🤝",
      title: "Client Partnership",
      description: "Building long-term relationships with our clients",
    },
    {
      icon: "💡",
      title: "Innovation",
      description: "Adopting modern construction techniques and technologies",
    },
    {
      icon: "🛡️",
      title: "Integrity",
      description: "Transparent and ethical business practices",
    },
    {
      icon: "🌱",
      title: "Sustainability",
      description: "Environmentally conscious construction practices",
    },
  ];

  return (
    <div className={`container-full ${isVisible ? "page-visible" : ""}`}>
      {/* Enhanced Hero Section */}
      <section className="about-hero-section">
        <div className="about-hero-background">
          <div className="hero-gradient"></div>
          <div className="hero-pattern"></div>
        </div>
        <div className="about-hero-content">
          <div className="hero-text-content">
            {/* <div className="company-badge">
              <span>Trusted Since 2010</span>
            </div> */}
            <h1 className="hero-main-title">
              Building Excellence,{" "}
              <span className="highlighta">Creating Legacy</span>
            </h1>
            <p className="hero-descriptiona">
              For over 14 years, Sathguru babaji Traders has been at the
              forefront of construction excellence in Tamil Nadu, delivering
              quality projects that stand the test of time.
            </p>
            <div className="hero-stats">
              <div className="hero-stat">
                <div className="stat-number">14+</div>
                <div className="stat-label">Years Experience</div>
              </div>
              <div className="hero-stat">
                <div className="stat-number">250+</div>
                <div className="stat-label">Projects Completed</div>
              </div>
              <div className="hero-stat">
                <div className="stat-number">50+</div>
                <div className="stat-label">Team Members</div>
              </div>
            </div>
          </div>
          <div className="hero-visual">
            <div className="company-logo-visual">
              <div className="logo-circle"></div>
              <div className="logo-text">SBT</div>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation Tabs */}
      <section className="about-navigation">
        <div className="nav-tabs">
          <button
            className={`nav-tab ${activeTab === "milestones" ? "active" : ""}`}
            onClick={() => setActiveTab("milestones")}
          >
            Milestones
          </button>
          <button
            className={`nav-tab ${activeTab === "story" ? "active" : ""}`}
            onClick={() => setActiveTab("story")}
          >
            Our Story
          </button>
          <button
            className={`nav-tab ${activeTab === "mission" ? "active" : ""}`}
            onClick={() => setActiveTab("mission")}
          >
            Mission & Values
          </button>
        </div>
      </section>

      {/* Tab Content */}
      <section className="about-content-section">
        {activeTab === "story" && (
          <div className="tab-content active">
            <div className="content-grid">
              <div className="content-main">
                <h2>Our Journey of Excellence</h2>
                <p className="lead-text">
                  Founded in 2010, Sathguru babaji Traders has grown from a
                  local construction service provider to one of the most trusted
                  names in the construction industry across Tamil Nadu.
                </p>

                <div className="story-highlights">
                  <div className="highlight-card">
                    <div className="highlight-icon">📜</div>
                    <h4>Government Approved</h4>
                    <p>
                      Recognized contractor for various government departments
                      including Highways, DRDA, and Municipalities
                    </p>
                  </div>

                  <div className="highlight-card">
                    <div className="highlight-icon">ᯓ</div>
                    <h4>Road Construction Experts</h4>
                    <p>
                      Specialized in BT road works with quality approved by
                      state quality monitors
                    </p>
                  </div>

                  <div className="highlight-card">
                    <div className="highlight-icon">📑</div>
                    <h4>Multi-Sector Expertise</h4>
                    <p>
                      Comprehensive services from building construction to
                      layout development
                    </p>
                  </div>
                </div>

                <div className="expertise-section">
                  <h3>Our Areas of Expertise</h3>
                  <div className="expertise-grid">
                    <div className="expertise-item">
                      <span className="expertise-badge">
                        Highways Department
                      </span>
                      <span className="expertise-badge">DRDA Projects</span>
                      <span className="expertise-badge">
                        Municipality Works
                      </span>
                      <span className="expertise-badge">Town Panchayat</span>
                      <span className="expertise-badge">Village Panchayat</span>
                      <span className="expertise-badge">Private Layouts</span>
                      <span className="expertise-badge">
                        Building Construction
                      </span>
                      <span className="expertise-badge">Material Supply</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="content-sidebar">
                <div className="company-profile-card">
                  <div className="profile-header">
                    <h3>Sathguru babaji Traders</h3>
                    <p className="profile-tagline">
                      MTP Road Contractor & Building Material Supplier
                    </p>
                  </div>
                  <div className="profile-details">
                    <div className="detail-item">
                      <strong>Established:</strong>
                      <span>2010</span>
                    </div>
                    <div className="detail-item">
                      <strong>Projects Completed:</strong>
                      <span>250+</span>
                    </div>
                    <div className="detail-item">
                      <strong>Team Strength:</strong>
                      <span>50+ Professionals</span>
                    </div>
                    <div className="detail-item">
                      <strong>Service Areas:</strong>
                      <span>Nilgiris, Coimbatore, Erode, Tiruppur</span>
                    </div>
                  </div>
                </div>

                <div className="certification-card">
                  <h4>Certifications & Approvals</h4>
                  <div className="certification-list">
                    <div className="certification-item">
                      <span className="cert-icon">ꪜ</span>
                      <span>Government Approved Contractor</span>
                    </div>
                    <div className="certification-item">
                      <span className="cert-icon">ꪜ</span>
                      <span>Quality Monitored Projects</span>
                    </div>
                    <div className="certification-item">
                      <span className="cert-icon">ꪜ</span>
                      <span>Authorized Material Dealer</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === "mission" && (
          <div className="tab-content active">
            <div className="mission-content">
              <div className="mission-statement">
                <h2>Our Mission & Vision</h2>
                <p className="mission-text">
                  To revolutionize the construction industry through innovative
                  solutions, uncompromising quality, and client-centric
                  approaches that build sustainable infrastructure for future
                  generations.
                </p>
              </div>

              <div className="values-section">
                <h3>Our Core Values</h3>
                <div className="values-grid">
                  {values.map((value, index) => (
                    <div key={index} className="value-card">
                      <div className="value-icon">{value.icon}</div>
                      <h4>{value.title}</h4>
                      <p>{value.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === "milestones" && (
          <div className="tab-content active">
            <div className="milestones-section">
              <h2>Our Journey Timeline</h2>
              <div className="timeline">
                {milestones.map((milestone, index) => (
                  <div key={index} className="timeline-item">
                    <div className="timeline-marker"></div>
                    <div className="timeline-content">
                      <div className="timeline-year">{milestone.year}</div>
                      <h4 className="timeline-title">{milestone.title}</h4>
                      <p className="timeline-description">
                        {milestone.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </section>

      {/* Enhanced Quality Assurance Section */}
      <section className="quality-section">
        <div className="quality-background">
          <div className="quality-pattern"></div>
        </div>
        <div className="quality-content">
          <div className="section-header">
            <h2 className="section-title">Quality Assurance & Inspections</h2>
            <p className="section-subtitle">
              Our commitment to quality is verified through regular inspections
              by government authorities
            </p>
          </div>

          <div className="inspection-showcase">
            {siteInspectionImages.map((image, index) => (
              <div
                key={index}
                className="inspection-card"
                // onClick={() => setSelectedImage(image)}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <img
                  src={image}
                  alt={`Quality inspection ${index + 1}`}
                  className="inspection-image"
                />
                {/* <div className="inspection-overlay">
                  <div className="inspection-info">
                    <div className="inspection-badge">Government Approved</div>
                    <div className="view-button">View Details</div>
                  </div>
                </div> */}
              </div>
            ))}
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

export default About;
