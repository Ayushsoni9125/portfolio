import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import emailjs from '@emailjs/browser';
import AnimatedSection, { fadeUp, slideLeft, slideRight } from './ui/AnimatedSection';
import Card3D from './ui/Card3D';

const SOCIALS = [
  {
    name: "GitHub",
    href: "https://github.com/Ayushsoni9125",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
      </svg>
    ),
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com/in/ayushsoni2004",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
      </svg>
    ),
  },
];

export default function Contact() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID?.trim();
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID?.trim();
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY?.trim();

    if (!serviceId || !templateId || !publicKey) {
      setLoading(false);
      alert('Email config missing.');
      return;
    }

    emailjs.send(serviceId, templateId, {
      from_name: formData.name,
      from_email: formData.email,
      message: formData.message,
    }, publicKey)
      .then(() => {
        setLoading(false);
        setSuccess(true);
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setSuccess(false), 5000);
      }, () => {
        setLoading(false);
        alert('Failed to send message. Try emailing directly.');
      });
  };

  return (
    <section id="contact" className="py-24 sm:py-32">
      <div className="section-container">
        <AnimatedSection variants={fadeUp}>
          <h2 className="section-heading">Contact</h2>
          <span className="accent-bar" />
        </AnimatedSection>

        <div ref={ref} className="grid lg:grid-cols-2 gap-14 lg:gap-20">
          {/* Left: info */}
          <motion.div
            variants={slideLeft}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
          >
            <p className="text-lg leading-relaxed mb-8" style={{ color: 'rgba(232,238,255,0.55)' }}>
              I'm currently open to freelance work and full-time positions.
              Have a project in mind or want to collaborate? Let's build something great together.
            </p>

            {/* Email */}
            <motion.a
              href="mailto:soniayush9125@gmail.com"
              id="contact-email-link"
              className="group flex items-center gap-4 mb-8 transition-all duration-200"
              whileHover={{ x: 6 }}
            >
              <div
                className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0 transition-all duration-200 group-hover:scale-110"
                style={{
                  background: 'rgba(59,158,255,0.08)',
                  border: '1px solid rgba(59,158,255,0.15)',
                  color: '#3b9eff',
                }}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <span
                className="font-semibold text-base transition-colors duration-200 break-all group-hover:text-blue-400"
                style={{ color: '#e8eeff' }}
              >
                soniayush9125@gmail.com
              </span>
            </motion.a>

            {/* Social links */}
            <div className="flex gap-3">
              {SOCIALS.map(social => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={social.name}
                  className="w-11 h-11 rounded-xl flex items-center justify-center transition-all duration-200"
                  style={{
                    background: 'rgba(255,255,255,0.03)',
                    border: '1px solid rgba(232,238,255,0.07)',
                    color: 'rgba(232,238,255,0.4)',
                  }}
                  whileHover={{
                    scale: 1.1,
                    borderColor: 'rgba(59,158,255,0.3)',
                    color: '#3b9eff',
                    backgroundColor: 'rgba(59,158,255,0.06)',
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Right: form (using 3D card wrapper) */}
          <motion.div
            variants={slideRight}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
          >
            <Card3D className="glass-panel p-8" intensity={5} glareOpacity={0.05}>
              <form className="space-y-4" onSubmit={handleSubmit}>
                <div className="grid sm:grid-cols-2 gap-4">
                  <input
                    id="contact-name"
                    type="text"
                    placeholder="Name"
                    required
                    value={formData.name}
                    className="form-input"
                    onChange={e => setFormData({ ...formData, name: e.target.value })}
                  />
                  <input
                    id="contact-email"
                    type="email"
                    placeholder="Email"
                    required
                    value={formData.email}
                    className="form-input"
                    onChange={e => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>
                <textarea
                  id="contact-message"
                  rows="5"
                  placeholder="Your message..."
                  required
                  value={formData.message}
                  className="form-input resize-none"
                  onChange={e => setFormData({ ...formData, message: e.target.value })}
                />
                <motion.button
                  id="contact-submit"
                  type="submit"
                  disabled={loading}
                  className="btn-primary w-full justify-center disabled:opacity-60 disabled:cursor-not-allowed"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {loading ? 'Sending...' : 'Send Message'}
                </motion.button>
                {success && (
                  <motion.p
                    className="text-center text-sm font-bold mt-2"
                    style={{ color: '#3b9eff' }}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    ✓ Message sent successfully!
                  </motion.p>
                )}
              </form>
            </Card3D>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
