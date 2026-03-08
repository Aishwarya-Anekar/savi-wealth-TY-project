import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  ChartBarIcon, 
  ShieldCheckIcon, 
  CurrencyDollarIcon,
  BuildingOfficeIcon,
  HomeIcon,
} from '@heroicons/react/24/outline';
import SEOHead from '../components/SEOHead';

const ProductBasket: React.FC = () => {
  const products = [
    {
      title: 'Mutual Funds',
      description: 'Smartly managed equity and debt mutual fund solutions tailored to your financial goals, with expert-curated portfolios and risk-aligned strategies.',
      icon: <ChartBarIcon className="h-6 w-6" />,
      features: [
        'SIP & One-time Investments',
        'Tax Benefits through ELSS (Section 80C)',
        'Custom Portfolios for Life Goals',
        'Ongoing Performance Monitoring & Rebalancing'
      ],
      slug: 'mutual-funds',
      color: 'from-blue-500 to-blue-600',
      bgImage: '/images/mutual_fund.jpg'
    },
    {
      title: 'Capital Market',
      description: 'Access equity, debt, and hybrid instruments through our expert-led capital market solutions designed to optimize returns and manage risk effectively.',
      icon: <ShieldCheckIcon className="h-6 w-6" />,
      features: [
        'Equity & Debt Investment Opportunities',
        'In-depth Market Research & Insights',
        'Risk-adjusted Return Strategies',
        'Real-time Market Monitoring'
      ],
      slug: 'capital-market',
      color: 'from-green-500 to-green-600',
      bgImage: '/images/capital_market.jpg'
    },
    {
      title: 'Fixed Income',
      description: 'Stable and secure investment options offering predictable returns through bonds, government securities, and other fixed income instruments with low volatility and capital preservation.',
      icon: <CurrencyDollarIcon className="h-6 w-6" />,
      features: [
        'Government & Corporate Bonds',
        'Capital Protection & Steady Returns',
        'Interest Rate Risk Management',
        'Laddering & Duration Strategies'
      ],
      slug: 'fixed-income',
      color: 'from-purple-500 to-purple-600',
      bgImage: '/images/fixed_income.jpg'
    },
    {
      title: 'Insurance',
      description: 'Comprehensive insurance solutions to protect your life, health, and wealth ensuring financial security and peace of mind.',
      icon: <BuildingOfficeIcon className="h-6 w-6" />,
      features: [
        'Life & Term Insurance Plans',
        'Health & Critical Illness Coverage',
        'Wealth Protection Strategies',
        'Claims Assistance & Policy Reviews'
      ],
      slug: 'insurance',
      color: 'from-orange-500 to-orange-600',
      bgImage: '/images/insurance_img.jpg'
    },
    {
      title: 'Real Estate',
      description: 'Strategic real estate investment opportunities across residential, commercial, and land segments curated for long-term value and diversification.',
      icon: <ShieldCheckIcon className="h-6 w-6" />,
      features: [
        'Residential & Commercial Properties',
        'Land Investment Opportunities',
        'Rental Yield & Capital Appreciation',
        'Legal & Documentation Assistance'
      ],
      slug: 'real-estate',
      color: 'from-red-500 to-red-600',
      bgImage: '/images/real_estate.jpg'
    },
    {
      title: 'PMS',
      description: 'Expert-managed investment portfolios tailored to your goals and risk profile. Ideal for long-term wealth creation with active management.',
      icon: <HomeIcon className="h-6 w-6" />,
      features: [
        'Tailored Investment Strategies',
        'Concentrated Equity Portfolios',
        'Active Fund Management',
        'Detailed Reporting & Transparency'
      ],
      slug: 'pms',
      color: 'from-teal-500 to-teal-600',
      bgImage: '/images/pms_img.jpg'
    },
  ];

  return (
    <div className="min-h-screen pt-16">
      <SEOHead 
        title="Product Basket - Investment Solutions | SaviWealth"
        description="Explore our comprehensive range of investment products including mutual funds, equity investments, insurance, and real estate solutions."
        keywords="mutual funds, equity investments, insurance, real estate, fixed deposits, tax planning, portfolio management"
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
              Our Product <span className="text-primary-600 dark:text-primary-400">Basket</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Comprehensive financial solutions designed to help you achieve your investment goals 
              with expert guidance and personalized strategies across all asset classes.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <motion.div
                key={product.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
                className="rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 bg-white dark:bg-gray-800 flex flex-col"
              >
                {/* Image */}
                <img 
                  src={product.bgImage} 
                  alt={product.title} 
                  className="w-full h-48 object-cover"
                />

                {/* Content */}
                <div className="p-6 flex-1 flex flex-col">
                  {/* Icon + Title in one line */}
                  <div className="flex items-center gap-3 mb-3">
                    <div className={`flex items-center justify-center w-10 h-10 bg-gradient-to-br ${product.color} rounded-lg`}>
                      <div className="text-white">
                        {React.cloneElement(product.icon, { className: "h-5 w-5" })}
                      </div>
                    </div>
                    <h3 className="text-lg font-serif font-bold text-gray-900 dark:text-white">
                      {product.title}
                    </h3>
                  </div>

                  <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm leading-relaxed">
                    {product.description}
                  </p>

                  {/* Features */}
                  <ul className="space-y-2 mb-6">
                    {product.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-xs text-gray-500 dark:text-gray-400">
                        <div className="w-1.5 h-1.5 bg-primary-400 rounded-full mr-2 flex-shrink-0"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <div className="mt-auto">
                    <Link to={`/${product.slug}`}
                          className="w-full inline-block text-center py-2 text-primary-600 dark:text-primary-400 font-medium text-sm border border-primary-600 dark:border-primary-400 rounded-lg hover:bg-primary-600 hover:text-white dark:hover:bg-primary-400 dark:hover:text-white transition-colors duration-200">
                          Learn More
                    </Link>
                  </div>
                </div>
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
              Ready to Build Your Portfolio?
            </h2>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Get personalized investment recommendations from our certified experts and start your wealth creation journey today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-white text-primary-600 font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200">
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

export default ProductBasket;
