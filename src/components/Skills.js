export default function Skills() {
  const technicalSkills = [
    { name: "Java", level: "90%", category: "Language", color: "var(--color-primary)" },
    { name: "SQL", level: "85%", category: "Database", color: "var(--color-secondary)" },
    { name: "JavaScript", level: "80%", category: "Frontend", color: "var(--color-accent)" },
    { name: "HTML & CSS", level: "90%", category: "Frontend", color: "var(--color-primary)" },
    { name: "Git & Version Control", level: "80%", category: "Tools", color: "var(--color-secondary)" },
    { name: "Software Development", level: "85%", category: "Methodology", color: "var(--color-accent)" },
  ];

  return (
    <section id="skills" className="section">
      <div className="container">
        <h2 className="section-title">My Skills</h2>
        
        <div className="skills-grid">
          {technicalSkills.map((skill, index) => (
            <div key={index} className="glass-panel skill-card">
              <div className="skill-header">
                <div className="skill-icon-wrap" style={{ color: skill.color }}>
                  {/* Custom icons based on skill */}
                  {skill.name === "Java" && "☕"}
                  {skill.name === "SQL" && "📂"}
                  {skill.name === "JavaScript" && "JS"}
                  {skill.name === "HTML & CSS" && "🎨"}
                  {skill.name === "Git & Version Control" && "🐙"}
                  {skill.name === "Software Development" && "⚙️"}
                </div>
                <div>
                  <div style={{ fontSize: "0.8rem", color: "var(--text-muted)", textTransform: "uppercase" }}>
                    {skill.category}
                  </div>
                  <h3 className="skill-name">{skill.name}</h3>
                </div>
              </div>
              
              <div style={{ display: "flex", justifyContent: "space-between", fontSize: "0.85rem", color: "var(--text-muted)", marginTop: "5px" }}>
                <span>Proficiency</span>
                <span style={{ color: "#ffffff", fontWeight: "600" }}>{skill.level}</span>
              </div>
              
              <div className="skill-bar-bg">
                <div 
                  className="skill-bar-fill" 
                  style={{ 
                    width: skill.level,
                    background: `linear-gradient(90deg, ${skill.color}, var(--color-secondary))`
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
