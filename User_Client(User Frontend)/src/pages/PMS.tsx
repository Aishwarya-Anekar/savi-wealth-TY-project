import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { 
  Briefcase, 
  TrendingUp, 
  Target, 
  BarChart3,
  CheckCircle,
  ArrowRight,
  Users,
  ChevronDown,
  ChevronUp,
  Phone,
  Mail,
  Crown,
  Shield,
  Eye,
  Award
} from 'lucide-react';

const PMS = () => {
  const [expandedFAQ, setExpandedFAQ] = useState<number | null>(null);

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const staggerChildren = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const offerings = [
    {
      title: 'Aggressive Growth Strategy',
      description: 'High-growth portfolio focused on emerging opportunities and growth stocks',
      icon: TrendingUp,
      features: ['Growth Stocks Focus', 'Emerging Market Exposure', 'High Alpha Generation', 'Active Risk Management']
    },
    {
      title: 'Defensive Strategy',
      description: 'Conservative approach prioritizing capital preservation with steady returns',
      icon: Shield,
      features: ['Blue-chip Stocks', 'Dividend Yield Focus', 'Low Volatility', 'Capital Protection']
    },
    {
      title: 'Hybrid Approach',
      description: 'Balanced strategy combining growth and value investing principles',
      icon: Target,
      features: ['Diversified Portfolio', 'Risk-adjusted Returns', 'Flexible Allocation', 'Market Cycle Adaptation']
    },
    {
      title: 'Sector Focused',
      description: 'Specialized portfolios targeting specific high-potential sectors',
      icon: BarChart3,
      features: ['Technology Focus', 'Healthcare Sector', 'Financial Services', 'Infrastructure Plays']
    }
  ];

  const benefits = [
    'Dedicated portfolio manager exclusively managing your investments',
    'Customized investment strategy tailored to your risk profile and goals',
    'Direct ownership of stocks in your demat account for full transparency',
    'Regular portfolio reviews and performance reporting',
    'Tax-efficient portfolio construction and rebalancing'
  ];

  const howItWorks = [
    {
      step: 1,
      title: 'Initial Consultation',
      description: 'Detailed discussion about your investment goals, risk tolerance, and expectations',
      icon: Users
    },
    {
      step: 2,
      title: 'Strategy Design',
      description: 'Custom portfolio strategy designed specifically for your requirements',
      icon: Target
    },
    {
      step: 3,
      title: 'Portfolio Construction',
      description: 'Professional stock selection and portfolio construction in your demat account',
      icon: Briefcase
    },
    {
      step: 4,
      title: 'Active Management',
      description: 'Ongoing monitoring, rebalancing, and optimization of your portfolio',
      icon: TrendingUp
    }
  ];

  const whyChooseSavi = [
    {
      title: 'Experienced Fund Managers',
      description: 'Team of seasoned professionals with 15+ years of market experience',
      icon: Award
    },
    {
      title: 'Transparent Reporting',
      description: 'Complete transparency with detailed monthly reports and performance analytics',
      icon: Eye
    },
    {
      title: 'Personalized Service',
      description: 'Dedicated relationship manager for personalized attention and service',
      icon: Crown
    },
    {
      title: 'Proven Track Record',
      description: 'Consistent outperformance with risk-adjusted returns across market cycles',
      icon: TrendingUp
    }
  ];

  const faqs = [
    {
      question: 'What is the minimum investment required for PMS?',
      answer: 'The minimum investment for Portfolio Management Services is ₹50 lakhs as per SEBI regulations. This ensures that we can create a well-diversified portfolio with adequate stock selection.'
    },
    {
      question: 'How is PMS different from mutual funds?',
      answer: 'In PMS, you directly own the stocks in your demat account, get customized portfolio strategy, and have a dedicated fund manager. Mutual funds pool money from multiple investors and follow a standard strategy for all investors.'
    },
    {
      question: 'What are the fees for PMS services?',
      answer: 'Our PMS fees typically range from 1.5% to 2.5% per annum plus performance fees. The exact fee structure depends on the investment amount and strategy chosen. We believe in aligning our interests with yours through performance-linked fees.'
    },
    {
      question: 'How often will I receive portfolio updates?',
      answer: 'You will receive detailed monthly portfolio statements, quarterly performance reviews, and annual strategy presentations. Additionally, you can access your portfolio performance online 24/7 through our client portal.'
    },
    {
      question: 'Can I withdraw my money anytime from PMS?',
      answer: 'Yes, PMS offers high liquidity. You can redeem your investments anytime, though we recommend staying invested for at least 3-5 years to benefit from our long-term investment approach and to ride out market volatility.'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Portfolio Management Services (PMS) - Professional Investment Management | SAVI Wealth</title>
        <meta name="description" content="Professional Portfolio Management Services with SAVI Wealth. Customized investment strategies, dedicated fund managers, and transparent reporting for HNI investors." />
        <meta name="keywords" content="portfolio management services, PMS, professional investment management, dedicated fund manager, customized portfolio" />
      </Helmet>

      <div className="pt-16">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-purple-600 via-indigo-600 to-blue-600 relative overflow-hidden">
          <div className="absolute inset-0 bg-black/10" />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="text-white"
              >
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center">
                    <Briefcase className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h1 className="text-5xl md:text-6xl font-bold">PMS</h1>
                    <p className="text-xl text-purple-100 mt-2">Portfolio Management Services</p>
                  </div>
                </div>
                <p className="text-xl md:text-2xl text-purple-100 mb-8 leading-relaxed">
                  Exclusive investment management for high-net-worth individuals. 
                  Get a dedicated fund manager and customized investment strategy.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  {/* <button className="bg-white text-purple-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-purple-50 transform hover:scale-105 transition-all duration-200 flex items-center space-x-2">
                    <Phone className="w-5 h-5" />
                    <span>Schedule Meeting</span>
                  </button> */}
                  {/* <button className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-purple-600 transition-colors duration-200 flex items-center space-x-2">
                    <Mail className="w-5 h-5" />
                    <span>Get Portfolio Review</span>
                  </button> */}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative"
              >
                <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
                  <div className="grid grid-cols-2 gap-6">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-white mb-2">₹50L</div>
                      <div className="text-purple-100">Min Investment</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-white mb-2">15-20%</div>
                      <div className="text-purple-100">Target Returns</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-white mb-2">15+</div>
                      <div className="text-purple-100">Years Experience</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-white mb-2">100%</div>
                      <div className="text-purple-100">Transparency</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* What We Offer */}
        <section className="py-20 bg-white dark:bg-slate-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={staggerChildren}
              className="text-center mb-16"
            >
              <motion.h2 
                variants={fadeInUp}
                className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4"
              >
                Investment Strategies
              </motion.h2>
              <motion.p 
                variants={fadeInUp}
                className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto"
              >
                Choose from our range of professionally managed investment strategies
              </motion.p>
            </motion.div>

            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={staggerChildren}
              className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
            >
              {offerings.map((offering, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className="bg-slate-50 dark:bg-slate-800 p-6 rounded-2xl hover:shadow-lg transition-all duration-300 group"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-200">
                    <offering.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
                    {offering.title}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-300 mb-4">
                    {offering.description}
                  </p>
                  <ul className="space-y-2">
                    {offering.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-slate-600 dark:text-slate-300">
                        <CheckCircle className="w-4 h-4 text-green-600 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Key Benefits */}
        <section className="py-20 bg-slate-50 dark:bg-slate-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
                PMS Advantages
              </h2>
              <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
                Why high-net-worth investors choose Portfolio Management Services
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start space-x-4 bg-white dark:bg-slate-900 p-6 rounded-xl shadow-lg"
                >
                  <CheckCircle className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
                  <p className="text-slate-700 dark:text-slate-300 leading-relaxed">{benefit}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-20 bg-white dark:bg-slate-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
                Our PMS Process
              </h2>
              <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
                How we create and manage your personalized investment portfolio
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {howItWorks.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  className="text-center relative"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4 relative z-10">
                    <step.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="absolute top-8 left-1/2 w-full h-0.5 bg-gradient-to-r from-purple-600 to-indigo-600 transform -translate-x-1/2 hidden lg:block" 
                       style={{ display: index === howItWorks.length - 1 ? 'none' : 'block' }} />
                  <div className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white text-sm font-bold w-8 h-8 rounded-full flex items-center justify-center mx-auto mb-4 relative z-20 -mt-12">
                    {step.step}
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
                    {step.title}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-300">
                    {step.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose SAVI */}
        <section className="py-20 bg-slate-50 dark:bg-slate-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
                Why Choose SAVI PMS?
              </h2>
              <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
                What sets our Portfolio Management Services apart
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              {whyChooseSavi.map((reason, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start space-x-4 bg-white dark:bg-slate-900 p-8 rounded-2xl shadow-lg"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <reason.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
                      {reason.title}
                    </h3>
                    <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                      {reason.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-purple-600 to-indigo-600">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready for Professional Portfolio Management?
              </h2>
              <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
                Join our exclusive PMS program and get dedicated fund management for your wealth creation goals.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                {/* <button className="bg-white text-purple-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-purple-50 transform hover:scale-105 transition-all duration-200 flex items-center justify-center space-x-2">
                  <Phone className="w-5 h-5" />
                  <span>Schedule Meeting</span>
                </button> */}
                <button className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-purple-600 transition-colors duration-200 flex items-center justify-center space-x-2">
                  <ArrowRight className="w-5 h-5" />
                  <span>Download Brochure</span>
                </button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* FAQs */}
        <section className="py-20 bg-white dark:bg-slate-900">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
                PMS FAQs
              </h2>
              <p className="text-xl text-slate-600 dark:text-slate-300">
                Common questions about Portfolio Management Services
              </p>
            </motion.div>

            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-slate-50 dark:bg-slate-800 rounded-xl overflow-hidden"
                >
                  <button
                    onClick={() => setExpandedFAQ(expandedFAQ === index ? null : index)}
                    className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors"
                  >
                    <span className="text-lg font-semibold text-slate-900 dark:text-white">
                      {faq.question}
                    </span>
                    {expandedFAQ === index ? (
                      <ChevronUp className="w-5 h-5 text-slate-500" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-slate-500" />
                    )}
                  </button>
                  {expandedFAQ === index && (
                    <div className="px-6 pb-4">
                      <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20 bg-slate-50 dark:bg-slate-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-6">
                  Exclusive PMS Services
                </h2>
                <p className="text-xl text-slate-600 dark:text-slate-300 mb-8">
                  Our Portfolio Management Services are designed for sophisticated investors seeking professional management and superior returns.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Phone className="w-5 h-5 text-purple-600" />
                    <span className="text-slate-700 dark:text-slate-300">+91 9876543210</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Mail className="w-5 h-5 text-purple-600" />
                    <span className="text-slate-700 dark:text-slate-300">pms@saviwealth.com</span>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-slate-900 p-8 rounded-2xl shadow-lg"
              >
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
                  Schedule PMS Consultation
                </h3>
                <form className="space-y-4">
                  <div>
                    <input
                      type="text"
                      placeholder="Full Name"
                      className="w-full px-4 py-3 border border-slate-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      placeholder="Email Address"
                      className="w-full px-4 py-3 border border-slate-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <input
                      type="tel"
                      placeholder="Phone Number"
                      className="w-full px-4 py-3 border border-slate-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <select className="w-full px-4 py-3 border border-slate-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent">
                      <option value="">Investment Amount</option>
                      <option value="5000000-10000000">₹50 Lakhs - ₹1 Crore</option>
                      <option value="10000000-25000000">₹1 - 2.5 Crores</option>
                      <option value="25000000-50000000">₹2.5 - 5 Crores</option>
                      <option value="50000000+">Above ₹5 Crores</option>
                    </select>
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-200"
                  >
                    Schedule Consultation
                  </button>
                </form>
              </motion.div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default PMS;