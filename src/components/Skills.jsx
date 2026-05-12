const SKILL_GROUPS = [
  {
    title: "Core Stack",
    skills: ["React.js", "Node.js", "Express.js", "MERN Architecture"]
  },
  {
    title: "Databases",
    skills: ["MongoDB (Mongoose)", "PostgreSQL", "Data Integrity", "Transactions"]
  },
  {
    title: "DevOps/Tools",
    skills: ["Git/GitHub", "Postman", "Vercel / Render", "Docker"]
  },
  {
    title: "Security",
    skills: ["JWT Auth", "bcryptjs", "RBAC", "REST API Security"]
  }
];

export default function Skills() {
  return (
    <section id="skills" className="py-16 sm:py-24">
      <h2 className="section-title text-center mb-12 sm:mb-16">
        Technical <span className="gradient-text">Arsenal</span>
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
        {SKILL_GROUPS.map((group) => (
          <div key={group.title} className="bento-card group">
            <h3 className="text-sky-400 font-black uppercase tracking-[0.3em] text-[10px] mb-6 sm:mb-8 border-b border-white/5 pb-4">
              {group.title}
            </h3>
            <div className="space-y-3 sm:space-y-4">
              {group.skills.map(skill => (
                <div key={skill} className="flex items-center gap-3 group/item">
                  <div className="w-1.5 h-1.5 shrink-0 rounded-full bg-sky-600/30 group-hover/item:bg-sky-500 transition-all" />
                  <span className="text-zinc-400 group-hover/item:text-white transition-colors font-medium text-sm sm:text-base">
                    {skill}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
