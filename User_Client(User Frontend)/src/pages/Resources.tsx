import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  DocumentTextIcon,
  VideoCameraIcon,
  PhotoIcon,
  CalendarDaysIcon,
  LinkIcon,
  UserGroupIcon,
} from '@heroicons/react/24/outline';
import SEOHead from '../components/SEOHead';

const Resources: React.FC = () => {
  const resourceSections = [
    {
      title: 'Articles',
      description: 'Read our latest financial insights and expert analysis',
      icon: <DocumentTextIcon className="h-8 w-8" />,
      path: '/resources/articles',
      color: 'bg-blue-500',
      hoverColor: 'hover:bg-blue-600',
      count: '50+ Articles',
    },
    {
      title: 'Interviews',
      description: 'Exclusive interviews with fund managers and financial experts',
      icon: <UserGroupIcon className="h-8 w-8" />,
      path: '/resources/interviews',
      color: 'bg-green-500',
      hoverColor: 'hover:bg-green-600',
      count: '25+ Interviews',
    },
    {
      title: 'Audio Video Clips',
      description: 'Educational videos and audio content for financial learning',
      icon: <VideoCameraIcon className="h-8 w-8" />,
      path: '/resources/audio-video-clips',
      color: 'bg-purple-500',
      hoverColor: 'hover:bg-purple-600',
      count: '100+ Videos',
    },
    {
      title: 'Image Gallery',
      description: 'Visual content and infographics about finance',
      icon: <PhotoIcon className="h-8 w-8" />,
      path: '/resources/image-gallery',
      color: 'bg-orange-500',
      hoverColor: 'hover:bg-orange-600',
      count: '200+ Images',
    },
    {
      title: 'Events',
      description: 'Upcoming and past financial events and seminars',
      icon: <CalendarDaysIcon className="h-8 w-8" />,
      path: '/resources/events',
      color: 'bg-red-500',
      hoverColor: 'hover:bg-red-600',
      count: '15+ Events',
    },
    {
      title: 'Important Links',
      description: 'Useful financial websites and regulatory links',
      icon: <LinkIcon className="h-8 w-8" />,
      path: '/resources/important-links',
      color: 'bg-indigo-500',
      hoverColor: 'hover:bg-indigo-600',
      count: '50+ Links',
    },
  ];

  return (
    <>
      <SEOHead
        title="Resources - SaviWealth"
        description="Access our comprehensive collection of financial resources including articles, interviews, videos, and more."
        keywords="financial resources, investment articles, fund manager interviews, financial education"
      />
      
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-16">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary-600 to-primary-800 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6">
                Resources
              </h1>
              <p className="text-xl md:text-2xl text-primary-100 max-w-3xl mx-auto">
                Explore our comprehensive collection of financial resources designed to enhance your investment knowledge
              </p>
            </motion.div>
          </div>
        </section>

        {/* Resources Grid */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {resourceSections.map((section, index) => (
                <motion.div
                  key={section.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group"
                >
                  <Link to={section.path}>
                    <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden">
                      <div className={`${section.color} ${section.hoverColor} p-6 transition-colors duration-300`}>
                        <div className="flex items-center justify-between text-white">
                          {section.icon}
                          <span className="text-sm font-medium bg-white/20 px-3 py-1 rounded-full">
                            {section.count}
                          </span>
                        </div>
                      </div>
                      <div className="p-6">
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-300">
                          {section.title}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                          {section.description}
                        </p>
                        <div className="mt-4 flex items-center text-primary-600 dark:text-primary-400 font-medium">
                          <span>Explore</span>
                          <svg className="ml-2 h-4 w-4 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="bg-primary-50 dark:bg-gray-800 py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-serif font-bold text-gray-900 dark:text-white mb-6">
                Need Personalized Financial Advice?
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
                Our expert advisors are here to help you make informed investment decisions
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-3 bg-primary-600 hover:bg-primary-700 text-white font-medium rounded-lg transition-colors duration-200"
              >
                Contact Our Experts
                <svg className="ml-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Resources;

