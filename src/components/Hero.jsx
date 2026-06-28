import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import GridCanvas from './GridCanvas';

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

function Typewriter({ text, delay = 0, speed = 65 }) {
  const [displayedText, setDisplayedText] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  useEffect(() => {
    let timeoutId;
    let intervalId;

    timeoutId = setTimeout(() => {
      setIsTyping(true);
      let index = 0;
      intervalId = setInterval(() => {
        if (index < text.length) {
          setDisplayedText(text.slice(0, index + 1));
          index++;
        } else {
          clearInterval(intervalId);
          setIsTyping(false);
        }
      }, speed);
    }, delay);

    return () => {
      clearTimeout(timeoutId);
      clearInterval(intervalId);
    };
  }, [text, delay, speed]);

  return (
    <span>
      {displayedText}
      {isTyping && (
        <motion.span
          animate={{ opacity: [0, 1, 0] }}
          transition={{ duration: 0.6, repeat: Infinity }}
          style={{ color: '#FF611D', marginLeft: '1px', fontWeight: 'bold' }}
        >
          |
        </motion.span>
      )}
    </span>
  );
}

function TerminalBlock() {
  const [loopKey, setLoopKey] = useState(0);

  // Restart the typing animation every 9.5 seconds (types for ~5s, pauses for ~4.5s)
  useEffect(() => {
    const interval = setInterval(() => {
      setLoopKey(prev => prev + 1);
    }, 9500);
    return () => clearInterval(interval);
  }, []);

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
          key={loopKey}
          className="px-3 md:px-6 pt-5 pb-5 text-[11px] sm:text-sm md:text-base font-mono overflow-x-auto text-left"
          style={{ color: 'rgba(214,210,189,0.7)', lineHeight: 1.8 }}
        >
          <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.7 }}>
            <span style={{ color: 'rgba(214,210,189,0.35)' }}>{'{'}</span>{'\n'}
            <span className="pl-2 md:pl-4 inline-block" />
            <span style={{ color: 'rgba(214,210,189,0.4)' }}>"about_me"</span>
            <span style={{ color: 'rgba(214,210,189,0.35)' }}>: {'{'}</span>{'\n'}
          </motion.span>

          {terminalData.map(({ key, value }, i) => {
            // Calculate delay so lines type out sequentially
            let lineDelay = 1000;
            if (i === 1) lineDelay = 1900;
            if (i === 2) lineDelay = 3500;

            return (
              <div key={key}>
                <span className="pl-4 md:pl-8 inline-block" />
                <span style={{ color: 'rgba(214,210,189,0.5)' }}>"{key}"</span>
                <span style={{ color: 'rgba(214,210,189,0.3)' }}>: </span>
                <span style={{ color: '#FF611D', fontWeight: 500 }}>"</span>
                <span style={{ color: '#FF611D', fontWeight: 500 }}>
                  <Typewriter text={value} delay={lineDelay} speed={65} />
                </span>
                <span style={{ color: '#FF611D', fontWeight: 500 }}>"</span>
                {i < terminalData.length - 1 && (
                  <span style={{ color: 'rgba(214,210,189,0.25)' }}>,</span>
                )}
                {'\n'}
              </div>
            );
          })}

          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 5.3 }}
          >
            <span className="pl-2 md:pl-4 inline-block" />
            <span style={{ color: 'rgba(214,210,189,0.35)' }}>{'}'}</span>{'\n'}
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

  // Cycle through greetings every 2.5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setGreetingIndex(prev => (prev + 1) % GREETINGS.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
      style={{ background: '#333333' }}
    >
      {/* Animated 3D perspective grid — like Long's canvas background */}
      <div className="absolute inset-0 z-0" style={{ opacity: 0.10 }}>
        <GridCanvas />
      </div>

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
