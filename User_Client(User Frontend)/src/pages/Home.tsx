import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  ChartBarIcon, 
  ShieldCheckIcon, 
  CurrencyDollarIcon,
  BuildingOfficeIcon,
  TruckIcon,
  HomeIcon,
  ArrowRightIcon,
  PlayIcon
} from '@heroicons/react/24/outline';
import Hero from '../components/Hero';
import ProductCard from '../components/ProductCard';
import Counter from '../components/Counter';
import ServiceCard from '../components/ServiceCard';
import ArticleCard from '../components/ArticleCard';
import SIPCalculator from '../components/tools/SIPCalculator';
import TeamCard from '../components/TeamCard';
import Carousel from '../components/Carousel';
import SEOHead from '../components/SEOHead';
import { Link } from "react-router-dom";


const Home: React.FC = () => {
  const [countersVisible, setCountersVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setCountersVisible(true);
        }
      },
      { threshold: 0.5 }
    );

    const counterSection = document.getElementById('counters');
    if (counterSection) {
      observer.observe(counterSection);
    }

    return () => observer.disconnect();
  }, []);

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
      },
      {
        title: 'Real Estate',
        description: 'Strategic real estate investment opportunities across residential, commercial, and land segments curated for long-term value and diversification.',
        icon: <HomeIcon className="h-6 w-6" />,
        features: [
          'Residential & Commercial Properties',
          'Land Investment Opportunities',
          'Rental Yield & Capital Appreciation',
          'Legal & Documentation Assistance'
        ],
        slug: 'real-estate',
        color: 'from-red-500 to-red-600',
      },
      {
        title: 'PMS',
        description: 'Expert-managed investment portfolios tailored to your goals and risk profile. Ideal for long-term wealth creation with active management.',
        icon: <ShieldCheckIcon className="h-6 w-6" />,
        features: [
          'Tailored Investment Strategies',
          'Concentrated Equity Portfolios',
          'Active Fund Management',
          'Detailed Reporting & Transparency'
        ],
        slug: 'pms',
        color: 'from-teal-500 to-teal-600',
      },
  ];

  const services = [
    {
      title: 'Portfolio Analytics',
      description: 'Comprehensive portfolio analysis with family-level reporting, diversification insights, and performance benchmarking against market indices.',
      icon: <ChartBarIcon className="h-6 w-6" />,
      features: [
        'Family-level consolidated reports',
        'Asset allocation analysis',
        'Performance benchmarking',
        'Risk assessment metrics',
        'Diversification insights'
      ]
    },
    {
      title: 'Transaction Advisory',
      description: 'End-to-end deal advisory services for M&A, private equity transactions, and strategic divestments.',
      icon: <TruckIcon className="h-6 w-6" />,
      features: [
        'Merger & Acquisition support',
        'Private equity transactions',
        'Due diligence services',
        'Valuation assistance',
        'Strategic advisory'
      ]
    },
    {
      title: 'Tax Planning',
      description: 'Comprehensive tax planning and compliance services including corporate tax management and financial reporting.',
      icon: <BuildingOfficeIcon className="h-6 w-6" />,
      features: [
        'Corporate tax planning',
        'Compliance management',
        'Financial reporting',
        'Tax optimization strategies',
        'Regulatory compliance'
      ]
    }
  ];

  const articles = [
    {
      title: 'Market Outlook 2024: Navigating Volatile Times',
      excerpt: 'Understanding market dynamics and investment strategies for the upcoming fiscal year with expert insights.',
      date: 'Dec 15, 2024',
      readTime: '5 min read',
      image: '/images/articles/image1.jpg',
      category: 'Market Analysis',
      slug: 'market-outlook-2024'
    },
    {
      title: 'Tax-Saving Investments: A Complete Guide',
      excerpt: 'Comprehensive guide to tax-saving investment options under Section 80C and other provisions.',
      date: 'Dec 10, 2024',
      readTime: '8 min read',
      image: '/images/articles/image2.jpg',
      category: 'Tax Planning',
      slug: 'tax-saving-investments'
    },
    {
      title: 'SIP vs Lump Sum: Which is Better?',
      excerpt: 'Detailed comparison of systematic investment plans versus lump sum investing strategies.',
      date: 'Dec 5, 2024',
      readTime: '6 min read',
      image: '/images/articles/image3.jpg',
      category: 'Investment Strategy',
      slug: 'sip-vs-lump-sum'
    }
  ];

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
    <div className="min-h-screen">
      <SEOHead 
        title="SaviWealth - Professional Wealth Management & Investment Advisory"
        description="Expert financial advisory services with personalized investment strategies, portfolio management, and wealth preservation. NSE certified and AMFI registered since 2022."
        keywords="wealth management, investment advisory, portfolio management, mutual funds, SIP calculator, financial planning, tax saving, NSE certified, AMFI registered"
      />
      
      {/* Hero Section */}
      <Hero />

      {/* Product Basket Section */}
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
              Our Product <span className="text-primary-600 dark:text-primary-400">Basket</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Comprehensive financial solutions designed to help you achieve your investment goals 
              with expert guidance and personalized strategies.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {products.map((product, index) => (
              <ProductCard
                key={product.title}
                title={product.title}
                description={product.description}
                icon={product.icon}
                // features={product.features}
                slug={product.slug}
                index={index}
              />
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-center"
          >

        <Link 
          to="/product-basket"
          className="px-8 py-4 bg-primary-600 hover:bg-primary-700 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
        >
          View All Products
          <ArrowRightIcon className="h-5 w-5 ml-2 inline" />
        </Link>
            
          </motion.div>
        </div>
      </section>

      {/* What We Offer Section */}
      <section className="py-20 bg-gradient-to-br from-primary-50 to-secondary-50 dark:from-gray-800 dark:to-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 dark:text-white mb-6">
              What We <span className="text-primary-600 dark:text-primary-400">Offer</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Our systematic approach to wealth management follows a proven methodology 
              that has helped hundreds of clients achieve their financial goals.
            </p>
          </motion.div>

          {/* Process Steps */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            {[
              {
                step: '01',
                title: 'PLAN',
                description: 'Comprehensive financial planning tailored to your goals, risk profile, and investment horizon.',
                icon: <ChartBarIcon className="h-8 w-8" />
              },
              {
                step: '02',
                title: 'EXECUTE',
                description: 'Strategic implementation of your investment plan with careful selection of financial instruments.',
                icon: <PlayIcon className="h-8 w-8" />
              },
              {
                step: '03',
                title: 'MANAGE',
                description: 'Ongoing portfolio monitoring, rebalancing, and optimization to ensure consistent performance.',
                icon: <ShieldCheckIcon className="h-8 w-8" />
              }
            ].map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="relative text-center"
              >
                <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-600 group">
                  {/* Step Number */}
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="w-8 h-8 bg-primary-600 text-white text-sm font-bold rounded-full flex items-center justify-center">
                      {item.step}
                    </div>
                  </div>

                  {/* Icon */}
                  <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-2xl mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <div className="text-white">
                      {item.icon}
                    </div>
                  </div>

                  <h3 className="text-2xl font-serif font-bold text-gray-900 dark:text-white mb-4">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {/* Arrow (except for last item) */}
                {index < 2 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <ArrowRightIcon className="h-6 w-6 text-primary-400" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>

          {/* Metrics */}
          <div id="counters" className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <Counter target={500} label="Happy Clients" suffix="+" isVisible={countersVisible} index={0} />
            <Counter target={100} label="Crores AUM" suffix="+" isVisible={countersVisible} index={1} />
            <Counter target={15} label="Industry Awards" isVisible={countersVisible} index={2} />
            <Counter target={2} label="Years Experience" suffix="+" isVisible={countersVisible} index={3} />
          </div>
        </div>
      </section>

      {/* Services Section */}
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
              Our <span className="text-primary-600 dark:text-primary-400">Services</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Professional financial services designed to optimize your wealth and achieve your long-term financial objectives.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
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

      {/* Articles Section */}
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
              Latest <span className="text-primary-600 dark:text-primary-400">Insights</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Stay informed with our latest market analysis, investment strategies, and financial planning insights.
            </p>
          </motion.div>

          <Carousel slidesPerView={3} spaceBetween={30} autoplay={true}>
            {articles.map((article, index) => (
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

      {/* Tools Section */}
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
              Financial <span className="text-primary-600 dark:text-primary-400">Tools</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Plan your investments with our interactive calculators and financial planning tools.
            </p>
          </motion.div>

          <SIPCalculator />
        </div>
      </section>

      {/* Fund Managers Section */}
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
              Our Expert <span className="text-primary-600 dark:text-primary-400">Team</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Meet our experienced professionals who combine deep market expertise with personalized client service to deliver exceptional financial advisory solutions.
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
              Ready to Start Your Investment Journey?
            </h2>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Get personalized financial advice from our certified experts and take the first step 
              towards achieving your financial goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/schedule-consultation"
                className="px-8 py-4 bg-white text-primary-600 font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
              >
                Schedule Consultation
              </Link>
              <button className="px-8 py-4 border-2 border-white text-white font-semibold rounded-xl hover:bg-white hover:text-primary-600 transition-all duration-200"> Download Brochure </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;