import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRightIcon } from '@heroicons/react/24/outline';

interface ResourceCardProps {
  title: string;
  description: string;
  image: string;
  path: string;
  category?: string;
  date?: string;
  author?: string;
  readTime?: string;
  views?: number;
  duration?: string;
  index?: number;
  className?: string;
}

const ResourceCard: React.FC<ResourceCardProps> = ({
  title,
  description,
  image,
  path,
  category,
  date,
  author,
  readTime,
  views,
  duration,
  index = 0,
  className = '',
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className={`group ${className}`}
    >
      <Link to={path}>
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden">
          <div className="relative overflow-hidden">
            <motion.img
              src={image}
              alt={title}
              className="w-full h-48 object-cover transition-transform duration-300"
              whileHover={{ scale: 1.05 }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            
            {category && (
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="absolute top-4 left-4"
              >
                <span className="bg-primary-600 text-white px-3 py-1 rounded-full text-xs font-medium">
                  {category}
                </span>
              </motion.div>
            )}
            
            {duration && (
              <div className="absolute top-4 right-4">
                <span className="bg-black bg-opacity-60 text-white px-2 py-1 rounded text-xs">
                  {duration}
                </span>
              </div>
            )}
          </div>
          
          <div className="p-6">
            <motion.h3
              className="text-xl font-bold text-gray-900 dark:text-white mb-3 line-clamp-2 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-300"
              whileHover={{ x: 5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              {title}
            </motion.h3>
            
            <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-3 text-sm">
              {description}
            </p>
            
            {(author || readTime || views || date) && (
              <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400 mb-4">
                <div className="flex items-center space-x-4">
                  {author && <span>{author}</span>}
                  {readTime && <span>{readTime}</span>}
                  {views && <span>{views} views</span>}
                </div>
                {date && <span>{date}</span>}
              </div>
            )}
            
            <motion.div
              className="flex items-center justify-between"
              whileHover={{ x: 5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="flex items-center text-primary-600 dark:text-primary-400 font-medium">
                <span>Read More</span>
                <ArrowRightIcon className="h-4 w-4 ml-1 transform group-hover:translate-x-1 transition-transform duration-200" />
              </div>
            </motion.div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default ResourceCard;

