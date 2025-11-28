// C:\Users\user.DESKTOP-9V4975E\const\src\pages\Projects\Projects.js
import React, { useState, useEffect } from 'react';

const Projects = () => {
  const [activeTab, setActiveTab] = useState('completed');
  const [selectedImage, setSelectedImage] = useState(null);
  const [activeProject, setActiveProject] = useState('all');
  const [activeOngoingProject, setActiveOngoingProject] = useState('all');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Completed Projects Images (same as before)
  const asokapuramLibrary = [
    '/uploads/COMPLETED PROJECTS/asokapuram library/1.jpg',
    '/uploads/COMPLETED PROJECTS/asokapuram library/2.jpg',
    '/uploads/COMPLETED PROJECTS/asokapuram library/3.jpg'
  ];

  const colorCode = [
    '/uploads/COMPLETED PROJECTS/COLOR CODE/2.jpeg',
    '/uploads/COMPLETED PROJECTS/COLOR CODE/3.jpeg'
  ];

  const compoundWall = [
    '/uploads/COMPLETED PROJECTS/compound wall/2.FILE CONCRETE.jpeg',
    '/uploads/COMPLETED PROJECTS/compound wall/3.BELT CONCRETE.jpeg',
    '/uploads/COMPLETED PROJECTS/compound wall/4.POST CONCRETE.jpeg',
    '/uploads/COMPLETED PROJECTS/compound wall/5.BLOCK WORK.jpeg',
    '/uploads/COMPLETED PROJECTS/compound wall/6.BLOCK WORK CURING.jpeg',
    '/uploads/COMPLETED PROJECTS/compound wall/7.PLASTERING WORK.jpeg',
    '/uploads/COMPLETED PROJECTS/compound wall/8.PLASTERING CURING.jpeg',
    '/uploads/COMPLETED PROJECTS/compound wall/FINAL.jpeg'
  ];

  const drainage = [
    '/uploads/COMPLETED PROJECTS/Drainage/1.POOJA.jpeg',
    '/uploads/COMPLETED PROJECTS/Drainage/2.1 EARTH WORK WITH VIBRATOR.jpeg',
    '/uploads/COMPLETED PROJECTS/Drainage/2.2 EARTH WORK.jpeg',
    '/uploads/COMPLETED PROJECTS/Drainage/2.EARTH WORK.jpeg',
    '/uploads/COMPLETED PROJECTS/Drainage/4.BASE CONCRETE.jpeg',
    '/uploads/COMPLETED PROJECTS/Drainage/5.TMT FIXING.jpeg',
    '/uploads/COMPLETED PROJECTS/Drainage/6.TMT FIXING.jpeg',
    '/uploads/COMPLETED PROJECTS/Drainage/7.MAT CONCRETE.jpeg',
    '/uploads/COMPLETED PROJECTS/Drainage/8.1.SHUTTERING.jpeg',
    '/uploads/COMPLETED PROJECTS/Drainage/8.SHUTTERING.jpeg',
    '/uploads/COMPLETED PROJECTS/Drainage/9.CONCRETE FILLING.jpeg',
    '/uploads/COMPLETED PROJECTS/Drainage/10.CONCRETE FILLING.jpeg',
    '/uploads/COMPLETED PROJECTS/Drainage/11.1 SHUTTERING REMOVAL.jpeg',
    '/uploads/COMPLETED PROJECTS/Drainage/11.SHUTTERING REMOVAL.jpeg',
    '/uploads/COMPLETED PROJECTS/Drainage/12.WATER CURING.jpeg',
    '/uploads/COMPLETED PROJECTS/Drainage/13.DRAINAGE FINAL.jpeg',
    '/uploads/COMPLETED PROJECTS/Drainage/14.DRIANAGE FINAL.jpeg'
  ];

  const poonjolaiGarden = [
    '/uploads/COMPLETED PROJECTS/POONJOLAI GARDEN - MK GROUP OF COMPANIES KAALAPATTI/1..jpg',
    '/uploads/COMPLETED PROJECTS/POONJOLAI GARDEN - MK GROUP OF COMPANIES KAALAPATTI/1.jpg',
    '/uploads/COMPLETED PROJECTS/POONJOLAI GARDEN - MK GROUP OF COMPANIES KAALAPATTI/2.EXISTING ROAD.jpg',
    '/uploads/COMPLETED PROJECTS/POONJOLAI GARDEN - MK GROUP OF COMPANIES KAALAPATTI/3.DISPOSAL OF OLD ROAD.jpg',
    '/uploads/COMPLETED PROJECTS/POONJOLAI GARDEN - MK GROUP OF COMPANIES KAALAPATTI/4.EARTH WORK SOIL REMOVAL.jpg',
    '/uploads/COMPLETED PROJECTS/POONJOLAI GARDEN - MK GROUP OF COMPANIES KAALAPATTI/5.EARTH WORK SECTIONING.jpg',
    '/uploads/COMPLETED PROJECTS/POONJOLAI GARDEN - MK GROUP OF COMPANIES KAALAPATTI/6.BED FORMATION.jpg',
    '/uploads/COMPLETED PROJECTS/POONJOLAI GARDEN - MK GROUP OF COMPANIES KAALAPATTI/6.GSB SPREADING AND LAYING.jpg',
    '/uploads/COMPLETED PROJECTS/POONJOLAI GARDEN - MK GROUP OF COMPANIES KAALAPATTI/8.GSB SPREADING AND LAYING WITH PAVER.jpg',
    '/uploads/COMPLETED PROJECTS/POONJOLAI GARDEN - MK GROUP OF COMPANIES KAALAPATTI/9.GSB WMM BED FORMATION ROLLED.jpg',
    '/uploads/COMPLETED PROJECTS/POONJOLAI GARDEN - MK GROUP OF COMPANIES KAALAPATTI/10.WATER CURING.jpg',
    '/uploads/COMPLETED PROJECTS/POONJOLAI GARDEN - MK GROUP OF COMPANIES KAALAPATTI/11.TACK COAT.jpg',
    '/uploads/COMPLETED PROJECTS/POONJOLAI GARDEN - MK GROUP OF COMPANIES KAALAPATTI/12.BITUMEN MACADAM.jpg',
    '/uploads/COMPLETED PROJECTS/POONJOLAI GARDEN - MK GROUP OF COMPANIES KAALAPATTI/13.1 BITUMEN CONCRETE.jpg',
    '/uploads/COMPLETED PROJECTS/POONJOLAI GARDEN - MK GROUP OF COMPANIES KAALAPATTI/13.BITUMEN CONCRETE.jpg',
    '/uploads/COMPLETED PROJECTS/POONJOLAI GARDEN - MK GROUP OF COMPANIES KAALAPATTI/14.FINAL OUTCOME.jpg',
    '/uploads/COMPLETED PROJECTS/POONJOLAI GARDEN - MK GROUP OF COMPANIES KAALAPATTI/POOJA.jpg'
  ];

  const roadMarking = [
    '/uploads/COMPLETED PROJECTS/ROAD MARKING/1.jpeg',
    '/uploads/COMPLETED PROJECTS/ROAD MARKING/2.jpeg',
    '/uploads/COMPLETED PROJECTS/ROAD MARKING/3.jpeg',
    '/uploads/COMPLETED PROJECTS/ROAD MARKING/4.jpeg',
    '/uploads/COMPLETED PROJECTS/ROAD MARKING/5.jpeg',
    '/uploads/COMPLETED PROJECTS/ROAD MARKING/6.jpeg',
    '/uploads/COMPLETED PROJECTS/ROAD MARKING/7.jpeg',
    '/uploads/COMPLETED PROJECTS/ROAD MARKING/8.jpeg'
  ];

  const vishakaVillas = [
    '/uploads/COMPLETED PROJECTS/VISHAKA VILLAS/1.1POOJA.jpg',
    '/uploads/COMPLETED PROJECTS/VISHAKA VILLAS/1.earth work soil removal.jpg',
    '/uploads/COMPLETED PROJECTS/VISHAKA VILLAS/2.1.sectioning1.jpg',
    '/uploads/COMPLETED PROJECTS/VISHAKA VILLAS/2.sectioning.jpg',
    '/uploads/COMPLETED PROJECTS/VISHAKA VILLAS/3.1monitor levelling.jpg',
    '/uploads/COMPLETED PROJECTS/VISHAKA VILLAS/3.bed fromation.jpg',
    '/uploads/COMPLETED PROJECTS/VISHAKA VILLAS/4.1 GSB SPREADING AND LAYING 1.jpg',
    '/uploads/COMPLETED PROJECTS/VISHAKA VILLAS/4.1BED FORMATION ROLLED.jpg',
    '/uploads/COMPLETED PROJECTS/VISHAKA VILLAS/4.GSB SPREADING AND LAYING.jpg',
    '/uploads/COMPLETED PROJECTS/VISHAKA VILLAS/5.1GSB & WMM BED FORMATION ROLLED 1.jpg',
    '/uploads/COMPLETED PROJECTS/VISHAKA VILLAS/5.GSB & WMM BED FORMATION ROLLED.jpg',
    '/uploads/COMPLETED PROJECTS/VISHAKA VILLAS/6.WATER CURING.jpg',
    '/uploads/COMPLETED PROJECTS/VISHAKA VILLAS/7.1.TACK COAT SPRAYING.jpg',
    '/uploads/COMPLETED PROJECTS/VISHAKA VILLAS/7.TACK COAT SPRAYING 1.jpg',
    '/uploads/COMPLETED PROJECTS/VISHAKA VILLAS/8.1 BITUMEN MACADAM1.jpg',
    '/uploads/COMPLETED PROJECTS/VISHAKA VILLAS/8.2BITUMEN MACADAM2.jpg',
    '/uploads/COMPLETED PROJECTS/VISHAKA VILLAS/8.BITUMEN MACADAM.jpg',
    '/uploads/COMPLETED PROJECTS/VISHAKA VILLAS/9. BITUMEN CONCRETE 3.jpg',
    '/uploads/COMPLETED PROJECTS/VISHAKA VILLAS/9.1 BITUMEN CONCRETE.jpg',
    '/uploads/COMPLETED PROJECTS/VISHAKA VILLAS/9.2 BITUMENT CONCRETE 1.jpg',
    '/uploads/COMPLETED PROJECTS/VISHAKA VILLAS/10. DUST SPREADING.jpg',
    '/uploads/COMPLETED PROJECTS/VISHAKA VILLAS/11.1 FINAL OUTCOME OF ROAD.jpg',
    '/uploads/COMPLETED PROJECTS/VISHAKA VILLAS/11.2 FINAL OUTCOME.jpg',
    '/uploads/COMPLETED PROJECTS/VISHAKA VILLAS/11.FINAL OUTCOME OF ROAD 1.jpg',
    '/uploads/COMPLETED PROJECTS/VISHAKA VILLAS/EXISTING.jpg'
  ];

  // Ongoing Projects (same as before)
  const pdShopVellamdai = [
    '/uploads/ON GOING PROJECTS/PD Shop Vellamdai/1.jpg',
    '/uploads/ON GOING PROJECTS/PD Shop Vellamdai/2.jpg'
  ];

  const newCommercialComplex = [
    '/uploads/ON GOING PROJECTS/PD Shop Vellamdai/3.jpg',
    '/uploads/ON GOING PROJECTS/PD Shop Vellamdai/4.jpg',
    '/uploads/ON GOING PROJECTS/PD Shop Vellamdai/5.jpg'
  ];

  const residentialLayout = [
    '/uploads/ON GOING PROJECTS/PD Shop Vellamdai/6.jpg',
    '/uploads/ON GOING PROJECTS/PD Shop Vellamdai/7.jpg',
    '/uploads/ON GOING PROJECTS/PD Shop Vellamdai/8.jpg'
  ];

  const highwayExtension = [
    '/uploads/ON GOING PROJECTS/PD Shop Vellamdai/9.jpg',
    '/uploads/ON GOING PROJECTS/PD Shop Vellamdai/10.jpg',
    '/uploads/ON GOING PROJECTS/PD Shop Vellamdai/11.jpg',
  ];

  const industrialRoad = [
   '/uploads/ON GOING PROJECTS/PD Shop Vellamdai/12.jpg',
    '/uploads/ON GOING PROJECTS/PD Shop Vellamdai/13.jpg',
    '/uploads/ON GOING PROJECTS/PD Shop Vellamdai/14.jpg',
    '/uploads/ON GOING PROJECTS/PD Shop Vellamdai/15.jpg',
    '/uploads/ON GOING PROJECTS/PD Shop Vellamdai/16.jpg',
    '/uploads/ON GOING PROJECTS/PD Shop Vellamdai/17.jpg',
    '/uploads/ON GOING PROJECTS/PD Shop Vellamdai/18.jpg',
    '/uploads/ON GOING PROJECTS/PD Shop Vellamdai/19.jpg',
    '/uploads/ON GOING PROJECTS/PD Shop Vellamdai/20.jpg',
    '/uploads/ON GOING PROJECTS/PD Shop Vellamdai/21.jpg',
    '/uploads/ON GOING PROJECTS/PD Shop Vellamdai/22.jpg',
    '/uploads/ON GOING PROJECTS/PD Shop Vellamdai/23.jpg',
     '/uploads/ON GOING PROJECTS/PD Shop Vellamdai/24.jpg',
    '/uploads/ON GOING PROJECTS/PD Shop Vellamdai/25.jpg',
    '/uploads/ON GOING PROJECTS/PD Shop Vellamdai/26.jpg',
    '/uploads/ON GOING PROJECTS/PD Shop Vellamdai/27.jpg',
    '/uploads/ON GOING PROJECTS/PD Shop Vellamdai/28.jpg',
    '/uploads/ON GOING PROJECTS/PD Shop Vellamdai/29.jpg',
    '/uploads/ON GOING PROJECTS/PD Shop Vellamdai/30.jpg',
    '/uploads/ON GOING PROJECTS/PD Shop Vellamdai/31.jpg',
    '/uploads/ON GOING PROJECTS/PD Shop Vellamdai/32.jpg',
    '/uploads/ON GOING PROJECTS/PD Shop Vellamdai/33.jpg',
    '/uploads/ON GOING PROJECTS/PD Shop Vellamdai/34.jpg',
    '/uploads/ON GOING PROJECTS/PD Shop Vellamdai/35.jpg',
    '/uploads/ON GOING PROJECTS/PD Shop Vellamdai/36.jpg',
    '/uploads/ON GOING PROJECTS/PD Shop Vellamdai/37.jpg',
    '/uploads/ON GOING PROJECTS/PD Shop Vellamdai/38.jpg',
    '/uploads/ON GOING PROJECTS/PD Shop Vellamdai/39.jpg',
    '/uploads/ON GOING PROJECTS/PD Shop Vellamdai/40.jpg',
    '/uploads/ON GOING PROJECTS/PD Shop Vellamdai/41.jpg',
    '/uploads/ON GOING PROJECTS/PD Shop Vellamdai/42.jpg',
    '/uploads/ON GOING PROJECTS/PD Shop Vellamdai/43.jpg',
    '/uploads/ON GOING PROJECTS/PD Shop Vellamdai/44.jpg',
    '/uploads/ON GOING PROJECTS/PD Shop Vellamdai/45.jpg',
    '/uploads/ON GOING PROJECTS/PD Shop Vellamdai/46.jpg',
    '/uploads/ON GOING PROJECTS/PD Shop Vellamdai/47.jpg',
     '/uploads/ON GOING PROJECTS/PD Shop Vellamdai/48.jpg',
    '/uploads/ON GOING PROJECTS/PD Shop Vellamdai/49.jpg',
    '/uploads/ON GOING PROJECTS/PD Shop Vellamdai/50.jpg',
    '/uploads/ON GOING PROJECTS/PD Shop Vellamdai/51.jpg',
    '/uploads/ON GOING PROJECTS/PD Shop Vellamdai/52.jpg',
    '/uploads/ON GOING PROJECTS/PD Shop Vellamdai/53.jpg',
    '/uploads/ON GOING PROJECTS/PD Shop Vellamdai/54.jpg',
    '/uploads/ON GOING PROJECTS/PD Shop Vellamdai/55.jpg',
    '/uploads/ON GOING PROJECTS/PD Shop Vellamdai/56.jpg',
    '/uploads/ON GOING PROJECTS/PD Shop Vellamdai/57.jpg',
    '/uploads/ON GOING PROJECTS/PD Shop Vellamdai/58.jpg',
    '/uploads/ON GOING PROJECTS/PD Shop Vellamdai/59.jpg',
  ];

  const allOngoingProjects = [
    ...pdShopVellamdai,
    ...newCommercialComplex,
    ...residentialLayout,
    ...highwayExtension,
    ...industrialRoad
  ];

  const allCompletedProjects = [
    ...asokapuramLibrary,
    ...colorCode,
    ...compoundWall,
    ...drainage,
    ...poonjolaiGarden,
    ...roadMarking,
    ...vishakaVillas
  ];

  const getOngoingProjectImages = () => {
    switch(activeOngoingProject) {
      case 'pdshop': return pdShopVellamdai;
      case 'commercial': return newCommercialComplex;
      case 'residential': return residentialLayout;
      case 'highway': return highwayExtension;
      case 'industrial': return industrialRoad;
      default: return allOngoingProjects;
    }
  };

  const getProjectImages = () => {
    if (activeTab === 'ongoing') {
      return getOngoingProjectImages();
    }

    switch(activeProject) {
      case 'asokapuram': return asokapuramLibrary;
      case 'colorcode': return colorCode;
      case 'compound': return compoundWall;
      case 'drainage': return drainage;
      case 'poonjolai': return poonjolaiGarden;
      case 'roadmarking': return roadMarking;
      case 'vishaka': return vishakaVillas;
      default: return allCompletedProjects;
    }
  };

  const projectStats = [
    { number: '50+', label: 'Projects Completed', icon: '✅' },
    { number: '15+', label: 'Ongoing Projects', icon: '🏗️' },
    { number: '12+', label: 'Years Experience', icon: '📅' },
    { number: '5', label: 'Districts Served', icon: '📍' }
  ];

  return (
    <div className={`container ${isVisible ? 'page-visible' : ''}`}>
      {/* Enhanced Projects Hero Section */}
      <section className="projects-hero-section">
        <div className="projects-hero-background">
          <div className="hero-gradient"></div>
          <div className="hero-pattern"></div>
        </div>
        <div className="projects-hero-content">
          <div className="hero-text-content">
            <div className="company-badge">
              <span>Showcasing Excellence</span>
            </div>
            <h1 className="hero-main-title">
              Our <span className="highlight">Portfolio</span> of Excellence
            </h1>
            <p className="hero-description">
              Discover our journey of transforming landscapes through innovative construction 
              solutions and quality-driven project execution across Tamil Nadu.
            </p>
            <div className="hero-stats">
              {projectStats.map((stat, index) => (
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
            <div className="project-visual-card">
              <div className="project-icon">🏆</div>
              <h4>Quality Assured</h4>
              <p>Every project meets our high standards</p>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Tab Navigation */}
      <section className="projects-navigation">
        <div className="nav-tabs">
          <button 
            onClick={() => setActiveTab('completed')}
            className={`nav-tab ${activeTab === 'completed' ? 'active' : ''}`}
          >
            <span className="tab-icon">✅</span>
            Completed Projects
          </button>
          <button 
            onClick={() => setActiveTab('ongoing')}
            className={`nav-tab ${activeTab === 'ongoing' ? 'active' : ''}`}
          >
            <span className="tab-icon">🏗️</span>
            Ongoing Projects
          </button>
        </div>
      </section>

      {/* Enhanced Project Filter Section */}
      <section className="projects-filter-section">
        <div className="filter-content">
          <h3 className="filter-section-title">
            {activeTab === 'completed' ? 'Browse Our Completed Work' : 'Explore Current Projects'}
          </h3>
          
          {/* Completed Projects Filter */}
          {activeTab === 'completed' && (
            <div className="filter-grid">
              <button 
                onClick={() => setActiveProject('all')}
                className={`filter-card ${activeProject === 'all' ? 'active' : ''}`}
              >
                <div className="filter-icon">📂</div>
                <span>All Projects</span>
              </button>
              <button 
                onClick={() => setActiveProject('asokapuram')}
                className={`filter-card ${activeProject === 'asokapuram' ? 'active' : ''}`}
              >
                <div className="filter-icon">📚</div>
                <span>Asokapuram Library</span>
              </button>
              <button 
                onClick={() => setActiveProject('poonjolai')}
                className={`filter-card ${activeProject === 'poonjolai' ? 'active' : ''}`}
              >
                <div className="filter-icon">🌳</div>
                <span>Poonjolai Garden</span>
              </button>
              <button 
                onClick={() => setActiveProject('vishaka')}
                className={`filter-card ${activeProject === 'vishaka' ? 'active' : ''}`}
              >
                <div className="filter-icon">🏠</div>
                <span>Vishaka Villas</span>
              </button>
              <button 
                onClick={() => setActiveProject('drainage')}
                className={`filter-card ${activeProject === 'drainage' ? 'active' : ''}`}
              >
                <div className="filter-icon">💧</div>
                <span>Drainage Systems</span>
              </button>
              <button 
                onClick={() => setActiveProject('compound')}
                className={`filter-card ${activeProject === 'compound' ? 'active' : ''}`}
              >
                <div className="filter-icon">🧱</div>
                <span>Compound Walls</span>
              </button>
              <button 
                onClick={() => setActiveProject('roadmarking')}
                className={`filter-card ${activeProject === 'roadmarking' ? 'active' : ''}`}
              >
                <div className="filter-icon">🛣️</div>
                <span>Road Marking</span>
              </button>
              <button 
                onClick={() => setActiveProject('colorcode')}
                className={`filter-card ${activeProject === 'colorcode' ? 'active' : ''}`}
              >
                <div className="filter-icon">🎨</div>
                <span>Color Code</span>
              </button>
            </div>
          )}

          {/* Ongoing Projects Filter */}
          {activeTab === 'ongoing' && (
            <div className="filter-grid">
              <button 
                onClick={() => setActiveOngoingProject('all')}
                className={`filter-card ${activeOngoingProject === 'all' ? 'active' : ''}`}
              >
                <div className="filter-icon">📂</div>
                <span>All Ongoing</span>
              </button>
              <button 
                onClick={() => setActiveOngoingProject('pdshop')}
                className={`filter-card ${activeOngoingProject === 'pdshop' ? 'active' : ''}`}
              >
                <div className="filter-icon">🏪</div>
                <span>PD Shop Vellamdai</span>
              </button>
              <button 
                onClick={() => setActiveOngoingProject('commercial')}
                className={`filter-card ${activeOngoingProject === 'commercial' ? 'active' : ''}`}
              >
                <div className="filter-icon">🏢</div>
                <span>Commercial Complex</span>
              </button>
              <button 
                onClick={() => setActiveOngoingProject('residential')}
                className={`filter-card ${activeOngoingProject === 'residential' ? 'active' : ''}`}
              >
                <div className="filter-icon">🏡</div>
                <span>Residential Layout</span>
              </button>
              <button 
                onClick={() => setActiveOngoingProject('highway')}
                className={`filter-card ${activeOngoingProject === 'highway' ? 'active' : ''}`}
              >
                <div className="filter-icon">🛣️</div>
                <span>Highway Extension</span>
              </button>
              <button 
                onClick={() => setActiveOngoingProject('industrial')}
                className={`filter-card ${activeOngoingProject === 'industrial' ? 'active' : ''}`}
              >
                <div className="filter-icon">🏭</div>
                <span>Industrial Road</span>
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Enhanced Project Gallery */}
      <section className="projects-gallery-section">
        <div className="gallery-header">
          <h2 className="section-title">
            {activeTab === 'completed' ? 'Completed Projects Gallery' : 'Ongoing Projects Gallery'}
          </h2>
          <p className="section-subtitle">
            {activeTab === 'completed' 
              ? 'Successfully delivered projects showcasing our commitment to excellence and precision'
              : 'Currently transforming landscapes with innovative construction solutions'
            }
          </p>
        </div>

        <div className="projects-showcase-grid">
          {getProjectImages().map((image, index) => (
            <div 
              key={index} 
              className="project-showcase-item"
              onClick={() => setSelectedImage(image)}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <img 
                src={image} 
                alt={`Project ${index + 1}`}
                className="project-showcase-image"
              />
              <div className="project-overlay">
                <div className="project-info">
                  <div className="project-badge">
                    {activeTab === 'completed' ? 'Completed' : 'In Progress'}
                  </div>
                  <div className="view-button">View Details</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Enhanced Service Areas Section */}
      <section className="service-areas-section">
        <div className="areas-background">
          <div className="areas-pattern"></div>
        </div>
        <div className="areas-content">
          <div className="section-header">
            <h2 className="section-title">Areas We Serve</h2>
            <p className="section-subtitle">
              Proudly serving multiple districts with excellence and dedication
            </p>
          </div>
          <div className="areas-showcase-grid">
            <div className="area-showcase-card">
              <div className="area-icon">📍</div>
              <h4>Mettupalayam</h4>
              <p>Comprehensive construction services</p>
            </div>
            <div className="area-showcase-card">
              <div className="area-icon">🏔️</div>
              <h4>Nilgiris</h4>
              <p>Mountain region expertise</p>
            </div>
            <div className="area-showcase-card">
              <div className="area-icon">🏙️</div>
              <h4>Coimbatore</h4>
              <p>Urban development projects</p>
            </div>
            <div className="area-showcase-card">
              <div className="area-icon">🏭</div>
              <h4>Erode</h4>
              <p>Industrial infrastructure</p>
            </div>
            <div className="area-showcase-card">
              <div className="area-icon">👕</div>
              <h4>Tiruppur</h4>
              <p>Textile hub development</p>
            </div>
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

export default Projects;