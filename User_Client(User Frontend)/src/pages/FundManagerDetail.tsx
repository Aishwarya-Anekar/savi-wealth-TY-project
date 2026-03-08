import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeftIcon, AcademicCapIcon, BriefcaseIcon, StarIcon } from '@heroicons/react/24/outline';
import Carousel from '../components/Carousel';
import TeamCard from '../components/TeamCard';

const FundManagerDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();

  // Mock fund manager data - in real app, this would come from API
  const fundManagers = {
    'shriram-ramanathan': {
      name: 'Shriram Ramanathan',
      role: 'Senior Fund Manager',
      bio: 'Over 15 years of experience in equity markets with expertise in value investing and portfolio construction. Shriram has successfully managed portfolios worth over ₹500 crores and has consistently delivered alpha returns for clients.',
      image: '/images/team/shriram-ramanathan.jpg',
      qualifications: ['CFA Charter', 'FRM Certified', 'MBA Finance', 'B.Com (Hons)'],
      experience: '15+ years',
      specialization: 'Equity Markets, Value Investing',
      achievements: [
        'Consistently outperformed benchmark indices by 3-5% annually',
        'Managed portfolios worth over ₹500 crores',
        'Winner of Best Fund Manager Award 2023',
        'Published research papers on value investing strategies'
      ],
      philosophy: 'I believe in fundamental analysis and long-term value creation. My investment philosophy centers around identifying undervalued companies with strong business models and holding them for the long term.',
      portfolioStats: {
        aum: '₹500+ Cr',
        clients: '200+',
        avgReturn: '14.5%',
        experience: '15 years'
      }
    },
    'venugopal-manghat': {
      name: 'Venugopal Manghat',
      role: 'Head of Fixed Income',
      bio: 'Specialist in debt markets and fixed income strategies with 12+ years of institutional experience. Venugopal has expertise in credit analysis, duration management, and yield optimization.',
      image: '/images/team/venugopal-manghat.jpg',
      qualifications: ['CFA Charter', 'Fixed Income Specialist', 'CA', 'MBA Finance'],
      experience: '12+ years',
      specialization: 'Fixed Income, Credit Analysis',
      achievements: [
        'Managed fixed income portfolios worth ₹300+ crores',
        'Expert in credit risk assessment and management',
        'Developed proprietary duration management strategies',
        'Regular speaker at fixed income conferences'
      ],
      philosophy: 'Fixed income investing requires a deep understanding of credit cycles and interest rate movements. I focus on creating stable, risk-adjusted returns through careful security selection and duration management.',
      portfolioStats: {
        aum: '₹300+ Cr',
        clients: '150+',
        avgReturn: '9.2%',
        experience: '12 years'
      }
    },
    'vikas-garg': {
      name: 'Vikas Garg',
      role: 'Equity Research Head',
      bio: 'Leading equity research analyst with focus on mid-cap and small-cap investment opportunities. Vikas has a proven track record of identifying multi-bagger stocks and emerging market trends.',
      image: '/images/team/vikas-garg.jpg',
      qualifications: ['CFA Charter', 'Equity Research Certification', 'MSc Finance', 'B.Tech'],
      experience: '10+ years',
      specialization: 'Mid-cap, Small-cap Research',
      achievements: [
        'Identified 15+ multi-bagger stocks in the last 5 years',
        'Research coverage of 100+ companies across sectors',
        'Regular contributor to financial publications',
        'Winner of Best Research Analyst Award 2022'
      ],
      philosophy: 'I believe in bottom-up stock picking based on thorough fundamental analysis. My focus is on identifying companies with strong growth potential, competent management, and reasonable valuations.',
      portfolioStats: {
        aum: '₹250+ Cr',
        clients: '180+',
        avgReturn: '18.3%',
        experience: '10 years'
      }
    },
    'taher-badshah': {
      name: 'Taher Badshah',
      role: 'Alternative Investments Specialist',
      bio: 'Expert in alternative investment strategies including REITs, commodities, and structured products. Taher brings unique insights into non-traditional asset classes for portfolio diversification.',
      image: '/images/team/taher-badshah.jpg',
      qualifications: ['Alternative Investment Analyst', 'Risk Management Certification', 'MBA', 'CPA'],
      experience: '8+ years',
      specialization: 'Alternative Investments, REITs',
      achievements: [
        'Pioneer in REIT investments in Indian markets',
        'Developed alternative investment strategies for HNI clients',
        'Expert in commodity trading and precious metals',
        'Regular columnist on alternative investments'
      ],
      philosophy: 'Alternative investments provide crucial diversification benefits and can enhance risk-adjusted returns. I focus on identifying unique opportunities across asset classes that traditional portfolios often miss.',
      portfolioStats: {
        aum: '₹150+ Cr',
        clients: '80+',
        avgReturn: '12.8%',
        experience: '8 years'
      }
    }
  };

  const manager = fundManagers[slug as keyof typeof fundManagers];

  if (!manager) {
    return (
      <div className="min-h-screen pt-16 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-serif font-bold text-gray-900 dark:text-white mb-4">
            Fund Manager Not Found
          </h1>
          <button
            onClick={() => navigate('/interviews')}
            className="px-6 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors duration-200"
          >
            Back to Fund Managers
          </button>
        </div>
      </div>
    );
  }

  const otherManagers = Object.entries(fundManagers)
    .filter(([key]) => key !== slug)
    .slice(0, 2)
    .map(([key, data]) => ({
      ...data,
      slug: key
    }));

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-primary-50 via-white to-secondary-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.button
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            onClick={() => navigate('/interviews')}
            className="flex items-center text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 mb-8 transition-colors duration-200"
          >
            <ArrowLeftIcon className="h-5 w-5 mr-2" />
            Back to Fund Managers
          </motion.button>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 dark:text-white mb-4">
                {manager.name}
              </h1>
              <p className="text-xl text-primary-600 dark:text-primary-400 font-semibold mb-6">
                {manager.role}
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-8">
                {manager.bio}
              </p>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700">
                  <div className="text-2xl font-bold text-primary-600 dark:text-primary-400">
                    {manager.portfolioStats.aum}
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Assets Under Management</div>
                </div>
                <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700">
                  <div className="text-2xl font-bold text-primary-600 dark:text-primary-400">
                    {manager.portfolioStats.clients}
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Happy Clients</div>
                </div>
                <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700">
                  <div className="text-2xl font-bold text-primary-600 dark:text-primary-400">
                    {manager.portfolioStats.avgReturn}
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Average Annual Return</div>
                </div>
                <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700">
                  <div className="text-2xl font-bold text-primary-600 dark:text-primary-400">
                    {manager.portfolioStats.experience}
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Experience</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <img
                src={manager.image}
                alt={manager.name}
                className="w-full h-96 object-cover rounded-2xl shadow-xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Qualifications & Specialization */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center mb-6">
                <AcademicCapIcon className="h-8 w-8 text-primary-600 dark:text-primary-400 mr-3" />
                <h2 className="text-2xl md:text-3xl font-serif font-bold text-gray-900 dark:text-white">
                  Qualifications
                </h2>
              </div>
              <div className="space-y-3">
                {manager.qualifications.map((qualification, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center p-3 bg-gray-50 dark:bg-gray-800 rounded-lg"
                  >
                    <div className="w-2 h-2 bg-primary-600 rounded-full mr-3"></div>
                    <span className="text-gray-700 dark:text-gray-300">{qualification}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center mb-6">
                <BriefcaseIcon className="h-8 w-8 text-primary-600 dark:text-primary-400 mr-3" />
                <h2 className="text-2xl md:text-3xl font-serif font-bold text-gray-900 dark:text-white">
                  Specialization
                </h2>
              </div>
              <div className="bg-gradient-to-br from-primary-50 to-secondary-50 dark:from-primary-900/20 dark:to-secondary-900/20 p-6 rounded-xl">
                <p className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  {manager.specialization}
                </p>
                <p className="text-gray-600 dark:text-gray-300">
                  {manager.experience} of dedicated experience in this field
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Investment Philosophy */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 dark:text-white mb-8">
              Investment Philosophy
            </h2>
            <blockquote className="text-xl text-gray-700 dark:text-gray-300 italic leading-relaxed bg-white dark:bg-gray-700 p-8 rounded-2xl shadow-lg">
              "{manager.philosophy}"
            </blockquote>
          </motion.div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="flex items-center justify-center mb-6">
              <StarIcon className="h-8 w-8 text-primary-600 dark:text-primary-400 mr-3" />
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 dark:text-white">
                Key Achievements
              </h2>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {manager.achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-start space-x-4 p-6 bg-gradient-to-br from-primary-50 to-secondary-50 dark:from-primary-900/20 dark:to-secondary-900/20 rounded-xl"
              >
                <div className="w-8 h-8 bg-primary-600 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                  {index + 1}
                </div>
                <span className="text-gray-700 dark:text-gray-300">{achievement}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Other Fund Managers */}
      {otherManagers.length > 0 && (
        <section className="py-20 bg-gray-50 dark:bg-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 dark:text-white mb-6">
                Other Fund Managers
              </h2>
            </motion.div>

            <Carousel slidesPerView={2} spaceBetween={30} autoplay={false}>
              {otherManagers.map((otherManager, index) => (
                <TeamCard
                  key={otherManager.slug}
                  name={otherManager.name}
                  role={otherManager.role}
                  bio={otherManager.bio}
                  image={otherManager.image}
                  qualifications={otherManager.qualifications}
                  slug={otherManager.slug}
                  index={index}
                />
              ))}
            </Carousel>
          </div>
        </section>
      )}

      {/* CTA Section */}
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
              Ready to Invest with {manager.name.split(' ')[0]}?
            </h2>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Get personalized investment advice and portfolio management services 
              from our experienced fund manager.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => navigate('/contact')}
                className="px-8 py-4 bg-white text-primary-600 font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
              >
                Schedule Consultation
              </button>
              {/* <button className="px-8 py-4 border-2 border-white text-white font-semibold rounded-xl hover:bg-white hover:text-primary-600 transition-all duration-200">
                View Portfolio
              </button> */}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default FundManagerDetail;