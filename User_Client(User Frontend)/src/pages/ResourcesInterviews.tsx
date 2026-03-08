import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  CalendarIcon,
  ClockIcon,
  UserIcon,
  ArrowRightIcon,
  BuildingOfficeIcon,
} from '@heroicons/react/24/outline';
import SEOHead from '../components/SEOHead';
import { interviewsData, featuredInterviewData } from './InterviewsData';

interface Interview {
  id: number;
  name: string;
  title: string;
  company: string;
  excerpt: string;
  date: string;
  duration: string;
  image: string;
  slug: string;
  category: string;
}

const ResourcesInterviews: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Fund Managers', 'CEOs', 'Market Experts', 'Analysts'];

  const interviews: Interview[] = interviewsData;

  const filteredInterviews = selectedCategory === 'All' 
    ? interviews 
    : interviews.filter(interview => interview.category === selectedCategory);

  return (
    <>
      <SEOHead
        title="Interviews - Resources - SaviWealth"
        description="Watch exclusive interviews with fund managers, CEOs, and financial experts sharing their insights on investment and market trends."
        keywords="fund manager interviews, financial expert interviews, investment insights, market analysis"
      />
      
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-16">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-green-600 to-green-800 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">
                Expert Interviews
              </h1>
              <p className="text-xl text-green-100 max-w-2xl mx-auto">
                Exclusive conversations with industry leaders and financial experts
              </p>
            </motion.div>
          </div>
        </section>

        {/* Category Filter */}
        <section className="py-8 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap gap-2 justify-center">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
                    selectedCategory === category
                      ? 'bg-primary-600 text-white'
                      : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-primary-100 dark:hover:bg-gray-600'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Interviews Grid */}
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredInterviews.map((interview, index) => (
                <motion.article
                  key={interview.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden group"
                >
                  <div className="relative overflow-hidden bg-gray-100 dark:bg-gray-700">
                    <img
                      src={interview.image}
                      alt={interview.name}
                      className="w-full h-48 object-cover object-center group-hover:scale-105 transition-transform duration-300"
                      style={{ objectFit: 'contain', objectPosition: 'center' }}
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-green-600 text-white px-3 py-1 rounded-full text-xs font-medium">
                        {interview.category}
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-300">
                      {interview.name}
                    </h3>
                    
                    <div className="mb-3">
                      <p className="text-primary-600 dark:text-primary-400 font-medium text-sm">
                        {interview.title}
                      </p>
                      <div className="flex items-center text-gray-500 dark:text-gray-400 text-sm mt-1">
                        <BuildingOfficeIcon className="h-4 w-4 mr-1" />
                        <span>{interview.company}</span>
                      </div>
                    </div>
                    
                    <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-3 text-sm">
                      {interview.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                        <CalendarIcon className="h-4 w-4 mr-1" />
                        <span>{interview.date}</span>
                      </div>
                      
                      <Link
                        to={`/resources/interviews/${interview.slug}`}
                        className="inline-flex items-center text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 font-medium transition-colors duration-200"
                      >
                        Read More
                        <ArrowRightIcon className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform duration-200" />
                      </Link>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Interview */}
        <section className="py-16 bg-white dark:bg-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-serif font-bold text-gray-900 dark:text-white mb-4">
                Featured Interview
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400">
                Don't miss our most popular interview of the month
              </p>
            </motion.div>

            <div className="bg-gradient-to-r from-primary-50 to-primary-100 dark:from-gray-700 dark:to-gray-600 rounded-2xl p-8 md:p-12">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div>
                  <div className="mb-4">
                    <span className="bg-primary-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                      Most Watched
                    </span>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">
                    {featuredInterviewData.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-6">
                    {featuredInterviewData.description}
                  </p>
                  <div className="flex items-center space-x-6 mb-6">
                    <div className="flex items-center text-gray-500 dark:text-gray-400">
                      <ClockIcon className="h-5 w-5 mr-2" />
                      <span>{featuredInterviewData.duration}</span>
                    </div>
                    <div className="flex items-center text-gray-500 dark:text-gray-400">
                      <UserIcon className="h-5 w-5 mr-2" />
                      <span>{featuredInterviewData.panel}</span>
                    </div>
                  </div>
                  <Link
                    to={`/resources/interviews/${featuredInterviewData.slug}`}
                    className="inline-flex items-center px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white font-medium rounded-lg transition-colors duration-200"
                  >
                    Read More
                  </Link>
                </div>
                <div className="relative">
                  <img
                    src={featuredInterviewData.image}
                    alt={featuredInterviewData.title}
                    className="w-full h-64 md:h-80 object-cover object-center rounded-xl shadow-lg"
                    style={{ objectFit: 'cover', objectPosition: 'center' }}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Load More Section */}
        <section className="py-8 text-center">
          {/* <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 bg-primary-600 hover:bg-primary-700 text-white font-medium rounded-lg transition-colors duration-200"
          >
            Load More Interviews
          </motion.button> */}
        </section>
      </div>
    </>
  );
};

export default ResourcesInterviews;


