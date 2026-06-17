export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      className="py-10 sm:py-12"
      style={{ borderTop: '1px solid rgba(232,238,255,0.05)' }}
    >
      <div
        className="section-container flex flex-col sm:flex-row items-center justify-between gap-6"
      >
        {/* Brand + availability */}
        <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
          <a
            href="#home"
            className="text-base font-black tracking-tight text-white hover:text-blue-400 transition-colors duration-200"
          >
            Ayush<span style={{ color: '#3b9eff' }}>.</span>
          </a>
          <div className="flex items-center gap-2">
            <div
              className="w-1.5 h-1.5 rounded-full"
              style={{
                background: '#3b9eff',
                boxShadow: '0 0 6px #3b9eff',
                animation: 'pulse-glow 2s ease-in-out infinite',
              }}
            />
            <span
              className="text-[10px] font-bold uppercase tracking-[0.2em]"
              style={{ color: 'rgba(232,238,255,0.35)' }}
            >
              Open for collaborations
            </span>
          </div>
        </div>

        {/* Links + copyright */}
        <div className="flex flex-col items-center sm:items-end gap-3">
          <div className="flex gap-6">
            {[
              { name: 'GitHub', href: 'https://github.com/Ayushsoni9125' },
              { name: 'LinkedIn', href: 'https://linkedin.com/in/ayushsoni2004' },
            ].map(link => (
              <a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className="text-[10px] font-black uppercase tracking-[0.2em] transition-colors duration-200"
                style={{ color: 'rgba(232,238,255,0.3)' }}
                onMouseOver={e => e.currentTarget.style.color = '#3b9eff'}
                onMouseOut={e => e.currentTarget.style.color = 'rgba(232,238,255,0.3)'}
              >
                {link.name}
              </a>
            ))}
          </div>
          <p
            className="text-[10px] font-bold uppercase tracking-widest"
            style={{ color: 'rgba(232,238,255,0.15)' }}
          >
            Handcrafted with precision © {year}
          </p>
        </div>
      </div>
    </footer>
  );
}
