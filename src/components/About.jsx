import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import profileImg from "../assets/ayush.png";

// Timeline data using Ayush's actual journey
const TIMELINE = [
  {
    year: '2025 – Present',
    summary: 'Decided to make 2025 my year to shine',
    items: [
      '💼 Building production-grade MERN projects',
      '🏆 AWS Certified AI Practitioner & Cloud Practitioner',
      '🚀 Actively seeking full-time & freelance opportunities',
      '🎓 B.Tech IT — final year at KIET Group of Institutions',
    ],
  },
  {
    year: '2023 – 2024',
    summary: 'Dove deep into full-stack development',
    items: [
      '⚡ Mastered the MERN stack end-to-end',
      '🔐 Learned JWT auth, RBAC, and REST API security',
      '🏆 Top 10 at HackWave 2.0 hackathon (100+ teams)',
      '🛠️ Built ShopNow, AI Resume Builder, Connectify',
    ],
  },
  {
    year: '2022',
    summary: 'Started my B.Tech journey at KIET',
    items: [
      '👨‍💻 Wrote my first lines of JavaScript and Python',
      '📚 Discovered my passion for building on the web',
      '🍕 Balanced coding with real-world responsibilities',
    ],
  },
];

function TimelineItem({ item, index }) {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.15 });

  return (
    <div ref={ref} className="flex justify-start pt-10 md:pt-28 md:gap-10">
      {/* Sticky year label (desktop) */}
      <div className="sticky flex flex-col md:flex-row z-40 items-center top-40 self-start max-w-xs lg:max-w-sm md:w-full">
        <motion.h3
          initial={{ opacity: 0, x: -20 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="hidden md:block text-xl md:text-3xl font-bold pl-16"
          style={{ color: '#D6D2BD' }}
        >
          {item.year}
        </motion.h3>
      </div>

      {/* Content */}
      <div className="relative pl-16 pr-4 md:pl-16 w-full">
        {/* Year on mobile */}
        <motion.h3
          initial={{ opacity: 0, y: 10 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="md:hidden block text-2xl mb-4 text-left font-bold"
          style={{ color: '#D6D2BD' }}
        >
          {item.year}
        </motion.h3>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="text-sm font-medium font-mono mb-6"
          style={{ color: 'rgba(214,210,189,0.55)' }}
        >
          {item.summary}
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="mb-8 font-medium space-y-1"
        >
          {item.items.map((line, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -10 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.3 + i * 0.08 }}
              className="flex items-start text-sm font-mono"
              style={{ color: 'rgba(214,210,189,0.75)' }}
            >
              {line}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}

export default function About() {
  const [lineRef, lineInView] = useInView({ triggerOnce: false, threshold: 0 });

  return (
    <section id="about" className="py-24 sm:py-32" style={{ background: '#333333' }}>
      <div className="section-container">
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center justify-center mb-16"
        >
          <h2 className="font-bold text-3xl tracking-wide uppercase" style={{ color: '#D6D2BD' }}>
            ABOUT ME
          </h2>
          <p className="font-semibold text-base font-mono mt-1" style={{ color: '#FF611D' }}>
            CODE.EAT.SLEEP.REPEAT
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="w-full pt-4">
          <div className="relative max-w-6xl mx-auto pb-20">
            {TIMELINE.map((item, i) => (
              <TimelineItem key={item.year} item={item} index={i} />
            ))}

            {/* Vertical animated line */}
            <div
              ref={lineRef}
              className="timeline-line absolute md:left-6 left-4 top-0 overflow-hidden"
              style={{ height: '100%' }}
            >
              <motion.div
                className="timeline-progress absolute inset-x-0 top-0"
                initial={{ height: 0, opacity: 0 }}
                whileInView={{ height: '100%', opacity: 1 }}
                viewport={{ once: false, amount: 0 }}
                transition={{ duration: 2.5, ease: 'easeOut' }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
