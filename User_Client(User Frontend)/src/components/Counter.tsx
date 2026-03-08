import React from 'react';
import { motion } from 'framer-motion';
import { useCounter } from '../hooks/useCounter';

interface CounterProps {
  target: number;
  label: string;
  suffix?: string;
  prefix?: string;
  isVisible: boolean;
  index: number;
}

const Counter: React.FC<CounterProps> = ({ target, label, suffix = '', prefix = '', isVisible, index }) => {
  const count = useCounter(target, 2000, isVisible);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="text-center"
    >
      <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-600 dark:text-primary-400 mb-2">
        {prefix}{count.toLocaleString()}{suffix}
      </div>
      <div className="text-gray-600 dark:text-gray-300 font-medium">
        {label}
      </div>
    </motion.div>
  );
};

export default Counter;