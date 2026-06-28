import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import AnimatedSection, { fadeUp } from './ui/AnimatedSection';

// Timeline data built from Ayush's resume
const TIMELINE = [
  {
    year: '2025 - Present',
    summary: 'Decided to make 2025 my year to shine',
    items: [
      '🏆 AWS Certified AI Practitioner (AIF-C01)',
      '🏆 AWS Certified Cloud Practitioner (CLF-C02)',
      '🎯 Ranked in Top 10 out of 100+ teams at HackWave 2.0',
      '🚀 Actively seeking full-time & freelance opportunities',
    ],
  },
  {
    year: '2024',
    summary: 'Started B.Tech at KIET Group of Institutions, Ghaziabad',
    items: [
      '🎓 B.Tech in Information Technology (2024 - 2028)',
      '⚡ Mastered the MERN stack end-to-end',
      '🔐 Deep-dived into JWT, HttpOnly cookies, RBAC, and REST API security',
      '🛠️ Engineered ShopNow, Connectify, and AI Resume Builder',
    ],
  },
  {
    year: '2023',
    summary: 'Completed Class XII — Dr. Virendra Swarup Public School',
    items: [
      '📋 Class XII with 92% score',
      '👨‍💻 Wrote my first lines of JavaScript, C/C++, HTML & CSS',
    ],
  },
];

function TimelineItem({ item, index }) {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.15 });

  return (
    <div ref={ref} className="flex justify-start pt-10 md:pt-20 md:gap-10">
      {/* Sticky year label (desktop) */}
      <div className="sticky flex flex-col md:flex-row z-40 items-center top-40 self-start max-w-xs lg:max-w-sm md:w-full">
        <motion.h3
          initial={{ opacity: 0, x: -20 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="hidden md:block text-xl md:text-3xl font-bold pl-16"
          style={{ color: '#D6D2BD', fontFamily: "'Fira Code', monospace" }}
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
          style={{ color: '#D6D2BD', fontFamily: "'Fira Code', monospace" }}
        >
          {item.year}
        </motion.h3>

        <p
          className="text-sm font-medium font-mono mb-4 text-left"
          style={{ color: 'rgba(214,210,189,0.55)' }}
        >
          {item.summary}
        </p>

        <div className="mb-8 space-y-2 text-left">
          {item.items.map((line, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -10 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.2 + i * 0.06 }}
              className="flex items-start text-sm font-mono"
              style={{ color: 'rgba(214,210,189,0.75)' }}
            >
              <span className="mr-2 shrink-0">•</span>
              <span>{line}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Timeline() {
  return (
    <section id="timeline" className="py-24 sm:py-32" style={{ background: '#333333' }}>
      <div className="section-container">
        
        {/* Section heading */}
        <AnimatedSection variants={fadeUp}>
          <div className="flex flex-col items-center justify-center mb-16">
            <h2 className="font-bold text-3xl tracking-wide uppercase" style={{ color: '#D6D2BD' }}>
              ABOUT ME
            </h2>
            <p className="font-semibold text-base font-mono mt-1" style={{ color: '#FF611D' }}>
              CODE.EAT.SLEEP.REPEAT
            </p>
          </div>
        </AnimatedSection>

        {/* Timeline body */}
        <div className="w-full pt-4 relative">
          <div className="relative max-w-6xl mx-auto pb-20">
            {TIMELINE.map((item, i) => (
              <TimelineItem key={item.year} item={item} index={i} />
            ))}

            {/* Vertical animated progress line */}
            <div
              className="timeline-line absolute md:left-6 left-4 top-0 overflow-hidden"
              style={{ height: '100%' }}
            >
              <motion.div
                className="timeline-progress absolute inset-x-0 top-0"
                initial={{ height: 0, opacity: 0 }}
                whileInView={{ height: '100%', opacity: 1 }}
                viewport={{ once: false, amount: 0 }}
                transition={{ duration: 2.0, ease: 'easeOut' }}
              />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
