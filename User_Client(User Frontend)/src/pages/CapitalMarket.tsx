import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { 
  Zap, 
  TrendingUp, 
  Target, 
  AlertTriangle,
  CheckCircle,
  ArrowRight,
  Users,
  ChevronDown,
  ChevronUp,
  Phone,
  Mail,
  Star,
  // Lock,
  // Clock,
  DollarSign
} from 'lucide-react';

const CapitalMarket = () => {
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
      title: 'Pre-IPO Investments',
      description: 'Invest in promising companies before they go public and list on exchanges',
      icon: Star,
      features: ['Early Stage Access', 'IPO Listing Potential', 'High Growth Companies', 'Exclusive Opportunities']
    },
    {
      title: 'Unicorn Startups',
      description: 'Access to billion-dollar valuation startups with disruptive business models',
      icon: Zap,
      features: ['Unicorn Companies', 'Technology Leaders', 'Market Disruptors', 'Venture Capital Backed']
    },
    {
      title: 'Growth Stage Companies',
      description: 'Established companies with proven business models seeking expansion capital',
      icon: TrendingUp,
      features: ['Proven Business Model', 'Revenue Growth', 'Market Leadership', 'Expansion Phase']
    },
    {
      title: 'Secondary Market',
      description: 'Buy and sell unlisted shares in the secondary market with liquidity options',
      icon: Target,
      features: ['Secondary Trading', 'Liquidity Options', 'Price Discovery', 'Exit Opportunities']
    }
  ];

  const benefits = [
  'Diversified investment options: equities, debt instruments, and preference shares',
  'Access to both primary and secondary markets',
  'Potential for long-term capital growth and regular income',
  'Efficient transactions and transparent processes',
  'Professional research, risk management, and due diligence'
];

  const howItWorks = [
  {
    step: 1,
    title: 'Market Analysis',
    description: 'We analyze stock and bond markets to identify attractive investment opportunities.',
    icon: Target
  },
  {
    step: 2,
    title: 'Selection & Research',
    description: 'Our experts conduct thorough research on equities, debt instruments, and preference shares.',
    icon: Users
  },
  {
    step: 3,
    title: 'Investment & Allocation',
    description: 'We help you invest and allocate funds across chosen capital market instruments.',
    icon: DollarSign
  },
  {
    step: 4,
    title: 'Performance Review',
    description: 'Your portfolio is monitored and reviewed regularly for growth and risk management.',
    icon: TrendingUp
  }
];

  const whyChooseSavi = [
  {
    title: 'Comprehensive Market Research',
    description: 'In-depth analysis of equities, bonds, and hybrid instruments to identify the best opportunities.',
    icon: Target
  },
  {
    title: 'Professional Due Diligence',
    description: 'Thorough evaluation of company fundamentals, financials, and market trends.',
    icon: Users
  },
  {
    title: 'Risk Management & Diversification',
    description: 'Balanced portfolio construction and ongoing risk monitoring for capital protection.',
    icon: AlertTriangle
  },
  {
    title: 'Transparent Processes',
    description: 'Clear investment strategies and regular performance reviews for your peace of mind.',
    icon: TrendingUp
  }
];

  const faqs = [
  {
    question: 'What is the minimum investment in the capital market?',
    answer: 'Minimum investment amounts vary by product. For equities and bonds, you can start with as little as ₹10,000. Some instruments may require higher minimums.'
  },
  {
    question: 'How liquid are capital market investments?',
    answer: 'Listed equities and bonds are generally liquid and can be traded on exchanges. Some debt instruments and preference shares may have limited liquidity and longer holding periods.'
  },
  {
    question: 'What are the risks involved in capital market investments?',
    answer: 'Risks include market volatility, interest rate changes, credit risk, and company-specific risks. Diversification and professional research help manage these risks.'
  },
  {
    question: 'How do you select securities for investment?',
    answer: 'Our team conducts thorough research and analysis of company fundamentals, market trends, and risk factors before recommending any equity, bond, or preference share.'
  },
  {
    question: 'What returns can I expect from capital market investments?',
    answer: 'Returns depend on the type of instrument and market conditions. Equities offer growth potential, bonds provide fixed income, and preference shares offer priority dividends.'
  }
];

  return (
    <>
      <Helmet>
        <title>Unlisted/Pre-IPO Equity Investments - Startup & Growth Company Investments | SAVI Wealth</title>
        <meta name="description" content="Invest in unlisted and pre-IPO companies with SAVI Wealth. Access to unicorn startups, growth companies, and exclusive investment opportunities." />
        <meta name="keywords" content="unlisted equity, pre-IPO investment, startup investment, unicorn companies, private equity, venture capital" />
      </Helmet>

      <div className="pt-16">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-blue-600 via-teal-600 to-blue-400 relative overflow-hidden">
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
            <TrendingUp className="w-8 h-8 text-white" />
          </div>
          <div>
            <h1 className="text-4xl md:text-5xl font-bold">Capital Market</h1>
            <p className="text-xl text-blue-100 mt-2">Debt & Equity Investments</p>
          </div>
        </div>
        <p className="text-lg text-blue-100 mb-6">
          Invest in stocks, bonds, and preference shares. Capital markets connect savers with companies and governments for long-term growth.
        </p>
        <ul className="mb-6 space-y-1 text-blue-100 text-base">
          <li><strong>Equities:</strong> Shares for dividends and growth.</li>
          <li><strong>Debt:</strong> Bonds for fixed returns.</li>
          <li><strong>Preference Shares:</strong> Priority profit payouts.</li>
        </ul>
        <div className="flex flex-col sm:flex-row gap-4">
          <button className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-blue-50 transform hover:scale-105 transition-all duration-200 flex items-center space-x-2">
            <Phone className="w-5 h-5" />
            <span>Contact Us</span>
          </button>
          <button className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-blue-600 transition-colors duration-200 flex items-center space-x-2">
            <Mail className="w-5 h-5" />
            <span>Learn More</span>
          </button>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="relative"
      >
        <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
          <div className="grid grid-cols-1 gap-6">
            <div className="text-center">
              <div className="text-2xl font-bold text-white mb-2">Primary & Secondary Markets</div>
              <div className="text-blue-100">Stock & Bond Exchanges</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-white mb-2">Efficient Transactions</div>
              <div className="text-blue-100">Connecting Investors & Issuers</div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  </div>
</section>

        {/* Risk Warning
        <section className="py-8 bg-yellow-50 dark:bg-yellow-900/20 border-b border-yellow-200 dark:border-yellow-700">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-start space-x-3">
              <AlertTriangle className="w-6 h-6 text-yellow-600 mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-lg font-semibold text-yellow-800 dark:text-yellow-200 mb-2">
                  Important Risk Disclosure
                </h3>
                <p className="text-yellow-700 dark:text-yellow-300 leading-relaxed">
                  Unlisted equity investments are high-risk, illiquid investments suitable only for sophisticated investors. 
                  These investments may result in total loss of capital. Past performance does not guarantee future results. 
                  Please read all risk disclosures carefully before investing.
                </p>
              </div>
            </div>
          </div>
        </section> */}

      
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
        Explore a range of capital market solutions including equities, debt instruments, and preference shares. Invest in high-potential companies and diversify your portfolio with expert guidance.
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
          <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-teal-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-200">
            <offering.icon className="w-6 h-6 text-white" />
          </div>
          <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
            {offering.title}
          </h3>
          <p className="text-slate-600 dark:text-slate-300 mb-4">
            {/* Update these descriptions for Capital Market context */}
            {offering.title === 'Pre-IPO Investments' && 'Invest in companies before they go public and access exclusive pre-listing opportunities.'}
            {offering.title === 'Unicorn Startups' && 'Participate in high-growth startups with billion-dollar valuations and disruptive potential.'}
            {offering.title === 'Growth Stage Companies' && 'Support established businesses seeking expansion through equity or debt instruments.'}
            {offering.title === 'Secondary Market' && 'Trade listed and unlisted securities for liquidity and portfolio rebalancing.'}
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
                  Key Benefits of Capital Market Investments
                </h2>
                <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
                  Discover the advantages of investing in the capital market for long-term growth and financial stability.
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
        How Our Capital Market Process Works
      </h2>
      <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
        Step-by-step approach to identifying, evaluating, and investing in high-potential capital market opportunities.
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
        Why Choose SAVI for Capital Market Investments?
      </h2>
      <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
        Partner with us for expert research, risk management, and transparent investment processes in the capital market.
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
          <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-teal-600 rounded-lg flex items-center justify-center flex-shrink-0">
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
        <section className="py-20 bg-gradient-to-r from-blue-600 to-teal-600">
  <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
        Ready to Invest in the Capital Market?
      </h2>
      <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
        Access equities, bonds, and preference shares with expert guidance. Start building your diversified portfolio today.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        {/* <button className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-blue-50 transform hover:scale-105 transition-all duration-200 flex items-center justify-center space-x-2">
          <Phone className="w-5 h-5" />
          <span>Talk to an Advisor</span>
        </button> */}
        <button className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-blue-600 transition-colors duration-200 flex items-center justify-center space-x-2">
          <ArrowRight className="w-5 h-5" />
          <span>Get Started</span>
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
                Unlisted Equity FAQs
              </h2>
              <p className="text-xl text-slate-600 dark:text-slate-300">
                Important questions about unlisted equity investments
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
        <section className="py-20 bg-gradient-to-r from-blue-600 to-teal-600">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="grid lg:grid-cols-2 gap-12 items-center">
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl font-bold text-white mb-6">
          Capital Market Advisory
        </h2>
        <p className="text-xl text-blue-100 mb-8">
          Our capital market specialists help you invest in equities, bonds, and preference shares with confidence and expert guidance.
        </p>
        <div className="space-y-4">
          <div className="flex items-center space-x-3">
            <Phone className="w-5 h-5 text-teal-300" />
            <span className="text-white">+91 9876543210</span>
          </div>
          <div className="flex items-center space-x-3">
            <Mail className="w-5 h-5 text-teal-300" />
            <span className="text-white">capital@saviwealth.com</span>
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
          Join Our Capital Market Network
        </h3>
        <form className="space-y-4">
          <div>
            <input
              type="text"
              placeholder="Full Name"
              className="w-full px-4 py-3 border border-blue-300 dark:border-teal-600 rounded-lg bg-white dark:bg-slate-800 text-blue-900 dark:text-white focus:ring-2 focus:ring-teal-500 focus:border-transparent"
            />
          </div>
          <div>
            <input
              type="email"
              placeholder="Email Address"
              className="w-full px-4 py-3 border border-blue-300 dark:border-teal-600 rounded-lg bg-white dark:bg-slate-800 text-blue-900 dark:text-white focus:ring-2 focus:ring-teal-500 focus:border-transparent"
            />
          </div>
          
                  <div>
                    <input
              type="tel"
              placeholder="Phone Number"
              className="w-full px-4 py-3 border border-blue-300 dark:border-teal-600 rounded-lg bg-white dark:bg-slate-800 text-blue-900 dark:text-white focus:ring-2 focus:ring-teal-500 focus:border-transparent"
            />
          </div>
          <div>
            <select className="w-full px-4 py-3 border border-blue-300 dark:border-teal-600 rounded-lg bg-white dark:bg-slate-800 text-blue-900 dark:text-white focus:ring-2 focus:ring-teal-500 focus:border-transparent">
              <option value="">Investment Interest</option>
              <option value="equities">Equities</option>
              <option value="bonds">Bonds</option>
              <option value="preference">Preference Shares</option>
              <option value="hybrid">Hybrid Instruments</option>
            </select>
          </div>
          {/* <button
            type="submit"
            className="w-full bg-gradient-to-r from-blue-600 to-teal-600 text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-200"
          >
            Join Network
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

export default CapitalMarket;