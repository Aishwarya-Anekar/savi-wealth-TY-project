import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CalendarIcon, ClockIcon, ArrowRightIcon } from '@heroicons/react/24/outline';

interface ArticleCardProps {
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  image: string;
  category: string;
  index: number;
  slug?: string;
}

const ArticleCard: React.FC<ArticleCardProps> = ({ 
  title, 
  excerpt, 
  date, 
  readTime, 
  image, 
  category, 
  index,
  slug
}) => {
  const navigate = useNavigate();

  const handleClick = () => {
    if (slug) {
      navigate(`/articles/${slug}`);
    }
  };

  return (
    <motion.article
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
      onClick={handleClick}
      className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700 group cursor-pointer hover:border-primary-300 dark:hover:border-primary-600"
    >
      {/* Image */}
      <div className="relative h-48 overflow-hidden bg-gray-100 dark:bg-gray-700">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-contain object-center group-hover:scale-105 transition-transform duration-300"
          style={{ objectFit: 'contain', objectPosition: 'center' }}
        />
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1 bg-primary-600 text-white text-xs font-medium rounded-full">
            {category}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Meta */}
        <div className="flex items-center space-x-4 text-sm text-gray-500 dark:text-gray-400 mb-3">
          <div className="flex items-center">
            <CalendarIcon className="h-4 w-4 mr-1" />
            {date}
          </div>
          <div className="flex items-center">
            <ClockIcon className="h-4 w-4 mr-1" />
            {readTime}
          </div>
        </div>

        {/* Title */}
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 line-clamp-2 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-200">
          {title}
        </h3>

        {/* Excerpt */}
        <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
          {excerpt}
        </p>

        {/* Read More */}
        <button
  onClick={(e) => {
    e.stopPropagation(); // prevent card click conflict
    if (slug) {
      navigate(`/articles/${slug}`); // go to article detail page
    }
  }}
  className="flex items-center text-primary-600 dark:text-primary-400 font-medium text-sm hover:text-primary-700 dark:hover:text-primary-300 transition-colors duration-200"
>
  Learn More
  <ArrowRightIcon className="h-4 w-4 ml-1 hover:translate-x-1 transition-transform duration-200" />
</button>

      </div>
    </motion.article>
  );
};

export default ArticleCard;