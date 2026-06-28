import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
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
    { name: 'About', href: '#about', id: 'about' },
    { name: 'Projects', href: '#projects', id: 'projects' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ];

  return (
    <>
      {/* ─── Full top bar (before scroll) ─── */}
      <AnimatePresence>
        {!scrolled && (
          <motion.nav
            key="full-nav"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className="fixed top-0 w-full z-50 transition-all duration-300"
            style={{ background: 'transparent' }}
          >
            <div className="w-full px-6 md:px-16 py-5 flex justify-between items-center">
              <a href="#home" className="font-bold text-lg tracking-tight" style={{ color: '#D6D2BD' }}>
                Ayush<span style={{ color: '#FF611D' }}>.</span>
              </a>
              <nav className="hidden md:flex gap-8">
                {navLinks.map(link => (
                  <a
                    key={link.id}
                    href={link.href}
                    className="nav-link"
                    style={{ color: activeSection === link.id ? '#FF611D' : '#D6D2BD' }}
                  >
                    {link.name}
                  </a>
                ))}
              </nav>
              {/* Mobile hamburger */}
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="md:hidden p-2"
                style={{ color: '#D6D2BD' }}
                aria-label="Toggle menu"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>

      {/* ─── Floating pill (after scroll) ─── */}
      <AnimatePresence>
        {scrolled && (
          <motion.div
            key="pill-nav"
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -15, scale: 0.95 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="fixed top-4 left-0 right-0 z-50 flex justify-center pointer-events-none"
          >
            <div
              className="pointer-events-auto flex items-center gap-1 px-2 py-1.5 rounded-full"
              style={{
                background: 'rgba(26,26,26,0.85)',
                backdropFilter: 'blur(16px)',
                border: '1px solid rgba(214,210,189,0.12)',
                boxShadow: '0 8px 32px rgba(0,0,0,0.3)',
              }}
            >
              {/* Logo in pill */}
              <a
                href="#home"
                className="font-bold text-sm px-3 py-1 rounded-full"
                style={{ color: '#D6D2BD' }}
              >
                Ayush<span style={{ color: '#FF611D' }}>.</span>
              </a>

              <div className="w-px h-4 mx-1" style={{ background: 'rgba(214,210,189,0.12)' }} />

              {/* Nav links */}
              {navLinks.map(link => (
                <a
                  key={link.id}
                  href={link.href}
                  className="relative px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-200"
                  style={{
                    color: activeSection === link.id ? '#fff' : 'rgba(214,210,189,0.6)',
                    background: activeSection === link.id ? 'rgba(255,97,29,0.15)' : 'transparent',
                  }}
                >
                  {link.name}
                  {activeSection === link.id && (
                    <motion.div
                      layoutId="pill-indicator"
                      className="absolute inset-0 rounded-full"
                      style={{
                        background: 'rgba(255,97,29,0.1)',
                        border: '1px solid rgba(255,97,29,0.25)',
                      }}
                      transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                    />
                  )}
                </a>
              ))}

              {/* CTA */}
              <a
                href="#contact"
                className="ml-1 px-4 py-1.5 rounded-full text-[11px] font-bold text-white transition-all duration-200"
                style={{
                  background: '#FF611D',
                  boxShadow: '0 0 12px rgba(255,97,29,0.3)',
                }}
              >
                Let's Talk
              </a>

              {/* Mobile toggle inside pill */}
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="md:hidden px-2 py-1 ml-1"
                style={{ color: '#D6D2BD' }}
                aria-label="Menu"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile overlay */}
      <div
        className={`fixed inset-0 z-40 transition-opacity duration-300 md:hidden ${menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
        style={{ background: 'rgba(51,51,51,0.85)', backdropFilter: 'blur(8px)' }}
        onClick={() => setMenuOpen(false)}
      />

      {/* Mobile drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-64 z-50 flex flex-col px-8 pt-24 pb-12 gap-6 transition-transform duration-300 md:hidden ${menuOpen ? 'translate-x-0' : 'translate-x-full'}`}
        style={{ background: '#1a1a1a', borderLeft: '1px solid rgba(214,210,189,0.08)' }}
      >
        <button
          onClick={() => setMenuOpen(false)}
          className="absolute top-6 right-6"
          style={{ color: '#D6D2BD' }}
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        {navLinks.map(link => (
          <a
            key={link.id}
            href={link.href}
            onClick={() => setMenuOpen(false)}
            className="text-sm font-medium pb-4 transition-colors"
            style={{
              color: activeSection === link.id ? '#FF611D' : 'rgba(214,210,189,0.6)',
              borderBottom: '1px solid rgba(214,210,189,0.06)',
            }}
          >
            {link.name}
          </a>
        ))}
        <a href="#contact" onClick={() => setMenuOpen(false)} className="btn-primary justify-center mt-4">
          Let's Talk
        </a>
      </div>
    </>
  );
}
