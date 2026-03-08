import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { LinkIcon, EnvelopeIcon, PhoneIcon } from '@heroicons/react/24/outline';

interface TeamCardProps {
  name: string;
  role: string;
  bio: string;
  image: string;
  qualifications: string[];
  linkedin?: string;
  email?: string;
  phone?: string;
  index: number;
  slug?: string;
}

const TeamCard: React.FC<TeamCardProps> = ({ 
  name, 
  role, 
  bio, 
  image, 
  qualifications, 
  linkedin, 
  email,
  phone,
  index,
  slug
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const navigate = useNavigate();

  const handleClick = () => {
    if (slug) {
      navigate(`/fund-managers/${slug}`);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      onClick={handleClick}
      className="group relative bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 dark:border-gray-700 cursor-pointer transform hover:-translate-y-2"
    >
      {/* Image Container */}
      <div className="relative h-80 overflow-hidden">
        <motion.img 
          src={image} 
          alt={name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          whileHover={{ scale: 1.05 }}
        />
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        {/* Social Links Overlay */}
        <AnimatePresence>
          {isHovered && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.3 }}
              className="absolute bottom-4 left-4 right-4 flex justify-center space-x-3"
            >
              {linkedin && (
                <motion.a
                  href={linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-3 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-primary-600 hover:text-white transition-all duration-300"
                >
                  <LinkIcon className="h-5 w-5" />
                </motion.a>
              )}
              {email && (
                <motion.a
                  href={`mailto:${email}`}
                  onClick={(e) => e.stopPropagation()}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-3 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-primary-600 hover:text-white transition-all duration-300"
                >
                  <EnvelopeIcon className="h-5 w-5" />
                </motion.a>
              )}
              {phone && (
                <motion.a
                  href={`tel:${phone}`}
                  onClick={(e) => e.stopPropagation()}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-3 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-primary-600 hover:text-white transition-all duration-300"
                >
                  <PhoneIcon className="h-5 w-5" />
                </motion.a>
              )}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Role Badge */}
        <div className="absolute top-4 left-4">
          <motion.span 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 + 0.3 }}
            className="px-3 py-1 bg-primary-600/90 backdrop-blur-sm text-white text-xs font-semibold rounded-full"
          >
            {role}
          </motion.span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Name */}
        <motion.h3 
          className="text-xl font-serif font-bold text-gray-900 dark:text-white mb-2 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-300"
          whileHover={{ scale: 1.02 }}
        >
          {name}
        </motion.h3>
        
        {/* Bio */}
        <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 line-clamp-3 leading-relaxed">
          {bio}
        </p>

        {/* Qualifications */}
        <div className="space-y-2">
          <h4 className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide">
            Qualifications
          </h4>
          <div className="flex flex-wrap gap-2">
            {qualifications.slice(0, 3).map((qual, idx) => (
              <motion.span
                key={idx}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 + idx * 0.1 + 0.5 }}
                className="px-2 py-1 bg-secondary-100 dark:bg-secondary-900/30 text-secondary-700 dark:text-secondary-300 text-xs font-medium rounded-full"
              >
                {qual}
              </motion.span>
            ))}
            {qualifications.length > 3 && (
              <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 text-xs font-medium rounded-full">
                +{qualifications.length - 3} more
              </span>
            )}
          </div>
        </div>

        {/* View Profile Button */}
        {slug && (
          <motion.div 
            className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: index * 0.1 + 0.7 }}
          >
            <button className="w-full py-2 text-primary-600 dark:text-primary-400 font-medium text-sm hover:text-primary-700 dark:hover:text-primary-300 transition-colors duration-200 flex items-center justify-center group">
              View Full Profile
              <motion.svg 
                className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </motion.svg>
            </button>
          </motion.div>
        )}
      </div>

      {/* Hover Border Effect */}
      <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-primary-200 dark:group-hover:border-primary-600/50 transition-all duration-500 pointer-events-none" />
    </motion.div>
  );
};

export default TeamCard;