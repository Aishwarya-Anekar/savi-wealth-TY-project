import React, { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface FadeInSectionProps {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  direction?: 'up' | 'down' | 'left' | 'right';
  className?: string;
}

const FadeInSection: React.FC<FadeInSectionProps> = ({
  children,
  delay = 0,
  duration = 0.6,
  direction = 'up',
  className = '',
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const node = ref.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.1,
        rootMargin: '50px',
      }
    );

    if (node) {
      observer.observe(node);
    }

    return () => {
      if (node) {
        observer.unobserve(node);
      }
    };
  }, []);

  const getInitialPosition = () => {
    switch (direction) {
      case 'up':
        return { y: 30, x: 0 };
      case 'down':
        return { y: -30, x: 0 };
      case 'left':
        return { y: 0, x: 30 };
      case 'right':
        return { y: 0, x: -30 };
      default:
        return { y: 30, x: 0 };
    }
  };

  const initialPosition = getInitialPosition();

  return (
    <div ref={ref} className={className}>
      <motion.div
        initial={{ 
          opacity: 0, 
          ...initialPosition 
        }}
        animate={isVisible ? { 
          opacity: 1, 
          y: 0, 
          x: 0 
        } : {}}
        transition={{ 
          duration, 
          delay,
          ease: "easeOut"
        }}
      >
        {children}
      </motion.div>
    </div>
  );
};

export default FadeInSection;

