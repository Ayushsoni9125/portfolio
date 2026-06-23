import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import profileImg from "../assets/ayush.png";
import AnimatedSection, { staggerContainer, fadeUp, slideLeft, slideRight } from './ui/AnimatedSection';

const SKILLS = [
  "React 19", "Node.js", "Express.js", "MongoDB", "PostgreSQL",
  "Tailwind CSS", "JWT Auth", "REST APIs", "Socket.io", "Gemini AI",
  "Git/GitHub", "Vercel / Render",
];

export default function About() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="about" className="py-24 sm:py-32">
      <div className="section-container">
        <AnimatedSection variants={fadeUp}>
          <h2 className="section-heading">About</h2>
          <span className="accent-bar" />
        </AnimatedSection>

        <div ref={ref} className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">
          {/* Text */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
          >
            <motion.p
              variants={fadeUp}
              className="text-lg leading-relaxed mb-5"
              style={{ color: 'rgba(232,238,255,0.6)' }}
            >
              I'm a{' '}
              <span style={{ color: '#e8eeff', fontWeight: 600 }}>
                Full-Stack MERN Developer
              </span>{' '}
              with a passion for architecting secure, scalable web applications. I specialize
              in building robust backend systems and crafting cinematic frontend experiences.
            </motion.p>
            <motion.p
              variants={fadeUp}
              className="text-lg leading-relaxed mb-10"
              style={{ color: 'rgba(232,238,255,0.6)' }}
            >
              I prioritize data integrity and system reliability — ensuring every line of code
              serves a specific purpose in the production environment. Currently pursuing
              B.Tech in Information Technology at{' '}
              <span style={{ color: '#e8eeff', fontWeight: 600 }}>KIET Group of Institutions</span>.
            </motion.p>

            {/* Skills */}
            <motion.div variants={fadeUp} className="flex flex-wrap gap-2 mb-10">
              {SKILLS.map((skill, i) => (
                <motion.span
                  key={skill}
                  className="skill-tag"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: i * 0.05, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                  whileHover={{ y: -3, scale: 1.05 }}
                >
                  {skill}
                </motion.span>
              ))}
            </motion.div>

            {/* CTA */}
            <motion.a
              variants={fadeUp}
              href="/resume-template.html"
              target="_blank"
              rel="noreferrer"
              id="about-resume-btn"
              className="btn-primary"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              View Resume
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </motion.a>
          </motion.div>

          {/* Photo */}
          <motion.div
            variants={slideRight}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            custom={0.2}
            className="flex justify-center lg:justify-end"
          >
            <motion.div
              className="relative w-64 h-72 sm:w-72 sm:h-80 group perspective-1000"
              whileHover={{ scale: 1.03 }}
              transition={{ type: 'spring', stiffness: 300, damping: 25 }}
            >
              {/* Animated border ring */}
              <motion.div
                className="absolute -inset-3 rounded-3xl opacity-30"
                style={{
                  background: 'linear-gradient(135deg, rgba(59,158,255,0.4), rgba(125,195,255,0.1), rgba(59,158,255,0.4))',
                  backgroundSize: '200% 200%',
                }}
                animate={{ backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
              />

              {/* Offset accent border */}
              <div
                className="absolute inset-0 rounded-2xl translate-x-2 translate-y-2 transition-transform duration-300 group-hover:translate-x-1 group-hover:translate-y-1"
                style={{ border: '2px solid rgba(59,158,255,0.25)' }}
              />
              {/* Image */}
              <div
                className="absolute inset-0 -translate-x-2 -translate-y-2 rounded-2xl overflow-hidden transition-transform duration-300 group-hover:-translate-x-1 group-hover:-translate-y-1"
                style={{ border: '1px solid rgba(232,238,255,0.08)' }}
              >
                <img
                  src={profileImg}
                  alt="Ayush Soni"
                  className="w-full h-full object-cover transition-all duration-700 filter grayscale hover:grayscale-0 scale-105 hover:scale-100"
                />
                {/* Gradient overlay */}
                <div
                  className="absolute inset-0"
                  style={{
                    background: 'linear-gradient(to top, rgba(7,16,30,0.6) 0%, transparent 60%)',
                  }}
                />
                {/* Label */}
                <div className="absolute bottom-4 left-4">
                  <p
                    className="text-[10px] font-bold uppercase tracking-widest mb-0.5"
                    style={{ color: '#3b9eff' }}
                  >
                    Full-Stack Engineer
                  </p>
                  <p className="text-sm font-bold text-white">Ayush Soni</p>
                </div>
              </div>

              {/* Floating badge */}
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -top-3 -right-3 px-3 py-1.5 rounded-full text-xs font-bold"
                style={{
                  background: 'linear-gradient(135deg, #3b9eff, #7dc3ff)',
                  boxShadow: '0 4px 15px rgba(59,158,255,0.4)',
                  color: '#fff',
                }}
              >
                AWS Certified
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
