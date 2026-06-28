import { motion } from 'framer-motion';

// Animated letter drop for "Hello!"
function AnimatedHello() {
  const letters = 'Hello!'.split('');
  return (
    <span
      className="flex flex-wrap whitespace-pre-wrap relative font-bold py-6"
      style={{ fontSize: 'clamp(3rem, 9vw, 6rem)', color: '#FF611D' }}
      aria-label="Hello!"
    >
      <span className="sr-only">Hello!</span>
      <span className="inline-flex overflow-hidden pb-2" aria-hidden="true">
        {letters.map((char, i) => (
          <motion.span
            key={i}
            className="inline-block"
            initial={{ y: 60, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              duration: 0.5,
              delay: 0.2 + i * 0.07,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            {char}
          </motion.span>
        ))}
      </span>
    </span>
  );
}

// macOS terminal/JSON block
const terminalData = [
  { key: 'name', value: 'Ayush Soni' },
  { key: 'career-in-progress', value: 'Software Development' },
  { key: 'current-focus', value: 'Fullstack Web Developer' },
  { key: 'stack', value: 'React · Node.js · MongoDB' },
  { key: 'status', value: 'Open to Opportunities 🚀' },
];

function TerminalBlock() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50, scale: 0.97 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.8, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="w-full max-w-md"
    >
      <div
        className="rounded-xl overflow-hidden shadow-2xl"
        style={{
          background: '#1a1a1a',
          border: '1px solid rgba(214,210,189,0.08)',
          boxShadow: '0 25px 60px rgba(0,0,0,0.4)',
        }}
      >
        {/* Traffic lights title bar */}
        <div
          className="flex items-center gap-2 px-4 py-3"
          style={{ background: '#111', borderBottom: '1px solid rgba(214,210,189,0.06)' }}
        >
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full" style={{ background: '#FF5F56' }} />
            <div className="w-3 h-3 rounded-full" style={{ background: '#FFBD2E' }} />
            <div className="w-3 h-3 rounded-full" style={{ background: '#27C93F' }} />
          </div>
          <span className="text-[10px] font-mono ml-2" style={{ color: 'rgba(214,210,189,0.25)' }}>
            about_me.json
          </span>
        </div>

        {/* JSON content */}
        <pre
          className="px-5 pt-5 pb-4 text-sm leading-relaxed font-mono overflow-x-auto"
          style={{ color: 'rgba(214,210,189,0.7)' }}
        >
          <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.9 }}>
            <span style={{ color: 'rgba(214,210,189,0.35)' }}>{'{'}</span>{'\n'}
          </motion.span>
          {terminalData.map(({ key, value }, i) => (
            <motion.div
              key={key}
              initial={{ opacity: 0, x: -8 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.1 + i * 0.15, duration: 0.35 }}
            >
              {'  '}
              <span style={{ color: 'rgba(214,210,189,0.5)' }}>"{key}"</span>
              <span style={{ color: 'rgba(214,210,189,0.3)' }}>: </span>
              <span style={{ color: '#FF611D', fontWeight: 600 }}>"{value}"</span>
              {i < terminalData.length - 1 && (
                <span style={{ color: 'rgba(214,210,189,0.25)' }}>,</span>
              )}
              {'\n'}
            </motion.div>
          ))}
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.1 + terminalData.length * 0.15 }}
          >
            <span style={{ color: 'rgba(214,210,189,0.35)' }}>{'}'}</span>
          </motion.span>
        </pre>

        {/* Blinking cursor */}
        <div className="px-5 pb-4 flex items-center gap-2">
          <span className="font-mono text-xs" style={{ color: '#27C93F' }}>$</span>
          <motion.span
            className="w-2 h-[14px] rounded-sm"
            style={{ background: '#FF611D' }}
            animate={{ opacity: [1, 0, 1] }}
            transition={{ duration: 1, repeat: Infinity }}
          />
        </div>
      </div>
      {/* Subtle shadow glow */}
      <div className="mx-10 h-3 rounded-b-full blur-md" style={{ background: 'rgba(255,97,29,0.1)' }} />
    </motion.div>
  );
}

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ background: '#333333' }}
    >
      {/* Subtle ambient glow */}
      <div className="hero-glow" />
      <div className="hero-glow-2" />

      {/* Main content — centered column layout */}
      <div className="section-container relative z-10 pt-28 pb-20 w-full">
        <div className="flex flex-col items-center lg:flex-row lg:items-center lg:justify-between gap-12 lg:gap-16">

          {/* Left column */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
            <AnimatedHello />

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.85, duration: 0.6 }}
              className="text-lg sm:text-xl font-medium max-w-md leading-relaxed mb-8"
              style={{ color: 'rgba(214,210,189,0.65)' }}
            >
              I build high-performance{' '}
              <span style={{ color: '#D6D2BD', fontWeight: 600 }}>MERN ecosystems</span>{' '}
              — scalable, secure, and cinematic.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.0, duration: 0.6 }}
              className="flex flex-wrap justify-center lg:justify-start gap-4"
            >
              <a href="#about" id="hero-explore-btn" className="btn-primary group">
                View my work
                <svg className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              <a href="#contact" id="hero-contact-btn" className="btn-outline">Contact Me</a>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.3, duration: 0.6 }}
              className="flex flex-wrap justify-center lg:justify-start gap-8 mt-14 pt-8"
              style={{ borderTop: '1px solid rgba(214,210,189,0.08)' }}
            >
              {[
                { value: '5+', label: 'Projects Shipped' },
                { value: 'MERN', label: 'Core Stack' },
                { value: 'AWS', label: 'Certified' },
              ].map(({ value, label }) => (
                <motion.div
                  key={label}
                  whileHover={{ y: -2, scale: 1.04 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 20 }}
                >
                  <div className="text-xl font-black mb-0.5" style={{ color: '#D6D2BD' }}>{value}</div>
                  <div className="text-[10px] font-bold uppercase tracking-widest font-mono" style={{ color: 'rgba(214,210,189,0.35)' }}>
                    {label}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Right column: Terminal block */}
          <div className="flex-shrink-0 w-full lg:w-auto flex justify-center lg:justify-end">
            <TerminalBlock />
          </div>
        </div>
      </div>

      {/* Scroll arrow */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 0.6 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          className="text-2xl"
          style={{ color: '#FF611D' }}
        >
          ↓
        </motion.div>
      </motion.div>
    </section>
  );
}
