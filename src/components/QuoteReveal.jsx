import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const QUOTE_WORDS = [
  "\"The", "best", "way", "to", "predict", "the", "future", "is", "to", "invent", "it.\"",
  "—", "Alan", "Kay",
];

export default function QuoteReveal() {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  return (
    <div ref={containerRef} className="relative py-4" style={{ minHeight: '60vh' }}>
      {/* Sticky quote panel */}
      <div
        className="sticky top-0 flex items-center justify-center min-h-screen px-6 sm:px-12"
        style={{
          background: 'linear-gradient(to bottom, transparent, rgba(7,16,30,0.5), transparent)',
        }}
      >
        {/* Ambient glow behind quote */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'radial-gradient(ellipse 60% 40% at 50% 50%, rgba(59,158,255,0.04) 0%, transparent 70%)',
          }}
        />

        <div className="max-w-4xl text-center relative z-10">
          {/* Label */}
          <motion.p
            className="text-[10px] font-black uppercase tracking-[0.35em] mb-8"
            style={{ color: 'rgba(59,158,255,0.5)' }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            A Principle I Live By
          </motion.p>

          {/* Word-by-word reveal */}
          <p
            className="font-black leading-tight tracking-tight flex flex-wrap justify-center gap-x-3 gap-y-1"
            style={{ fontSize: 'clamp(1.8rem, 5vw, 3.5rem)' }}
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

          {/* Bottom accent */}
          <motion.div
            className="mt-12 mx-auto h-[1px] w-20"
            style={{ background: 'linear-gradient(90deg, transparent, rgba(59,158,255,0.4), transparent)' }}
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.5 }}
          />
        </div>
      </div>
    </div>
  );
}

function QuoteWord({ word, index, total, scrollYProgress }) {
  // Each word reveals at a different scroll threshold: start reveals early, end reveals late
  const start = 0.1 + (index / total) * 0.45;
  const end = start + 0.15;

  const opacity = useTransform(scrollYProgress, [start, end], [0.08, 1]);
  const y = useTransform(scrollYProgress, [start, end], [15, 0]);
  const color = useTransform(
    scrollYProgress,
    [start, end],
    ['rgba(232,238,255,0.1)', 'rgba(232,238,255,1)']
  );

  return (
    <motion.span
      style={{ opacity, y, color, display: 'inline-block' }}
    >
      {word}
    </motion.span>
  );
}
