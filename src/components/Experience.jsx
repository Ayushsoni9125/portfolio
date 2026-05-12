export default function Experience() {
  const STRENGTHS = [
    {
      title: "System Architecture",
      desc: "Designing secure, high-concurrency MERN ecosystems with modular backend structures."
    },
    {
      title: "API Engineering",
      desc: "Architecting high-performance RESTful interfaces with strict security protocols and validation."
    }
  ];

  return (
    <section id="experience" className="py-16 sm:py-24 text-center">
      <h2 className="section-title mb-12 sm:mb-16">Strategic <span className="gradient-text">Impact</span></h2>

      <div className="grid sm:grid-cols-2 gap-6 sm:gap-8 max-w-5xl mx-auto">
        {STRENGTHS.map((item, i) => (
          <div key={item.title} className="bento-card group hover:scale-[1.02]">
            <div className="text-sky-500 font-bold text-[10px] tracking-[0.4em] uppercase mb-4 sm:mb-6">
              Expertise 0{i + 1}
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3 sm:mb-4 uppercase italic">
              {item.title}
            </h3>
            <p className="text-zinc-500 leading-relaxed max-w-sm mx-auto text-sm sm:text-base">
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
