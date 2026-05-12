export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-10 sm:py-12 border-t border-white/5 bg-[#030014]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row justify-between items-center gap-8 sm:gap-12 text-center sm:text-left">
        <div>
          <div className="text-2xl sm:text-3xl font-black text-white mb-3 tracking-tighter uppercase italic">
            Ayush <span className="text-sky-500">Soni.</span>
          </div>
          <div className="flex items-center justify-center sm:justify-start gap-3">
            <div className="w-2 h-2 rounded-full bg-cyan-500 animate-pulse" />
            <p className="text-zinc-500 text-[10px] font-bold tracking-[0.3em] uppercase">Open for new collaborations</p>
          </div>
        </div>

        <div className="flex flex-col items-center sm:items-end gap-4 sm:gap-6">
          <div className="flex gap-8 sm:gap-10">
            <a href="https://github.com/Ayushsoni9125" target="_blank" rel="noreferrer"
              className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-600 hover:text-sky-400 transition-colors">
              GitHub
            </a>
            <a href="https://linkedin.com/in/ayushsoni2005" target="_blank" rel="noreferrer"
              className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-600 hover:text-sky-400 transition-colors">
              LinkedIn
            </a>
          </div>
          <p className="text-[10px] font-bold text-zinc-800 uppercase tracking-widest">
            Handcrafted with precision © {currentYear}
          </p>
        </div>
      </div>
    </footer>
  );
}
