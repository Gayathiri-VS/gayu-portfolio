import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Activities from "@/components/Activities";
import Contact from "@/components/Contact";
import ParticleBackground from "@/components/ParticleBackground";

export default function Home() {
  return (
    <>
      {/* Background Animated Glows */}
      <div className="glow-bg">
        <div className="glow-orb orb-1"></div>
        <div className="glow-orb orb-2"></div>
        <div className="glow-orb orb-3"></div>
      </div>

      {/* Particle Canvas Overlay */}
      <ParticleBackground />

      {/* Navigation Header */}
      <Navbar />

      {/* Main Sections */}
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Activities />
        <Contact />
      </main>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <p>&copy; {new Date().getFullYear()} Gayathiri V S. All rights reserved.</p>
          <p style={{ fontSize: "0.8rem", color: "var(--text-dark)" }}>
            Sethu Institute of Technology | BE Computer Science & Engineering
          </p>
        </div>
      </footer>
    </>
  );
}
