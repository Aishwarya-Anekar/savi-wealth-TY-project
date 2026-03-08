import React from 'react';
import { motion } from 'framer-motion';

interface FilterButtonProps {
  label: string;
  isActive: boolean;
  onClick: () => void;
  count?: number;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

const FilterButton: React.FC<FilterButtonProps> = ({
  label,
  isActive,
  onClick,
  count,
  variant = 'primary',
  size = 'md',
  className = '',
}) => {
  const baseClasses = 'inline-flex items-center font-medium rounded-full transition-all duration-200 cursor-pointer';
  
  const sizeClasses = {
    sm: 'px-3 py-1 text-xs',
    md: 'px-4 py-2 text-sm',
    lg: 'px-6 py-3 text-base',
  };

  const variantClasses = {
    primary: isActive
      ? 'bg-primary-600 text-white shadow-lg'
      : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-primary-100 dark:hover:bg-gray-600',
    secondary: isActive
      ? 'bg-secondary-600 text-white shadow-lg'
      : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-secondary-100 dark:hover:bg-gray-600',
    outline: isActive
      ? 'border-2 border-primary-600 bg-primary-50 dark:bg-primary-900/20 text-primary-700 dark:text-primary-300'
      : 'border-2 border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:border-primary-300 dark:hover:border-primary-600',
  };

  return (
    <motion.button
      onClick={onClick}
      className={`${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${className}`}
      whileHover={{ 
        scale: 1.05,
        y: -2,
      }}
      whileTap={{ 
        scale: 0.95,
        y: 0,
      }}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ 
        type: "spring", 
        stiffness: 300,
        damping: 20,
      }}
    >
      <motion.span
        animate={{
          color: isActive ? '#ffffff' : undefined,
        }}
        transition={{ duration: 0.2 }}
      >
        {label}
      </motion.span>
      
      {count !== undefined && (
        <motion.span
          className={`ml-2 px-2 py-0.5 rounded-full text-xs ${
            isActive
              ? 'bg-white/20 text-white'
              : 'bg-gray-200 dark:bg-gray-600 text-gray-600 dark:text-gray-300'
          }`}
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.1, type: "spring", stiffness: 300 }}
        >
          {count}
        </motion.span>
      )}
      
      {/* Active indicator */}
      {isActive && (
        <motion.div
          className="absolute inset-0 rounded-full border-2 border-white/30"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.2 }}
        />
      )}
    </motion.button>
  );
};

export default FilterButton;

