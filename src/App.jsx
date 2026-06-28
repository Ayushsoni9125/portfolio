import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import QuoteReveal from "./components/QuoteReveal";
import SkillsMarquee from "./components/SkillsMarquee";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ScrollProgress from "./components/ScrollProgress";

export default function App() {
  return (
    <div className="min-h-screen overflow-x-hidden" style={{ background: '#333333' }}>
      <ScrollProgress />
      <Navbar />
      <Hero />
      <About />
      <QuoteReveal />
      <SkillsMarquee />
      <Projects />
      <Experience />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
}
