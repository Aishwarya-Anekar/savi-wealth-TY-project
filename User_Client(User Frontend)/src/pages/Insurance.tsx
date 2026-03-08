import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { 
  Heart, 
  Shield, 
  Car, 
  Plane,
  CheckCircle,
  // ArrowRight,
  Users,
  ChevronDown,
  ChevronUp,
  Phone,
  Mail,
  // Home,
  Briefcase,
  Calculator,
  Clock,
  ArrowRight
} from 'lucide-react';

const Insurance = () => {
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
      title: 'Life Insurance',
      description: 'Comprehensive life coverage to secure your family\'s financial future',
      icon: Heart,
      features: ['Term Life Insurance', 'Whole Life Policies', 'ULIP Plans', 'Endowment Plans']
    },
    {
      title: 'Health Insurance',
      description: 'Medical coverage for you and your family against healthcare expenses',
      icon: Shield,
      features: ['Individual Health Plans', 'Family Floater', 'Critical Illness Cover', 'Top-up Plans']
    },
    {
      title: 'Motor Insurance',
      description: 'Complete protection for your vehicles with comprehensive coverage',
      icon: Car,
      features: ['Car Insurance', 'Two-Wheeler Insurance', 'Commercial Vehicle', 'Add-on Covers']
    },
    {
      title: 'Travel Insurance',
      description: 'Travel with peace of mind with comprehensive travel protection',
      icon: Plane,
      features: ['Domestic Travel', 'International Travel', 'Medical Emergency', 'Trip Cancellation']
    }
  ];

  const benefits = [
    'Financial protection against unforeseen circumstances and emergencies',
    'Tax benefits under various sections of Income Tax Act',
    'Peace of mind knowing your family is financially secure',
    'Cashless claim settlement at network hospitals and garages',
    'Flexible premium payment options to suit your budget'
  ];

  const howItWorks = [
    {
      step: 1,
      title: 'Needs Analysis',
      description: 'We assess your insurance requirements based on your lifestyle and risks',
      icon: Calculator
    },
    {
      step: 2,
      title: 'Plan Comparison',
      description: 'Compare multiple insurance plans to find the best coverage and rates',
      icon: Shield
    },
    {
      step: 3,
      title: 'Policy Purchase',
      description: 'Complete documentation and purchase your chosen insurance policy',
      icon: Briefcase
    },
    {
      step: 4,
      title: 'Claim Support',
      description: 'Ongoing support for policy servicing and claim assistance',
      icon: Users
    }
  ];

  const whyChooseSavi = [
    {
      title: 'Expert Advisory',
      description: 'Certified insurance advisors to guide you through the selection process',
      icon: Users
    },
    {
      title: 'Multiple Options',
      description: 'Access to policies from 20+ leading insurance companies in India',
      icon: Shield
    },
    {
      title: 'Claim Assistance',
      description: 'Dedicated support team to help you with claim processing and settlement',
      icon: Heart
    },
    {
      title: 'Regular Reviews',
      description: 'Annual policy reviews to ensure your coverage remains adequate',
      icon: Clock
    }
  ];

  const faqs = [
    {
      question: 'How much life insurance coverage do I need?',
      answer: 'A general rule is to have life insurance coverage of 10-15 times your annual income. However, the exact amount depends on your financial obligations, dependents, and future goals. Our advisors can help calculate the right coverage for you.'
    },
    {
      question: 'What is the difference between term and whole life insurance?',
      answer: 'Term insurance provides pure life coverage for a specific period at lower premiums. Whole life insurance combines life coverage with investment, offering lifelong protection but at higher premiums. Term insurance is generally recommended for pure protection needs.'
    },
    {
      question: 'Can I buy health insurance if I have pre-existing conditions?',
      answer: 'Yes, you can buy health insurance with pre-existing conditions, but they may be excluded for the first 2-4 years (waiting period). Some insurers offer immediate coverage for certain conditions at higher premiums.'
    },
    {
      question: 'How do I claim insurance in case of an emergency?',
      answer: 'For health insurance, contact the insurer\'s helpline immediately for cashless treatment authorization. For other claims, inform the insurer within 24-48 hours and submit required documents. Our team provides complete claim assistance.'
    },
    {
      question: 'Are insurance premiums tax deductible?',
      answer: 'Yes, life insurance premiums qualify for deduction under Section 80C (up to ₹1.5 lakh), and health insurance premiums under Section 80D (up to ₹25,000 for self and ₹50,000 for parents).'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Insurance Plans - Life, Health, Motor & Travel Insurance | SAVI Wealth</title>
        <meta name="description" content="Comprehensive insurance solutions with SAVI Wealth. Life insurance, health insurance, motor insurance, and travel insurance from top insurers." />
        <meta name="keywords" content="life insurance, health insurance, motor insurance, travel insurance, term insurance, family protection" />
      </Helmet>

      <div className="pt-16">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-red-600 via-pink-600 to-purple-600 relative overflow-hidden">
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
                    <Heart className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h1 className="text-5xl md:text-6xl font-bold">Insurance</h1>
                    <p className="text-xl text-red-100 mt-2">Complete Family Protection</p>
                  </div>
                </div>
                <p className="text-xl md:text-2xl text-red-100 mb-8 leading-relaxed">
                  Protect what matters most with our comprehensive insurance solutions. 
                  From life and health to motor and travel - we've got you covered.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  {/* <button className="bg-white text-red-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-red-50 transform hover:scale-105 transition-all duration-200 flex items-center space-x-2">
                    <Phone className="w-5 h-5" />
                    <span>Get Insurance Quote</span>
                  </button> */}
                  {/* <button className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-red-600 transition-colors duration-200 flex items-center space-x-2">
                    <Calculator className="w-5 h-5" />
                    <span>Calculate Coverage</span>
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
                      <div className="text-3xl font-bold text-white mb-2">20+</div>
                      <div className="text-red-100">Insurance Partners</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-white mb-2">24/7</div>
                      <div className="text-red-100">Claim Support</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-white mb-2">₹5000</div>
                      <div className="text-red-100">Min Premium</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-white mb-2">98%</div>
                      <div className="text-red-100">Claim Settlement</div>
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
                Insurance Solutions
              </motion.h2>
              <motion.p 
                variants={fadeInUp}
                className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto"
              >
                Comprehensive protection for all aspects of your life and assets
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
                  <div className="w-12 h-12 bg-gradient-to-r from-red-600 to-pink-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-200">
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
                Why Insurance Matters
              </h2>
              <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
                The importance of having adequate insurance coverage
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
                How We Help
              </h2>
              <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
                Our systematic approach to finding the right insurance for you
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
            <div className="w-16 h-16 bg-gradient-to-r from-red-600 to-pink-600 rounded-full flex items-center justify-center mb-4">
              <step.icon className="w-8 h-8 text-white" />
            </div>
            {/* Step Number */}
            <div className="bg-gradient-to-r from-red-400 to-pink-600 text-white text-sm font-bold w-8 h-8 rounded-full flex items-center justify-center mb-4">
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
              <ArrowRight className="w-10 h-10 text-red-400" />
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
                Why Choose SAVI for Insurance?
              </h2>
              <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
                Your trusted partner for all insurance needs
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
                  <div className="w-12 h-12 bg-gradient-to-r from-red-600 to-pink-600 rounded-lg flex items-center justify-center flex-shrink-0">
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
        <section className="py-20 bg-gradient-to-r from-red-500 to-pink-600">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Protect Your Family Today
              </h2>
              <p className="text-xl text-red-100 mb-8 max-w-2xl mx-auto">
                Don't wait for tomorrow. Get comprehensive insurance coverage for your family's financial security.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                {/* <button className="bg-white text-red-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-red-50 transform hover:scale-105 transition-all duration-200 flex items-center justify-center space-x-2">
                  <Phone className="w-5 h-5" />
                  <span>Get Insurance Quote</span>
                </button> */}
                {/* <button className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-red-600 transition-colors duration-200 flex items-center justify-center space-x-2">
                  <Calculator className="w-5 h-5" />
                  <span>Calculate Coverage</span>
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
                Insurance FAQs
              </h2>
              <p className="text-xl text-slate-600 dark:text-slate-300">
                Common questions about insurance planning
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
                  Insurance Advisory Services
                </h2>
                <p className="text-xl text-slate-600 dark:text-slate-300 mb-8">
                  Our certified insurance advisors will help you choose the right coverage for your family's needs and budget.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Phone className="w-5 h-5 text-red-600" />
                    <span className="text-slate-700 dark:text-slate-300">+91 9876543210</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Mail className="w-5 h-5 text-red-600" />
                    <span className="text-slate-700 dark:text-slate-300">insurance@saviwealth.com</span>
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
                  Get Insurance Quote
                </h3>
                <form className="space-y-4">
                  <div>
                    <input
                      type="text"
                      placeholder="Full Name"
                      className="w-full px-4 py-3 border border-slate-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      placeholder="Email Address"
                      className="w-full px-4 py-3 border border-slate-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <input
                      type="tel"
                      placeholder="Phone Number"
                      className="w-full px-4 py-3 border border-slate-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <select className="w-full px-4 py-3 border border-slate-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-red-500 focus:border-transparent">
                      <option value="">Insurance Type</option>
                      <option value="life">Life Insurance</option>
                      <option value="health">Health Insurance</option>
                      <option value="motor">Motor Insurance</option>
                      <option value="travel">Travel Insurance</option>
                    </select>
                  </div>
                  {/* <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-red-600 to-pink-600 text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-200"
                  >
                    Get Quote
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

export default Insurance;