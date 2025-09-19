"use client"
import { useState, useEffect } from "react"

function EventDoor() {
  const [darkMode, setDarkMode] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

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
      const navbarHeight = 60 // Adjust based on your navbar height
      const elementPosition = element.offsetTop - navbarHeight
      window.scrollTo({
        top: elementPosition,
        behavior: "smooth",
      })
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

  // Handle scroll for sticky navbar effects
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      if (scrollPosition > 10) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className={darkMode ? "dark" : ""}>
      {/* Sticky Navigation */}
      <nav className={`navbar sticky ${scrolled ? "scrolled" : ""}`}>
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

      <style jsx>{`
        /* Sticky Navbar Styles */
        .navbar {
          position: sticky;
          top: 0;
          width: 100%;
          background: rgba(255, 255, 255, 0.9);
          backdrop-filter: blur(10px);
          border-bottom: 1px solid rgba(0, 0, 0, 0.1);
          z-index: 1000;
          transition: all 0.3s ease;
          padding: 0;
        }

        .navbar.scrolled {
          background: rgba(255, 255, 255, 0.95);
          box-shadow: 0 2px 20px rgba(0, 0, 0, 0.1);
          border-bottom: 1px solid rgba(0, 0, 0, 0.2);
        }

        .dark .navbar {
          background: rgba(17, 24, 39, 0.95);
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        }

        .dark .navbar.scrolled {
          background: rgba(17, 24, 39, 0.95);
          box-shadow: 0 2px 20px rgba(0, 0, 0, 0.3);
          border-bottom: 1px solid rgba(255, 255, 255, 0.2);
        }

        .nav-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          height: 60px;
        }

        .logo {
          font-size: 24px;
          font-weight: bold;
          color: #1f2937;
          cursor: pointer;
        }

        .dark .logo {
          color: white;
        }

        .nav-menu {
          display: flex;
          list-style: none;
          margin: 0;
          padding: 0;
          gap: 30px;
        }

        .nav-link {
          coolor: #ffffff;
          text-decoration: none;
          font-weight: 500;
          cursor: pointer;
          transition: color 0.3s ease;
          padding: 8px 16px;
          border-radius: 6px;
        }

        .nav-link:hover {
          color: #3b82f6;
          background: rgba(59, 130, 246, 0.1);
        }

        .dark .nav-link {
          color: #d1d5db;
        }

        .dark .nav-link:hover {
          color: #60a5fa;
          background: rgba(96, 165, 250, 0.1);
        }

        .contact-btn {
          background: linear-gradient(135deg, #3b82f6, #1d4ed8);
          color: white;
          border: none;
          padding: 10px 20px;
          border-radius: 25px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .contact-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 5px 15px rgba(59, 130, 246, 0.4);
        }

        .theme-toggle {
          background: none;
          border: 2px solid #e5e7eb;
          border-radius: 50%;
          width: 40px;
          height: 40px;
          cursor: pointer;
          font-size: 18px;
          transition: all 0.3s ease;
        }

        .theme-toggle:hover {
          border-color: #3b82f6;
          transform: rotate(180deg);
        }

        .dark .theme-toggle {
          border-color: #4b5563;
        }

        .mobile-menu-btn {
          display: none;
          background: none;
          border: none;
          font-size: 24px;
          cursor: pointer;
          color: #4b5563;
        }

        .dark .mobile-menu-btn {
          color: #d1d5db;
        }

        .mobile-menu {
          display: none;
          position: absolute;
          top: 100%;
          left: 0;
          right: 0;
          background: white;
          border-top: 1px solid #e5e7eb;
          padding: 20px;
          flex-direction: column;
          gap: 15px;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
        }

        .dark .mobile-menu {
          background: #1f2937;
          border-top: 1px solid #374151;
        }

        .mobile-menu.active {
          display: flex;
        }

        .mobile-nav-link {
          color: #4b5563;
          text-decoration: none;
          font-weight: 500;
          cursor: pointer;
          padding: 12px 16px;
          border-radius: 8px;
          transition: all 0.3s ease;
        }

        .mobile-nav-link:hover {
          color: #3b82f6;
          background: rgba(59, 130, 246, 0.1);
        }

        .dark .mobile-nav-link {
          color: #d1d5db;
        }

        .dark .mobile-nav-link:hover {
          color: #60a5fa;
          background: rgba(96, 165, 250, 0.1);
        }

        /* Rest of your existing styles */
        .hero {
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          text-align: center;
          position: relative;
          overflow: hidden;
        }

        .hero-3d {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 300px;
          height: 300px;
        }

        .hero-circle {
          position: absolute;
          border: 2px solid rgba(255, 255, 255, 0.3);
          border-radius: 50%;
          animation: rotate 20s linear infinite;
        }

        .circle-1 {
          width: 100px;
          height: 100px;
          top: 50px;
          left: 50px;
        }

        .circle-2 {
          width: 150px;
          height: 150px;
          top: 25px;
          left: 25px;
          animation-delay: -5s;
        }

        .circle-3 {
          width: 200px;
          height: 200px;
          top: 0;
          left: 0;
          animation-delay: -10s;
        }

        .hero-3d-text {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          font-size: 48px;
          font-weight: bold;
          text-shadow: 0 0 20px rgba(255, 255, 255, 0.5);
        }

        @keyframes rotate {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        .hero-content {
          position: relative;
          z-index: 10;
          max-width: 800px;
          padding: 0 20px;
        }

        .hero-content h1 {
          font-size: 3.5rem;
          margin-bottom: 20px;
          font-weight: 700;
        }

        .highlight {
          background: linear-gradient(45deg, #ff6b6b, #4ecdc4);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .hero-content p {
          font-size: 1.3rem;
          margin-bottom: 40px;
          opacity: 0.9;
        }

        .hero-buttons {
          display: flex;
          gap: 20px;
          justify-content: center;
          flex-wrap: wrap;
        }

        .btn {
          padding: 15px 30px;
          border-radius: 30px;
          font-weight: 600;
          font-size: 16px;
          cursor: pointer;
          transition: all 0.3s ease;
          border: none;
          text-decoration: none;
          display: inline-block;
        }

        .btn-primary {
          background: linear-gradient(135deg, #3b82f6, #1d4ed8);
          color: white;
        }

        .btn-primary:hover {
          transform: translateY(-3px);
          box-shadow: 0 10px 25px rgba(59, 130, 246, 0.4);
        }

        .btn-outline {
          background: transparent;
          color: white;
          border: 2px solid white;
        }

        .btn-outline:hover {
          background: white;
          color: #667eea;
          transform: translateY(-3px);
        }

        .section {
          padding: 80px 0;
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
        }

        .section-title {
          font-size: 2.5rem;
          text-align: center;
          margin-bottom: 20px;
          color: #1f2937;
          font-weight: 700;
        }

        .dark .section-title {
          color: white;
        }

        .section-divider {
          width: 80px;
          height: 4px;
          background: linear-gradient(135deg, #667eea, #764ba2);
          margin: 0 auto 60px;
          border-radius: 2px;
        }

        .about-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 60px;
          align-items: center;
        }

        .about-text p {
          font-size: 1.1rem;
          line-height: 1.8;
          color: #4b5563;
          margin-bottom: 20px;
        }

        .dark .about-text p {
          color: #d1d5db;
        }

        .about-image {
          text-align: center;
        }

        .placeholder-img {
          background: linear-gradient(135deg, #f3f4f6, #e5e7eb);
          padding: 100px 20px;
          border-radius: 15px;
          color: #6b7280;
          font-size: 1.2rem;
          font-weight: 600;
        }

        .dark .placeholder-img {
          background: linear-gradient(135deg, #374151, #4b5563);
          color: #9ca3af;
        }

        .values-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 40px;
        }

        .value-card {
          background: white;
          padding: 40px 30px;
          border-radius: 15px;
          text-align: center;
          box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);
          transition: transform 0.3s ease;
        }

        .value-card:hover {
          transform: translateY(-10px);
        }

        .dark .value-card {
          background: #1f2937;
          box-shadow: 0 5px 20px rgba(0, 0, 0, 0.3);
        }

        .value-icon {
          width: 80px;
          height: 80px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 20px;
          font-size: 2rem;
        }

        .value-icon.purple {
          background: linear-gradient(135deg, #8b5cf6, #7c3aed);
        }

        .value-icon.blue {
          background: linear-gradient(135deg, #3b82f6, #1d4ed8);
        }

        .value-icon.indigo {
          background: linear-gradient(135deg, #6366f1, #4f46e5);
        }

        .value-card h3 {
          font-size: 1.5rem;
          margin-bottom: 15px;
          color: #1f2937;
          font-weight: 600;
        }

        .dark .value-card h3 {
          color: white;
        }

        .value-card p {
          color: #6b7280;
          line-height: 1.6;
        }

        .dark .value-card p {
          color: #9ca3af;
        }

        .testimonial-card {
          background: white;
          padding: 50px;
          border-radius: 20px;
          text-align: center;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
          max-width: 800px;
          margin: 0 auto;
        }

        .dark .testimonial-card {
          background: #1f2937;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
        }

        .stars {
          margin-bottom: 30px;
        }

        .star {
          font-size: 1.5rem;
          margin: 0 2px;
        }

        .testimonial-text {
          font-size: 1.2rem;
          line-height: 1.8;
          color: #4b5563;
          margin-bottom: 30px;
          font-style: italic;
        }

        .dark .testimonial-text {
          color: #d1d5db;
        }

        .testimonial-author {
          font-size: 1.1rem;
          font-weight: 600;
          color: #1f2937;
          margin-bottom: 5px;
        }

        .dark .testimonial-author {
          color: white;
        }

        .testimonial-role {
          color: #6b7280;
        }

        .dark .testimonial-role {
          color: #9ca3af;
        }

        .contact-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 60px;
        }

        .contact-info h3 {
          font-size: 1.8rem;
          margin-bottom: 30px;
          color: #1f2937;
          font-weight: 600;
        }

        .dark .contact-info h3 {
          color: white;
        }

        .contact-item {
          display: flex;
          align-items: center;
          margin-bottom: 25px;
        }

        .contact-icon {
          width: 50px;
          height: 50px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-right: 20px;
          font-size: 1.2rem;
        }

        .contact-icon.purple {
          background: linear-gradient(135deg, #8b5cf6, #7c3aed);
        }

        .contact-icon.blue {
          background: linear-gradient(135deg, #3b82f6, #1d4ed8);
        }

        .contact-icon.indigo {
          background: linear-gradient(135deg, #6366f1, #4f46e5);
        }

        .contact-details h4 {
          font-weight: 600;
          color: #1f2937;
          margin-bottom: 5px;
        }

        .dark .contact-details h4 {
          color: white;
        }

        .contact-details p {
          color: #6b7280;
        }

        .dark .contact-details p {
          color: #9ca3af;
        }

        .contact-form {
          background: white;
          padding: 40px;
          border-radius: 15px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
        }

        .dark .contact-form {
          background: #1f2937;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
        }

        .contact-form h3 {
          font-size: 1.8rem;
          margin-bottom: 10px;
          color: #1f2937;
          font-weight: 600;
        }

        .dark .contact-form h3 {
          color: white;
        }

        .contact-form p {
          color: #6b7280;
          margin-bottom: 30px;
        }

        .dark .contact-form p {
          color: #9ca3af;
        }

        .form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
          margin-bottom: 20px;
        }

        .form-group {
          margin-bottom: 20px;
        }

        .form-group label {
          display: block;
          margin-bottom: 8px;
          font-weight: 500;
          color: #374151;
        }

        .dark .form-group label {
          color: #d1d5db;
        }

        .form-group input,
        .form-group textarea {
          width: 100%;
          padding: 12px 16px;
          border: 2px solid #e5e7eb;
          border-radius: 8px;
          font-size: 16px;
          transition: border-color 0.3s ease;
          background: white;
        }

        .dark .form-group input,
        .dark .form-group textarea {
          background: #374151;
          border-color: #4b5563;
          color: white;
        }

        .form-group input:focus,
        .form-group textarea:focus {
          outline: none;
          border-color: #3b82f6;
        }

        .form-group textarea {
          resize: vertical;
          min-height: 120px;
        }

        .submit-btn {
          width: 100%;
          background: linear-gradient(135deg, #3b82f6, #1d4ed8);
          color: white;
          border: none;
          padding: 15px;
          border-radius: 8px;
          font-size: 16px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .submit-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 25px rgba(59, 130, 246, 0.4);
        }

        .footer {
          background: #1f2937;
          color: white;
          padding: 60px 0 20px;
        }

        .footer-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 40px;
          margin-bottom: 40px;
        }

        .footer-section h4 {
          font-size: 1.2rem;
          margin-bottom: 20px;
          font-weight: 600;
        }

        .footer-section p {
          color: #9ca3af;
          line-height: 1.6;
          margin-bottom: 20px;
        }

        .social-links {
          display: flex;
          gap: 15px;
        }

        .social-link {
          display: inline-block;
          font-size: 1.5rem;
          transition: transform 0.3s ease;
        }

        .social-link:hover {
          transform: scale(1.2);
        }

        .footer-links {
          list-style: none;
          padding: 0;
        }

        .footer-links li {
          margin-bottom: 10px;
        }

        .footer-links a {
          color: #9ca3af;
          text-decoration: none;
          cursor: pointer;
          transition: color 0.3s ease;
        }

        .footer-links a:hover {
          color: #3b82f6;
        }

        .newsletter {
          display: flex;
          gap: 10px;
        }

        .newsletter input {
          flex: 1;
          padding: 10px;
          border: 1px solid #4b5563;
          border-radius: 5px;
          background: #374151;
          color: white;
        }

        .newsletter button {
          background: linear-gradient(135deg, #3b82f6, #1d4ed8);
          border: none;
          padding: 10px 15px;
          border-radius: 5px;
          cursor: pointer;
          font-size: 1.2rem;
        }

        .footer-bottom {
          border-top: 1px solid #374151;
          padding-top: 20px;
          text-align: center;
          color: #9ca3af;
        }

        /* Mobile Responsiveness */
        @media (max-width: 768px) {
          .nav-menu {
            display: none;
          }

          .mobile-menu-btn {
            display: block;
          }

          .hero-content h1 {
            font-size: 2.5rem;
          }

          .hero-content p {
            font-size: 1.1rem;
          }

          .hero-buttons {
            flex-direction: column;
            align-items: center;
          }

          .btn {
            width: 100%;
            max-width: 300px;
          }

          .about-grid,
          .contact-grid {
            grid-template-columns: 1fr;
            gap: 40px;
          }

          .form-row {
            grid-template-columns: 1fr;
          }

          .section-title {
            font-size: 2rem;
          }

          .hero-3d {
            width: 200px;
            height: 200px;
          }

          .hero-3d-text {
            font-size: 32px;
          }

          .circle-1 {
            width: 80px;
            height: 80px;
            top: 60px;
            left: 60px;
          }

          .circle-2 {
            width: 120px;
            height: 120px;
            top: 40px;
            left: 40px;
          }

          .circle-3 {
            width: 160px;
            height: 160px;
            top: 20px;
            left: 20px;
          }
        }

        @media (max-width: 480px) {
          .nav-container {
            padding: 0 15px;
          }

          .hero-content h1 {
            font-size: 2rem;
          }

          .section {
            padding: 60px 0;
          }

          .container {
            padding: 0 15px;
          }

          .testimonial-card,
          .contact-form {
            padding: 30px 20px;
          }

          .values-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  )
}

export default EventDoor
