import React from 'react';
import { motion } from 'framer-motion';
import { 
  UserGroupIcon,
  ChartBarIcon,
  ShieldCheckIcon,
  CurrencyDollarIcon,
  DocumentTextIcon,
  PhoneIcon,
  CalendarDaysIcon,
  AcademicCapIcon

} from '@heroicons/react/24/outline';
import SEOHead from '../components/SEOHead';

const ClientServices: React.FC = () => {
  const services = [
    {
      title: 'Personalized Financial Planning',
      description: 'Comprehensive financial planning tailored to your unique goals, risk profile, and life stage.',
      icon: <UserGroupIcon className="h-8 w-8" />,
      features: ['Goal-based Planning', 'Risk Assessment', 'Asset Allocation', 'Regular Reviews'],
      color: 'from-blue-500 to-blue-600'
    },
    {
      title: 'Portfolio Management',
      description: 'Professional portfolio management with continuous monitoring and optimization.',
      icon: <ChartBarIcon className="h-8 w-8" />,
      features: ['Active Management', 'Performance Tracking', 'Rebalancing', 'Tax Optimization'],
      color: 'from-green-500 to-green-600'
    },
    {
      title: 'Investment Advisory',
      description: 'Expert investment advice across all asset classes with research-backed recommendations.',
      icon: <CurrencyDollarIcon className="h-8 w-8" />,
      features: ['Market Research', 'Stock Selection', 'Fund Analysis', 'Timing Strategies'],
      color: 'from-purple-500 to-purple-600'
    },
    {
      title: 'Risk Management',
      description: 'Comprehensive risk assessment and mitigation strategies for your investments.',
      icon: <ShieldCheckIcon className="h-8 w-8" />,
      features: ['Risk Analysis', 'Insurance Planning', 'Diversification', 'Hedging Strategies'],
      color: 'from-red-500 to-red-600'
    },
    {
      title: 'Tax Planning',
      description: 'Strategic tax planning to optimize your tax liability and maximize after-tax returns.',
      icon: <DocumentTextIcon className="h-8 w-8" />,
      features: ['Tax Optimization', 'Section 80C Planning', 'Capital Gains', 'Tax-efficient Investing'],
      color: 'from-orange-500 to-orange-600'
    },
    {
      title: 'Retirement Planning',
      description: 'Comprehensive retirement planning to ensure financial security in your golden years.',
      icon: <CalendarDaysIcon className="h-8 w-8" />,
      features: ['Corpus Calculation', 'Pension Planning', 'Post-retirement Income', 'Healthcare Planning'],
      color: 'from-teal-500 to-teal-600'
    },
    {
      title: '24/7 Client Support',
      description: 'Round-the-clock support for all your investment queries and portfolio concerns.',
      icon: <PhoneIcon className="h-8 w-8" />,
      features: ['Phone Support', 'Email Assistance', 'Online Chat', 'Emergency Support'],
      color: 'from-indigo-500 to-indigo-600'
    },
    {
      title: 'Financial Education',
      description: 'Regular workshops, webinars, and educational content to enhance your financial knowledge.',
      icon: <AcademicCapIcon className="h-8 w-8" />,
      features: ['Workshops', 'Webinars', 'Market Updates', 'Educational Resources'],
      color: 'from-pink-500 to-pink-600'
    }
  ];

  const processSteps = [
    {
      step: '01',
      title: 'Initial Consultation',
      description: 'Understanding your financial goals, current situation, and investment preferences.'
    },
    {
      step: '02',
      title: 'Financial Analysis',
      description: 'Comprehensive analysis of your finances, risk profile, and investment capacity.'
    },
    {
      step: '03',
      title: 'Strategy Development',
      description: 'Creating a personalized investment strategy aligned with your objectives.'
    },
    {
      step: '04',
      title: 'Implementation',
      description: 'Executing the investment plan with careful selection of appropriate instruments.'
    },
    {
      step: '05',
      title: 'Monitoring & Review',
      description: 'Continuous monitoring and periodic reviews to ensure optimal performance.'
    }
  ];

  return (
    <div className="min-h-screen pt-16">
      <SEOHead 
        title="Client Services - Personalized Financial Solutions | SaviWealth"
        description="Comprehensive client services including financial planning, portfolio management, investment advisory, and 24/7 support for all your wealth management needs."
        keywords="client services, financial planning, portfolio management, investment advisory, wealth management, financial consultation"
      />
      
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
              Client <span className="text-primary-600 dark:text-primary-400">Services</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Comprehensive financial services designed to provide personalized solutions, expert guidance, 
              and continuous support for all your wealth management needs.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 dark:text-white mb-6">
              Our Services
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              We offer a comprehensive suite of financial services to help you achieve your investment goals.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
                className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-gray-700 group"
              >
                {/* Icon */}
                <div className={`flex items-center justify-center w-16 h-16 bg-gradient-to-br ${service.color} rounded-xl mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <div className="text-white">
                    {service.icon}
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-xl font-serif font-bold text-gray-900 dark:text-white mb-3 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-xs text-gray-500 dark:text-gray-400">
                      <div className="w-1.5 h-1.5 bg-primary-500 rounded-full mr-2 flex-shrink-0"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
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
      <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 dark:text-white mb-6">
        Our Process
      </h2>
      <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
        Our systematic approach ensures personalized service and optimal results for every client.
      </p>
    </motion.div>

    <div className="grid grid-cols-1 md:grid-cols-5 gap-8 items-stretch">
      {processSteps.map((step, index) => (
        <motion.div
          key={step.step}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: index * 0.1 }}
          viewport={{ once: true }}
          className="text-center relative flex flex-col h-full"
        >
          <div className="bg-white dark:bg-gray-700 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-600 group flex flex-col h-full">
            {/* Step Number */}
            <div className="w-12 h-12 bg-primary-600 text-white text-lg font-bold rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
              {step.step}
            </div>

            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
              {step.title}
            </h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed flex-grow">
              {step.description}
            </p>
          </div>

          {/* Connector Arrow */}
          {index < processSteps.length - 1 && (
            <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2">
              <div className="w-8 h-0.5 bg-primary-300 dark:bg-primary-600"></div>
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
              Ready to Experience Our Services?
            </h2>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Schedule a consultation with our certified financial advisors and discover how we can help you achieve your financial goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-white text-primary-600 font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200">
                Schedule Consultation
              </button>
              {/* <button className="px-8 py-4 border-2 border-white text-white font-semibold rounded-xl hover:bg-white hover:text-primary-600 transition-all duration-200">
                Download Service Guide
              </button> */}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ClientServices;