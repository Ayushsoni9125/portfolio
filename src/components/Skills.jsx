import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import AnimatedSection, { fadeUp, staggerContainer } from './ui/AnimatedSection';
import Card3D from './ui/Card3D';

const SKILL_GROUPS = [
  {
    title: "Core Stack",
    icon: "⚡",
    skills: ["React.js", "Node.js", "Express.js", "MERN Architecture"],
  },
  {
    title: "Databases",
    icon: "🗄️",
    skills: ["MongoDB (Mongoose)", "PostgreSQL", "Data Integrity", "Transactions"],
  },
  {
    title: "DevOps / Tools",
    icon: "🛠️",
    skills: ["Git / GitHub", "Postman", "Vercel / Render", "Docker"],
  },
  {
    title: "Security",
    icon: "🔐",
    skills: ["JWT Auth", "bcryptjs", "RBAC", "REST API Security"],
  },
];

const CERTIFICATIONS = [
  { name: "AWS Certified AI Practitioner", code: "AIF-C01", color: '#FF9900' },
  { name: "AWS Certified Cloud Practitioner", code: "CLF-C02", color: '#FF9900' },
  { name: "HackWave 2.0", code: "Top 10 / 100+ Teams", color: '#7dc3ff' },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function Skills() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [certRef, certInView] = useInView({ triggerOnce: true, threshold: 0.15 });

  return (
    <section id="skills" className="py-24 sm:py-32">
      <div className="section-container">
        <AnimatedSection variants={fadeUp}>
          <h2 className="section-heading">Skills</h2>
          <span className="accent-bar" />
        </AnimatedSection>

        {/* Skill Groups */}
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-8"
        >
          {SKILL_GROUPS.map((group, gi) => (
            <motion.div key={group.title} variants={itemVariants}>
              <Card3D className="skill-group-card h-full" intensity={8} glareOpacity={0.06}>
                {/* Group header */}
                <div className="flex items-center gap-2 mb-5 pb-3" style={{ borderBottom: '1px solid rgba(232,238,255,0.05)' }}>
                  <span className="text-base">{group.icon}</span>
                  <h3
                    className="text-[10px] font-black uppercase tracking-[0.25em]"
                    style={{ color: '#3b9eff' }}
                  >
                    {group.title}
                  </h3>
                </div>

                <div className="space-y-3">
                  {group.skills.map((skill, si) => (
                    <motion.div
                      key={skill}
                      className="flex items-center gap-3 group/item cursor-default"
                      initial={{ opacity: 0, x: -10 }}
                      animate={inView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: gi * 0.1 + si * 0.06, duration: 0.4 }}
                      whileHover={{ x: 4 }}
                    >
                      <motion.div
                        className="w-1.5 h-1.5 rounded-full shrink-0"
                        style={{ background: 'rgba(59,158,255,0.4)' }}
                        whileHover={{ scale: 2, background: '#3b9eff' }}
                        transition={{ type: 'spring', stiffness: 400 }}
                      />
                      <span
                        className="text-sm font-medium transition-colors duration-200 group-hover/item:text-white"
                        style={{ color: 'rgba(232,238,255,0.55)' }}
                      >
                        {skill}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </Card3D>
            </motion.div>
          ))}
        </motion.div>

        {/* Certifications & Achievements */}
        <motion.div
          ref={certRef}
          initial={{ opacity: 0, y: 30 }}
          animate={certInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <Card3D
            className="glass-panel p-6 sm:p-8"
            intensity={5}
            glareOpacity={0.05}
          >
            <h3
              className="text-[10px] font-black uppercase tracking-[0.25em] mb-6"
              style={{ color: '#3b9eff' }}
            >
              Certifications & Achievements
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
                  <motion.div
                    className="w-7 h-7 rounded-full flex items-center justify-center shrink-0 mt-0.5"
                    style={{
                      background: `rgba(${cert.color === '#FF9900' ? '255,153,0' : '125,195,255'},0.1)`,
                      border: `1px solid rgba(${cert.color === '#FF9900' ? '255,153,0' : '125,195,255'},0.25)`,
                    }}
                    whileHover={{
                      scale: 1.2,
                      boxShadow: `0 0 15px ${cert.color}40`,
                    }}
                  >
                    <svg className="w-3.5 h-3.5" style={{ color: cert.color }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
                    </svg>
                  </motion.div>
                  <div>
                    <p className="text-sm font-semibold text-white">{cert.name}</p>
                    <p className="text-xs mt-0.5" style={{ color: 'rgba(232,238,255,0.35)' }}>{cert.code}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </Card3D>
        </motion.div>
      </div>
    </section>
  );
}
