import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import {
  Home,
  TrendingUp,
  Shield,
  Target,
  CheckCircle,
  ArrowRight,
  // Calendar,
  // DollarSign,
  BarChart3,
  Users,
  ChevronDown,
  ChevronUp,
  Phone,
  Mail,
  Building2,
  MapPin,
  PieChart
} from 'lucide-react';

const RealEstate = () => {
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

  // Offerings
  const offerings = [
    {
      title: 'Residential Properties',
      description: 'Invest in apartments, villas, and gated communities for long-term appreciation and rental income.',
      icon: Home,
      features: ['Prime Locations', 'Rental Yield', 'Capital Appreciation', 'Legal Due Diligence']
    },
    {
      title: 'Commercial Real Estate',
      description: 'Own office spaces, retail outlets, and warehouses for stable returns and business growth.',
      icon: Building2,
      features: ['High Occupancy', 'Long-term Leases', 'Professional Management', 'Tax Benefits']
    },
    {
      title: 'Land Investments',
      description: 'Acquire plots and land parcels in growth corridors for future development or resale.',
      icon: MapPin,
      features: ['Strategic Locations', 'Development Potential', 'Flexible Holding Periods', 'Clear Titles']
    },
    {
      title: 'Real Estate Investment Trusts (REITs)',
      description: 'Diversify with REITs for liquidity, regular income, and exposure to large-scale properties.',
      icon: PieChart,
      features: ['Listed on Exchanges', 'Quarterly Dividends', 'Low Entry Barriers', 'Professional Management']
    }
  ];

  // Benefits
  const benefits = [
    'Stable and predictable returns through rental income and appreciation',
    'Portfolio diversification with tangible assets',
    'Hedge against inflation and market volatility',
    'Tax benefits on home loans and depreciation',
    'Professional property management and legal support'
  ];

  // How It Works
  const howItWorks = [
    {
      step: 1,
      title: 'Consultation & Needs Assessment',
      description: 'We understand your investment goals, budget, and preferred property type.',
      icon: Users
    },
    {
      step: 2,
      title: 'Property Shortlisting',
      description: 'Our experts curate a list of suitable properties and conduct site visits.',
      icon: Target
    },
    {
      step: 3,
      title: 'Due Diligence & Documentation',
      description: 'We verify legal titles, conduct valuation, and assist with paperwork.',
      icon: Shield
    },
    {
      step: 4,
      title: 'Investment & Management',
      description: 'Complete the purchase and get ongoing support for rental, resale, or management.',
      icon: TrendingUp
    }
  ];

  // Why Choose SAVI
  const whyChooseSavi = [
    {
      title: 'Expert Property Selection',
      description: 'Access to premium residential, commercial, and land opportunities with thorough market research.',
      icon: Target
    },
    {
      title: 'End-to-End Support',
      description: 'From site visits to legal checks and documentation, we guide you through every step.',
      icon: Shield
    },
    {
      title: 'Rental & Resale Assistance',
      description: 'Maximize returns with our rental management and resale advisory services.',
      icon: BarChart3
    },
    {
      title: 'Transparent Process',
      description: 'Clear communication, no hidden charges, and regular updates throughout your investment journey.',
      icon: Users
    }
  ];

  // FAQs
  const faqs = [
    {
      question: 'What types of real estate can I invest in?',
      answer: 'You can invest in residential properties, commercial spaces, land parcels, and REITs depending on your goals and budget.'
    },
    {
      question: 'How do I earn returns from real estate?',
      answer: 'Returns come from rental income, capital appreciation, and dividends from REITs. Our team helps you maximize both.'
    },
    {
      question: 'What is the minimum investment required?',
      answer: 'Minimum investment varies by property type and location. REITs can start as low as ₹10,000, while direct property investments may require higher amounts.'
    },
    {
      question: 'How does SAVI help with legal and documentation?',
      answer: 'We conduct thorough due diligence, verify titles, and assist with all legal paperwork to ensure a safe transaction.'
    },
    {
      question: 'Can you help with property management and resale?',
      answer: 'Yes, we offer rental management, tenant search, and resale advisory to help you maximize your returns and liquidity.'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Real Estate Investment - Residential, Commercial, Land & REITs | SAVI Wealth</title>
        <meta name="description" content="Invest in real estate with SAVI Wealth. Explore residential, commercial, land, and REIT opportunities. Expert selection, legal support, and rental management." />
        <meta name="keywords" content="real estate, residential property, commercial property, land investment, REIT, rental income, property management" />
      </Helmet>

      <div className="pt-16">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-teal-600 via-blue-700 to-blue-400 relative overflow-hidden">
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
                    <Home className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h1 className="text-5xl md:text-6xl font-bold">Real Estate</h1>
                    <p className="text-xl text-blue-100 mt-2">Residential, Commercial, Land & REITs</p>
                  </div>
                </div>
                <p className="text-xl md:text-2xl text-blue-100 mb-8 leading-relaxed">
                  Build wealth with tangible assets. Invest in premium properties, commercial spaces, land parcels, and REITs for stable returns and long-term growth.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  {/* <button className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-blue-50 transform hover:scale-105 transition-all duration-200 flex items-center space-x-2">
                    <Phone className="w-5 h-5" />
                    <span>Book Property Consultation</span>
                  </button>
                  <button className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-blue-600 transition-colors duration-200 flex items-center space-x-2">
                    <Mail className="w-5 h-5" />
                    <span>Get Investment Guide</span>
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
                      <div className="text-3xl font-bold text-white mb-2">₹10,000+</div>
                      <div className="text-blue-100">Minimum Investment</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-white mb-2">6-10%</div>
                      <div className="text-blue-100">Rental Yield</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-white mb-2">REITs</div>
                      <div className="text-blue-100">Listed on Exchanges</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-white mb-2">All India</div>
                      <div className="text-blue-100">Locations Covered</div>
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
                What We Offer
              </motion.h2>
              <motion.p
                variants={fadeInUp}
                className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto"
              >
                Discover a range of real estate investment options tailored to your financial goals.
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
                  <div className="w-12 h-12 bg-gradient-to-r from-teal-600 to-blue-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-200">
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
                Key Benefits
              </h2>
              <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
                Why real estate is a smart choice for long-term wealth creation.
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
                How It Works
              </h2>
              <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
                Our streamlined process makes real estate investing simple and secure.
              </p>
            </motion.div>

            <div className="relative flex flex-col md:flex-row items-center justify-center gap-8">
                  {howItWorks.map((step, index) => (
                    <React.Fragment key={index}>
                      <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.2 }}
                        className="text-center relative flex flex-col items-center"
                        style={{ minWidth: 200 }}
                      >
                        {/* Icon */}
                        <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-teal-600 rounded-full flex items-center justify-center mb-4">
                          <step.icon className="w-8 h-8 text-white" />
                        </div>
                        {/* Step Number */}
                        <div className="bg-gradient-to-r from-blue-600 to-teal-600 text-white text-sm font-bold w-8 h-8 rounded-full flex items-center justify-center mb-4">
                          {step.step}
                        </div>
                        <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
                          {step.title}
                        </h3>
                        <p className="text-slate-600 dark:text-slate-300">
                          {step.description}
                        </p>
                      </motion.div>
                      {/* Arrow (not after last step) */}
                      {index < howItWorks.length - 1 && (
                        <div className="hidden md:flex items-center">
                          <ArrowRight className="w-10 h-10 text-blue-400" />
                        </div>
                      )}
                    </React.Fragment>
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
                Why Choose SAVI Wealth?
              </h2>
              <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
                Experience a seamless real estate investment journey with our expert team.
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
                  <div className="w-12 h-12 bg-gradient-to-r from-teal-600 to-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
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
        <section className="py-20 bg-gradient-to-r from-teal-600 to-blue-600">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Invest in Real Estate?
              </h2>
              <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                Get access to premium properties, expert advice, and end-to-end support. Start your real estate journey today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                {/* <button className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-blue-50 transform hover:scale-105 transition-all duration-200 flex items-center justify-center space-x-2">
                  <Phone className="w-5 h-5" />
                  <span>Book Property Consultation</span>
                </button>
                <button className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-blue-600 transition-colors duration-200 flex items-center justify-center space-x-2">
                  <ArrowRight className="w-5 h-5" />
                  <span>Download Investment Guide</span>
                </button> */}
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
                Frequently Asked Questions
              </h2>
              <p className="text-xl text-slate-600 dark:text-slate-300">
                Get answers to common questions about real estate investments.
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
        <section className="py-20 bg-gradient-to-r from-teal-600 to-blue-600">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-4xl font-bold text-white mb-6">
                  Speak with Our Real Estate Experts
                </h2>
                <p className="text-xl text-blue-100 mb-8">
                  Get personalized advice on property investments, legal checks, and rental management. Our team is here to help you make informed decisions.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Phone className="w-5 h-5 text-white" />
                    <span className="text-white">+91 9876543210</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Mail className="w-5 h-5 text-white" />
                    <span className="text-white">realestate@saviwealth.com</span>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-white/90 dark:bg-slate-900 p-8 rounded-2xl shadow-lg"
              >
                <h3 className="text-2xl font-bold text-blue-700 dark:text-white mb-6">
                  Book Your Property Consultation
                </h3>
                <form className="space-y-4">
                  <div>
                    <input
                      type="text"
                      placeholder="Full Name"
                      className="w-full px-4 py-3 border border-teal-300 dark:border-blue-600 rounded-lg bg-white dark:bg-slate-800 text-blue-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      placeholder="Email Address"
                      className="w-full px-4 py-3 border border-teal-300 dark:border-blue-600 rounded-lg bg-white dark:bg-slate-800 text-blue-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <input
                      type="tel"
                      placeholder="Phone Number"
                      className="w-full px-4 py-3 border border-teal-300 dark:border-blue-600 rounded-lg bg-white dark:bg-slate-800 text-blue-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <select className="w-full px-4 py-3 border border-teal-300 dark:border-blue-600 rounded-lg bg-white dark:bg-slate-800 text-blue-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                      <option value="">Property Type</option>
                      <option value="residential">Residential</option>
                      <option value="commercial">Commercial</option>
                      <option value="land">Land</option>
                      <option value="reit">REITs</option>
                    </select>
                  </div>
                  {/* <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-teal-600 to-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-200"
                  >
                    Book Consultation
                  </button> */}
                </form>
              </motion.div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default RealEstate;