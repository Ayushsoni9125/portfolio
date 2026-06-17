const EXPERTISE = [
  {
    number: "01",
    title: "System Architecture",
    desc: "Designing secure, high-concurrency MERN ecosystems with modular, maintainable backend structures that scale cleanly in production.",
  },
  {
    number: "02",
    title: "API Engineering",
    desc: "Architecting high-performance RESTful interfaces with strict validation, JWT auth, role-based access control, and security best practices.",
  },
  {
    number: "03",
    title: "Frontend Craft",
    desc: "Building responsive, animated user interfaces with React 19, Tailwind CSS, and a focus on cinematic UI patterns and smooth interactions.",
  },
  {
    number: "04",
    title: "Cloud Deployment",
    desc: "Deploying and configuring full-stack apps on Vercel and Render, with environment-based secrets management and cross-domain auth flows.",
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 sm:py-32">
      <div className="section-container">
        <h2 className="section-heading">Expertise</h2>
        <span className="accent-bar" />

        <div className="grid sm:grid-cols-2 gap-5">
          {EXPERTISE.map((item) => (
            <div key={item.number} className="expertise-card group">
              <div
                className="text-xs font-black uppercase tracking-[0.25em] mb-4 transition-colors duration-200"
                style={{ color: '#3b9eff' }}
              >
                {item.number}
              </div>
              <h3
                className="text-xl font-bold text-white mb-3 group-hover:text-blue-300 transition-colors duration-200"
              >
                {item.title}
              </h3>
              <p
                className="text-sm leading-relaxed"
                style={{ color: 'rgba(232,238,255,0.5)' }}
              >
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
