import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeftIcon, CheckCircleIcon } from '@heroicons/react/24/outline';
import Carousel from '../components/Carousel';
import ServiceCard from '../components/ServiceCard';

const ServiceDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();

  // Mock service data - in real app, this would come from API
  const services = {
    'portfolio-analytics': {
      title: 'Portfolio Analytics',
      description: 'Comprehensive portfolio analysis and reporting services designed to provide deep insights into your investment performance, risk exposure, and diversification strategies.',
      heroImage: '/images/services/portfolio-analytics.jpg',
      features: [
        'Family-level consolidated reporting across all investments',
        'Asset allocation analysis and rebalancing recommendations',
        'Performance benchmarking against relevant market indices',
        'Risk assessment and volatility analysis',
        'Diversification insights and optimization suggestions',
        'Tax efficiency analysis and reporting',
        'Regular portfolio health checks and reviews',
        'Custom reporting formats tailored to client needs'
      ],
      benefits: [
        'Make informed investment decisions with comprehensive data',
        'Optimize portfolio performance through professional analysis',
        'Reduce risk through proper diversification strategies',
        'Maximize tax efficiency across all investments'
      ],
      process: [
        'Initial portfolio assessment and data collection',
        'Comprehensive analysis using advanced analytics tools',
        'Detailed reporting with actionable insights',
        'Regular monitoring and performance updates'
      ]
    },
    'transaction-advisory': {
      title: 'Transaction Advisory',
      description: 'End-to-end deal advisory services for mergers, acquisitions, private equity transactions, and strategic corporate actions with expert guidance throughout the process.',
      heroImage: '/images/services/transaction-advisory.jpg',
      features: [
        'Merger & acquisition strategy and execution support',
        'Private equity and venture capital transaction advisory',
        'Due diligence coordination and management',
        'Business valuation and financial modeling',
        'Deal structuring and negotiation support',
        'Regulatory compliance and approval assistance',
        'Post-transaction integration planning',
        'Strategic divestment and exit planning'
      ],
      benefits: [
        'Expert guidance through complex transactions',
        'Maximize deal value and minimize risks',
        'Ensure regulatory compliance throughout the process',
        'Strategic planning for successful integration'
      ],
      process: [
        'Transaction strategy development and planning',
        'Due diligence and valuation analysis',
        'Deal structuring and negotiation support',
        'Closing coordination and post-transaction support'
      ]
    },
    'tax-planning': {
      title: 'Tax Planning & Compliance',
      description: 'Comprehensive tax planning strategies and compliance management to optimize your tax efficiency while ensuring full regulatory compliance.',
      heroImage: '/images/services/tax-planning.jpg',
      features: [
        'Corporate tax planning and strategy development',
        'Personal income tax optimization',
        'GST compliance and advisory services',
        'International tax planning for global investments',
        'Transfer pricing documentation and compliance',
        'Tax-efficient investment structuring',
        'Regular compliance monitoring and reporting',
        'Representation in tax assessments and appeals'
      ],
      benefits: [
        'Minimize tax liability through strategic planning',
        'Ensure full compliance with tax regulations',
        'Optimize investment structures for tax efficiency',
        'Professional representation in tax matters'
      ],
      process: [
        'Tax situation assessment and planning',
        'Strategy development and implementation',
        'Ongoing compliance monitoring',
        'Regular reviews and optimization'
      ]
    }
  };

  const service = services[slug as keyof typeof services];

  if (!service) {
    return (
      <div className="min-h-screen pt-16 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-serif font-bold text-gray-900 dark:text-white mb-4">
            Service Not Found
          </h1>
          <button
            onClick={() => navigate('/services')}
            className="px-6 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors duration-200"
          >
            Back to Services
          </button>
        </div>
      </div>
    );
  }

  const relatedServices = Object.entries(services)
    .filter(([key]) => key !== slug)
    .slice(0, 2)
    .map(([key, data]) => ({
      ...data,
      slug: key,
      icon: <CheckCircleIcon className="h-6 w-6" />
    }));

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-primary-50 via-white to-secondary-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.button
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            onClick={() => navigate('/services')}
            className="flex items-center text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 mb-8 transition-colors duration-200"
          >
            <ArrowLeftIcon className="h-5 w-5 mr-2" />
            Back to Services
          </motion.button>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 dark:text-white mb-6">
                {service.title}
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
                {service.description}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <img
                src={service.heroImage}
                alt={service.title}
                className="w-full h-80 object-cover rounded-2xl shadow-xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
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
              What We Offer
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {service.features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-start space-x-3 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg"
              >
                <CheckCircleIcon className="h-6 w-6 text-primary-600 dark:text-primary-400 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700 dark:text-gray-300">{feature}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl md:text-3xl font-serif font-bold text-gray-900 dark:text-white mb-6">
                Key Benefits
              </h3>
              <div className="space-y-4">
                {service.benefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start space-x-3"
                  >
                    <div className="w-2 h-2 bg-primary-600 rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-gray-700 dark:text-gray-300">{benefit}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl md:text-3xl font-serif font-bold text-gray-900 dark:text-white mb-6">
                Our Process
              </h3>
              <div className="space-y-4">
                {service.process.map((step, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start space-x-4"
                  >
                    <div className="w-8 h-8 bg-primary-600 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                      {index + 1}
                    </div>
                    <span className="text-gray-700 dark:text-gray-300 pt-1">{step}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Related Services */}
      {relatedServices.length > 0 && (
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
                Related Services
              </h2>
            </motion.div>

            <Carousel slidesPerView={2} spaceBetween={30} autoplay={false}>
              {relatedServices.map((relatedService, index) => (
                <ServiceCard
                  key={relatedService.slug}
                  title={relatedService.title}
                  description={relatedService.description}
                  features={relatedService.features.slice(0, 4)}
                  icon={relatedService.icon}
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
              Ready to Get Started?
            </h2>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Contact our team of certified financial advisors to discuss how {service.title.toLowerCase()} 
              can help you achieve your financial goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => navigate('/contact')}
                className="px-8 py-4 bg-white text-primary-600 font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
              >
                Schedule Consultation
              </button>
              <button className="px-8 py-4 border-2 border-white text-white font-semibold rounded-xl hover:bg-white hover:text-primary-600 transition-all duration-200">
                Download Brochure
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ServiceDetail;