export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex flex-col items-center text-center px-4 sm:px-6 relative pt-24 pb-12 sm:pt-32">
      <div className="my-auto flex flex-col items-center w-full max-w-7xl mx-auto">
        <div className="tag mb-6 sm:mb-8 animate-float">Full-Stack Engineer</div>

        <h1 className="text-6xl sm:text-7xl md:text-[9rem] lg:text-[10rem] font-black tracking-tighter leading-[0.85] mb-8 sm:mb-12 text-center uppercase">
          AYUSH<br />
          <span className="gradient-text pr-2 sm:pr-4">SONI</span>
        </h1>

        <p className="text-zinc-400 text-base sm:text-lg md:text-xl max-w-xl sm:max-w-2xl mb-10 sm:mb-12 leading-relaxed text-center px-2">
          Building high-performance <span className="text-white">MERN ecosystems</span> with a focus on security, scalability, and cinematic user experiences.
        </p>

        {/* Professional Pillars */}
        <div className="flex flex-wrap sm:flex-nowrap gap-6 sm:gap-12 mb-12 sm:mb-16 border-y border-white/5 py-6 sm:py-8 w-full justify-center">
          <div className="text-center">
            <div className="text-xl sm:text-2xl font-black text-white tracking-tight">Full-Stack</div>
            <div className="text-[10px] text-sky-500 font-bold uppercase tracking-widest mt-1">Specialization</div>
          </div>
          <div className="hidden sm:block w-px h-12 bg-white/5" />
          <div className="text-center">
            <div className="text-xl sm:text-2xl font-black text-white tracking-tight">API Arch</div>
            <div className="text-[10px] text-sky-500 font-bold uppercase tracking-widest mt-1">Expertise</div>
          </div>
          <div className="hidden sm:block w-px h-12 bg-white/5" />
          <div className="text-center">
            <div className="text-xl sm:text-2xl font-black text-white tracking-tight">UI / UX</div>
            <div className="text-[10px] text-sky-500 font-bold uppercase tracking-widest mt-1">Design Focus</div>
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
          <a href="#projects" className="btn-primary">Explore Works</a>
          <a href="#contact" className="btn-outline">Contact Me</a>
        </div>
      </div>
    </section>
  );
}
