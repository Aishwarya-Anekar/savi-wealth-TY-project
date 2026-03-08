import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeftIcon, CalendarIcon, ClockIcon, ShareIcon, BuildingOfficeIcon } from '@heroicons/react/24/outline';
import { interviewsData } from './InterviewsData';
import SEOHead from '../components/SEOHead';

const InterviewDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();

  // Find the interview by slug
  const interview = interviewsData.find(item => item.slug === slug);

  if (!interview) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-16 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Interview Not Found</h1>
          <button
            onClick={() => navigate('/resources/interviews')}
            className="text-primary-600 hover:text-primary-700 font-medium"
          >
            Back to Interviews
          </button>
        </div>
      </div>
    );
  }

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: interview.name,
        text: interview.excerpt,
        url: window.location.href,
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert('Link copied to clipboard!');
    }
  };

  return (
    <>
      <SEOHead
        title={`${interview.name} - Interview - SaviWealth`}
        description={interview.excerpt}
        keywords={`${interview.name}, ${interview.company}, fund manager interview, investment insights`}
      />
      
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-16">
        {/* Header */}
        <div className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <button
              onClick={() => navigate('/resources/interviews')}
              className="inline-flex items-center text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 mb-4 transition-colors duration-200"
            >
              <ArrowLeftIcon className="h-5 w-5 mr-2" />
              Back to Interviews
            </button>
            
            <div className="flex flex-col md:flex-row md:items-center md:justify-between">
              <div className="flex-1">
                <div className="flex items-center space-x-2 mb-2">
                  <span className="bg-green-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {interview.category}
                  </span>
                </div>
                <h1 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 dark:text-white mb-2">
                  {interview.name}
                </h1>
                <p className="text-lg text-primary-600 dark:text-primary-400 font-medium mb-2">
                  {interview.title}
                </p>
                <div className="flex items-center text-gray-500 dark:text-gray-400 mb-4">
                  <BuildingOfficeIcon className="h-5 w-5 mr-2" />
                  <span>{interview.company}</span>
                </div>
                <div className="flex items-center space-x-6 text-sm text-gray-500 dark:text-gray-400">
                  <div className="flex items-center">
                    <CalendarIcon className="h-4 w-4 mr-1" />
                    {interview.date}
                  </div>
                  <div className="flex items-center">
                    <ClockIcon className="h-4 w-4 mr-1" />
                    {interview.duration}
                  </div>
                </div>
              </div>
              
              <div className="mt-4 md:mt-0">
                <button
                  onClick={handleShare}
                  className="inline-flex items-center px-4 py-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors duration-200"
                >
                  <ShareIcon className="h-5 w-5 mr-2" />
                  Share
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8"
              >
                <div className="prose prose-lg dark:prose-invert max-w-none">
                  <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 font-medium">
                    {interview.excerpt}
                  </p>
                  
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">About {interview.name}</h3>
                      <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                        {interview.name} serves as {interview.title} at {interview.company}. With extensive experience in the financial markets, 
                        they bring valuable insights into investment strategies, market trends, and portfolio management.
                      </p>
                    </div>
                    
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Professional Background</h3>
                      <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                        As a seasoned professional in the asset management industry, {interview.name} has been instrumental in 
                        shaping investment strategies and delivering consistent returns for investors. Their expertise spans across 
                        various asset classes and market conditions.
                      </p>
                    </div>
                    
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Key Insights</h3>
                      <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                        In this interview, {interview.name} shares their perspective on current market conditions, investment opportunities, 
                        and strategic approaches to wealth management. Their insights provide valuable guidance for both institutional 
                        and individual investors navigating today's complex financial landscape.
                      </p>
                    </div>
                    
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Investment Philosophy</h3>
                      <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                        With a focus on long-term value creation and risk management, {interview.name} emphasizes the importance of 
                        disciplined investment processes and thorough market analysis. Their approach combines fundamental research 
                        with strategic asset allocation to optimize portfolio performance.
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 sticky top-24"
              >
                <div className="text-center mb-6">
                  <img
                    src={interview.image}
                    alt={interview.name}
                    className="w-32 h-32 rounded-full mx-auto mb-4 object-contain object-center shadow-lg"
                    style={{ objectFit: 'contain', objectPosition: 'center' }}
                  />
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                    {interview.name}
                  </h3>
                  <p className="text-primary-600 dark:text-primary-400 font-medium mb-1">
                    {interview.title}
                  </p>
                  <p className="text-gray-500 dark:text-gray-400 text-sm">
                    {interview.company}
                  </p>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-center justify-between py-2 border-b border-gray-200 dark:border-gray-700">
                    <span className="text-gray-600 dark:text-gray-400">Category</span>
                    <span className="text-gray-900 dark:text-white font-medium">{interview.category}</span>
                  </div>
                  <div className="flex items-center justify-between py-2 border-b border-gray-200 dark:border-gray-700">
                    <span className="text-gray-600 dark:text-gray-400">Date</span>
                    <span className="text-gray-900 dark:text-white font-medium">{interview.date}</span>
                  </div>
                  <div className="flex items-center justify-between py-2">
                    <span className="text-gray-600 dark:text-gray-400">Duration</span>
                    <span className="text-gray-900 dark:text-white font-medium">{interview.duration}</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default InterviewDetail;

