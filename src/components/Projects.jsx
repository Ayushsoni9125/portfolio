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
    accent: '#3b9eff',
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
    accent: '#7dc3ff',
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
    accent: '#5aadff',
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
    accent: '#3b9eff',
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
    accent: '#7dc3ff',
  },
];

const GitHubIcon = () => (
  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
  </svg>
);

function ProjectCard({ project, index }) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      className="flex-shrink-0 relative rounded-3xl overflow-hidden cursor-pointer group"
      style={{
        width: '280px',
        height: '400px',
      }}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      whileHover={{ y: -6, scale: 1.02 }}
    >
      {/* Background image */}
      <motion.div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${project.bg})` }}
        animate={{ scale: hovered ? 1.08 : 1.0, filter: hovered ? 'blur(0px) brightness(0.7)' : 'blur(2px) brightness(0.5)' }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      />

      {/* Top gradient overlay */}
      <div
        className="absolute inset-x-0 top-0 h-1/2 pointer-events-none z-10"
        style={{ background: 'linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, transparent 100%)' }}
      />

      {/* Bottom gradient overlay */}
      <div
        className="absolute inset-x-0 bottom-0 h-2/3 pointer-events-none z-10"
        style={{ background: 'linear-gradient(to top, rgba(7,16,30,0.97) 0%, rgba(7,16,30,0.4) 60%, transparent 100%)' }}
      />

      {/* Top accent line */}
      <motion.div
        className="absolute top-0 left-0 right-0 h-[2px] z-20"
        style={{ background: `linear-gradient(90deg, transparent, ${project.accent}, transparent)` }}
        animate={{ opacity: hovered ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      />

      {/* Card content */}
      <div className="absolute inset-0 z-20 p-6 flex flex-col justify-between">
        {/* Top: category + featured badge */}
        <div className="flex items-start justify-between">
          <div>
            <p
              className="text-[9px] font-black uppercase tracking-[0.2em] mb-1"
              style={{ color: project.accent }}
            >
              {project.category}
            </p>
            {project.featured && (
              <motion.span
                className="text-[8px] font-black uppercase tracking-widest px-2 py-0.5 rounded"
                style={{
                  background: 'rgba(59,158,255,0.2)',
                  color: '#3b9eff',
                  border: '1px solid rgba(59,158,255,0.3)',
                }}
                animate={{ opacity: [0.7, 1, 0.7] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                Featured
              </motion.span>
            )}
          </div>
          {/* GitHub icon */}
          <a
            href={project.git}
            target="_blank"
            rel="noreferrer"
            onClick={e => e.stopPropagation()}
            className="transition-all duration-200"
            style={{ color: 'rgba(232,238,255,0.3)' }}
            onMouseOver={e => e.currentTarget.style.color = '#fff'}
            onMouseOut={e => e.currentTarget.style.color = 'rgba(232,238,255,0.3)'}
          >
            <GitHubIcon />
          </a>
        </div>

        {/* Bottom: title + desc + tags + link */}
        <div>
          <h3
            className="text-xl font-black text-white mb-2 leading-tight"
            style={{ textShadow: '0 2px 10px rgba(0,0,0,0.5)' }}
          >
            {project.title}
          </h3>

          {/* Description — only shows on hover */}
          <motion.p
            className="text-xs leading-relaxed mb-3"
            style={{ color: 'rgba(232,238,255,0.65)' }}
            animate={{ opacity: hovered ? 1 : 0, height: hovered ? 'auto' : 0 }}
            transition={{ duration: 0.3 }}
          >
            {project.desc}
          </motion.p>

          {/* Tags */}
          <div className="flex flex-wrap gap-1.5 mb-4">
            {project.tags.slice(0, 3).map(tag => (
              <span
                key={tag}
                className="text-[8px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wide"
                style={{
                  background: 'rgba(255,255,255,0.08)',
                  border: '1px solid rgba(255,255,255,0.12)',
                  color: 'rgba(232,238,255,0.6)',
                }}
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Live link */}
          <a
            href={project.link}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-bold transition-all duration-200"
            style={{ color: project.accent }}
            onMouseOver={e => { e.currentTarget.style.gap = '8px'; }}
            onMouseOut={e => { e.currentTarget.style.gap = '6px'; }}
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

  const scroll = (dir) => {
    if (!carouselRef.current) return;
    const amount = 320;
    carouselRef.current.scrollBy({ left: dir === 'left' ? -amount : amount, behavior: 'smooth' });
  };

  return (
    <section id="projects" className="py-24 sm:py-32 overflow-hidden">
      <div className="section-container">
        {/* Header */}
        <AnimatedSection variants={fadeUp}>
          <div className="flex items-end justify-between flex-wrap gap-4 mb-2">
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
      </div>

      {/* Carousel — full bleed for overflow */}
      <div className="relative mt-8">
        {/* Left fade */}
        <div
          className="absolute left-0 top-0 bottom-0 w-16 z-10 pointer-events-none"
          style={{ background: 'linear-gradient(to right, #07101e, transparent)' }}
        />
        {/* Right fade */}
        <div
          className="absolute right-0 top-0 bottom-0 w-16 z-10 pointer-events-none"
          style={{ background: 'linear-gradient(to left, #07101e, transparent)' }}
        />

        {/* Scrollable container */}
        <div
          ref={carouselRef}
          className="flex gap-5 overflow-x-auto pb-6 pt-2 px-6 sm:px-16"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          onScroll={updateScrollState}
        >
          {PROJECTS.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
          {/* Spacer at end */}
          <div className="flex-shrink-0 w-8" />
        </div>
      </div>

      {/* Arrow controls */}
      <div className="section-container">
        <div className="flex justify-end gap-3 mt-4">
          <button
            onClick={() => scroll('left')}
            disabled={!canScrollLeft}
            className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200 disabled:opacity-30"
            style={{
              background: 'rgba(255,255,255,0.05)',
              border: '1px solid rgba(232,238,255,0.1)',
              color: 'rgba(232,238,255,0.7)',
            }}
            onMouseOver={e => { if (canScrollLeft) { e.currentTarget.style.borderColor = 'rgba(59,158,255,0.4)'; e.currentTarget.style.color = '#3b9eff'; }}}
            onMouseOut={e => { e.currentTarget.style.borderColor = 'rgba(232,238,255,0.1)'; e.currentTarget.style.color = 'rgba(232,238,255,0.7)'; }}
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={() => scroll('right')}
            disabled={!canScrollRight}
            className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200 disabled:opacity-30"
            style={{
              background: 'rgba(255,255,255,0.05)',
              border: '1px solid rgba(232,238,255,0.1)',
              color: 'rgba(232,238,255,0.7)',
            }}
            onMouseOver={e => { if (canScrollRight) { e.currentTarget.style.borderColor = 'rgba(59,158,255,0.4)'; e.currentTarget.style.color = '#3b9eff'; }}}
            onMouseOut={e => { e.currentTarget.style.borderColor = 'rgba(232,238,255,0.1)'; e.currentTarget.style.color = 'rgba(232,238,255,0.7)'; }}
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
