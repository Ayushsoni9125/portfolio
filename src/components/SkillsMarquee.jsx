const ROW_1 = '<TypeScript> <Next.js> <React> <Node.js> <Express> <MongoDB>';
const ROW_2 = '[Full-Stack Dev] [Cloud & AWS] [API Engineering] [Auth & Security]';

function MarqueeRow({ text, reverse = false, speed = 60 }) {
  const repeated = Array(6).fill(text);

  return (
    <div className="marquee-track-wrapper overflow-hidden py-3 relative">
      {/* Edge fades */}
      <div
        className="absolute left-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
        style={{ background: 'linear-gradient(to right, #333333, transparent)' }}
      />
      <div
        className="absolute right-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
        style={{ background: 'linear-gradient(to left, #333333, transparent)' }}
      />

      <div
        className={`marquee-inner flex whitespace-nowrap gap-6 w-max ${reverse ? 'marquee-reverse' : 'marquee-forward'}`}
        style={{ '--marquee-speed': `${speed}s` }}
      >
        {repeated.map((t, i) => (
          <span
            key={i}
            className="text-xl md:text-3xl font-bold tracking-tight flex-shrink-0"
            style={{
              color: 'rgba(214,210,189,0.7)',
              letterSpacing: '-0.02em',
            }}
          >
            {t}
            <span
              className="inline-block mx-6"
              style={{ color: '#FF611D' }}
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
    <section className="py-10 overflow-hidden relative" style={{ background: '#333333' }}>
      <MarqueeRow text={ROW_1} reverse={false} speed={65} />
      <div className="mt-1">
        <MarqueeRow text={ROW_2} reverse={true} speed={55} />
      </div>
    </section>
  );
}
