import { ArrowUpRight } from "lucide-react";

const PROJECTS = [
  {
    title: "ShopNow",
    desc: "Production-ready MERN e-commerce with Admin Dashboard, JWT auth, and a recommendation engine.",
    tags: ["React 19", "Node.js", "Express", "MongoDB"],
    link: "https://frontend-liart-phi-53.vercel.app",
    git: "https://github.com/Ayushsoni9125/Shop-Now",
    bg: "/project_bg_ecommerce.png",
  },
  {
    title: "Banking Ledger",
    desc: "Secure RESTful API for banking with double-entry ledger transactions and idempotent operations.",
    tags: ["Node.js", "MongoDB Transactions", "JWT"],
    link: "#",
    git: "https://github.com/Ayushsoni9125",
    bg: "/project_bg_banking.png",
  },
  {
    title: "Connectify",
    desc: "A modern, real-time chat application with a sleek glassmorphic UI, WebSocket communication, and secure cookie-based auth.",
    tags: ["React 19", "Node.js", "Socket.io", "Tailwind CSS"],
    link: "https://connectify-ayush.vercel.app",
    git: "https://github.com/Ayushsoni9125/Connectify",
    bg: "/project_bg_connectify.png",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-16 sm:py-24">
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-end gap-4 sm:gap-8 mb-10 sm:mb-16">
        <div>
          <h2 className="section-title">
            Selected <span className="gradient-text">Works</span>
          </h2>
          <p className="text-zinc-500 font-bold uppercase tracking-widest text-xs">
            A collection of engineering prototypes
          </p>
        </div>
        <a
          href="https://github.com/Ayushsoni9125"
          target="_blank"
          className="text-sm font-bold text-sky-400 border-b border-sky-500/30 pb-1 hover:border-sky-500 transition-all self-start sm:self-auto"
        >
          View All Projects
        </a>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {PROJECTS.map((project, i) => (
          <div
            key={project.title}
            className="bento-card group h-full flex flex-col justify-between border-white/5 hover:border-sky-500/50 transition-all duration-700 overflow-hidden"
          >
            {/* Background image with parallax zoom on hover */}
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-in-out scale-100 group-hover:scale-110"
              style={{ backgroundImage: `url(${project.bg})` }}
            />

            {/* Dark gradient overlay so text stays readable */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#080d18] via-[#080d18]/85 to-[#080d18]/60 group-hover:via-[#080d18]/80 transition-all duration-700" />

            {/* Decorative top-right glow */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-sky-600/5 blur-3xl group-hover:bg-sky-600/20 transition-all duration-700" />

            {/* Card content — sits above overlays */}
            <div className="relative z-10 flex flex-col h-full justify-between">
              <div>
                <div className="flex justify-between items-center mb-8">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-white/10 border border-white/10 backdrop-blur-sm flex items-center justify-center text-xs font-bold group-hover:text-sky-400 transition-colors">
                      0{i + 1}
                    </div>
                    {i === 0 && (
                      <span className="text-[8px] font-black uppercase tracking-widest px-2 py-1 bg-sky-500/20 text-sky-400 rounded-md backdrop-blur-sm">
                        Featured
                      </span>
                    )}
                  </div>
                  <a
                    href={project.git}
                    target="_blank"
                    rel="noreferrer"
                    className="text-zinc-400 hover:text-white transition-all transform hover:scale-110"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                    </svg>
                  </a>
                </div>

                <h3 className="text-3xl font-bold mb-4 tracking-tight group-hover:text-white transition-colors drop-shadow-lg">
                  {project.title}
                </h3>
                <p className="text-zinc-400 mb-8 leading-relaxed text-sm drop-shadow">
                  {project.desc}
                </p>
              </div>

              <div>
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[9px] font-bold uppercase tracking-widest text-zinc-400 border border-white/10 bg-black/30 backdrop-blur-sm px-3 py-1.5 rounded-lg group-hover:border-sky-500/30 group-hover:text-zinc-200 transition-all"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-xs font-bold text-sky-400 group-hover:gap-4 transition-all"
                >
                  Launch Case Study <ArrowUpRight size={14} />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
