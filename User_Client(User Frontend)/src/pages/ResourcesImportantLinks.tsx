import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  LinkIcon,
  ArrowTopRightOnSquareIcon,
  MagnifyingGlassIcon,
  BuildingOfficeIcon,
  DocumentTextIcon,
  ChartBarIcon,
  ShieldCheckIcon,
  AcademicCapIcon,
} from '@heroicons/react/24/outline';
import SEOHead from '../components/SEOHead';

interface ImportantLink {
  id: number;
  title: string;
  description: string;
  url: string;
  category: string;
  type: 'regulatory' | 'educational' | 'tools' | 'news' | 'research';
  icon: React.ReactNode;
}

const ResourcesImportantLinks: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  const categories = ['All', 'Regulatory Bodies', 'Educational Resources', 'Financial Tools', 'News & Research', 'Market Data'];

  const importantLinks: ImportantLink[] = [
    // Regulatory Bodies
    {
      id: 1,
      title: 'Securities and Exchange Board of India (SEBI)',
      description: 'Official website of SEBI, the regulatory body for securities and commodity market in India.',
      url: 'https://www.sebi.gov.in',
      category: 'Regulatory Bodies',
      type: 'regulatory',
      icon: <ShieldCheckIcon className="h-6 w-6" />,
    },
    {
      id: 2,
      title: 'Reserve Bank of India (RBI)',
      description: 'Central bank of India responsible for monetary policy and banking regulation.',
      url: 'https://www.rbi.org.in',
      category: 'Regulatory Bodies',
      type: 'regulatory',
      icon: <BuildingOfficeIcon className="h-6 w-6" />,
    },
    {
      id: 3,
      title: 'Insurance Regulatory and Development Authority (IRDAI)',
      description: 'Regulatory body for insurance and re-insurance business in India.',
      url: 'https://www.irdai.gov.in',
      category: 'Regulatory Bodies',
      type: 'regulatory',
      icon: <ShieldCheckIcon className="h-6 w-6" />,
    },
    {
      id: 4,
      title: 'Pension Fund Regulatory and Development Authority (PFRDA)',
      description: 'Regulatory body for pension funds and retirement planning in India.',
      url: 'https://www.pfrda.org.in',
      category: 'Regulatory Bodies',
      type: 'regulatory',
      icon: <ShieldCheckIcon className="h-6 w-6" />,
    },

    // Educational Resources
    {
      id: 5,
      title: 'National Institute of Securities Markets (NISM)',
      description: 'Educational institution for securities markets offering certification courses.',
      url: 'https://www.nism.ac.in',
      category: 'Educational Resources',
      type: 'educational',
      icon: <AcademicCapIcon className="h-6 w-6" />,
    },
    {
      id: 6,
      title: 'Investor Education and Protection Fund (IEPF)',
      description: 'Government initiative for investor education and protection.',
      url: 'https://www.iepf.gov.in',
      category: 'Educational Resources',
      type: 'educational',
      icon: <AcademicCapIcon className="h-6 w-6" />,
    },
    {
      id: 7,
      title: 'BSE Institute',
      description: 'Educational arm of Bombay Stock Exchange offering finance courses.',
      url: 'https://www.bseinstitute.com',
      category: 'Educational Resources',
      type: 'educational',
      icon: <AcademicCapIcon className="h-6 w-6" />,
    },

    // Financial Tools
    {
      id: 8,
      title: 'BSE (Bombay Stock Exchange)',
      description: 'One of the oldest stock exchanges in Asia with real-time market data.',
      url: 'https://www.bseindia.com',
      category: 'Financial Tools',
      type: 'tools',
      icon: <ChartBarIcon className="h-6 w-6" />,
    },
    {
      id: 9,
      title: 'NSE (National Stock Exchange)',
      description: 'Leading stock exchange in India providing market data and trading platform.',
      url: 'https://www.nseindia.com',
      category: 'Financial Tools',
      type: 'tools',
      icon: <ChartBarIcon className="h-6 w-6" />,
    },
    {
      id: 10,
      title: 'Association of Mutual Funds in India (AMFI)',
      description: 'Industry body for mutual funds with comprehensive fund information.',
      url: 'https://www.amfiindia.com',
      category: 'Financial Tools',
      type: 'tools',
      icon: <ChartBarIcon className="h-6 w-6" />,
    },
    {
      id: 11,
      title: 'Value Research',
      description: 'Independent investment research platform for mutual funds and stocks.',
      url: 'https://www.valueresearchonline.com',
      category: 'Financial Tools',
      type: 'tools',
      icon: <ChartBarIcon className="h-6 w-6" />,
    },
    {
      id: 12,
      title: 'Morningstar India',
      description: 'Global investment research platform with Indian market focus.',
      url: 'https://www.morningstar.in',
      category: 'Financial Tools',
      type: 'research',
      icon: <DocumentTextIcon className="h-6 w-6" />,
    },

    // News & Research
    {
      id: 13,
      title: 'Economic Times',
      description: 'Leading financial newspaper with market news and analysis.',
      url: 'https://economictimes.indiatimes.com',
      category: 'News & Research',
      type: 'news',
      icon: <DocumentTextIcon className="h-6 w-6" />,
    },
    {
      id: 14,
      title: 'Business Standard',
      description: 'Business and financial news with in-depth market analysis.',
      url: 'https://www.business-standard.com',
      category: 'News & Research',
      type: 'news',
      icon: <DocumentTextIcon className="h-6 w-6" />,
    },
    {
      id: 15,
      title: 'Livemint',
      description: 'Financial news and market updates with expert commentary.',
      url: 'https://www.livemint.com',
      category: 'News & Research',
      type: 'news',
      icon: <DocumentTextIcon className="h-6 w-6" />,
    },
    {
      id: 16,
      title: 'MoneyControl',
      description: 'Comprehensive financial portal with market data and news.',
      url: 'https://www.moneycontrol.com',
      category: 'News & Research',
      type: 'news',
      icon: <DocumentTextIcon className="h-6 w-6" />,
    },

    // Market Data
    {
      id: 17,
      title: 'Bloomberg India',
      description: 'Global financial news and market data with India focus.',
      url: 'https://www.bloomberg.com/asia',
      category: 'Market Data',
      type: 'research',
      icon: <ChartBarIcon className="h-6 w-6" />,
    },
    {
      id: 18,
      title: 'Reuters India',
      description: 'International news agency with comprehensive market coverage.',
      url: 'https://www.reuters.com/world/india',
      category: 'Market Data',
      type: 'news',
      icon: <DocumentTextIcon className="h-6 w-6" />,
    },
    {
      id: 19,
      title: 'Yahoo Finance India',
      description: 'Free financial news and market data platform.',
      url: 'https://in.finance.yahoo.com',
      category: 'Market Data',
      type: 'tools',
      icon: <ChartBarIcon className="h-6 w-6" />,
    },
    {
      id: 20,
      title: 'Investing.com India',
      description: 'Real-time financial market data and analysis tools.',
      url: 'https://in.investing.com',
      category: 'Market Data',
      type: 'tools',
      icon: <ChartBarIcon className="h-6 w-6" />,
    },
  ];

  const filteredLinks = importantLinks.filter(link => {
    const categoryMatch = selectedCategory === 'All' || link.category === selectedCategory;
    const searchMatch = searchTerm === '' || 
      link.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      link.description.toLowerCase().includes(searchTerm.toLowerCase());
    return categoryMatch && searchMatch;
  });

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'regulatory': return 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200';
      case 'educational': return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200';
      case 'tools': return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200';
      case 'news': return 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200';
      case 'research': return 'bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200';
      default: return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200';
    }
  };

  return (
    <>
      <SEOHead
        title="Important Links - Resources - SaviWealth"
        description="Access important financial websites, regulatory bodies, educational resources, and market data platforms."
        keywords="financial links, regulatory bodies, SEBI, RBI, investment tools, market data"
      />
      
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-16">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-indigo-600 to-indigo-800 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">
                Important Links
              </h1>
              <p className="text-xl text-indigo-100 max-w-2xl mx-auto">
                Essential financial websites, regulatory bodies, and educational resources
              </p>
            </motion.div>
          </div>
        </section>

        {/* Search and Filter */}
        <section className="py-8 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-4">
              {/* Search Bar */}
              <div className="relative max-w-md mx-auto">
                <MagnifyingGlassIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search links..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                />
              </div>

              {/* Category Filter */}
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
          </div>
        </section>

        {/* Links Grid */}
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredLinks.map((link, index) => (
                <motion.div
                  key={link.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.05 }}
                  className="bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden group"
                >
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center space-x-3">
                        <div className="p-2 bg-indigo-100 dark:bg-indigo-900 rounded-lg text-indigo-600 dark:text-indigo-400">
                          {link.icon}
                        </div>
                        <div className="flex-1">
                          <span className={`inline-block px-2 py-1 rounded-full text-xs font-medium ${getTypeColor(link.type)}`}>
                            {link.type.charAt(0).toUpperCase() + link.type.slice(1)}
                          </span>
                        </div>
                      </div>
                      <ArrowTopRightOnSquareIcon className="h-5 w-5 text-gray-400 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors duration-200" />
                    </div>
                    
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3 line-clamp-2 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors duration-300">
                      {link.title}
                    </h3>
                    
                    <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-3 text-sm">
                      {link.description}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-500 dark:text-gray-400">
                        {link.category}
                      </span>
                      
                      <a
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 font-medium transition-colors duration-200"
                      >
                        Visit Site
                        <ArrowTopRightOnSquareIcon className="h-4 w-4 ml-1" />
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Quick Access Section */}
        <section className="py-16 bg-white dark:bg-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-serif font-bold text-gray-900 dark:text-white mb-4">
                Quick Access
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400">
                Most frequently accessed financial resources
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { name: 'SEBI', url: 'https://www.sebi.gov.in', icon: <ShieldCheckIcon className="h-8 w-8" />, color: 'bg-red-500' },
                { name: 'RBI', url: 'https://www.rbi.org.in', icon: <BuildingOfficeIcon className="h-8 w-8" />, color: 'bg-blue-500' },
                { name: 'BSE', url: 'https://www.bseindia.com', icon: <ChartBarIcon className="h-8 w-8" />, color: 'bg-green-500' },
                { name: 'NSE', url: 'https://www.nseindia.com', icon: <ChartBarIcon className="h-8 w-8" />, color: 'bg-purple-500' },
              ].map((item, index) => (
                <motion.a
                  key={item.name}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group"
                >
                  <div className="bg-gray-50 dark:bg-gray-700 rounded-xl p-6 text-center hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                    <div className={`${item.color} rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-white group-hover:scale-110 transition-transform duration-300`}>
                      {item.icon}
                    </div>
                    <h3 className="font-bold text-gray-900 dark:text-white mb-2">{item.name}</h3>
                    <div className="flex items-center justify-center text-indigo-600 dark:text-indigo-400">
                      <span className="text-sm">Visit</span>
                      <ArrowTopRightOnSquareIcon className="h-4 w-4 ml-1" />
                    </div>
                  </div>
                </motion.a>
              ))}
            </div>
          </div>
        </section>

        {/* Categories Overview */}
        <section className="bg-indigo-50 dark:bg-gray-800 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-serif font-bold text-gray-900 dark:text-white mb-4">
                Resource Categories
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400">
                Organized collection of essential financial resources
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: 'Regulatory Bodies',
                  description: 'Official websites of financial regulators and government bodies',
                  icon: <ShieldCheckIcon className="h-8 w-8" />,
                  count: importantLinks.filter(link => link.type === 'regulatory').length,
                },
                {
                  title: 'Educational Resources',
                  description: 'Learning platforms and certification courses for financial education',
                  icon: <AcademicCapIcon className="h-8 w-8" />,
                  count: importantLinks.filter(link => link.type === 'educational').length,
                },
                {
                  title: 'Financial Tools',
                  description: 'Trading platforms, market data, and investment analysis tools',
                  icon: <ChartBarIcon className="h-8 w-8" />,
                  count: importantLinks.filter(link => link.type === 'tools').length,
                },
                {
                  title: 'News & Research',
                  description: 'Financial news, market analysis, and research platforms',
                  icon: <DocumentTextIcon className="h-8 w-8" />,
                  count: importantLinks.filter(link => link.type === 'news' || link.type === 'research').length,
                },
                {
                  title: 'Market Data',
                  description: 'Real-time market data and financial information platforms',
                  icon: <ChartBarIcon className="h-8 w-8" />,
                  count: importantLinks.filter(link => link.category === 'Market Data').length,
                },
                {
                  title: 'All Resources',
                  description: 'Complete collection of important financial links and resources',
                  icon: <LinkIcon className="h-8 w-8" />,
                  count: importantLinks.length,
                },
              ].map((category, index) => (
                <motion.div
                  key={category.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white dark:bg-gray-700 rounded-xl p-6 text-center"
                >
                  <div className="bg-indigo-100 dark:bg-indigo-900 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-indigo-600 dark:text-indigo-400">
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                    {category.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm">
                    {category.description}
                  </p>
                  <div className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">
                    {category.count}
                  </div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">
                    Resources
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ResourcesImportantLinks;

