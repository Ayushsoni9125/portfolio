import { useState, useEffect } from 'react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
      const sections = ['home', 'about', 'projects', 'experience', 'skills', 'contact'];
      const scrollPos = window.scrollY + window.innerHeight / 3;
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= scrollPos && el.offsetTop + el.offsetHeight > scrollPos) {
          setActiveSection(id);
          break;
        }
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const navLinks = [
    { name: 'Home', href: '#home', id: 'home' },
    { name: 'About', href: '#about', id: 'about' },
    { name: 'Projects', href: '#projects', id: 'projects' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-[100] transition-all duration-400 ${
          scrolled
            ? 'py-4 backdrop-blur-md border-b'
            : 'py-6'
        }`}
        style={scrolled ? {
          background: 'rgba(7, 16, 30, 0.9)',
          borderBottomColor: 'rgba(232, 238, 255, 0.06)',
        } : {}}
      >
        <div className="section-container flex items-center justify-between">
          {/* Logo */}
          <a href="#home" className="text-base font-black tracking-tight text-white hover:text-blue-400 transition-colors duration-200">
            Ayush<span style={{ color: '#3b9eff' }}>.</span>
          </a>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-10">
            {navLinks.map(link => (
              <a
                key={link.id}
                href={link.href}
                className={`nav-link ${activeSection === link.id ? 'active' : ''}`}
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contact"
              className="btn-primary !py-2 !px-5 !text-xs !rounded-lg !tracking-widest"
            >
              Let's Talk
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            className="md:hidden p-2 transition-colors"
            style={{ color: 'rgba(232,238,255,0.6)' }}
          >
            {menuOpen ? (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </nav>

      {/* Mobile overlay */}
      <div
        className={`fixed inset-0 z-[99] backdrop-blur-sm transition-opacity duration-300 md:hidden ${menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
        style={{ background: 'rgba(7, 16, 30, 0.7)' }}
        onClick={() => setMenuOpen(false)}
      />

      {/* Mobile drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-64 z-[100] flex flex-col px-8 pt-24 pb-12 gap-6 transition-transform duration-300 ease-in-out md:hidden ${menuOpen ? 'translate-x-0' : 'translate-x-full'}`}
        style={{ background: '#07101e', borderLeft: '1px solid rgba(232,238,255,0.05)' }}
      >
        {navLinks.map(link => (
          <a
            key={link.id}
            href={link.href}
            onClick={() => setMenuOpen(false)}
            className={`text-sm font-bold uppercase tracking-widest pb-4 transition-colors ${activeSection === link.id ? 'text-white' : ''}`}
            style={{
              color: activeSection === link.id ? '#fff' : 'rgba(232,238,255,0.35)',
              borderBottom: '1px solid rgba(232,238,255,0.05)',
            }}
          >
            {link.name}
          </a>
        ))}
        <a
          href="#contact"
          onClick={() => setMenuOpen(false)}
          className="btn-primary justify-center mt-4"
        >
          Let's Talk
        </a>
      </div>
    </>
  );
}
