import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import AnimatedSection, { fadeUp } from './ui/AnimatedSection';

// Exact skills from resume
const SKILL_GROUPS = [
  {
    title: "Languages",
    icon: "💻",
    skills: ["TypeScript", "JavaScript", "C / C++", "HTML", "CSS"],
  },
  {
    title: "Frameworks",
    icon: "⚛️",
    skills: ["Next.js", "React.js (v19)", "Node.js", "Express.js", "Tailwind CSS"],
  },
  {
    title: "Databases",
    icon: "🗄️",
    skills: ["MongoDB (Mongoose)", "PostgreSQL"],
  },
  {
    title: "Tools & Platforms",
    icon: "🛠️",
    skills: ["Git / GitHub", "Postman", "Vite", "Vercel / Render"],
  },
];

const CONCEPTS = [
  "REST APIs",
  "JWT Authentication",
  "Role-Based Access Control",
  "Data Structures & Algorithms",
  "Socket.io (WebSockets)",
  "Bcryptjs",
  "API Security",
  "Axios",
];

const CERTIFICATIONS = [
  { name: "AWS Certified AI Practitioner", code: "AIF-C01" },
  { name: "AWS Certified Cloud Practitioner", code: "CLF-C02" },
  { name: "HackWave 2.0 Hackathon", code: "Top 10 / 100+ Teams" },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1, y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function Skills() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [certRef, certInView] = useInView({ triggerOnce: true, threshold: 0.15 });
  const [conceptRef, conceptInView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="skills" className="py-24 sm:py-32" style={{ background: '#333333' }}>
      <div className="section-container">
        <AnimatedSection variants={fadeUp}>
          <div className="flex flex-col items-center justify-center mb-12">
            <h2 className="font-bold text-3xl uppercase tracking-wide" style={{ color: '#D6D2BD' }}>
              SKILLS
            </h2>
            <p className="font-semibold text-base font-mono mt-1" style={{ color: '#FF611D' }}>
              TOOLS OF THE TRADE
            </p>
          </div>
        </AnimatedSection>

        {/* Skill Groups */}
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-6"
        >
          {SKILL_GROUPS.map((group) => (
            <motion.div key={group.title} variants={itemVariants}>
              <div className="skill-group-card h-full">
                <div
                  className="flex items-center gap-2 mb-5 pb-3"
                  style={{ borderBottom: '1px solid rgba(214,210,189,0.06)' }}
                >
                  <span className="text-base">{group.icon}</span>
                  <h3 className="text-[10px] font-black uppercase tracking-[0.25em] font-mono" style={{ color: '#FF611D' }}>
                    {group.title}
                  </h3>
                </div>
                <div className="space-y-3">
                  {group.skills.map((skill) => (
                    <motion.div
                      key={skill}
                      className="flex items-center gap-3 group/item cursor-default"
                      whileHover={{ x: 4 }}
                    >
                      <div className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: 'rgba(255,97,29,0.5)' }} />
                      <span
                        className="text-sm font-medium font-mono transition-colors duration-200 group-hover/item:text-orange-400"
                        style={{ color: 'rgba(214,210,189,0.6)' }}
                      >
                        {skill}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Concepts row */}
        <motion.div
          ref={conceptRef}
          initial={{ opacity: 0, y: 20 }}
          animate={conceptInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="glass-panel p-6 mb-6"
        >
          <h3 className="text-[10px] font-black uppercase tracking-[0.25em] mb-4 font-mono" style={{ color: '#FF611D' }}>
            Core Concepts
          </h3>
          <div className="flex flex-wrap gap-2">
            {CONCEPTS.map((c, i) => (
              <motion.span
                key={c}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={conceptInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: i * 0.05, duration: 0.3 }}
                className="skill-tag"
              >
                {c}
              </motion.span>
            ))}
          </div>
        </motion.div>

        {/* Certifications */}
        <motion.div
          ref={certRef}
          initial={{ opacity: 0, y: 30 }}
          animate={certInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="glass-panel p-6 sm:p-8">
            <h3 className="text-[10px] font-black uppercase tracking-[0.25em] mb-6 font-mono" style={{ color: '#FF611D' }}>
              Certifications &amp; Achievements
            </h3>
            <div className="flex flex-col sm:flex-row gap-6 sm:gap-10">
              {CERTIFICATIONS.map((cert, i) => (
                <motion.div
                  key={cert.name}
                  className="flex items-start gap-3 group"
                  initial={{ opacity: 0, x: -20 }}
                  animate={certInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: i * 0.15, duration: 0.5 }}
                  whileHover={{ x: 4 }}
                >
                  <div
                    className="w-7 h-7 rounded-full flex items-center justify-center shrink-0 mt-0.5"
                    style={{ background: 'rgba(255,97,29,0.1)', border: '1px solid rgba(255,97,29,0.25)' }}
                  >
                    <svg className="w-3.5 h-3.5" style={{ color: '#FF611D' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-semibold" style={{ color: '#D6D2BD' }}>{cert.name}</p>
                    <p className="text-xs mt-0.5 font-mono" style={{ color: 'rgba(214,210,189,0.35)' }}>{cert.code}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
