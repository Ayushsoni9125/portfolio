import { useRef, useState } from 'react';
import { motion } from 'framer-motion';

/**
 * Card3D — a shadcn-style card with realistic 3D tilt on hover
 * and a moving shine/spotlight effect.
 */
export default function Card3D({ children, className = '', intensity = 12, glareOpacity = 0.12 }) {
  const cardRef = useRef(null);
  const [transform, setTransform] = useState({ rotX: 0, rotY: 0, glareX: 50, glareY: 50 });
  const [hovered, setHovered] = useState(false);

  const handleMouseMove = (e) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const cx = rect.width / 2;
    const cy = rect.height / 2;
    const rotX = ((y - cy) / cy) * -intensity;
    const rotY = ((x - cx) / cx) * intensity;
    const glareX = (x / rect.width) * 100;
    const glareY = (y / rect.height) * 100;
    setTransform({ rotX, rotY, glareX, glareY });
  };

  const handleMouseEnter = () => setHovered(true);
  const handleMouseLeave = () => {
    setHovered(false);
    setTransform({ rotX: 0, rotY: 0, glareX: 50, glareY: 50 });
  };

  return (
    <motion.div
      ref={cardRef}
      className={`relative overflow-hidden ${className}`}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      animate={{
        rotateX: transform.rotX,
        rotateY: transform.rotY,
        scale: hovered ? 1.025 : 1,
      }}
      transition={{ type: 'spring', stiffness: 300, damping: 30, mass: 0.5 }}
      style={{ transformStyle: 'preserve-3d', willChange: 'transform' }}
    >
      {/* Glare overlay */}
      <div
        className="absolute inset-0 pointer-events-none z-20 transition-opacity duration-300"
        style={{
          opacity: hovered ? 1 : 0,
          background: `radial-gradient(circle at ${transform.glareX}% ${transform.glareY}%, rgba(255,255,255,${glareOpacity}) 0%, transparent 60%)`,
          borderRadius: 'inherit',
        }}
      />
      {children}
    </motion.div>
  );
}
