import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ScrollProgress from "./components/ScrollProgress";

export default function App() {
  return (
    <div className="min-h-screen overflow-x-hidden relative" style={{ background: '#07101e' }}>
      <ScrollProgress />
      <Navbar />
      <Hero />
      <div className="relative z-10">
        <div className="section-divider" />
        <About />
        <div className="section-divider" />
        <Projects />
        <div className="section-divider" />
        <Experience />
        <div className="section-divider" />
        <Skills />
        <div className="section-divider" />
        <Contact />
      </div>
      <Footer />
    </div>
  );
}
