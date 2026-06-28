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

function ProjectCard({ project, index, hoveredIndex, setHoveredIndex }) {
  const isHovered = hoveredIndex === index;
  const anyCardHovered = hoveredIndex !== null;

  // Determine card animation state — keeping sizes equal to prevent layout shifts
  let scale = 1;
  let filter = 'none';
  let zIndex = 1;

  if (anyCardHovered) {
    if (isHovered) {
      scale = 1;
      filter = 'blur(0px) brightness(1.05)';
      zIndex = 10;
    } else {
      scale = 1;
      filter = 'blur(5px) brightness(0.55)';
    }
  }

  return (
    <motion.a
      href={project.link}
      target="_blank"
      rel="noreferrer"
      className="flex-shrink-0 relative rounded-3xl overflow-hidden cursor-pointer block"
      style={{ width: '280px', height: '380px' }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
      onMouseEnter={() => setHoveredIndex(index)}
      onMouseLeave={() => setHoveredIndex(null)}
      animate={{ scale, filter, zIndex }}
    >
      {/* Background Image (fully bright by default) */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-transform duration-500"
        style={{
          backgroundImage: `url(${project.bg})`,
          transform: isHovered ? 'scale(1.06)' : 'scale(1)',
        }}
      />

      {/* Top subtle gradient for text readability */}
      <div
        className="absolute inset-x-0 top-0 h-1/2 z-10 pointer-events-none"
        style={{
          background: 'linear-gradient(to bottom, rgba(0, 0, 0, 0.5) 0%, transparent 100%)',
        }}
      />

      {/* Top border glow on hover */}
      <motion.div
        className="absolute top-0 left-0 right-0 h-[2.5px] z-20"
        style={{ background: 'linear-gradient(90deg, transparent, #FF611D, transparent)' }}
        animate={{ opacity: isHovered ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      />

      {/* Content overlay */}
      <div className="absolute inset-0 z-20 p-6 flex flex-col justify-between">
        {/* Top: Category & Title (Left) + GitHub Icon (Right) */}
        <div className="flex items-start justify-between w-full">
          <div className="text-left">
            <span
              className="text-[10px] font-bold uppercase tracking-[0.18em] font-sans block mb-1.5"
              style={{ color: 'rgba(214, 210, 189, 0.8)' }}
            >
              {project.category}
            </span>
            <h3
              className="text-2xl font-bold leading-tight tracking-tight text-white"
              style={{
                fontFamily: "'Inter', sans-serif",
                textShadow: '0 2px 8px rgba(0,0,0,0.4)',
              }}
            >
              {project.title}
            </h3>
          </div>

          {/* GitHub Icon Link */}
          <a
            href={project.git}
            target="_blank"
            rel="noreferrer"
            onClick={e => e.stopPropagation()}
            className="p-1.5 rounded-full transition-all duration-300"
            style={{
              background: 'rgba(26, 26, 26, 0.45)',
              border: '1px solid rgba(214, 210, 189, 0.15)',
              color: 'rgba(214, 210, 189, 0.8)',
            }}
            onMouseOver={e => {
              e.currentTarget.style.color = '#FF611D';
              e.currentTarget.style.borderColor = 'rgba(255, 97, 29, 0.4)';
              e.currentTarget.style.background = 'rgba(26, 26, 26, 0.7)';
            }}
            onMouseOut={e => {
              e.currentTarget.style.color = 'rgba(214, 210, 189, 0.8)';
              e.currentTarget.style.borderColor = 'rgba(214, 210, 189, 0.15)';
              e.currentTarget.style.background = 'rgba(26, 26, 26, 0.45)';
            }}
          >
            <svg className="w-4.5 h-4.5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
            </svg>
          </a>
        </div>

        {/* Bottom hover reveal indicator */}
        <div className="flex justify-end items-center">
          <motion.div
            className="w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300"
            style={{
              background: 'rgba(26, 26, 26, 0.45)',
              border: '1px solid rgba(214, 210, 189, 0.15)',
              color: 'rgba(214, 210, 189, 0.8)',
            }}
            animate={{
              x: isHovered ? 4 : 0,
              color: isHovered ? '#FF611D' : 'rgba(214, 210, 189, 0.8)',
              borderColor: isHovered ? 'rgba(255, 97, 29, 0.4)' : 'rgba(214, 210, 189, 0.15)',
              backgroundColor: isHovered ? 'rgba(26, 26, 26, 0.7)' : 'rgba(26, 26, 26, 0.45)',
            }}
          >
            <ArrowUpRight size={16} />
          </motion.div>
        </div>
      </div>
    </motion.a>
  );
}

export default function Projects() {
  const carouselRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [hoveredIndex, setHoveredIndex] = useState(null);

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
            <ProjectCard
              key={project.title}
              project={project}
              index={i}
              hoveredIndex={hoveredIndex}
              setHoveredIndex={setHoveredIndex}
            />
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
