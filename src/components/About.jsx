export default function About() {
  const SKILLS = [
    "React 19", "Node.js", "Express.js", "MongoDB", "PostgreSQL", "Tailwind CSS", "JWT Auth", "REST APIs"
  ];

  return (
    <section id="about" className="py-16 sm:py-24">
      <div className="bento-card grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
        <div>
          <h2 className="section-title">The <span className="gradient-text">Engineer</span></h2>
          <p className="text-zinc-400 text-base sm:text-lg leading-relaxed mb-6 sm:mb-8">
            I specialize in building secure, scalable RESTful APIs and responsive web applications using the MERN stack.
            My focus is on architecting robust backend systems and cinematic frontend designs.
          </p>
          <p className="text-zinc-400 text-base sm:text-lg leading-relaxed mb-10 sm:mb-12">
            I prioritize data integrity and system reliability, ensuring that every line of code serves a specific purpose in the production environment.
          </p>

          <div className="flex flex-wrap gap-2 mb-10 sm:mb-12">
            {SKILLS.map(skill => (
              <span key={skill} className="tag">{skill}</span>
            ))}
          </div>

          <a href="/resume-template.html" target="_blank" className="btn-primary inline-flex">
            View Resume
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </div>

        {/* Identity graphic — hidden on small screens to save space */}
        <div className="relative group perspective-1000 hidden lg:block">
          <div className="aspect-[4/5] bg-gradient-to-br from-sky-600/10 to-blue-600/5 rounded-[3rem] border border-white/5 flex flex-col items-center justify-center overflow-hidden transition-all duration-700 group-hover:border-sky-500/30 group-hover:shadow-[0_0_50px_rgba(14,165,233,0.1)]">
            <div className="text-[15rem] font-black text-white/[0.03] select-none group-hover:scale-110 group-hover:text-sky-500/[0.05] transition-all duration-1000">SONI</div>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(14,165,233,0.1),transparent_70%)]" />
          </div>
          <div className="absolute inset-0 bg-sky-600/10 blur-[120px] -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
        </div>
      </div>
    </section>
  );
}
