export default function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        
        <div className="about-grid">
          {/* Left panel: Bio */}
          <div className="glass-panel">
            <h3 style={{ marginBottom: "20px", color: "var(--color-secondary)" }}>Who I Am</h3>
            <p style={{ color: "var(--text-muted)", marginBottom: "20px", fontSize: "1.05rem" }}>
              I am a passionate computer science engineering student based in India, currently completing my Bachelor's degree at Sethu Institute of Technology. I specialize in designing and building efficient software solutions.
            </p>
            <p style={{ color: "var(--text-muted)", marginBottom: "20px", fontSize: "1.05rem" }}>
              With a solid foundation in computer science principles and software engineering, I love taking on technical challenges. I possess strong communication and analytical skills, making me well-suited for collaborating on cross-functional teams and resolving complex technical needs.
            </p>
            <p style={{ color: "var(--text-muted)", fontSize: "1.05rem" }}>
              My ultimate goal is to leverage my programming expertise and disciplined work ethic to deliver high-quality code, improve developer and user experiences, and continue learning new emerging technologies.
            </p>
          </div>

          {/* Right panel: Education & Stats */}
          <div className="glass-panel" style={{ display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
            <div>
              <h3 style={{ marginBottom: "20px", color: "var(--color-primary)" }}>Education</h3>
              
              <div className="education-card">
                <div className="edu-year">2022 - 2026</div>
                <h4 className="edu-inst">Sethu Institute of Technology</h4>
                <p style={{ color: "var(--text-muted)", fontSize: "0.95rem", marginBottom: "8px" }}>
                  Bachelor of Engineering in Computer Science and Engineering
                </p>
                <div className="edu-grade">CGPA: 9.02 / 10.0</div>
              </div>
            </div>

            <div style={{ 
              display: "grid", 
              gridTemplateColumns: "1fr 1fr", 
              gap: "20px", 
              marginTop: "30px",
              paddingTop: "20px",
              borderTop: "1px solid var(--border-color)"
            }}>
              <div>
                <div style={{ fontSize: "2rem", fontWeight: "800", color: "#ffffff", fontFamily: "var(--font-title)" }}>9.02</div>
                <div style={{ fontSize: "0.85rem", color: "var(--text-muted)", textTransform: "uppercase", letterSpacing: "0.05em" }}>Current CGPA</div>
              </div>
              <div>
                <div style={{ fontSize: "2rem", fontWeight: "800", color: "#ffffff", fontFamily: "var(--font-title)" }}>3+</div>
                <div style={{ fontSize: "0.85rem", color: "var(--text-muted)", textTransform: "uppercase", letterSpacing: "0.05em" }}>Practical Projects</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
