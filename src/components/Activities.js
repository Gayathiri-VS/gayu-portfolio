export default function Activities() {
  const certifications = [
    { title: "IoT Certificate", issuer: "Technical Training & Certification", desc: "Covers key concepts of Internet of Things, sensor integration, and smart network setups." },
    { title: "Machine Learning with Python", issuer: "Grantley Edutech / Academic Partner", desc: "Focused on supervised and unsupervised learning, Python ML libraries (Scikit-Learn, Pandas)." },
    { title: "Mobile Application Development", issuer: "Reccsar / Academic Partner", desc: "Covers native app architectures, UI/UX guidelines, state management, and deployment lifecycle." }
  ];

  const coCurricular = [
    { event: "National Level Project Presentation", location: "Velammal College", desc: "Presented an innovative project prototype to a panel of academic and industry experts." },
    { event: "National Level Paper Presentation", location: "SaiRam College", desc: "Authored and presented a research paper on computer science technologies and findings." },
    { event: "Technical Workshop Participation", location: "Vinsup Infotech(p) Ltd", desc: "Participated in an intensive hands-on technical workshop detailing industry-grade developer workflows." }
  ];

  return (
    <section id="activities" className="section">
      <div className="container">
        <h2 className="section-title">Certificates & Activities</h2>
        
        <div className="cert-activities-grid">
          {/* Certifications column */}
          <div className="glass-panel">
            <h3 style={{ marginBottom: "25px", color: "var(--color-secondary)" }}>Certifications</h3>
            
            <div className="list-wrapper">
              {certifications.map((cert, index) => (
                <div key={index} className="list-item">
                  <span className="list-bullet">🛡️</span>
                  <div className="list-content">
                    <h4>{cert.title}</h4>
                    <p style={{ fontSize: "0.85rem", color: "var(--color-primary)", fontWeight: "500" }}>{cert.issuer}</p>
                    <p style={{ marginTop: "4px" }}>{cert.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Co-curricular column */}
          <div className="glass-panel">
            <h3 style={{ marginBottom: "25px", color: "var(--color-accent)" }}>Co-Curricular Activities</h3>
            
            <div className="list-wrapper">
              {coCurricular.map((act, index) => (
                <div key={index} className="list-item">
                  <span className="list-bullet">🏆</span>
                  <div className="list-content">
                    <h4>{act.event}</h4>
                    <p style={{ fontSize: "0.85rem", color: "var(--color-secondary)", fontWeight: "500" }}>{act.location}</p>
                    <p style={{ marginTop: "4px" }}>{act.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
