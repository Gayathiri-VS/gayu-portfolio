export default function Experience() {
  const internships = [
    {
      role: "Web Development Intern",
      company: "Aatzy Technologie",
      date: "Web Developer Internship",
      desc: "Gained hands-on experience building frontend web applications. Collaborated with teams to implement responsive design interfaces using HTML, CSS, JavaScript, and dynamic framework integrations."
    },
    {
      role: "Android App Developer (Java)",
      company: "Reccsar",
      date: "Mobile App Development Internship",
      desc: "Focused on designing and developing native Android applications using Java. Integrated RESTful API connections, UI elements, database services, and conducted bug fixing and optimization."
    },
    {
      role: "Machine Learning Intern",
      company: "Grantley Edutech",
      date: "Machine Learning with Python",
      desc: "Studied and implemented machine learning models using Python. Explored algorithms for classification, regression, and data analytics. Applied ML concepts to address sample business cases."
    }
  ];

  return (
    <section id="internships" className="section">
      <div className="container">
        <h2 className="section-title">Internships & Experience</h2>
        
        <div className="timeline">
          {internships.map((intern, index) => (
            <div key={index} className="timeline-item">
              <div className="timeline-left">
                <div className="timeline-date">{intern.date}</div>
                <div className="timeline-company">{intern.company}</div>
              </div>
              
              <div className="timeline-right glass-panel">
                <h3 className="timeline-title" style={{ color: "var(--color-secondary)" }}>
                  {intern.role}
                </h3>
                <h4 style={{ color: "#ffffff", fontSize: "1rem", fontWeight: "500" }}>
                  {intern.company}
                </h4>
                <p style={{ color: "var(--text-muted)", fontSize: "0.95rem", marginTop: "5px" }}>
                  {intern.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
