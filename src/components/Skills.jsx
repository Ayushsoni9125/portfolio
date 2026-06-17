const SKILL_GROUPS = [
  {
    title: "Core Stack",
    skills: ["React.js", "Node.js", "Express.js", "MERN Architecture"],
  },
  {
    title: "Databases",
    skills: ["MongoDB (Mongoose)", "PostgreSQL", "Data Integrity", "Transactions"],
  },
  {
    title: "DevOps / Tools",
    skills: ["Git / GitHub", "Postman", "Vercel / Render", "Docker"],
  },
  {
    title: "Security",
    skills: ["JWT Auth", "bcryptjs", "RBAC", "REST API Security"],
  },
];

const CERTIFICATIONS = [
  { name: "AWS Certified AI Practitioner", code: "AIF-C01" },
  { name: "AWS Certified Cloud Practitioner", code: "CLF-C02" },
  { name: "HackWave 2.0", code: "Top 10 / 100+ Teams" },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 sm:py-32">
      <div className="section-container">
        <h2 className="section-heading">Skills</h2>
        <span className="accent-bar" />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-16">
          {SKILL_GROUPS.map((group) => (
            <div key={group.title}>
              <h3
                className="text-[10px] font-black uppercase tracking-[0.25em] mb-5 pb-3"
                style={{
                  color: '#3b9eff',
                  borderBottom: '1px solid rgba(232,238,255,0.05)',
                }}
              >
                {group.title}
              </h3>
              <div className="space-y-3">
                {group.skills.map(skill => (
                  <div key={skill} className="flex items-center gap-3 group/item cursor-default">
                    <div
                      className="w-1 h-1 rounded-full shrink-0 transition-all duration-200 group-hover/item:scale-150"
                      style={{ background: 'rgba(59,158,255,0.4)' }}
                    />
                    <span
                      className="text-sm font-medium transition-colors duration-200 group-hover/item:text-white"
                      style={{ color: 'rgba(232,238,255,0.55)' }}
                    >
                      {skill}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Certifications & Achievements */}
        <div
          className="rounded-2xl p-6 sm:p-8"
          style={{ border: '1px solid rgba(232,238,255,0.06)', background: 'rgba(255,255,255,0.02)' }}
        >
          <h3
            className="text-[10px] font-black uppercase tracking-[0.25em] mb-6"
            style={{ color: '#3b9eff' }}
          >
            Certifications & Achievements
          </h3>
          <div className="flex flex-col sm:flex-row gap-6 sm:gap-10">
            {CERTIFICATIONS.map((cert) => (
              <div key={cert.name} className="flex items-start gap-3 group">
                <div
                  className="w-6 h-6 rounded-full flex items-center justify-center shrink-0 mt-0.5"
                  style={{ background: 'rgba(59,158,255,0.1)', border: '1px solid rgba(59,158,255,0.2)' }}
                >
                  <svg className="w-3 h-3" style={{ color: '#3b9eff' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-semibold text-white">{cert.name}</p>
                  <p className="text-xs mt-0.5" style={{ color: 'rgba(232,238,255,0.35)' }}>{cert.code}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
