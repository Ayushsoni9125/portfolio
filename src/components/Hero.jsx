import ParticleCanvas from './ParticleCanvas';

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Particle canvas background */}
      <ParticleCanvas />

      {/* Ambient glow */}
      <div className="hero-glow" />

      {/* Content */}
      <div className="section-container relative z-10 py-32 sm:py-0 w-full">
        <p
          className="text-sm font-bold uppercase tracking-[0.25em] mb-6"
          style={{ color: '#3b9eff' }}
        >
          Full-Stack Developer
        </p>

        <h1
          className="font-black leading-[1.0] tracking-tight mb-6"
          style={{ fontSize: 'clamp(3rem, 8vw, 6rem)', color: '#fff' }}
        >
          Hello, I'm
          <br />
          <span className="gradient-text">Ayush.</span>
        </h1>

        <p
          className="text-xl sm:text-2xl font-medium mb-10 max-w-lg leading-relaxed"
          style={{ color: 'rgba(232, 238, 255, 0.55)' }}
        >
          I build high-performance{' '}
          <span style={{ color: 'rgba(232,238,255,0.9)' }}>MERN ecosystems</span>{' '}
          with a focus on security, scalability, and cinematic user experiences.
        </p>

        <div className="flex flex-wrap items-center gap-4">
          <a href="#about" id="hero-explore-btn" className="btn-primary group">
            View my work
            <svg
              className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
          <a href="#contact" id="hero-contact-btn" className="btn-outline">
            Contact Me
          </a>
        </div>

        {/* Stats row */}
        <div
          className="flex flex-wrap gap-8 sm:gap-12 mt-16 pt-10"
          style={{ borderTop: '1px solid rgba(232,238,255,0.06)' }}
        >
          {[
            { value: '5+', label: 'Projects Shipped' },
            { value: 'MERN', label: 'Core Stack' },
            { value: 'AWS', label: 'Certified' },
          ].map(({ value, label }) => (
            <div key={label}>
              <div className="text-2xl font-black text-white mb-0.5">{value}</div>
              <div
                className="text-[10px] font-bold uppercase tracking-widest"
                style={{ color: 'rgba(232,238,255,0.35)' }}
              >
                {label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 hidden sm:flex"
        style={{ opacity: 0.3 }}
      >
        <div
          className="w-px"
          style={{
            height: '60px',
            background: 'linear-gradient(to bottom, transparent, rgba(59,158,255,0.8), transparent)',
            animation: 'pulse-glow 2s ease-in-out infinite',
          }}
        />
        <span
          className="text-[9px] font-bold uppercase tracking-[0.3em]"
          style={{ color: 'rgba(232,238,255,0.5)' }}
        >
          Scroll
        </span>
      </div>
    </section>
  );
}
