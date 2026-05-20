"use client";

import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate form submission
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: "", email: "", message: "" });
    }, 4000);
  };

  const whatsappLink = "https://wa.me/919080879384?text=Hi%20Gayathiri,%20I%20viewed%20your%20portfolio%20and%20would%20love%20to%20connect%20with%20you!";

  return (
    <section id="contact" className="section">
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>
        
        <div className="contact-grid">
          {/* Left panel: Info & WhatsApp */}
          <div className="glass-panel contact-info" style={{ display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
            <div>
              <h3 style={{ marginBottom: "20px", color: "var(--color-secondary)" }}>Let's build something together!</h3>
              <p style={{ color: "var(--text-muted)", marginBottom: "30px" }}>
                I am currently open to internship opportunities, full-time roles, and interesting project collaborations. Feel free to contact me via email or reach out instantly on WhatsApp.
              </p>
              
              <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                <div className="contact-method">
                  <div className="contact-icon">📧</div>
                  <div>
                    <div className="contact-label">Email Me</div>
                    <div className="contact-val">
                      <a href="mailto:gayathiri04092005@gmail.com">gayathiri04092005@gmail.com</a>
                    </div>
                  </div>
                </div>

                <div className="contact-method">
                  <div className="contact-icon">📞</div>
                  <div>
                    <div className="contact-label">Call / Telegram</div>
                    <div className="contact-val">
                      <a href="tel:+919080879384">+91 9080879384</a>
                    </div>
                  </div>
                </div>

                <div className="contact-method">
                  <div className="contact-icon">💬</div>
                  <div>
                    <div className="contact-label">WhatsApp</div>
                    <div className="contact-val">
                      <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                        +91 9080879384
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div style={{ marginTop: "40px" }}>
              <h4 style={{ marginBottom: "12px", color: "#ffffff" }}>Instant Chat</h4>
              <a 
                href={whatsappLink} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn btn-whatsapp"
                style={{ width: "100%" }}
              >
                {/* Simple WhatsApp inline icon */}
                <svg 
                  width="18" 
                  height="18" 
                  viewBox="0 0 24 24" 
                  fill="currentColor"
                  style={{ marginRight: "4px" }}
                >
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.003 5.419 5.422.002 12.079.002c3.223 0 6.253 1.257 8.533 3.539 2.279 2.282 3.532 5.317 3.53 8.541-.004 6.661-5.422 12.077-12.077 12.077-2.002-.001-3.973-.504-5.727-1.464L0 24zm6.05-4.886c1.656.982 3.523 1.5 5.973 1.5 5.513 0 9.996-4.484 10.001-10 .002-2.67-1.037-5.18-2.92-7.067C17.279 1.705 14.77 .667 12.1 .667c-5.518 0-10 4.482-10.005 10-.002 1.848.483 3.654 1.4 5.253l-.995 3.633 3.69-.968.012-.006zm12.385-4.664c-.33-.165-1.951-.963-2.253-1.074-.303-.11-.523-.165-.742.165-.22.33-.852 1.074-1.045 1.294-.193.22-.385.242-.715.077-.33-.165-1.393-.513-2.653-1.636-.98-.874-1.642-1.953-1.834-2.283-.193-.33-.02-.508.145-.672.148-.148.33-.385.495-.578.165-.192.22-.33.33-.55.11-.22.055-.412-.027-.577-.083-.165-.742-1.79-.1017-2.457-.3-.726-.61-1.614-.836-1.614h-.357c-.247 0-.649.093-1.012.495-.363.402-1.386 1.353-1.386 3.298 0 1.945 1.417 3.823 1.617 4.098.2.275 2.793 4.267 6.763 5.979.944.407 1.68.65 2.256.833.949.302 1.812.259 2.493.158.76-.113 2.334-.954 2.663-1.874.33-.92.33-1.71.231-1.874-.099-.165-.357-.264-.687-.429z" />
                </svg>
                Connect on WhatsApp
              </a>
            </div>
          </div>

          {/* Right panel: Contact Form */}
          <div className="glass-panel">
            <h3 style={{ marginBottom: "25px", color: "var(--color-primary)" }}>Send a Message</h3>
            
            {submitted ? (
              <div style={{
                background: "rgba(6, 182, 212, 0.1)",
                border: "1px solid var(--color-secondary)",
                borderRadius: "8px",
                padding: "20px",
                textAlign: "center",
                color: "#ffffff"
              }}>
                <h4 style={{ color: "var(--color-secondary)", marginBottom: "8px" }}>Message Sent Successfully!</h4>
                <p style={{ color: "var(--text-muted)", fontSize: "0.95rem" }}>
                  Thank you for reaching out, Gayathiri will get back to you shortly.
                </p>
              </div>
            ) : (
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name" className="form-label">Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    className="form-input" 
                    placeholder="Enter your name" 
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email" className="form-label">Email Address</label>
                  <input 
                    type="email" 
                    id="email" 
                    className="form-input" 
                    placeholder="Enter your email" 
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message" className="form-label">Message</label>
                  <textarea 
                    id="message" 
                    className="form-input" 
                    placeholder="Tell me about your project or query..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                  />
                </div>

                <button type="submit" className="btn btn-primary" style={{ marginTop: "10px" }}>
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
