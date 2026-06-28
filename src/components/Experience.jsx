import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import AnimatedSection, { fadeUp } from './ui/AnimatedSection';

const EXPERTISE = [
  {
    number: "01",
    title: "System Architecture",
    desc: "Designing secure, high-concurrency MERN ecosystems with modular, maintainable backend structures that scale cleanly in production.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
      </svg>
    ),
  },
  {
    number: "02",
    title: "API Engineering",
    desc: "Architecting high-performance RESTful interfaces with strict validation, JWT auth, role-based access control, and security best practices.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    number: "03",
    title: "Frontend Craft",
    desc: "Building responsive, animated user interfaces with React 19, Tailwind CSS, and a focus on cinematic UI patterns and smooth interactions.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    number: "04",
    title: "Cloud Deployment",
    desc: "Deploying and configuring full-stack apps on Vercel and Render with environment-based secrets management and cross-domain auth flows.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
      </svg>
    ),
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function Experience() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="experience" className="py-24 sm:py-32" style={{ background: '#333333' }}>
      <div className="section-container">
        <AnimatedSection variants={fadeUp}>
          <div className="flex flex-col items-center justify-center mb-12">
            <h2 className="font-bold text-3xl uppercase tracking-wide" style={{ color: '#D6D2BD' }}>
              EXPERTISE
            </h2>
            <p className="font-semibold text-base font-mono mt-1" style={{ color: '#FF611D' }}>
              WHAT I DO BEST
            </p>
          </div>
        </AnimatedSection>

        <div ref={ref} className="grid sm:grid-cols-2 gap-5">
          {EXPERTISE.map((item, i) => (
            <motion.div
              key={item.number}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
            >
              <div
                className="expertise-card group h-full cursor-default"
                style={{ transition: 'border-color 0.3s, box-shadow 0.3s' }}
              >
                <div className="flex items-start gap-4">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0 transition-all duration-300 group-hover:scale-110"
                    style={{
                      background: 'rgba(255,97,29,0.08)',
                      border: '1px solid rgba(255,97,29,0.2)',
                      color: '#FF611D',
                    }}
                  >
                    {item.icon}
                  </div>
                  <div className="flex-1">
                    <div className="text-xs font-black uppercase tracking-[0.25em] mb-1 font-mono" style={{ color: 'rgba(255,97,29,0.5)' }}>
                      {item.number}
                    </div>
                    <h3 className="text-xl font-bold mb-3 transition-colors duration-200 group-hover:text-orange-400" style={{ color: '#D6D2BD' }}>
                      {item.title}
                    </h3>
                    <p className="text-sm leading-relaxed" style={{ color: 'rgba(214,210,189,0.5)' }}>
                      {item.desc}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
