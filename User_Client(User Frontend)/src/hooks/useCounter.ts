import { useState, useEffect } from 'react';

export const useCounter = (target: number, duration: number = 2000, isVisible: boolean = true) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isVisible) return;

    const increment = target / (duration / 16);
    let current = 0;
    
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [target, duration, isVisible]);

  return count;
};