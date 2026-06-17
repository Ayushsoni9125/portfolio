import profileImg from "../assets/ayush.png";

const SKILLS = [
  "React 19", "Node.js", "Express.js", "MongoDB", "PostgreSQL",
  "Tailwind CSS", "JWT Auth", "REST APIs", "Socket.io", "Gemini AI",
  "Git/GitHub", "Vercel / Render",
];

export default function About() {
  return (
    <section id="about" className="py-24 sm:py-32">
      <div className="section-container">
        <h2 className="section-heading">About</h2>
        <span className="accent-bar" />

        <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">
          {/* Text */}
          <div>
            <p className="text-lg leading-relaxed mb-5" style={{ color: 'rgba(232,238,255,0.6)' }}>
              I'm a{' '}
              <span style={{ color: '#e8eeff', fontWeight: 600 }}>
                Full-Stack MERN Developer
              </span>{' '}
              with a passion for architecting secure, scalable web applications. I specialize
              in building robust backend systems and crafting cinematic frontend experiences.
            </p>
            <p className="text-lg leading-relaxed mb-10" style={{ color: 'rgba(232,238,255,0.6)' }}>
              I prioritize data integrity and system reliability — ensuring every line of code
              serves a specific purpose in the production environment. Currently pursuing
              B.Tech in Information Technology at{' '}
              <span style={{ color: '#e8eeff', fontWeight: 600 }}>KIET Group of Institutions</span>.
            </p>

            {/* Skills */}
            <div className="flex flex-wrap gap-2 mb-10">
              {SKILLS.map(skill => (
                <span key={skill} className="skill-tag">{skill}</span>
              ))}
            </div>

            {/* CTA */}
            <a
              href="/resume-template.html"
              target="_blank"
              rel="noreferrer"
              id="about-resume-btn"
              className="btn-primary"
            >
              View Resume
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>

          {/* Photo */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative w-64 h-72 sm:w-72 sm:h-80 group">
              {/* Offset accent border */}
              <div
                className="absolute inset-0 rounded-2xl translate-x-1.5 translate-y-1.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:translate-y-0.5"
                style={{ border: '2px solid rgba(59,158,255,0.2)' }}
              />
              {/* Image */}
              <div
                className="absolute inset-0 -translate-x-1.5 -translate-y-1.5 rounded-2xl overflow-hidden transition-transform duration-300 group-hover:-translate-x-0.5 group-hover:-translate-y-0.5"
                style={{ border: '1px solid rgba(232,238,255,0.08)' }}
              >
                <img
                  src={profileImg}
                  alt="Ayush Soni"
                  className="w-full h-full object-cover transition-all duration-700 filter grayscale hover:grayscale-0 scale-105 hover:scale-100"
                />
                {/* Gradient overlay */}
                <div
                  className="absolute inset-0"
                  style={{
                    background: 'linear-gradient(to top, rgba(7,16,30,0.6) 0%, transparent 60%)',
                  }}
                />
                {/* Label */}
                <div className="absolute bottom-4 left-4">
                  <p
                    className="text-[10px] font-bold uppercase tracking-widest mb-0.5"
                    style={{ color: '#3b9eff' }}
                  >
                    Full-Stack Engineer
                  </p>
                  <p className="text-sm font-bold text-white">Ayush Soni</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
