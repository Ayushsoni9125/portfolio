import { motion } from 'framer-motion';

export default function Footer() {
  const year = new Date().getFullYear();

  const links = [
    { name: 'LinkedIn', href: 'https://linkedin.com/in/ayushsoni2004' },
    { name: 'GitHub', href: 'https://github.com/Ayushsoni9125' },
    { name: 'Resume', href: '/resume.pdf' },
    { name: 'Email', href: 'mailto:soniayush9125@gmail.com?subject=Hello Ayush! I am a visitor from your portfolio' },
  ];

  return (
    <footer
      className="py-10 sm:py-12"
      style={{ borderTop: '1px solid rgba(214,210,189,0.08)' }}
    >
      <div className="section-container">
        {/* Divider */}
        <hr style={{ borderColor: 'rgba(214,210,189,0.08)', marginBottom: '2rem' }} />

        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
          {/* Left: Brand + tagline */}
          <div>
            <a
              href="#home"
              className="font-bold text-base tracking-tight mb-1 inline-block"
              style={{ color: '#D6D2BD' }}
            >
              Ayush Soni
            </a>
            <p className="text-sm" style={{ color: 'rgba(214,210,189,0.45)' }}>
              Passionate learner. Innovative developer.
            </p>
          </div>

          {/* Right: Links with ↗ arrow */}
          <div className="flex flex-col gap-2 z-10">
            {links.map(link => (
              <div key={link.name} className="flex justify-between items-center group">
                <a
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 text-sm transition-colors duration-200 group-hover:text-orange-400"
                  style={{ color: 'rgba(214,210,189,0.6)' }}
                >
                  {link.name}
                </a>
                <motion.svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#FF611D"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="ml-2 transition-transform duration-300"
                  initial={false}
                  whileHover={{ x: 2, y: -2 }}
                  style={{ color: '#FF611D' }}
                >
                  <path d="M7 7h10v10" />
                  <path d="M7 17 17 7" />
                </motion.svg>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom copyright */}
        <p
          className="text-[10px] font-bold uppercase tracking-widest text-center mt-10"
          style={{ color: 'rgba(214,210,189,0.18)' }}
        >
          Handcrafted with precision © {year} Ayush Soni
        </p>
      </div>
    </footer>
  );
}
