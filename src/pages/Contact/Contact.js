// C:\Users\user.DESKTOP-9V4975E\const\src\pages\Contact\Contact.js
import React, { useState, useEffect } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
    alert("Thank you for your message! We will get back to you soon.");
    setFormData({ name: "", email: "", phone: "", service: "", message: "" });
  };

  // Phone numbers from environment variables or fallback to company numbers
  const phoneNumbers = [
    process.env.REACT_APP_PHONE_1 || "+91 99655 55652",
    process.env.REACT_APP_PHONE_2 || "+91 93601 40985",
    process.env.REACT_APP_PHONE_3 || "+91 70103 90021",
    process.env.REACT_APP_PHONE_4 || "+91 97878 49000",
  ];

  const contactStats = [
    { number: "24/7", label: "Customer Support", icon: "🕒" },
    { number: "1 Hour", label: "Response Time", icon: "⚡" },
    // { number: "250+", label: "Happy Clients", icon: "😊" },
    { number: "14+", label: "Years Experience", icon: "🏆" },
  ];

  return (
    <div className={`container-full ${isVisible ? "page-visible" : ""}`}>
      {/* Enhanced Contact Hero Section */}
      <section className="contact-hero-section">
        <div className="contact-hero-background">
          <div className="hero-gradient"></div>
          <div className="hero-pattern"></div>
        </div>
        <div className="contact-hero-content">
          <div className="hero-text-content">
            {/* <div className="company-badge">
              <span>Get in Touch</span>
            </div> */}
            <h1 className="hero-main-title">
              Let's <span className="highlightsa">Build</span> Together
            </h1>
            <p className="hero-description">
              Ready to start your construction project? Contact us for
              comprehensive solutions, competitive pricing, and expert guidance
              every step of the way.
            </p>
            <div className="hero-stats">
              {contactStats.map((stat, index) => (
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
            <div className="contact-visual-card">
              <div className="contact-icon">📞</div>
              <h4>Quick Response</h4>
              <p>We'll get back to you within 1 hour</p>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Contact Main Section */}
      <section className="contact-main-enhanced">
        <div className="contact-grid-enhanced">
          {/* Enhanced Contact Information */}
          <div className="contact-info-enhanced">
            <div className="contact-info-card-enhanced">
              <div className="contact-header">
                <h2 className="contact-info-title">Get In Touch</h2>
                <p className="contact-info-description">
                  Reach out to us for any construction requirements, vehicle
                  hire, or building materials. We're here to help you build your
                  dreams.
                </p>
              </div>

              {/* Enhanced Phone Numbers */}
              <div className="contact-phone-section-enhanced">
                <h3 className="contact-section-title">
                  <span className="contact-icon"></span>
                  Call Us Directly
                </h3>
                <div className="phone-numbers-grid-enhanced">
                  {phoneNumbers.map((phone, index) => (
                    <a
                      key={index}
                      href={`tel:${phone}`}
                      className="phone-number-enhanced"
                    >
                      <div className="phone-icon-wrapper">
                        <span className="phone-icon">☏</span>
                      </div>
                      <div className="phone-content">
                        <span className="phone-number">{phone}</span>
                        <span className="phone-label">Available 24/7</span>
                      </div>
                      <div className="phone-arrow">→</div>
                    </a>
                  ))}
                </div>
              </div>

              {/* Enhanced Business Information */}
              <div className="business-info-section-enhanced">
                <h3 className="contact-section-title">
                  <span className="contact-icon"></span>
                  Business Information
                </h3>
                <div className="business-details-enhanced">
                  <div className="business-detail-item-enhanced">
                    <div className="detail-icon">🏭</div>
                    <div className="detail-content">
                      <strong>Company</strong>
                      <span>
                        {process.env.REACT_APP_COMPANY_NAME ||
                          "Sathguru babaji Traders"}{" "}
                        MTP
                      </span>
                    </div>
                  </div>
                  <div className="business-detail-item-enhanced">
                    <div className="detail-icon">🎯</div>
                    <div className="detail-content">
                      <strong>Specialization</strong>
                      <span>
                        Fort Road Contractor & Building Material Supplier
                      </span>
                    </div>
                  </div>
                  <div className="business-detail-item-enhanced">
                    <div className="detail-icon">🚀</div>
                    <div className="detail-content">
                      <strong>Tagline</strong>
                      <span>
                        Your One-Stop Solution for All Construction Needs
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Enhanced Service Areas */}
              {/* <div className="service-areas-section-enhanced">
                <h3 className="contact-section-title">
                  <span className="contact-icon"></span>
                  Areas We Serve
                </h3>
                <div className="service-areas-grid-enhanced">
                  <div className="service-area-card">
                    <span className="area-icon">🏞</span>
                    <span className="area-name">Mettupalayam</span>
                  </div>
                  <div className="service-area-card">
                    <span className="area-icon">ᨒ</span>
                    <span className="area-name">Nilgiris</span>
                  </div>
                  <div className="service-area-card">
                    <span className="area-icon">✈︎</span>
                    <span className="area-name">Coimbatore</span>
                  </div>
                  <div className="service-area-card">
                    <span className="area-icon">𓍙</span>
                    <span className="area-name">Erode</span>
                  </div>
                  <div className="service-area-card">
                    <span className="area-icon">⛫</span>
                    <span className="area-name">Tiruppur</span>
                  </div>
                </div>
              </div> */}
            </div>
          </div>

          {/* Enhanced Contact Form */}
          <div className="contact-form-enhanced">
            <div className="contact-form-card-enhanced">
              <div className="form-header">
                <h2 className="contact-form-title">Send Us a Message</h2>
                <p className="contact-form-description">
                  Fill out the form below and we'll get back to you within 24
                  hours with a detailed quote.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="contact-form-enhanced">
                <div className="form-row">
                  <div className="form-group-enhanced">
                    <label htmlFor="name" className="form-label">
                      <span className="label-icon">👤</span>
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="form-input-enhanced"
                      placeholder="Enter your full name"
                    />
                  </div>

                  <div className="form-group-enhanced">
                    <label htmlFor="email" className="form-label">
                      <span className="label-icon">📧</span>
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="form-input-enhanced"
                      placeholder="Enter your email address"
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group-enhanced">
                    <label htmlFor="phone" className="form-label">
                      <span className="label-icon">📱</span>
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="form-input-enhanced"
                      placeholder="Enter your phone number"
                    />
                  </div>

                  <div className="form-group-enhanced">
                    <label htmlFor="service" className="form-label">
                      <span className="label-icon">🛠️</span>
                      Service Interested In
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="form-select-enhanced"
                    >
                      <option value="">Select a service</option>
                      <option value="road-construction">
                        Road Construction
                      </option>
                      <option value="building-construction">
                        Building Construction
                      </option>
                      <option value="vehicle-rental">Vehicle Rental</option>
                      <option value="cement-supply">Cement Supply</option>
                      <option value="tmt-supply">TMT Steel Supply</option>
                      <option value="layout-development">
                        Layout Development
                      </option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                <div className="form-group-enhanced full-width">
                  <label htmlFor="message" className="form-label">
                    <span className="label-icon">📝</span>
                    Project Details *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="6"
                    className="form-textarea-enhanced"
                    placeholder="Please describe your construction requirements, project details, timeline, budget, or any specific needs..."
                  ></textarea>
                </div>

                <button type="submit" className="submit-btn-enhanced">
                  <span className="btn-icon">📨</span>
                  Send Message
                  <span className="btn-arrow">→</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Location Images Section */}
      <section className="location-images-enhanced">
        <div className="section-header">
          <h2 className="section-title">Our Operations</h2>
          <p className="section-subtitle">
            Showcasing our expertise across various construction domains
          </p>
        </div>
        <div className="location-images-grid-enhanced">
          <div className="location-image-card-enhanced">
            <div className="image-container">
              <img
                src="/uploads/HOME PAGE/road construction.jpg"
                alt="Road Construction Work"
                className="location-image-enhanced"
              />
              <div className="image-overlay-enhanced">
                <div className="overlay-content">
                  <div className="location-icon">🛣️</div>
                  <h4>Road Construction</h4>
                  <p>
                    Quality road work across Tamil Nadu with modern equipment
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="location-image-card-enhanced">
            <div className="image-container">
              <img
                src="/uploads/HOME PAGE/Vehicles.jpg"
                alt="Our Vehicles"
                className="location-image-enhanced"
              />
              <div className="image-overlay-enhanced">
                <div className="overlay-content">
                  <div className="location-icon">🚛</div>
                  <h4>Vehicle Fleet</h4>
                  <p>
                    Well-maintained construction equipment for all your needs
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="location-image-card-enhanced">
            <div className="image-container">
              <img
                src="/uploads/HOME PAGE/building trust.jpg"
                alt="Building Construction"
                className="location-image-enhanced"
              />
              <div className="image-overlay-enhanced">
                <div className="overlay-content">
                  <div className="location-icon">🏗️</div>
                  <h4>Building Construction</h4>
                  <p>
                    Commercial & residential projects with quality assurance
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Quick Contact CTA */}
      <section className="quick-contact-enhanced">
        <div className="quick-contact-background">
          <div className="cta-pattern"></div>
        </div>
        <div className="quick-contact-content-enhanced">
          <div className="cta-text">
            <h2>Need Immediate Assistance?</h2>
            <p>
              Call us now for quick quotes, emergency services, and instant
              consultation
            </p>
          </div>
          <div className="quick-contact-actions">
            <a href="tel:+919965555652" className="btn btn-large btn-primary">
              <span>📞 Call +91 99655 55652</span>
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
            <a
              href="https://wa.me/919965555652"
              className="btn btn-large btn-secondary"
            >
              <span>💬 WhatsApp Us</span>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path
                  d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884"
                  fill="currentColor"
                />
              </svg>
            </a>
          </div>
          <div className="quick-contact-info">
            <div className="contact-info-item">
              <span className="info-icon">🕒</span>
              <span>24/7 Available</span>
            </div>
            <div className="contact-info-item">
              <span className="info-icon">⚡</span>
              <span>Instant Response</span>
            </div>
            <div className="contact-info-item">
              <span className="info-icon">💰</span>
              <span>Free Consultation</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
