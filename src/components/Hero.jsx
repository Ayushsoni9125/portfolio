import { motion } from 'framer-motion';
import ParticleCanvas from './ParticleCanvas';

const textVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (delay) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1], delay },
  }),
};

const floatVariant = {
  animate: {
    y: [0, -12, 0],
    transition: { duration: 5, repeat: Infinity, ease: 'easeInOut' },
  },
};

// Animated letter-by-letter span for terminal text
function AnimatedText({ text, className = '' }) {
  return (
    <span className={className}>
      {text.split('').map((char, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 + i * 0.04, duration: 0.1 }}
          style={{ display: 'inline-block', whiteSpace: 'pre' }}
        >
          {char}
        </motion.span>
      ))}
    </span>
  );
}

const terminalData = [
  { key: 'name', value: 'Ayush Soni' },
  { key: 'role', value: 'Full-Stack MERN Developer' },
  { key: 'focus', value: 'Security & Scalable Systems' },
  { key: 'stack', value: 'React · Node.js · MongoDB · AWS' },
  { key: 'status', value: 'Open to Opportunities 🚀' },
];

function TerminalBlock() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40, scale: 0.97 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.9, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
      className="w-full max-w-sm xl:max-w-md"
    >
      <div
        className="rounded-xl overflow-hidden shadow-2xl"
        style={{
          background: '#1a1a2e',
          border: '1px solid rgba(59,158,255,0.15)',
          boxShadow: '0 25px 60px rgba(0,0,0,0.5), 0 0 0 1px rgba(59,158,255,0.08)',
        }}
      >
        {/* Title bar */}
        <div
          className="flex items-center gap-2 px-4 py-3"
          style={{ background: '#0f0f1a', borderBottom: '1px solid rgba(255,255,255,0.06)' }}
        >
          {/* Traffic lights */}
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full" style={{ background: '#FF5F56' }} />
            <div className="w-3 h-3 rounded-full" style={{ background: '#FFBD2E' }} />
            <div className="w-3 h-3 rounded-full" style={{ background: '#27C93F' }} />
          </div>
          <span
            className="text-[10px] font-mono ml-2"
            style={{ color: 'rgba(232,238,255,0.2)' }}
          >
            about.json
          </span>
        </div>

        {/* Code content */}
        <pre
          className="p-5 text-sm leading-relaxed font-mono overflow-x-auto"
          style={{ color: 'rgba(232,238,255,0.75)' }}
        >
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            <span style={{ color: 'rgba(232,238,255,0.35)' }}>{'{'}</span>{'\n'}
          </motion.span>
          {terminalData.map(({ key, value }, i) => (
            <motion.div
              key={key}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.0 + i * 0.18, duration: 0.4 }}
            >
              {'  '}
              <span style={{ color: 'rgba(125,195,255,0.7)' }}>"{key}"</span>
              <span style={{ color: 'rgba(232,238,255,0.35)' }}>: </span>
              <span style={{ color: '#3b9eff', fontWeight: 600 }}>"{value}"</span>
              {i < terminalData.length - 1 && (
                <span style={{ color: 'rgba(232,238,255,0.25)' }}>,</span>
              )}
              {'\n'}
            </motion.div>
          ))}
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.0 + terminalData.length * 0.18 + 0.1 }}
          >
            <span style={{ color: 'rgba(232,238,255,0.35)' }}>{'}'}</span>
          </motion.span>
        </pre>

        {/* Blinking cursor row */}
        <div
          className="px-5 pb-4 flex items-center gap-2"
          style={{ color: 'rgba(232,238,255,0.3)' }}
        >
          <span className="font-mono text-xs" style={{ color: '#27C93F' }}>$</span>
          <motion.span
            className="w-2 h-4 rounded-sm"
            style={{ background: '#3b9eff' }}
            animate={{ opacity: [1, 0, 1] }}
            transition={{ duration: 1, repeat: Infinity }}
          />
        </div>
      </div>

      {/* Glow under terminal */}
      <div
        className="mx-8 h-4 rounded-b-full blur-lg"
        style={{ background: 'rgba(59,158,255,0.15)' }}
      />
    </motion.div>
  );
}

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Particle canvas background */}
      <ParticleCanvas />

      {/* Ambient glows */}
      <div className="hero-glow" />
      <div className="hero-glow-2" />

      {/* Decorative 3D floating orbs */}
      <motion.div
        variants={floatVariant}
        animate="animate"
        className="absolute right-[10%] top-[20%] w-64 h-64 rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(59,158,255,0.12) 0%, transparent 70%)',
          filter: 'blur(30px)',
        }}
      />
      <motion.div
        animate={{ y: [0, 15, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        className="absolute left-[5%] bottom-[20%] w-48 h-48 rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(125,195,255,0.08) 0%, transparent 70%)',
          filter: 'blur(25px)',
        }}
      />

      {/* Content — two-column layout on lg+ */}
      <div className="section-container relative z-10 py-32 sm:py-0 w-full">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">

          {/* Left: existing hero text */}
          <div className="flex-1 min-w-0">
            <motion.p
              custom={0}
              variants={textVariants}
              initial="hidden"
              animate="visible"
              className="text-sm font-bold uppercase tracking-[0.3em] mb-6 flex items-center gap-3"
              style={{ color: '#3b9eff' }}
            >
              <motion.span
                className="inline-block w-8 h-[2px] rounded-full"
                style={{ background: '#3b9eff' }}
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              />
              Full-Stack Developer
            </motion.p>

            <motion.h1
              custom={0.15}
              variants={textVariants}
              initial="hidden"
              animate="visible"
              className="font-black leading-[1.0] tracking-tight mb-6"
              style={{ fontSize: 'clamp(3rem, 8vw, 6rem)', color: '#fff' }}
            >
              Hello, I'm
              <br />
              <span className="gradient-text">Ayush.</span>
            </motion.h1>

            <motion.p
              custom={0.3}
              variants={textVariants}
              initial="hidden"
              animate="visible"
              className="text-xl sm:text-2xl font-medium mb-10 max-w-lg leading-relaxed"
              style={{ color: 'rgba(232, 238, 255, 0.55)' }}
            >
              I build high-performance{' '}
              <span style={{ color: 'rgba(232,238,255,0.9)' }}>MERN ecosystems</span>{' '}
              with a focus on security, scalability, and cinematic user experiences.
            </motion.p>

            <motion.div
              custom={0.45}
              variants={textVariants}
              initial="hidden"
              animate="visible"
              className="flex flex-wrap items-center gap-4"
            >
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
            </motion.div>

            {/* Stats row */}
            <motion.div
              custom={0.6}
              variants={textVariants}
              initial="hidden"
              animate="visible"
              className="flex flex-wrap gap-8 sm:gap-12 mt-16 pt-10"
              style={{ borderTop: '1px solid rgba(232,238,255,0.06)' }}
            >
              {[
                { value: '5+', label: 'Projects Shipped' },
                { value: 'MERN', label: 'Core Stack' },
                { value: 'AWS', label: 'Certified' },
              ].map(({ value, label }) => (
                <motion.div
                  key={label}
                  whileHover={{ scale: 1.05, y: -2 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 20 }}
                >
                  <div className="text-2xl font-black text-white mb-0.5">{value}</div>
                  <div
                    className="text-[10px] font-bold uppercase tracking-widest"
                    style={{ color: 'rgba(232,238,255,0.35)' }}
                  >
                    {label}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Right: Terminal block */}
          <div className="flex-shrink-0 w-full lg:w-auto flex justify-center lg:justify-end">
            <TerminalBlock />
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.4 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex-col items-center gap-2 hidden sm:flex"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="rgba(59,158,255,0.8)" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </motion.div>
        <span
          className="text-[9px] font-bold uppercase tracking-[0.3em]"
          style={{ color: 'rgba(232,238,255,0.4)' }}
        >
          Scroll
        </span>
      </motion.div>
    </section>
  );
}
