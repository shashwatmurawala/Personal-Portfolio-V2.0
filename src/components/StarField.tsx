import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface Star {
  x: number;
  y: number;
  size: 'small' | 'medium' | 'large';
  delay: number;
}

const StarField = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [stars, setStars] = useState<Star[]>([]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Normalize mouse position to -1 to 1 range
      const x = (e.clientX / window.innerWidth) * 2 - 1;
      const y = (e.clientY / window.innerHeight) * 2 - 1;
      setMousePosition({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    const generateStars = () => {
      const newStars: Star[] = [];
      const createStarGroup = (count: number, size: 'small' | 'medium' | 'large') => {
        for (let i = 0; i < count; i++) {
          newStars.push({
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
            size,
            delay: Math.random() * 3,
          });
        }
      };

      createStarGroup(100, 'small');
      createStarGroup(50, 'medium');
      createStarGroup(20, 'large');
      setStars(newStars);
    };

    generateStars();
    window.addEventListener('resize', generateStars);
    return () => window.removeEventListener('resize', generateStars);
  }, []);

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: -1,
        overflow: 'hidden',
        background: 'linear-gradient(to bottom, #0a0e27, #1a1f3a, #0a0e27)',
      }}
    >
      {stars.map((star, index) => {
        // Calculate parallax offset based on mouse position and star size
        const parallaxStrength = star.size === 'large' ? 30 : star.size === 'medium' ? 20 : 10;
        const offsetX = mousePosition.x * parallaxStrength;
        const offsetY = mousePosition.y * parallaxStrength;

        return (
          <motion.div
            key={index}
            initial={{
              x: star.x,
              y: star.y,
              opacity: 0,
            }}
            animate={{
              x: star.x + offsetX,
              y: star.y + offsetY,
              opacity: [0.3, 1, 0.3],
              scale: star.size === 'large' ? [1, 1.2, 1] : [1, 1.1, 1],
            }}
            transition={{
              x: { type: 'spring', stiffness: 50, damping: 20 },
              y: { type: 'spring', stiffness: 50, damping: 20 },
              opacity: {
                duration: star.size === 'large' ? 3 : star.size === 'medium' ? 2 : 1.5,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: star.delay,
              },
              scale: {
                duration: 2,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: star.delay,
              },
            }}
            style={{
              position: 'absolute',
              width: star.size === 'large' ? '3px' : star.size === 'medium' ? '2px' : '1px',
              height: star.size === 'large' ? '3px' : star.size === 'medium' ? '2px' : '1px',
              borderRadius: '50%',
              background:
                star.size === 'large'
                  ? 'radial-gradient(circle, rgba(139, 92, 246, 1) 0%, rgba(167, 139, 250, 0.8) 50%, transparent 100%)'
                  : star.size === 'medium'
                    ? 'radial-gradient(circle, rgba(124, 58, 237, 0.9) 0%, rgba(167, 139, 250, 0.6) 70%, transparent 100%)'
                    : '#a78bfa',
              boxShadow:
                star.size === 'large'
                  ? '0 0 10px rgba(167, 139, 250, 0.8), 0 0 20px rgba(139, 92, 246, 0.5)'
                  : star.size === 'medium'
                    ? '0 0 6px rgba(167, 139, 250, 0.6)'
                    : 'none',
            }}
          />
        );
      })}
    </div>
  );
};

export default StarField;
