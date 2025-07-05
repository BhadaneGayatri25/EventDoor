"use client"

import { useState, useEffect } from "react"

function EventDoor() {
  const [darkMode, setDarkMode] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  // Toggle dark mode
  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
  }

  // Toggle mobile menu
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
  }

  // Scroll to section
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setMobileMenuOpen(false)
  }

  // Apply dark mode class to body
  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark")
    } else {
      document.body.classList.remove("dark")
    }
  }, [darkMode])

  return (
    <div className={darkMode ? "dark" : ""}>
      {/* Navigation */}
      <nav className="navbar">
        <div className="nav-container">
          <div className="logo">Event Door</div>

          <ul className="nav-menu">
            <li>
              <a className="nav-link" onClick={() => scrollToSection("home")}>
                Home
              </a>
            </li>
            <li>
              <a className="nav-link" onClick={() => scrollToSection("about")}>
                About
              </a>
            </li>
            <li>
              <a className="nav-link" onClick={() => scrollToSection("values")}>
                Values
              </a>
            </li>
            <li>
              <a className="nav-link" onClick={() => scrollToSection("testimonials")}>
                Testimonials
              </a>
            </li>
            <li>
              <button className="contact-btn" onClick={() => scrollToSection("contact")}>
                Contact Us
              </button>
            </li>
          </ul>

          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <button className="theme-toggle" onClick={toggleDarkMode}>
              {darkMode ? "☀️" : "🌙"}
            </button>
            <button className="mobile-menu-btn" onClick={toggleMobileMenu}>
              {mobileMenuOpen ? "✕" : "☰"}
            </button>
          </div>

          {/* Mobile Menu */}
          <div className={`mobile-menu ${mobileMenuOpen ? "active" : ""}`}>
            <a className="mobile-nav-link" onClick={() => scrollToSection("home")}>
              Home
            </a>
            <a className="mobile-nav-link" onClick={() => scrollToSection("about")}>
              About
            </a>
            <a className="mobile-nav-link" onClick={() => scrollToSection("values")}>
              Values
            </a>
            <a className="mobile-nav-link" onClick={() => scrollToSection("testimonials")}>
              Testimonials
            </a>
            <a className="mobile-nav-link" onClick={() => scrollToSection("contact")}>
              Contact Us
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero">
        {/* 3D Animation */}
        <div className="hero-3d">
          <div className="hero-circle circle-1"></div>
          <div className="hero-circle circle-2"></div>
          <div className="hero-circle circle-3"></div>
          <div className="hero-3d-text">3D</div>
        </div>

        {/* Hero Content */}
        <div className="hero-content">
          <h1>
            Welcome to <span className="highlight">Event Door</span>
          </h1>
          <p>Your one-stop shop for premium swags and event essentials.</p>
          <div className="hero-buttons">
            <button className="btn btn-primary" onClick={() => scrollToSection("about")}>
              Learn More
            </button>
            <button className="btn btn-outline" onClick={() => scrollToSection("contact")}>
              Get Started
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section">
        <div className="container">
          <h2 className="section-title">Who We Are</h2>
          <div className="section-divider"></div>

          <div className="about-grid">
            <div className="about-text">
              <p>
                Event Door is your one-stop solution for all things events. We provide a diverse range of services,
                including corporate swags, bespoke event planning, and speaker arrangements, ensuring a perfect blend of
                innovation and excellence.
              </p>
              <p>
                With a passion for crafting memorable experiences, we bring meticulous attention to detail, delivering
                outstanding results that resonate with your vision.
              </p>
              <p>
                Whether it's a corporate event, a product launch, or a conference, Event Door is committed to delivering
                tailored solutions that exceed expectations.
              </p>
            </div>

            <div className="about-image">
              <div className="placeholder-img">Event Door Team Image</div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section id="values" className="section">
        <div className="container">
          <h2 className="section-title">Our Values</h2>
          <div className="section-divider"></div>

          <div className="values-grid">
            <div className="value-card">
              <div className="value-icon purple">🏆</div>
              <h3>Quality First</h3>
              <p>We never compromise on the quality of our products and services.</p>
            </div>

            <div className="value-card">
              <div className="value-icon blue">👥</div>
              <h3>Customer Focus</h3>
              <p>Your success is our success. We're dedicated to exceeding expectations.</p>
            </div>

            <div className="value-card">
              <div className="value-icon indigo">💡</div>
              <h3>Innovation</h3>
              <p>Constantly evolving and bringing new ideas to life.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="section">
        <div className="container">
          <h2 className="section-title">What Our Clients Say</h2>
          <div className="section-divider"></div>

          <div className="testimonial-card">
            <div className="stars">
              <span className="star">⭐</span>
              <span className="star">⭐</span>
              <span className="star">⭐</span>
              <span className="star">⭐</span>
              <span className="star">⭐</span>
            </div>
            <p className="testimonial-text">
              "Event Door delivered exceptional swags for our Google Developers event. The custom caps, notebooks, and
              water bottles were a huge hit among attendees. The quality was top-notch, and their team ensured
              everything was delivered on time. Highly recommend them for any corporate event!"
            </p>
            <div className="testimonial-author">Aarav Mehta</div>
            <div className="testimonial-role">Event Organizer, Google Developers</div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section">
        <div className="container">
          <h2 className="section-title">Have Questions? We're Here to Help!</h2>
          <p style={{ textAlign: "center", fontSize: "18px", color: "#6b7280", marginBottom: "20px" }}>
            Reach out for product inquiries, event planning, or any customization needs.
          </p>
          <div className="section-divider"></div>

          <div className="contact-grid">
            {/* Contact Info */}
            <div className="contact-info">
              <h3>Get in Touch</h3>

              <div className="contact-item">
                <div className="contact-icon purple">📞</div>
                <div className="contact-details">
                  <h4>Phone</h4>
                  <p>+918208787046</p>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon blue">✉️</div>
                <div className="contact-details">
                  <h4>Email</h4>
                  <p>help@eventdoor.in</p>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon indigo">📍</div>
                <div className="contact-details">
                  <h4>Address</h4>
                  <p>Surat, Gujarat, GJ 394210</p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="contact-form">
              <h3>Send us a Message</h3>
              <p>We'll get back to you within 24 hours.</p>

              <form>
                <div className="form-row">
                  <div className="form-group">
                    <label>First Name</label>
                    <input type="text" placeholder="John" />
                  </div>
                  <div className="form-group">
                    <label>Last Name</label>
                    <input type="text" placeholder="Doe" />
                  </div>
                </div>

                <div className="form-group">
                  <label>Email</label>
                  <input type="email" placeholder="john@example.com" />
                </div>

                <div className="form-group">
                  <label>Subject</label>
                  <input type="text" placeholder="Event Planning Inquiry" />
                </div>

                <div className="form-group">
                  <label>Message</label>
                  <textarea placeholder="Tell us about your event requirements..."></textarea>
                </div>

                <button type="submit" className="submit-btn">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-grid">
            {/* Company Info */}
            <div className="footer-section company">
              <h4>Event Door</h4>
              <p>Your one-stop shop for premium swags and event essentials.</p>
              <div className="social-links">
                <a href="#" className="social-link">
                  📘
                </a>
                <a href="#" className="social-link">
                  🐦
                </a>
                <a href="#" className="social-link">
                  📷
                </a>
                <a href="#" className="social-link">
                  💼
                </a>
                <a href="#" className="social-link">
                  📺
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div className="footer-section">
              <h4>Quick Links</h4>
              <ul className="footer-links">
                <li>
                  <a onClick={() => scrollToSection("home")}>Home</a>
                </li>
                <li>
                  <a onClick={() => scrollToSection("about")}>About Us</a>
                </li>
                <li>
                  <a href="#">Products</a>
                </li>
                <li>
                  <a href="#">Services</a>
                </li>
                <li>
                  <a href="#">Blog</a>
                </li>
                <li>
                  <a onClick={() => scrollToSection("contact")}>Contact Us</a>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div className="footer-section">
              <h4>Contact Info</h4>
              <div style={{ marginBottom: "15px" }}>
                <p>✉️ help@eventdoor.in</p>
              </div>
              <div style={{ marginBottom: "15px" }}>
                <p>📞 +918208787046</p>
              </div>
              <div>
                <p>📍 Surat, Gujarat, GJ 394210</p>
              </div>
            </div>

            {/* Newsletter */}
            <div className="footer-section">
              <h4>Newsletter</h4>
              <p>Stay updated with our latest products and offers.</p>
              <div className="newsletter">
                <input type="email" placeholder="Enter your email" />
                <button>📧</button>
              </div>
            </div>
          </div>

          <div className="footer-bottom">
            <p>© 2025 Event Door. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default EventDoor
