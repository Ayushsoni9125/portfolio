import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ArrowUpRight } from "lucide-react";
import Card3D from './ui/Card3D';
import AnimatedSection, { fadeUp, staggerContainer } from './ui/AnimatedSection';

const PROJECTS = [
  {
    title: "ShopNow",
    desc: "Production-ready MERN e-commerce platform with Admin Dashboard, JWT auth, role-based access control, and a category-based recommendation engine.",
    tags: ["React 19", "Node.js", "Express", "MongoDB"],
    link: "https://frontend-liart-phi-53.vercel.app",
    git: "https://github.com/Ayushsoni9125/Shop-Now",
    featured: true,
    bg: "/project_bg_ecommerce.png",
    accent: '#3b9eff',
  },
  {
    title: "AI Resume Builder",
    desc: "Full-stack platform featuring ATS scoring, AI-generated cover letters, resume parsing, multi-template PDF/Word export powered by Gemini AI.",
    tags: ["React 19", "Node.js", "MongoDB", "Gemini AI"],
    link: "https://ats-checker-resume-builder.vercel.app",
    git: "https://github.com/Ayushsoni9125/resume_builder",
    featured: false,
    bg: "/project_bg_resume.png",
    accent: '#7dc3ff',
  },
  {
    title: "Connectify",
    desc: "Real-time chat app with glassmorphic UI, Socket.io WebSocket communication, and secure HttpOnly cookie-based JWT auth across Vercel and Render.",
    tags: ["React 19", "Node.js", "Socket.io", "Tailwind CSS"],
    link: "https://connectify-ayush.vercel.app",
    git: "https://github.com/Ayushsoni9125/Connectify",
    featured: false,
    bg: "/project_bg_connectify.png",
    accent: '#5aadff',
  },
];

const GitHubIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
  </svg>
);

const cardVariants = {
  hidden: { opacity: 0, y: 50, rotateX: 5 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: {
      duration: 0.7,
      delay: i * 0.15,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

export default function Projects() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="projects" className="py-24 sm:py-32">
      <div className="section-container">
        {/* Header */}
        <AnimatedSection variants={fadeUp}>
          <div className="flex items-end justify-between flex-wrap gap-4">
            <div>
              <h2 className="section-heading">Projects</h2>
              <span className="accent-bar" />
            </div>
            <motion.a
              href="https://github.com/Ayushsoni9125"
              target="_blank"
              rel="noreferrer"
              id="projects-view-all"
              className="text-sm font-bold pb-0.5 transition-colors duration-200"
              style={{ color: '#3b9eff', borderBottom: '1px solid rgba(59,158,255,0.3)' }}
              whileHover={{ x: 4 }}
              transition={{ type: 'spring', stiffness: 400 }}
            >
              View All on GitHub →
            </motion.a>
          </div>
        </AnimatedSection>

        {/* Cards grid */}
        <div
          ref={ref}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-6 perspective-1000"
        >
          {PROJECTS.map((project, i) => (
            <motion.div
              key={project.title}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
              style={{ perspective: '1000px' }}
            >
              <Card3D
                className="project-card group overflow-hidden h-full"
                intensity={10}
                glareOpacity={0.08}
              >
                {/* Background Image */}
                <div
                  className="absolute inset-0 bg-cover bg-center opacity-25 group-hover:opacity-40 transition-all duration-700 scale-100 group-hover:scale-110 pointer-events-none"
                  style={{ backgroundImage: `url(${project.bg})` }}
                />
                {/* Dark Overlay */}
                <div
                  className="absolute inset-0 bg-gradient-to-t from-[#07101e] via-[#07101e]/85 to-[#07101e]/55 transition-all duration-500 pointer-events-none"
                />

                {/* Top accent line */}
                <div
                  className="absolute top-0 left-0 right-0 h-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{ background: `linear-gradient(90deg, transparent, ${project.accent}, transparent)` }}
                />

                <div className="relative z-10 flex flex-col h-full">
                  {/* Card top row */}
                  <div className="flex justify-between items-start mb-4">
                    <div className="flex items-center gap-2">
                      <h3
                        className="text-lg font-bold text-white transition-colors duration-200 group-hover:text-blue-400"
                      >
                        {project.title}
                      </h3>
                      {project.featured && (
                        <motion.span
                          className="text-[9px] font-black uppercase tracking-widest px-2 py-0.5 rounded"
                          style={{
                            background: 'rgba(59,158,255,0.15)',
                            color: '#3b9eff',
                            border: '1px solid rgba(59,158,255,0.2)',
                          }}
                          animate={{ opacity: [0.7, 1, 0.7] }}
                          transition={{ duration: 2, repeat: Infinity }}
                        >
                          Featured
                        </motion.span>
                      )}
                    </div>
                    <motion.a
                      href={project.git}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`${project.title} GitHub`}
                      className="transition-colors duration-200 ml-2 shrink-0"
                      style={{ color: 'rgba(232,238,255,0.25)' }}
                      whileHover={{ scale: 1.2, color: 'rgba(232,238,255,0.9)', rotate: 5 }}
                    >
                      <GitHubIcon />
                    </motion.a>
                  </div>

                  {/* Description */}
                  <p
                    className="text-sm leading-relaxed mb-5 flex-1"
                    style={{ color: 'rgba(232,238,255,0.5)' }}
                  >
                    {project.desc}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-5">
                    {project.tags.map((tag) => (
                      <span key={tag} className="tag">{tag}</span>
                    ))}
                  </div>

                  {/* Live link */}
                  <motion.a
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1 text-sm font-bold transition-all duration-200 w-fit"
                    style={{ color: '#3b9eff' }}
                    whileHover={{ x: 4, gap: '0.5rem' }}
                  >
                    Live Demo <ArrowUpRight size={15} />
                  </motion.a>
                </div>
              </Card3D>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
