const ROW_1 = '<React> <Node.js> <Express> <MongoDB> <PostgreSQL> <REST APIs>';
const ROW_2 = '[Full-Stack Dev] [Cloud & AWS] [API Engineering] [Auth & Security]';

function MarqueeRow({ text, reverse = false, speed = 35 }) {
  // Repeat text enough times to fill infinite scroll
  const repeated = Array(6).fill(text);

  return (
    <div className="marquee-track-wrapper overflow-hidden py-2 relative">
      {/* Fade edges */}
      <div
        className="absolute left-0 top-0 bottom-0 w-20 z-10 pointer-events-none"
        style={{ background: 'linear-gradient(to right, #07101e, transparent)' }}
      />
      <div
        className="absolute right-0 top-0 bottom-0 w-20 z-10 pointer-events-none"
        style={{ background: 'linear-gradient(to left, #07101e, transparent)' }}
      />

      <div
        className={`marquee-inner flex whitespace-nowrap gap-8 w-max ${reverse ? 'marquee-reverse' : 'marquee-forward'}`}
        style={{ '--marquee-speed': `${speed}s` }}
      >
        {repeated.map((t, i) => (
          <span
            key={i}
            className="text-4xl md:text-6xl font-black tracking-tight flex-shrink-0"
            style={{
              color: 'rgba(232,238,255,0.65)',
              WebkitTextStroke: '1px rgba(232,238,255,0.2)',
              letterSpacing: '-0.02em',
            }}
          >
            {t}
            <span
              className="inline-block mx-8"
              style={{
                color: '#3b9eff',
                opacity: 1,
                WebkitTextStroke: '0px',
              }}
            >
              ✦
            </span>
          </span>
        ))}
      </div>
    </div>
  );
}

export default function SkillsMarquee() {
  return (
    <section className="py-12 overflow-hidden relative">
      {/* Section label */}
      <div className="section-container mb-8">
        <p
          className="text-[10px] font-black uppercase tracking-[0.35em] text-center"
          style={{ color: 'rgba(59,158,255,0.4)' }}
        >
          Tech & Domain Expertise
        </p>
      </div>

      <MarqueeRow text={ROW_1} reverse={false} speed={40} />
      <div className="mt-2">
        <MarqueeRow text={ROW_2} reverse={true} speed={30} />
      </div>
    </section>
  );
}
