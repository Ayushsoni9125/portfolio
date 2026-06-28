import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

// Greetings cycling in multiple languages (like Long's site)
const GREETINGS = [
  'Hello!',
  'Bonjour!',
  'Namaste!',
  'Ciao!',
  'Hola!',
  'Olá!',
  'Guten Tag!',
  'Xin chào!',
  'Salut!',
  'Konnichiwa!',
  'Annyeong!',
  'Merhaba!',
];

// Terminal JSON data (matching Long's structure exactly)
const terminalData = [
  { key: 'name', value: 'Ayush Soni' },
  { key: 'career-in-progress', value: 'Software Development' },
  { key: 'current-career-focus', value: 'Fullstack Web Developer' },
];

function TerminalBlock() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40, scale: 0.97 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
      className="w-full max-w-2xl mx-auto"
    >
      <div
        className="rounded-xl overflow-hidden shadow-2xl"
        style={{
          background: '#1a1a1a',
          border: '1px solid rgba(214,210,189,0.08)',
          boxShadow: '0 20px 60px rgba(0,0,0,0.4)',
        }}
      >
        {/* macOS title bar */}
        <div
          className="flex items-center gap-2 px-4 py-3"
          style={{ background: '#111', borderBottom: '1px solid rgba(214,210,189,0.06)' }}
        >
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full" style={{ background: '#FF5F56' }} />
            <div className="w-3 h-3 rounded-full" style={{ background: '#FFBD2E' }} />
            <div className="w-3 h-3 rounded-full" style={{ background: '#27C93F' }} />
          </div>
        </div>

        {/* JSON content — exactly like Long's */}
        <pre
          className="px-6 pt-5 pb-5 text-sm md:text-base font-mono overflow-x-auto"
          style={{ color: 'rgba(214,210,189,0.7)', lineHeight: 1.8 }}
        >
          <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.7 }}>
            <span style={{ color: 'rgba(214,210,189,0.35)' }}>{'{'}</span>{'\n'}
            {'  '}<span style={{ color: 'rgba(214,210,189,0.4)' }}>"about_me"</span>
            <span style={{ color: 'rgba(214,210,189,0.35)' }}>: {'{'}</span>{'\n'}
          </motion.span>

          {terminalData.map(({ key, value }, i) => (
            <motion.div
              key={key}
              initial={{ opacity: 0, x: -8 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.9 + i * 0.15, duration: 0.35 }}
            >
              {'    '}
              <span style={{ color: 'rgba(214,210,189,0.5)' }}>"{key}"</span>
              <span style={{ color: 'rgba(214,210,189,0.3)' }}>: </span>
              <span style={{ color: '#FF611D', fontWeight: 500 }}>"{value}"</span>
              {i < terminalData.length - 1 && (
                <span style={{ color: 'rgba(214,210,189,0.25)' }}>,</span>
              )}
              {'\n'}
            </motion.div>
          ))}

          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 + terminalData.length * 0.15 }}
          >
            {'  '}<span style={{ color: 'rgba(214,210,189,0.35)' }}>{'}'}</span>{'\n'}
            <span style={{ color: 'rgba(214,210,189,0.35)' }}>{'}'}</span>
          </motion.span>
        </pre>
      </div>

      {/* Glow under terminal */}
      <div
        className="mx-16 h-3 rounded-b-full blur-md"
        style={{ background: 'rgba(255,97,29,0.08)' }}
      />
    </motion.div>
  );
}

export default function Hero() {
  const [greetingIndex, setGreetingIndex] = useState(0);

  // Cycle through greetings every 2 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setGreetingIndex(prev => (prev + 1) % GREETINGS.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
      style={{ background: '#333333' }}
    >
      {/* Subtle grid background like Long's */}
      <div
        className="absolute inset-0 pointer-events-none opacity-20"
        style={{
          backgroundImage: `
            linear-gradient(rgba(214,210,189,0.06) 1px, transparent 1px),
            linear-gradient(90deg, rgba(214,210,189,0.06) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
        }}
      />

      {/* Centered content column */}
      <div className="relative z-10 w-full flex flex-col items-center text-center px-6 pt-24 pb-16 gap-8">

        {/* Cycling greeting in orange — with smooth cross-fade */}
        <div className="relative h-[clamp(4rem,12vw,8rem)] flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.h1
              key={greetingIndex}
              initial={{ opacity: 0, y: -40, scale: 1.05 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 40, scale: 0.95 }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              className="font-bold absolute"
              style={{
                fontSize: 'clamp(3.5rem, 10vw, 7rem)',
                color: '#FF611D',
                letterSpacing: '-0.02em',
                lineHeight: 1,
              }}
            >
              {GREETINGS[greetingIndex]}
            </motion.h1>
          </AnimatePresence>
        </div>

        {/* Terminal block */}
        <div className="w-full max-w-2xl">
          <TerminalBlock />
        </div>

        {/* Scroll down arrow */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.6 }}
          className="mt-4"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
            style={{ color: '#FF611D', fontSize: '1.5rem' }}
          >
            ↓
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
