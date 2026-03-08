import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MagnifyingGlassIcon, XMarkIcon } from '@heroicons/react/24/outline';

interface SearchBarProps {
  placeholder?: string;
  value: string;
  onChange: (value: string) => void;
  onClear?: () => void;
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

const SearchBar: React.FC<SearchBarProps> = ({
  placeholder = 'Search...',
  value,
  onChange,
  onClear,
  className = '',
  size = 'md',
}) => {
  const [isFocused, setIsFocused] = useState(false);

  const sizeClasses = {
    sm: 'px-3 py-2 text-sm',
    md: 'px-4 py-3 text-base',
    lg: 'px-5 py-4 text-lg',
  };

  const iconSizes = {
    sm: 'h-4 w-4',
    md: 'h-5 w-5',
    lg: 'h-6 w-6',
  };

  const handleClear = () => {
    onChange('');
    if (onClear) {
      onClear();
    }
  };

  return (
    <motion.div
      className={`relative ${className}`}
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <div className="relative">
        <motion.div
          className="absolute left-3 top-1/2 transform -translate-y-1/2"
          animate={{
            scale: isFocused ? 1.1 : 1,
            color: isFocused ? '#3B82F6' : '#6B7280',
          }}
          transition={{ duration: 0.2 }}
        >
          <MagnifyingGlassIcon className={`${iconSizes[size]} text-gray-400`} />
        </motion.div>
        
        <motion.input
          type="text"
          placeholder={placeholder}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          className={`
            w-full pl-10 pr-10 ${sizeClasses[size]}
            rounded-lg border border-gray-300 dark:border-gray-600 
            bg-white dark:bg-gray-700 
            text-gray-900 dark:text-white 
            placeholder-gray-500 dark:placeholder-gray-400
            focus:ring-2 focus:ring-primary-500 focus:border-transparent
            transition-all duration-200
          `}
          animate={{
            borderColor: isFocused ? '#3B82F6' : undefined,
          }}
          transition={{ duration: 0.2 }}
        />
        
        {value && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            onClick={handleClear}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors duration-200"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <XMarkIcon className={iconSizes[size]} />
          </motion.button>
        )}
      </div>
      
      {/* Focus ring animation */}
      <motion.div
        className="absolute inset-0 rounded-lg border-2 border-primary-500 pointer-events-none"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{
          opacity: isFocused ? 0.3 : 0,
          scale: isFocused ? 1 : 0.95,
        }}
        transition={{ duration: 0.2 }}
      />
    </motion.div>
  );
};

export default SearchBar;

