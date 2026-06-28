import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { GitHubCalendar } from 'react-github-calendar';
import { useState, useEffect } from 'react';
import profileImg from "../assets/ayush.png";
import AnimatedSection, { fadeUp } from './ui/AnimatedSection';

export default function About() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.15 });
  const [calendarConfig, setCalendarConfig] = useState({
    blockSize: 12,
    blockMargin: 4,
    fontSize: 12
  });

  // Dynamically adjust block size based on window width for perfect mobile responsiveness
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 480) {
        // Small mobile screens
        setCalendarConfig({ blockSize: 5.5, blockMargin: 2, fontSize: 9 });
      } else if (width < 768) {
        // Tablets
        setCalendarConfig({ blockSize: 8, blockMargin: 3, fontSize: 10 });
      } else {
        // Desktop
        setCalendarConfig({ blockSize: 12, blockMargin: 4, fontSize: 12 });
      }
    };

    handleResize(); // Call initially
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Custom theme matching Ayush's orange accent color (#FF611D)
  const orangeTheme = {
    light: ['#2b2b2b', '#6b2a0c', '#ab4213', '#eb5b1b', '#FF611D'],
    dark: ['#222222', '#4d1e0a', '#803110', '#b34415', '#FF611D'],
  };

  return (
    <section id="about" className="py-24 sm:py-32" style={{ background: '#333333' }}>
      <div className="section-container">
        
        {/* Main 2-column Bio Area */}
        <div ref={ref} className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16 mb-20">
          
          {/* Left: Bio Text */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="flex-1 text-left"
          >
            <h2 
              className="font-bold mb-6 text-white" 
              style={{ fontSize: 'clamp(2.5rem, 6vw, 4rem)', fontFamily: "'Fira Code', monospace" }}
            >
              Hi, I'm Ayush!
            </h2>

            <p 
              className="text-lg sm:text-xl font-medium leading-relaxed mb-6"
              style={{ color: 'rgba(214, 210, 189, 0.9)' }}
            >
              An emerging <span style={{ color: '#FF611D' }}>full-stack developer</span> with a passion to <span style={{ color: '#FF611D' }}>learn</span> and a <span style={{ color: '#FF611D' }}>can-do attitude</span>.
            </p>

            <div className="space-y-4 text-sm sm:text-base leading-relaxed font-mono" style={{ color: 'rgba(214, 210, 189, 0.65)' }}>
              <p>
                I am driven by <span style={{ color: '#FF611D' }}>curiosity</span> and a commitment to building impactful software solutions. I thrive on tackling complex problems and finding efficient ways to address them, continuously seeking opportunities to improve my skills.
              </p>
              <p>
                During my time at <span style={{ color: '#FF611D' }}>KIET Group of Institutions</span>, I have had hands-on experience in various technical areas. I enjoy working on diverse projects that require both <span style={{ color: '#FF611D' }}>creativity</span> and <span style={{ color: '#FF611D' }}>technical expertise</span>.
              </p>
              <p>
                I am always eager to embrace new challenges and am dedicated to creating meaningful digital experiences that have a positive impact. My passion for learning and growth fuels my drive to excel in the software engineering field.
              </p>
            </div>
          </motion.div>

          {/* Right: Circular Profile Picture */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
            className="flex-shrink-0 relative"
          >
            <div className="w-64 h-64 sm:w-80 sm:h-80 rounded-full overflow-hidden border-2 border-dashed border-orange-500/30 p-2">
              <img 
                src={profileImg} 
                alt="Ayush Soni" 
                className="w-full h-full rounded-full object-cover"
                style={{
                  filter: 'grayscale(10%) contrast(105%)',
                  background: '#222'
                }}
              />
            </div>
            {/* Subtle glow behind image */}
            <div className="absolute inset-0 rounded-full bg-orange-500/5 blur-xl -z-10" />
          </motion.div>

        </div>

        {/* GitHub Contributions Section */}
        <AnimatedSection>
          <div className="pt-8" style={{ borderTop: '1px solid rgba(214, 210, 189, 0.08)' }}>
            <h3 
              className="text-center text-base sm:text-lg font-bold mb-6"
              style={{ color: '#D6D2BD', fontFamily: "'Fira Code', monospace" }}
            >
              My GitHub contributions
            </h3>
            
            {/* Live Interactive GitHub Calendar */}
            <div className="flex justify-center py-4">
              <div 
                className="w-full max-w-4xl overflow-hidden p-4 sm:p-6 rounded-2xl"
                style={{ 
                  background: '#1a1a1a', 
                  border: '1px solid rgba(214, 210, 189, 0.08)',
                }}
              >
                <div className="w-full flex justify-center overflow-x-auto" style={{ scrollbarWidth: 'none' }}>
                  <GitHubCalendar 
                    username="Ayushsoni9125" 
                    theme={orangeTheme}
                    colorScheme="dark"
                    fontSize={calendarConfig.fontSize}
                    blockSize={calendarConfig.blockSize}
                    blockMargin={calendarConfig.blockMargin}
                    showTotalCount={true}
                    showColorLegend={true}
                  />
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>

      </div>
    </section>
  );
}
