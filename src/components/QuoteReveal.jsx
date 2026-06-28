import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const QUOTE_WORDS = [
  '"If', 'I', 'have', 'the', 'belief', 'that', 'I', 'can', 'do', 'it,',
  'I', 'shall', 'surely', 'acquire', 'the', 'capacity', 'to', 'do', 'it',
  'even', 'if', 'I', 'may', 'not', 'have', 'it', 'at', 'the', 'beginning."',
];

export default function QuoteReveal() {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  return (
    <div ref={containerRef} style={{ height: '300vh' }}>
      <div
        className="sticky top-0 h-screen flex items-center justify-center px-6 sm:px-12 font-medium"
        style={{ background: '#1a1a1a' }}
      >
        {/* Ambient glow */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'radial-gradient(ellipse 50% 35% at 50% 50%, rgba(255,97,29,0.04) 0%, transparent 70%)',
          }}
        />

        <div className="max-w-4xl text-center relative z-10">
          <p
            className="flex flex-wrap justify-center gap-x-3 gap-y-1 leading-snug"
            style={{ fontSize: 'clamp(1.5rem, 4vw, 2.8rem)' }}
          >
            {QUOTE_WORDS.map((word, i) => (
              <QuoteWord
                key={i}
                word={word}
                index={i}
                total={QUOTE_WORDS.length}
                scrollYProgress={scrollYProgress}
              />
            ))}
          </p>
        </div>
      </div>
    </div>
  );
}

function QuoteWord({ word, index, total, scrollYProgress }) {
  // Map the word reveal across 75% of the sticky scroll duration
  const start = (index / total) * 0.75;
  const end = start + 0.12;

  const opacity = useTransform(scrollYProgress, [start, end], [0.15, 1]);
  const color = useTransform(
    scrollYProgress,
    [start, end],
    ['rgba(214,210,189,0.15)', 'rgba(214,210,189,1)']
  );

  return (
    <motion.span style={{ opacity, color, display: 'inline-block' }}>
      {word}
    </motion.span>
  );
}
