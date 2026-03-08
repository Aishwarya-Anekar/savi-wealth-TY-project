import React from 'react';
import { motion } from 'framer-motion';
import { 
  ChartBarIcon,
  TruckIcon,
  BuildingOfficeIcon,
  CurrencyDollarIcon,
  ShieldCheckIcon,
  HomeIcon,
  ArrowRightIcon
} from '@heroicons/react/24/outline';
import ServiceCard from '../components/ServiceCard';

const Services: React.FC = () => {
  const services = [
    {
      title: 'Portfolio Analytics',
      description: 'Comprehensive portfolio analysis and reporting services designed to provide deep insights into your investment performance, risk exposure, and diversification strategies.',
      icon: <ChartBarIcon className="h-6 w-6" />,
      features: [
        'Family-level consolidated reporting across all investments',
        'Asset allocation analysis and rebalancing recommendations',
        'Performance benchmarking against relevant market indices',
        'Risk assessment and volatility analysis',
        'Diversification insights and optimization suggestions',
        'Tax efficiency analysis and reporting',
        'Regular portfolio health checks and reviews',
        'Custom reporting formats tailored to client needs'
      ]
    },
    {
      title: 'Transaction Advisory',
      description: 'End-to-end deal advisory services for mergers, acquisitions, private equity transactions, and strategic corporate actions with expert guidance throughout the process.',
      icon: <TruckIcon className="h-6 w-6" />,
      features: [
        'Merger & acquisition strategy and execution support',
        'Private equity and venture capital transaction advisory',
        'Due diligence coordination and management',
        'Business valuation and financial modeling',
        'Deal structuring and negotiation support',
        'Regulatory compliance and approval assistance',
        'Post-transaction integration planning',
        'Strategic divestment and exit planning'
      ]
    },
    {
      title: 'Tax Planning & Compliance',
      description: 'Comprehensive tax planning strategies and compliance management to optimize your tax efficiency while ensuring full regulatory compliance.',
      icon: <BuildingOfficeIcon className="h-6 w-6" />,
      features: [
        'Corporate tax planning and strategy development',
        'Personal income tax optimization',
        'GST compliance and advisory services',
        'International tax planning for global investments',
        'Transfer pricing documentation and compliance',
        'Tax-efficient investment structuring',
        'Regular compliance monitoring and reporting',
        'Representation in tax assessments and appeals'
      ]
    },
    {
      title: 'Mutual Fund Advisory',
      description: 'Expert guidance on mutual fund selection, portfolio construction, and ongoing management to help you achieve your investment objectives.',
      icon: <CurrencyDollarIcon className="h-6 w-6" />,
      features: [
        'Goal-based mutual fund selection',
        'SIP planning and optimization',
        'Lump sum investment strategies',
        'Tax-saving fund recommendations (ELSS)',
        'Sector and thematic fund analysis',
        'Regular portfolio review and rebalancing',
        'Fund performance monitoring',
        'Exit strategy planning and execution'
      ]
    },
    {
      title: 'Insurance Planning',
      description: 'Comprehensive insurance solutions covering life, health, and asset protection to safeguard your financial future and family security.',
      icon: <ShieldCheckIcon className="h-6 w-6" />,
      features: [
        'Life insurance needs analysis and planning',
        'Health insurance portfolio optimization',
        'Term insurance vs investment planning',
        'Critical illness and disability coverage',
        'Property and casualty insurance review',
        'Group insurance policy management',
        'Claims assistance and support',
        'Insurance portfolio regular reviews'
      ]
    },
    {
      title: 'Real Estate Advisory',
      description: 'Strategic real estate investment guidance covering direct property investments, REITs, and commercial real estate opportunities.',
      icon: <HomeIcon className="h-6 w-6" />,
      features: [
        'Real Estate Investment Trust (REIT) analysis',
        'Direct property investment evaluation',
        'Commercial real estate opportunities',
        'Real estate market research and analysis',
        'Property valuation and due diligence',
        'Real estate financing and structuring',
        'Portfolio diversification through real estate',
        'Exit strategy planning for real estate assets'
      ]
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
              Our <span className="text-primary-600 dark:text-primary-400">Services</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Comprehensive financial services designed to optimize your wealth, minimize risks, 
              and help you achieve your long-term financial objectives with expert guidance.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {services.map((service, index) => (
              <ServiceCard
                key={service.title}
                title={service.title}
                description={service.description}
                features={service.features}
                icon={service.icon}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
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
              Our <span className="text-primary-600 dark:text-primary-400">Process</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Our systematic approach ensures that every client receives personalized attention and expert guidance 
              throughout their financial journey.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 items-stretch">
  {[
    {
      step: '01',
      title: 'Discovery',
      description:
        'Understanding your financial goals, risk tolerance, and current situation through comprehensive analysis.',
    },
    {
      step: '02',
      title: 'Strategy',
      description:
        'Developing a customized financial strategy tailored to your specific needs and objectives.',
    },
    {
      step: '03',
      title: 'Implementation',
      description:
        'Executing the strategic plan with careful attention to timing, market conditions, and optimization.',
    },
    {
      step: '04',
      title: 'Monitoring',
      description:
        'Ongoing portfolio monitoring, performance tracking, and strategy adjustments as needed.',
    },
  ].map((item, index) => (
    <motion.div
      key={item.step}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="text-center relative flex flex-col h-full"
    >
      <div className="bg-white dark:bg-gray-700 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-600 flex flex-col justify-between h-full">
        {/* Step Number */}
        <div className="w-12 h-12 bg-primary-600 text-white text-lg font-bold rounded-full flex items-center justify-center mx-auto mb-4">
          {item.step}
        </div>

        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
          {item.title}
        </h3>
        <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
          {item.description}
        </p>
      </div>

      {/* Connector Arrow */}
      {index < 3 && (
        <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2">
          <ArrowRightIcon className="h-6 w-6 text-primary-400" />
        </div>
      )}
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
              Ready to Get Started?
            </h2>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Contact our team of certified financial advisors to discuss your specific needs 
              and learn how we can help you achieve your financial goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-white text-primary-600 font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200">
                Schedule Consultation
              </button>
              <button className="px-8 py-4 border-2 border-white text-white font-semibold rounded-xl hover:bg-white hover:text-primary-600 transition-all duration-200">
                Download Service Guide
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Services;