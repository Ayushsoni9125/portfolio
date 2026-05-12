import { useState } from 'react';
import emailjs from '@emailjs/browser';

export default function Contact() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID?.trim();
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID?.trim();
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY?.trim();

    if (!serviceId || !templateId || !publicKey) {
      setLoading(false);
      alert("Config missing."); return;
    }

    emailjs.send(serviceId, templateId, {
      from_name: formData.name,
      from_email: formData.email,
      message: formData.message,
    }, publicKey)
    .then(() => {
      setLoading(false); setSuccess(true);
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setSuccess(false), 5000);
    }, () => {
      setLoading(false); alert("Failed.");
    });
  };

  return (
    <section id="contact" className="py-16 sm:py-24">
      <div className="bento-card grid lg:grid-cols-2 gap-12 lg:gap-20">
        {/* Left: info */}
        <div>
          <h2 className="section-title">Start a <span className="gradient-text">Project</span></h2>
          <p className="text-zinc-400 text-base sm:text-lg mb-10 sm:mb-12">
            I'm currently available for freelance work and full-time positions.
          </p>

          <div className="space-y-6 sm:space-y-8">
            <a href="mailto:soniayush9125@gmail.com" className="flex items-center gap-4 sm:gap-6 group">
              <div className="w-12 h-12 sm:w-14 sm:h-14 shrink-0 rounded-2xl bg-white/5 border border-white/5 flex items-center justify-center text-sky-500 group-hover:bg-sky-600 group-hover:text-white transition-all">
                <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <span className="text-base sm:text-xl font-bold group-hover:text-sky-400 transition-colors break-all">
                soniayush9125@gmail.com
              </span>
            </a>

            <div className="flex gap-4">
              <a href="https://linkedin.com/in/ayushsoni2005" target="_blank" rel="noreferrer"
                className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-white/5 border border-white/5 flex items-center justify-center text-zinc-500 hover:text-white hover:border-sky-500/40 transition-all">
                <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
              <a href="https://github.com/Ayushsoni9125" target="_blank" rel="noreferrer"
                className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-white/5 border border-white/5 flex items-center justify-center text-zinc-500 hover:text-white hover:border-sky-500/40 transition-all">
                <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Right: form */}
        <div>
          <form className="space-y-5 sm:space-y-6" onSubmit={handleSubmit}>
            <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
              <input
                type="text"
                placeholder="Name"
                value={formData.name}
                className="w-full bg-white/5 border border-white/5 rounded-2xl p-4 sm:p-5 text-white placeholder-zinc-600 focus:outline-none focus:border-sky-500 transition-all"
                onChange={(e) => setFormData({...formData, name: e.target.value})}
              />
              <input
                type="email"
                placeholder="Email"
                value={formData.email}
                className="w-full bg-white/5 border border-white/5 rounded-2xl p-4 sm:p-5 text-white placeholder-zinc-600 focus:outline-none focus:border-sky-500 transition-all"
                onChange={(e) => setFormData({...formData, email: e.target.value})}
              />
            </div>
            <textarea
              rows="5"
              placeholder="Your Message"
              value={formData.message}
              className="w-full bg-white/5 border border-white/5 rounded-2xl p-4 sm:p-5 text-white placeholder-zinc-600 focus:outline-none focus:border-sky-500 transition-all resize-none"
              onChange={(e) => setFormData({...formData, message: e.target.value})}
            />
            <button type="submit" disabled={loading} className="btn-primary w-full justify-center">
              {loading ? 'Sending...' : 'Send Message'}
            </button>
            {success && <p className="text-sky-400 font-bold text-center">Protocol Success! ✓</p>}
          </form>
        </div>
      </div>
    </section>
  );
}
