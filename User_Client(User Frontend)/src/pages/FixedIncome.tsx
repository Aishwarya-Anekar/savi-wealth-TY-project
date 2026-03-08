import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { 
  Shield, 
  TrendingUp, 
  Calendar, 
  DollarSign,
  CheckCircle,
  ArrowRight,
  BarChart3,
  Users,
  ChevronDown,
  ChevronUp,
  Phone,
  Mail,
  Lock,
  Percent
} from 'lucide-react';

const FixedIncome = () => {
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
      title: 'Corporate Bonds',
      description: 'High-grade corporate bonds from top-rated companies with attractive yields',
      icon: Shield,
      features: ['AAA/AA+ Rated Bonds', 'Regular Interest Payments', 'Capital Appreciation', 'Diversified Portfolio']
    },
    {
      title: 'Government Securities',
      description: 'Risk-free government bonds backed by sovereign guarantee',
      icon: Lock,
      features: ['Zero Credit Risk', 'Sovereign Guarantee', 'Tax Benefits Available', 'Liquid Secondary Market']
    },
    {
      title: 'Certificate of Deposits',
      description: 'Bank CDs offering higher returns than traditional fixed deposits',
      icon: Calendar,
      features: ['Higher Interest Rates', 'Flexible Tenures', 'Bank Guarantee', 'Negotiable Instruments']
    },
    {
      title: 'Non-Convertible Debentures',
      description: 'NCDs from reputed companies offering attractive fixed returns',
      icon: Percent,
      features: ['Fixed Interest Rates', 'Listed on Exchanges', 'Tax Efficient', 'Regular Income Stream']
    }
  ];

  const benefits = [
    'Predictable and stable income stream with fixed interest payments',
    'Lower volatility compared to equity investments',
    'Capital preservation with potential for modest appreciation',
    'Diversification benefits for your overall investment portfolio',
    'Tax advantages on certain government securities'
  ];

  const howItWorks = [
    {
      step: 1,
      title: 'Risk Assessment',
      description: 'We evaluate your risk tolerance and income requirements',
      icon: Users
    },
    {
      step: 2,
      title: 'Product Selection',
      description: 'Our team selects the best fixed income instruments for you',
      icon: Shield
    },
    {
      step: 3,
      title: 'Portfolio Construction',
      description: 'We build a diversified fixed income portfolio',
      icon: BarChart3
    },
    {
      step: 4,
      title: 'Income Management',
      description: 'Regular monitoring and reinvestment of income received',
      icon: TrendingUp
    }
  ];

  const whyChooseSavi = [
    {
      title: 'Credit Research Expertise',
      description: 'In-depth credit analysis to select only high-quality bonds and debentures',
      icon: Shield
    },
    {
      title: 'Yield Optimization',
      description: 'Strategic selection to maximize yield while maintaining safety',
      icon: TrendingUp
    },
    {
      title: 'Laddering Strategy',
      description: 'Bond laddering to manage interest rate risk and provide regular liquidity',
      icon: Calendar
    },
    {
      title: 'Tax Efficiency',
      description: 'Structured to optimize tax implications and maximize after-tax returns',
      icon: DollarSign
    }
  ];

  const faqs = [
    {
      question: 'What is the minimum investment required for fixed income products?',
      answer: 'The minimum investment varies by product. Corporate bonds typically require ₹1 lakh minimum, while government securities can start from ₹10,000. NCDs usually have a minimum of ₹1 lakh per issue.'
    },
    {
      question: 'How are fixed income investments taxed?',
      answer: 'Interest income from bonds and debentures is taxed as per your income tax slab. However, certain government securities offer tax benefits. Capital gains on bonds held for more than 3 years qualify for indexation benefits.'
    },
    {
      question: 'Can I sell my bonds before maturity?',
      answer: 'Yes, most bonds and debentures are listed on exchanges and can be sold before maturity. However, the price may vary based on interest rate movements and credit quality of the issuer.'
    },
    {
      question: 'What happens if the bond issuer defaults?',
      answer: 'We only recommend bonds from highly-rated issuers to minimize default risk. In case of default, bondholders have a claim on the company\'s assets. We also recommend diversification across multiple issuers to reduce concentration risk.'
    },
    {
      question: 'How do interest rate changes affect bond prices?',
      answer: 'Bond prices move inversely to interest rates. When rates rise, existing bond prices fall, and vice versa. However, if you hold bonds till maturity, you receive the full face value regardless of interim price movements.'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Fixed Income Investments - Corporate Bonds, G-Sec, NCDs | SAVI Wealth</title>
        <meta name="description" content="Invest in fixed income securities with SAVI Wealth. Corporate bonds, government securities, CDs, and NCDs for stable returns and capital preservation." />
        <meta name="keywords" content="fixed income, corporate bonds, government securities, NCDs, certificate of deposits, stable returns, bond investment" />
      </Helmet>

      <div className="pt-16">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-green-600 via-teal-600 to-blue-600 relative overflow-hidden">
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
                    <Shield className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h1 className="text-5xl md:text-6xl font-bold">Fixed Income</h1>
                    <p className="text-xl text-green-100 mt-2">Stable Returns & Capital Safety</p>
                  </div>
                </div>
                <p className="text-xl md:text-2xl text-green-100 mb-8 leading-relaxed">
                  Generate steady income with our carefully selected fixed income securities. 
                  Perfect for conservative investors seeking predictable returns.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  {/* <button className="bg-white text-green-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-green-50 transform hover:scale-105 transition-all duration-200 flex items-center space-x-2">
                    <Phone className="w-5 h-5" />
                    <span>Explore Bond Options</span>
                  </button>
                  <button className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-green-600 transition-colors duration-200 flex items-center space-x-2">
                    <Mail className="w-5 h-5" />
                    <span>Get Yield Analysis</span>
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
                      <div className="text-3xl font-bold text-white mb-2">7-9%</div>
                      <div className="text-green-100">Annual Yield</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-white mb-2">AAA</div>
                      <div className="text-green-100">Credit Rating</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-white mb-2">₹1L</div>
                      <div className="text-green-100">Min Investment</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-white mb-2">1-10</div>
                      <div className="text-green-100">Years Tenure</div>
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
                Fixed Income Solutions
              </motion.h2>
              <motion.p 
                variants={fadeInUp}
                className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto"
              >
                Diversified fixed income portfolio for stable returns and capital preservation
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
                  <div className="w-12 h-12 bg-gradient-to-r from-green-600 to-teal-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-200">
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
                Why Fixed Income?
              </h2>
              <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
                The advantages of including fixed income securities in your portfolio
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
                Our Process
              </h2>
              <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
                How we help you build a robust fixed income portfolio
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
            <div className="w-16 h-16 bg-gradient-to-r from-green-600 to-teal-600 rounded-full flex items-center justify-center mb-4">
              <step.icon className="w-8 h-8 text-white" />
            </div>
            {/* Step Number */}
            <div className="bg-gradient-to-r from-green-600 to-teal-600 text-white text-sm font-bold w-8 h-8 rounded-full flex items-center justify-center mb-4">
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
              <ArrowRight className="w-10 h-10 text-green-400" />
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
                Why Choose SAVI for Fixed Income?
              </h2>
              <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
                Our expertise in fixed income markets ensures optimal returns with safety
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
                  <div className="w-12 h-12 bg-gradient-to-r from-green-600 to-teal-600 rounded-lg flex items-center justify-center flex-shrink-0">
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
        <section className="py-20 bg-gradient-to-r from-green-600 to-teal-600">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Start Building Your Fixed Income Portfolio
              </h2>
              <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
                Get access to high-quality bonds and debentures. Speak with our fixed income specialists today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                {/* <button className="bg-white text-green-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-green-50 transform hover:scale-105 transition-all duration-200 flex items-center justify-center space-x-2">
                  <Phone className="w-5 h-5" />
                  <span>Explore Bond Options</span>
                </button>
                <button className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-green-600 transition-colors duration-200 flex items-center justify-center space-x-2">
                  <ArrowRight className="w-5 h-5" />
                  <span>Calculate Returns</span>
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
                Fixed Income FAQs
              </h2>
              <p className="text-xl text-slate-600 dark:text-slate-300">
                Common questions about fixed income investments
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
                  Fixed Income Advisory
                </h2>
                <p className="text-xl text-slate-600 dark:text-slate-300 mb-8">
                  Our fixed income specialists will help you build a portfolio that generates steady income while preserving capital.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Phone className="w-5 h-5 text-green-600" />
                    <span className="text-slate-700 dark:text-slate-300">+91 9876543210</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Mail className="w-5 h-5 text-green-600" />
                    <span className="text-slate-700 dark:text-slate-300">fixedincome@saviwealth.com</span>
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
                  Get Fixed Income Recommendations
                </h3>
                <form className="space-y-4">
                  <div>
                    <input
                      type="text"
                      placeholder="Full Name"
                      className="w-full px-4 py-3 border border-slate-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      placeholder="Email Address"
                      className="w-full px-4 py-3 border border-slate-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <input
                      type="tel"
                      placeholder="Phone Number"
                      className="w-full px-4 py-3 border border-slate-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <select className="w-full px-4 py-3 border border-slate-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-green-500 focus:border-transparent">
                      <option value="">Investment Amount</option>
                      <option value="100000-500000">₹1 - 5 Lakhs</option>
                      <option value="500000-2500000">₹5 - 25 Lakhs</option>
                      <option value="2500000-10000000">₹25 Lakhs - 1 Crore</option>
                      <option value="10000000+">Above ₹1 Crore</option>
                    </select>
                  </div>
                  {/* <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-green-600 to-teal-600 text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-200"
                  >
                    Get Recommendations
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

export default FixedIncome;