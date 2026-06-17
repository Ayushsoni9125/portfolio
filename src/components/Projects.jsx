import { ArrowUpRight } from "lucide-react";

const PROJECTS = [
  {
    title: "ShopNow",
    desc: "Production-ready MERN e-commerce platform with Admin Dashboard, JWT auth, role-based access control, and a category-based recommendation engine.",
    tags: ["React 19", "Node.js", "Express", "MongoDB"],
    link: "https://frontend-liart-phi-53.vercel.app",
    git: "https://github.com/Ayushsoni9125/Shop-Now",
    featured: true,
    bg: "/project_bg_ecommerce.png",
  },
  {
    title: "AI Resume Builder",
    desc: "Full-stack platform featuring ATS scoring, AI-generated cover letters, resume parsing, multi-template PDF/Word export powered by Gemini AI.",
    tags: ["React 19", "Node.js", "MongoDB", "Gemini AI"],
    link: "https://ats-checker-resume-builder.vercel.app",
    git: "https://github.com/Ayushsoni9125/resume_builder",
    featured: false,
    bg: "/project_bg_resume.png",
  },
  {
    title: "Connectify",
    desc: "Real-time chat app with glassmorphic UI, Socket.io WebSocket communication, and secure HttpOnly cookie-based JWT auth across Vercel and Render.",
    tags: ["React 19", "Node.js", "Socket.io", "Tailwind CSS"],
    link: "https://connectify-ayush.vercel.app",
    git: "https://github.com/Ayushsoni9125/Connectify",
    featured: false,
    bg: "/project_bg_connectify.png",
  },
];

const GitHubIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
  </svg>
);

export default function Projects() {
  return (
    <section id="projects" className="py-24 sm:py-32">
      <div className="section-container">
        {/* Header */}
        <div className="flex items-end justify-between flex-wrap gap-4">
          <div>
            <h2 className="section-heading">Projects</h2>
            <span className="accent-bar" />
          </div>
          <a
            href="https://github.com/Ayushsoni9125"
            target="_blank"
            rel="noreferrer"
            id="projects-view-all"
            className="text-sm font-bold pb-0.5 transition-colors duration-200"
            style={{
              color: '#3b9eff',
              borderBottom: '1px solid rgba(59,158,255,0.3)',
            }}
            onMouseOver={e => {
              e.currentTarget.style.borderBottomColor = '#3b9eff';
            }}
            onMouseOut={e => {
              e.currentTarget.style.borderBottomColor = 'rgba(59,158,255,0.3)';
            }}
          >
            View All on GitHub →
          </a>
        </div>

        {/* Cards grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {PROJECTS.map((project) => (
            <div key={project.title} className="project-card group overflow-hidden">
              {/* Background Image */}
              <div
                className="absolute inset-0 bg-cover bg-center opacity-30 group-hover:opacity-45 transition-all duration-700 scale-100 group-hover:scale-110 pointer-events-none"
                style={{ backgroundImage: `url(${project.bg})` }}
              />
              {/* Dark Overlay */}
              <div
                className="absolute inset-0 bg-gradient-to-t from-[#07101e] via-[#07101e]/85 to-[#07101e]/60 transition-all duration-500 pointer-events-none"
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
                      <span
                        className="text-[9px] font-black uppercase tracking-widest px-2 py-0.5 rounded"
                        style={{
                          background: 'rgba(59,158,255,0.15)',
                          color: '#3b9eff',
                        }}
                      >
                        Featured
                      </span>
                    )}
                  </div>
                  <a
                    href={project.git}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`${project.title} GitHub`}
                    className="transition-colors duration-200 ml-2 shrink-0"
                    style={{ color: 'rgba(232,238,255,0.25)' }}
                    onMouseOver={e => e.currentTarget.style.color = 'rgba(232,238,255,0.8)'}
                    onMouseOut={e => e.currentTarget.style.color = 'rgba(232,238,255,0.25)'}
                  >
                    <GitHubIcon />
                  </a>
                </div>

                {/* Description */}
                <p
                  className="text-sm leading-relaxed mb-5 flex-1"
                  style={{ color: 'rgba(232,238,255,0.45)' }}
                >
                  {project.desc}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-5">
                  {project.tags.map(tag => (
                    <span key={tag} className="tag">{tag}</span>
                  ))}
                </div>

                {/* Live link */}
                <a
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1 text-sm font-bold transition-all duration-200"
                  style={{ color: '#3b9eff' }}
                >
                  Live Demo <ArrowUpRight size={15} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
