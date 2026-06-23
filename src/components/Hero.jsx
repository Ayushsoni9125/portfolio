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

      {/* Content */}
      <div className="section-container relative z-10 py-32 sm:py-0 w-full">
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
          ].map(({ value, label }, i) => (
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

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.4 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 hidden sm:flex"
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
