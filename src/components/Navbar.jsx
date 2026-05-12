import { useState, useEffect } from 'react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <>
      <nav className={`fixed top-0 left-0 w-full z-[100] transition-all duration-500 px-4 sm:px-6 py-4 sm:py-6 ${scrolled ? 'bg-[#030014]/90 backdrop-blur-xl border-b border-white/5 !py-4' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <a href="#home" className="text-xl font-black tracking-tighter text-white group">
            AYUSH <span className="text-sky-500 group-hover:text-white transition-colors">SONI</span>
          </a>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-500 hover:text-white transition-colors"
              >
                {link.name}
              </a>
            ))}
            <a href="#contact" className="btn-primary !py-2.5 !px-6 !rounded-xl !text-[10px] !tracking-widest shadow-lg shadow-sky-500/30 hover:shadow-xl hover:shadow-sky-500/50">
              LET'S TALK
            </a>
          </div>

          {/* Hamburger button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-white p-2 rounded-xl border border-white/10 hover:border-sky-500/40 transition-all"
            aria-label="Toggle menu"
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

      {/* Mobile drawer overlay */}
      <div
        className={`fixed inset-0 z-[99] bg-black/60 backdrop-blur-sm transition-opacity duration-300 md:hidden ${menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
        onClick={() => setMenuOpen(false)}
      />

      {/* Mobile drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-72 z-[100] bg-[#080d18] border-l border-white/5 flex flex-col px-8 pt-24 pb-12 gap-8 transition-transform duration-300 ease-in-out md:hidden ${menuOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        <div className="text-xl font-black tracking-tighter text-white mb-4">
          AYUSH <span className="text-sky-500">SONI</span>
        </div>
        <div className="flex flex-col gap-6">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-sm font-bold uppercase tracking-[0.2em] text-zinc-400 hover:text-white transition-colors border-b border-white/5 pb-4"
            >
              {link.name}
            </a>
          ))}
        </div>
        <a
          href="#contact"
          onClick={() => setMenuOpen(false)}
          className="btn-primary justify-center mt-4"
        >
          LET'S TALK
        </a>
      </div>
    </>
  );
}
