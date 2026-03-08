import React from 'react';
import { motion } from 'framer-motion';
import Carousel from '../components/Carousel';
import TeamCard from '../components/TeamCard';

const Interviews: React.FC = () => {
  const fundManagers = [
    {
      name: 'Shriram Ramanathan',
      role: 'Senior Fund Manager',
      bio: 'Over 15 years of experience in equity markets with expertise in value investing and portfolio construction.',
      image: '/images/team/shriram-ramanathan.jpg',
      qualifications: ['CFA Charter', 'FRM Certified', 'MBA Finance'],
      slug: 'shriram-ramanathan'
    },
    {
      name: 'Venugopal Manghat',
      role: 'Head of Fixed Income',
      bio: 'Specialist in debt markets and fixed income strategies with 12+ years of institutional experience.',
      image: '/images/team/venugopal-manghat.jpg',
      qualifications: ['CFA Charter', 'Fixed Income Specialist', 'CA'],
      slug: 'venugopal-manghat'
    },
    {
      name: 'Vikas Garg',
      role: 'Equity Research Head',
      bio: 'Leading equity research analyst with focus on mid-cap and small-cap investment opportunities.',
      image: '/images/team/vikas-garg.jpg',
      qualifications: ['CFA Charter', 'Equity Research', 'MSc Finance'],
      slug: 'vikas-garg'
    },
    {
      name: 'Taher Badshah',
      role: 'Alternative Investments',
      bio: 'Expert in alternative investment strategies including REITs, commodities, and structured products.',
      image: '/images/team/taher-badshah.jpg',
      qualifications: ['Alternative Investment Analyst', 'Risk Management', 'MBA'],
      slug: 'taher-badshah'
    }
  ];

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
              Fund Manager <span className="text-primary-600 dark:text-primary-400">Interviews</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Meet our experienced fund managers and learn about their investment philosophies, 
              strategies, and insights into the financial markets.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Fund Managers Carousel */}
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
              Meet Our <span className="text-primary-600 dark:text-primary-400">Fund Managers</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Experienced professionals with proven track records in managing investments and delivering consistent returns.
            </p>
          </motion.div>

          <Carousel slidesPerView={3} spaceBetween={30} autoplay={true}>
            {fundManagers.map((manager, index) => (
              <TeamCard
                key={manager.slug}
                name={manager.name}
                role={manager.role}
                bio={manager.bio}
                image={manager.image}
                qualifications={manager.qualifications}
                slug={manager.slug}
                index={index}
              />
            ))}
          </Carousel>
        </div>
      </section>

      {/* Fund Managers Grid */}
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
              Detailed <span className="text-primary-600 dark:text-primary-400">Profiles</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Click on any fund manager to learn more about their background, expertise, and investment approach.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {fundManagers.map((manager, index) => (
              <TeamCard
                key={manager.slug}
                name={manager.name}
                role={manager.role}
                bio={manager.bio}
                image={manager.image}
                qualifications={manager.qualifications}
                slug={manager.slug}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Investment Philosophy Section */}
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
              Our Investment <span className="text-primary-600 dark:text-primary-400">Philosophy</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Research-Driven Approach',
                description: 'Our fund managers conduct thorough fundamental analysis and market research to identify the best investment opportunities.',
                icon: '🔍'
              },
              {
                title: 'Risk Management',
                description: 'We prioritize capital preservation through diversification, careful position sizing, and continuous risk monitoring.',
                icon: '🛡️'
              },
              {
                title: 'Long-term Value Creation',
                description: 'Our focus is on building sustainable wealth through disciplined investing and patient capital allocation.',
                icon: '📈'
              },
              {
                title: 'Client-Centric Solutions',
                description: 'Every investment strategy is tailored to meet the specific goals and risk tolerance of our clients.',
                icon: '🎯'
              },
              {
                title: 'Continuous Learning',
                description: 'Our team stays updated with market trends, regulatory changes, and emerging investment opportunities.',
                icon: '📚'
              },
              {
                title: 'Transparent Communication',
                description: 'We maintain open communication with clients, providing regular updates and detailed performance reports.',
                icon: '💬'
              }
            ].map((philosophy, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-primary-50 to-secondary-50 dark:from-primary-900/20 dark:to-secondary-900/20 rounded-2xl p-8 text-center hover:shadow-lg transition-all duration-300"
              >
                <div className="text-4xl mb-4">{philosophy.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                  {philosophy.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {philosophy.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

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
              Ready to Start Investing?
            </h2>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Connect with our fund managers to discuss your investment goals and create a personalized portfolio strategy.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-white text-primary-600 font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200">
                Schedule Consultation
              </button>
              <button className="px-8 py-4 border-2 border-white text-white font-semibold rounded-xl hover:bg-white hover:text-primary-600 transition-all duration-200">
                View Our Services
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Interviews;