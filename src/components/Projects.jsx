import { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import AnimatedSection, { fadeUp } from './ui/AnimatedSection';

const PROJECTS = [
  {
    title: "ShopNow",
    category: "WEB DEVELOPMENT",
    desc: "Production-ready MERN e-commerce platform with Admin Dashboard, JWT auth, role-based access control, and a category-based recommendation engine.",
    tags: ["React 19", "Node.js", "Express", "MongoDB"],
    link: "https://frontend-liart-phi-53.vercel.app",
    git: "https://github.com/Ayushsoni9125/Shop-Now",
    featured: true,
    bg: "/project_bg_ecommerce.png",
  },
  {
    title: "AI Resume Builder",
    category: "ARTIFICIAL INTELLIGENCE",
    desc: "Full-stack platform featuring ATS scoring, AI-generated cover letters, resume parsing, multi-template PDF/Word export powered by Gemini AI.",
    tags: ["React 19", "Node.js", "MongoDB", "Gemini AI"],
    link: "https://ats-checker-resume-builder.vercel.app",
    git: "https://github.com/Ayushsoni9125/resume_builder",
    featured: false,
    bg: "/project_bg_resume.png",
  },
  {
    title: "Connectify",
    category: "REAL-TIME SYSTEMS",
    desc: "Real-time chat app with glassmorphic UI, Socket.io WebSocket communication, and secure HttpOnly cookie-based JWT auth across Vercel and Render.",
    tags: ["React 19", "Node.js", "Socket.io", "Tailwind CSS"],
    link: "https://connectify-ayush.vercel.app",
    git: "https://github.com/Ayushsoni9125/Connectify",
    featured: false,
    bg: "/project_bg_connectify.png",
  },
  {
    title: "Banking App",
    category: "FULL-STACK",
    desc: "Secure banking application with transaction tracking, multi-account support, audit logs and enterprise-grade security practices.",
    tags: ["React 19", "Node.js", "PostgreSQL", "JWT Auth"],
    link: "#projects",
    git: "https://github.com/Ayushsoni9125",
    featured: false,
    bg: "/project_bg_banking.png",
  },
  {
    title: "Wedding Platform",
    category: "WEB DEVELOPMENT",
    desc: "Elegant wedding planning platform with vendor management, budget tracking, RSVP system, and beautiful gallery pages.",
    tags: ["React 19", "Express", "MongoDB", "REST APIs"],
    link: "#projects",
    git: "https://github.com/Ayushsoni9125",
    featured: false,
    bg: "/project_bg_wedding.png",
  },
];

function ProjectCard({ project, index }) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      className="flex-shrink-0 relative rounded-3xl overflow-hidden cursor-pointer"
      style={{ width: '240px', height: '360px' }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      whileHover={{ y: -6 }}
    >
      {/* BG image */}
      <motion.div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${project.bg})` }}
        animate={{
          scale: hovered ? 1.07 : 1.0,
          filter: hovered ? 'blur(0px) brightness(0.65)' : 'blur(1px) brightness(0.45)',
        }}
        transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
      />

      {/* Top gradient */}
      <div
        className="absolute inset-x-0 top-0 h-1/2 z-10 pointer-events-none"
        style={{ background: 'linear-gradient(to bottom, rgba(0,0,0,0.65) 0%, transparent 100%)' }}
      />
      {/* Bottom gradient */}
      <div
        className="absolute inset-x-0 bottom-0 h-2/3 z-10 pointer-events-none"
        style={{ background: 'linear-gradient(to top, rgba(26,26,26,0.98) 0%, rgba(26,26,26,0.4) 55%, transparent 100%)' }}
      />

      {/* Orange top accent line on hover */}
      <motion.div
        className="absolute top-0 left-0 right-0 h-[2px] z-20"
        style={{ background: 'linear-gradient(90deg, transparent, #FF611D, transparent)' }}
        animate={{ opacity: hovered ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      />

      {/* Content */}
      <div className="absolute inset-0 z-20 p-6 flex flex-col justify-between">
        {/* Top */}
        <div className="flex items-start justify-between">
          <div>
            <p className="text-[9px] font-black uppercase tracking-[0.2em] font-mono" style={{ color: '#FF611D' }}>
              {project.category}
            </p>
            {project.featured && (
              <motion.span
                className="text-[8px] font-black uppercase tracking-widest px-2 py-0.5 rounded mt-1 inline-block"
                style={{ background: 'rgba(255,97,29,0.2)', color: '#FF611D', border: '1px solid rgba(255,97,29,0.3)' }}
                animate={{ opacity: [0.7, 1, 0.7] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                Featured
              </motion.span>
            )}
          </div>
          <a
            href={project.git}
            target="_blank"
            rel="noreferrer"
            onClick={e => e.stopPropagation()}
            className="transition-colors duration-200"
            style={{ color: 'rgba(214,210,189,0.3)' }}
            onMouseOver={e => e.currentTarget.style.color = '#D6D2BD'}
            onMouseOut={e => e.currentTarget.style.color = 'rgba(214,210,189,0.3)'}
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
            </svg>
          </a>
        </div>

        {/* Bottom */}
        <div>
          <h3 className="text-xl font-bold mb-2 leading-tight" style={{ color: '#D6D2BD' }}>
            {project.title}
          </h3>

          {/* Description on hover */}
          <motion.p
            className="text-xs leading-relaxed mb-3 font-mono"
            style={{ color: 'rgba(214,210,189,0.6)' }}
            animate={{ opacity: hovered ? 1 : 0, height: hovered ? 'auto' : 0, marginBottom: hovered ? 12 : 0 }}
            transition={{ duration: 0.3 }}
          >
            {project.desc}
          </motion.p>

          {/* Tags */}
          <div className="flex flex-wrap gap-1.5 mb-4">
            {project.tags.slice(0, 3).map(tag => (
              <span
                key={tag}
                className="text-[8px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wide font-mono"
                style={{ background: 'rgba(214,210,189,0.07)', border: '1px solid rgba(214,210,189,0.12)', color: 'rgba(214,210,189,0.6)' }}
              >
                {tag}
              </span>
            ))}
          </div>

          <a
            href={project.link}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-bold transition-all duration-200"
            style={{ color: '#FF611D' }}
          >
            Live Demo <ArrowUpRight size={12} />
          </a>
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const carouselRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const updateScrollState = () => {
    if (!carouselRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
    setCanScrollLeft(scrollLeft > 10);
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
  };

  const scroll = dir => {
    carouselRef.current?.scrollBy({ left: dir === 'left' ? -280 : 280, behavior: 'smooth' });
  };

  return (
    <section id="projects" className="py-24 sm:py-32 overflow-hidden" style={{ background: '#333333' }}>
      <div className="section-container">
        <AnimatedSection variants={fadeUp}>
          <div className="flex flex-col items-center justify-center text-center mb-6">
            <h2 className="font-bold text-3xl uppercase tracking-wide" style={{ color: '#D6D2BD' }}>
              FEATURED PROJECTS
            </h2>
            <motion.a
              href="https://github.com/Ayushsoni9125"
              target="_blank"
              rel="noreferrer"
              className="font-semibold text-sm font-mono mt-2 inline-flex items-center gap-1 transition-colors duration-200"
              style={{ color: '#FF611D' }}
              whileHover={{ color: '#ff8c55', scale: 1.03 }}
            >
              EXPLORE MY WORK
            </motion.a>
          </div>
        </AnimatedSection>
      </div>

      {/* Carousel */}
      <div className="relative mt-8">
        <div
          className="absolute left-0 top-0 bottom-0 w-16 z-10 pointer-events-none"
          style={{ background: 'linear-gradient(to right, #333333, transparent)' }}
        />
        <div
          className="absolute right-0 top-0 bottom-0 w-16 z-10 pointer-events-none"
          style={{ background: 'linear-gradient(to left, #333333, transparent)' }}
        />

        <div
          ref={carouselRef}
          className="flex gap-4 overflow-x-auto pb-6 pt-2 px-6 sm:px-16"
          style={{ scrollbarWidth: 'none' }}
          onScroll={updateScrollState}
        >
          {PROJECTS.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
          <div className="flex-shrink-0 w-8" />
        </div>
      </div>

      {/* Arrow controls */}
      <div className="section-container">
        <div className="flex justify-end gap-3 mt-4">
          {[
            { dir: 'left', disabled: !canScrollLeft, path: 'M15 19l-7-7 7-7' },
            { dir: 'right', disabled: !canScrollRight, path: 'M9 5l7 7-7 7' },
          ].map(({ dir, disabled, path }) => (
            <button
              key={dir}
              onClick={() => scroll(dir)}
              disabled={disabled}
              className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200 disabled:opacity-30"
              style={{
                background: 'rgba(214,210,189,0.06)',
                border: '1px solid rgba(214,210,189,0.15)',
                color: 'rgba(214,210,189,0.6)',
              }}
              onMouseOver={e => { if (!disabled) { e.currentTarget.style.borderColor = '#FF611D'; e.currentTarget.style.color = '#FF611D'; }}}
              onMouseOut={e => { e.currentTarget.style.borderColor = 'rgba(214,210,189,0.15)'; e.currentTarget.style.color = 'rgba(214,210,189,0.6)'; }}
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={path} />
              </svg>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
