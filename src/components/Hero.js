"use client";

import { useEffect, useState } from "react";

export default function Hero() {
  const [typedText, setTypedText] = useState("");
  const roles = ["Software Engineer", "SQL Developer"];
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const activeRole = roles[roleIndex];
    let typingSpeed = isDeleting ? 50 : 150;

    if (!isDeleting && charIndex === activeRole.length) {
      // Pause at full text
      typingSpeed = 2200;
      setIsDeleting(true);
    } else if (isDeleting && charIndex === 0) {
      setIsDeleting(false);
      setRoleIndex((prevIndex) => (prevIndex + 1) % roles.length);
      typingSpeed = 800;
    }

    const timer = setTimeout(() => {
      setTypedText(
        isDeleting
          ? activeRole.substring(0, charIndex - 1)
          : activeRole.substring(0, charIndex + 1)
      );
      setCharIndex((prev) => (isDeleting ? prev - 1 : prev + 1));
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, roleIndex]);

  return (
    <section id="hero" className="container" style={{ position: "relative" }}>
      <div className="hero-wrapper">
        <div className="hero-content">
          <span className="hero-subtitle">Welcome to my Space</span>
          <h1 className="hero-title">
            Hi, I'm <br />
            <span style={{ 
              background: "linear-gradient(135deg, var(--color-secondary) 0%, var(--color-accent) 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent"
            }}>Gayathiri V S</span>
          </h1>
          
          <h3 style={{ 
            fontFamily: "var(--font-title)", 
            fontSize: "1.6rem", 
            fontWeight: "500", 
            color: "var(--text-main)",
            minHeight: "40px",
            display: "flex",
            alignItems: "center"
          }}>
            I am a&nbsp;
            <span style={{ 
              color: "var(--color-secondary)", 
              borderRight: "3px solid var(--color-secondary)",
              paddingRight: "4px",
              animation: "blink 0.75s step-end infinite" 
            }}>
              {typedText}
            </span>
          </h3>

          <p className="hero-desc">
            A detail-oriented and adaptable Computer Science and Engineering student at Sethu Institute of Technology. Eager to solve real-world problems through clean code, modern user interfaces, and smart algorithms.
          </p>

          <div className="hero-buttons">
            <a href="#projects" className="btn btn-primary">
              View Projects
            </a>
            <a href="#contact" className="btn btn-secondary">
              Let's Talk
            </a>
          </div>
        </div>

        <div className="hero-image-area">
          <div className="profile-img-container">
            <img 
              src="/gayu.jpeg" 
              alt="Gayathiri V S" 
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                objectPosition: "top",
                borderRadius: "inherit"
              }} 
            />
          </div>
        </div>
      </div>

      <style jsx global>{`
        @keyframes blink {
          from, to { border-color: transparent }
          50% { border-color: var(--color-secondary); }
        }
      `}</style>
    </section>
  );
}
