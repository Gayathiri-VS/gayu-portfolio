"use client";

import { useState, useEffect } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="container nav-container">
        <div className="nav-logo" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          GAYATHIRI V S
        </div>
        
        <ul className="nav-links">
          <li><a href="#hero" className="nav-link">Home</a></li>
          <li><a href="#about" className="nav-link">About</a></li>
          <li><a href="#skills" className="nav-link">Skills</a></li>
          <li><a href="#projects" className="nav-link">Projects</a></li>
          <li><a href="#internships" className="nav-link">Internships</a></li>
          <li><a href="#activities" className="nav-link">Activities</a></li>
          <li><a href="#contact" className="nav-link">Contact</a></li>
        </ul>

        <button 
          className="mobile-menu-btn" 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div style={{
          position: "fixed",
          top: "80px",
          left: 0,
          right: 0,
          background: "rgba(15, 5, 11, 0.95)",
          backdropFilter: "blur(20px)",
          borderBottom: "1px solid var(--border-color)",
          padding: "20px",
          display: "flex",
          flexDirection: "column",
          gap: "16px",
          zIndex: 99
        }}>
          <a href="#hero" className="nav-link" onClick={() => setMobileMenuOpen(false)}>Home</a>
          <a href="#about" className="nav-link" onClick={() => setMobileMenuOpen(false)}>About</a>
          <a href="#skills" className="nav-link" onClick={() => setMobileMenuOpen(false)}>Skills</a>
          <a href="#projects" className="nav-link" onClick={() => setMobileMenuOpen(false)}>Projects</a>
          <a href="#internships" className="nav-link" onClick={() => setMobileMenuOpen(false)}>Internships</a>
          <a href="#activities" className="nav-link" onClick={() => setMobileMenuOpen(false)}>Activities</a>
          <a href="#contact" className="nav-link" onClick={() => setMobileMenuOpen(false)}>Contact</a>
        </div>
      )}
    </nav>
  );
}
