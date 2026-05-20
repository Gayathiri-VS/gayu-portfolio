export default function Projects() {
  const projects = [
    {
      title: "MERN Stack E-commerce Site",
      desc: "Developed a fully functional, responsive e-commerce web application featuring user authentication, product catalog, search filters, shopping cart management, and payment gateway integration.",
      tags: ["MongoDB", "Express.js", "React.js", "Node.js", "CSS Modules"],
      category: "Full Stack Development",
      icon: "🛒"
    },
    {
      title: "AI-Assisted Secure Data Hiding",
      desc: "Created an image-based steganography and data security system. Implemented deep learning neural network approaches combined with Least Significant Bit (LSB) encoding techniques to conceal sensitive information inside digital images without visible distortion.",
      tags: ["Python", "Deep Learning", "LSB Steganography", "OpenCV"],
      category: "AI & Cybersecurity",
      icon: "🔐"
    },
    {
      title: "Smart Stick for the Blind",
      desc: "Designed and developed an assistive IoT navigation device for visually impaired individuals. Integrated ultrasonic sensors, water sensors, and microcontroller circuits to detect obstacles and water hazards, providing real-time haptic/auditory feedback.",
      tags: ["IoT", "Arduino/Microcontrollers", "Sensors", "Hardware Design"],
      category: "IoT & Hardware",
      icon: "🦯"
    }
  ];

  return (
    <section id="projects" className="section">
      <div className="container">
        <h2 className="section-title">Featured Projects</h2>
        
        <div className="projects-grid">
          {projects.map((proj, index) => (
            <div key={index} className="glass-panel project-card">
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "15px" }}>
                <span className="tag tag-primary">{proj.category}</span>
                <span style={{ fontSize: "1.8rem" }}>{proj.icon}</span>
              </div>
              
              <h3 className="project-title">{proj.title}</h3>
              <p className="project-desc">{proj.desc}</p>
              
              <div className="project-tags">
                {proj.tags.map((tag, tagIdx) => (
                  <span key={tagIdx} className="tag">{tag}</span>
                ))}
              </div>
              
              <div style={{ marginTop: "auto" }}>
                <a href="#contact" className="project-link">
                  Request Case Study &rarr;
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
