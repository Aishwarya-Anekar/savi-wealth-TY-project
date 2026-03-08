import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  PlayIcon,
  CalendarIcon,
  ClockIcon,
  EyeIcon,
  ArrowRightIcon,
  SpeakerWaveIcon,
  VideoCameraIcon,
} from '@heroicons/react/24/outline';
import SEOHead from '../components/SEOHead';

interface MediaClip {
  id: number;
  title: string;
  description: string;
  type: 'video' | 'audio';
  duration: string;
  views: number;
  date: string;
  thumbnail: string;
  slug: string;
  category: string;
}

const ResourcesAudioVideoClips: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedType, setSelectedType] = useState('All');

  const categories = ['All', 'Educational', 'Market Updates', 'Tutorials', 'Webinars'];
  const types = ['All', 'Video', 'Audio'];

  const mediaClips: MediaClip[] = [
    {
      id: 1,
      title: 'TADA 2',
      description: 'Advanced financial planning strategies and investment techniques for experienced investors.',
      type: 'video',
      duration: '15:30',
      views: 6,
      date: 'March 20, 2025',
      thumbnail: '/Images/fS8ptWOkz3Vq.jpg',
      slug: 'tada-2',
      category: 'Educational',
    },
    {
      id: 2,
      title: 'TADA 1',
      description: 'Introduction to financial planning and basic investment concepts for beginners.',
      type: 'video',
      duration: '12:45',
      views: 3,
      date: 'March 18, 2025',
      thumbnail: '/Images/roKu4Y2FJmbx.jpg',
      slug: 'tada-1',
      category: 'Educational',
    },
    {
      id: 3,
      title: 'TADA',
      description: 'Comprehensive guide to understanding market dynamics and investment opportunities.',
      type: 'video',
      duration: '18:20',
      views: 9,
      date: 'March 15, 2025',
      thumbnail: '/Images/yJMtSLKSUPjE.jpg',
      slug: 'tada',
      category: 'Educational',
    },
    {
      id: 4,
      title: 'Financial Literacy Basics',
      description: 'Essential financial concepts every investor should know before starting their investment journey.',
      type: 'video',
      duration: '22:15',
      views: 45,
      date: 'March 12, 2025',
      thumbnail: '/Images/i1EzvxiV3p1s.jpg',
      slug: 'financial-literacy-basics',
      category: 'Educational',
    },
    {
      id: 5,
      title: 'Market Analysis Podcast',
      description: 'Weekly market analysis and expert commentary on current financial trends and opportunities.',
      type: 'audio',
      duration: '35:00',
      views: 28,
      date: 'March 10, 2025',
      thumbnail: '/Images/Xz0domXxCcWZ.jpg',
      slug: 'market-analysis-podcast',
      category: 'Market Updates',
    },
    {
      id: 6,
      title: 'Investment Strategies Webinar',
      description: 'Live webinar covering advanced investment strategies and portfolio management techniques.',
      type: 'video',
      duration: '45:30',
      views: 67,
      date: 'March 8, 2025',
      thumbnail: '/Images/O3RLPBJBe4XI.jpg',
      slug: 'investment-strategies-webinar',
      category: 'Webinars',
    },
    {
      id: 7,
      title: 'SIP Calculator Tutorial',
      description: 'Step-by-step guide on how to use our SIP calculator for planning your investments.',
      type: 'video',
      duration: '8:45',
      views: 34,
      date: 'March 5, 2025',
      thumbnail: '/Images/88oo17oQ3d9S.jpg',
      slug: 'sip-calculator-tutorial',
      category: 'Tutorials',
    },
    {
      id: 8,
      title: 'Wealth Building Podcast',
      description: 'Expert insights on building long-term wealth through systematic investment planning.',
      type: 'audio',
      duration: '28:20',
      views: 52,
      date: 'March 2, 2025',
      thumbnail: '/Images/WValJqEZyPfv.jpg',
      slug: 'wealth-building-podcast',
      category: 'Educational',
    },
  ];

  const filteredClips = mediaClips.filter(clip => {
    const categoryMatch = selectedCategory === 'All' || clip.category === selectedCategory;
    const typeMatch = selectedType === 'All' || 
      (selectedType === 'Video' && clip.type === 'video') ||
      (selectedType === 'Audio' && clip.type === 'audio');
    return categoryMatch && typeMatch;
  });

  return (
    <>
      <SEOHead
        title="Audio Video Clips - Resources - SaviWealth"
        description="Watch and listen to our educational videos and audio content on financial planning, investment strategies, and market insights."
        keywords="financial videos, investment tutorials, market analysis, financial education"
      />
      
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-16">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-purple-600 to-purple-800 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">
                Audio & Video Library
              </h1>
              <p className="text-xl text-purple-100 max-w-2xl mx-auto">
                Educational content to enhance your financial knowledge and investment skills
              </p>
            </motion.div>
          </div>
        </section>

        {/* Filters */}
        <section className="py-8 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-4">
              {/* Category Filter */}
              <div>
                <h3 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Category</h3>
                <div className="flex flex-wrap gap-2">
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

              {/* Type Filter */}
              <div>
                <h3 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Type</h3>
                <div className="flex flex-wrap gap-2">
                  {types.map((type) => (
                    <button
                      key={type}
                      onClick={() => setSelectedType(type)}
                      className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
                        selectedType === type
                          ? 'bg-purple-600 text-white'
                          : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-purple-100 dark:hover:bg-gray-600'
                      }`}
                    >
                      {type}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Media Grid */}
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredClips.map((clip, index) => (
                <motion.article
                  key={clip.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden group"
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={clip.thumbnail}
                      alt={clip.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="bg-white bg-opacity-20 rounded-full p-4">
                        {clip.type === 'video' ? (
                          <PlayIcon className="h-8 w-8 text-white" />
                        ) : (
                          <SpeakerWaveIcon className="h-8 w-8 text-white" />
                        )}
                      </div>
                    </div>
                    <div className="absolute top-4 left-4 flex space-x-2">
                      <span className="bg-purple-600 text-white px-3 py-1 rounded-full text-xs font-medium">
                        {clip.category}
                      </span>
                      <span className={`px-3 py-1 rounded-full text-xs font-medium text-white ${
                        clip.type === 'video' ? 'bg-red-500' : 'bg-blue-500'
                      }`}>
                        {clip.type === 'video' ? (
                          <VideoCameraIcon className="h-3 w-3 inline mr-1" />
                        ) : (
                          <SpeakerWaveIcon className="h-3 w-3 inline mr-1" />
                        )}
                        {clip.type.toUpperCase()}
                      </span>
                    </div>
                    <div className="absolute top-4 right-4">
                      <span className="bg-black bg-opacity-60 text-white px-2 py-1 rounded text-xs">
                        {clip.duration}
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 line-clamp-2 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-300">
                      {clip.title}
                    </h3>
                    
                    <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-2 text-sm">
                      {clip.description}
                    </p>
                    
                    <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400 mb-4">
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center">
                          <EyeIcon className="h-4 w-4 mr-1" />
                          <span>{clip.views} views</span>
                        </div>
                        <div className="flex items-center">
                          <ClockIcon className="h-4 w-4 mr-1" />
                          <span>{clip.duration}</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                        <CalendarIcon className="h-4 w-4 mr-1" />
                        <span>{clip.date}</span>
                      </div>
                      
                      <Link
                        to={`/resources/media/${clip.slug}`}
                        className="inline-flex items-center text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 font-medium transition-colors duration-200"
                      >
                        {clip.type === 'video' ? 'Watch' : 'Listen'}
                        <ArrowRightIcon className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform duration-200" />
                      </Link>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Content */}
        <section className="py-16 bg-white dark:bg-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-serif font-bold text-gray-900 dark:text-white mb-4">
                Featured Content
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400">
                Our most popular educational content this month
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Featured Video */}
              <div className="bg-gradient-to-br from-purple-50 to-purple-100 dark:from-gray-700 dark:to-gray-600 rounded-2xl p-6">
                <div className="flex items-center mb-4">
                  <VideoCameraIcon className="h-6 w-6 text-purple-600 mr-2" />
                  <span className="text-purple-600 dark:text-purple-400 font-medium">Featured Video</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                  Complete Guide to Mutual Fund Investing
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Everything you need to know about mutual fund investing, from basics to advanced strategies.
                </p>
                <div className="flex items-center space-x-4 text-sm text-gray-500 dark:text-gray-400 mb-4">
                  <span>32:15</span>
                  <span>•</span>
                  <span>1.2K views</span>
                </div>
                <Link
                  to="/resources/media/complete-guide-mutual-funds"
                  className="inline-flex items-center text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 font-medium"
                >
                  <PlayIcon className="h-5 w-5 mr-2" />
                  Watch Now
                </Link>
              </div>

              {/* Featured Audio */}
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-gray-700 dark:to-gray-600 rounded-2xl p-6">
                <div className="flex items-center mb-4">
                  <SpeakerWaveIcon className="h-6 w-6 text-blue-600 mr-2" />
                  <span className="text-blue-600 dark:text-blue-400 font-medium">Featured Podcast</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                  Market Insights Weekly
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Weekly podcast featuring market analysis and expert commentary on current trends.
                </p>
                <div className="flex items-center space-x-4 text-sm text-gray-500 dark:text-gray-400 mb-4">
                  <span>25:30</span>
                  <span>•</span>
                  <span>856 listens</span>
                </div>
                <Link
                  to="/resources/media/market-insights-weekly"
                  className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium"
                >
                  <SpeakerWaveIcon className="h-5 w-5 mr-2" />
                  Listen Now
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Load More Section */}
        <section className="py-8 text-center">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 bg-primary-600 hover:bg-primary-700 text-white font-medium rounded-lg transition-colors duration-200"
          >
            Load More Content
          </motion.button>
        </section>
      </div>
    </>
  );
};

export default ResourcesAudioVideoClips;

