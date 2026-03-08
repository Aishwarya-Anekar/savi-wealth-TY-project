import React from 'react';
import { motion } from 'framer-motion';
import Carousel from '../components/Carousel';
import ArticleCard from '../components/ArticleCard';

const Articles: React.FC = () => {
  const articles = [
    {
      title: 'Market Outlook 2024: Navigating Volatile Times',
      excerpt: 'Understanding market dynamics and investment strategies for the upcoming fiscal year with expert insights.',
      date: 'Dec 15, 2024',
      readTime: '5 min read',
      image: '/images/articles/market-outlook-2024.jpg',
      category: 'Market Analysis',
      slug: 'market-outlook-2024'
    },
    {
      title: 'Tax-Saving Investments: A Complete Guide',
      excerpt: 'Comprehensive guide to tax-saving investment options under Section 80C and other provisions.',
      date: 'Dec 10, 2024',
      readTime: '8 min read',
      image: '/images/articles/tax-saving-investments.jpg',
      category: 'Tax Planning',
      slug: 'tax-saving-investments'
    },
    {
      title: 'SIP vs Lump Sum: Which is Better?',
      excerpt: 'Detailed comparison of systematic investment plans versus lump sum investing strategies.',
      date: 'Dec 5, 2024',
      readTime: '6 min read',
      image: '/images/articles/sip-vs-lump-sum.jpg',
      category: 'Investment Strategy',
      slug: 'sip-vs-lump-sum'
    },
    {
      title: 'Understanding Mutual Fund Categories',
      excerpt: 'A comprehensive guide to different types of mutual funds and their investment objectives.',
      date: 'Nov 28, 2024',
      readTime: '7 min read',
      image: '/images/articles/mutual-fund-categories.jpg',
      category: 'Mutual Funds',
      slug: 'mutual-fund-categories'
    },
    {
      title: 'Real Estate Investment Trusts (REITs) in India',
      excerpt: 'Exploring the growing REIT market in India and investment opportunities for retail investors.',
      date: 'Nov 20, 2024',
      readTime: '9 min read',
      image: '/images/articles/reits-in-india.jpg',
      category: 'Real Estate',
      slug: 'reits-in-india'
    },
    {
      title: 'Portfolio Rebalancing: When and How',
      excerpt: 'Learn the importance of portfolio rebalancing and strategies to maintain optimal asset allocation.',
      date: 'Nov 15, 2024',
      readTime: '6 min read',
      image: '/images/articles/portfolio-rebalancing.jpg',
      category: 'Portfolio Management',
      slug: 'portfolio-rebalancing'
    }
  ];

  const featuredArticles = articles.slice(0, 3);
  const allArticles = articles;

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary-50 via-white to-secondary-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-gray-900 dark:text-white mb-6">
              Financial <span className="text-primary-600 dark:text-primary-400">Insights</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Stay informed with our latest market analysis, investment strategies, and financial planning insights 
              from our team of certified experts.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured Articles Carousel */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 dark:text-white mb-6">
              Featured <span className="text-primary-600 dark:text-primary-400">Articles</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Our most popular and insightful articles on wealth management and investment strategies.
            </p>
          </motion.div>

          <Carousel slidesPerView={3} spaceBetween={30} autoplay={true}>
            {featuredArticles.map((article, index) => (
              <ArticleCard
                key={article.slug}
                title={article.title}
                excerpt={article.excerpt}
                date={article.date}
                readTime={article.readTime}
                image={article.image}
                category={article.category}
                slug={article.slug}
                index={index}
              />
            ))}
          </Carousel>
        </div>
      </section>

      {/* All Articles Grid */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 dark:text-white mb-6">
              All <span className="text-primary-600 dark:text-primary-400">Articles</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Explore our complete collection of financial insights and investment guidance.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allArticles.map((article, index) => (
              <ArticleCard
                key={article.slug}
                title={article.title}
                excerpt={article.excerpt}
                date={article.date}
                readTime={article.readTime}
                image={article.image}
                category={article.category}
                slug={article.slug}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 bg-gradient-to-r from-primary-600 to-secondary-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">
              Stay Updated
            </h2>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Subscribe to our newsletter and get the latest financial insights delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-4 rounded-xl border-0 focus:ring-2 focus:ring-white/50 text-gray-900"
              />
              {/* <button className="px-8 py-4 bg-white text-primary-600 font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200">
                Subscribe
              </button> */}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Articles;