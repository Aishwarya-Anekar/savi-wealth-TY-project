import React, { useState } from "react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import {
  PieChart,
  TrendingUp,
  Shield,
  Target,
  CheckCircle,
  ArrowRight,
  Calendar,
  DollarSign,
  BarChart3,
  Users,
  ChevronDown,
  ChevronUp,
  Phone,
  Mail,
} from "lucide-react";
const MutualFunds = () => {
  const [expandedFAQ, setExpandedFAQ] = useState<number | null>(null);
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };
  const staggerChildren = { animate: { transition: { staggerChildren: 0.1 } } };
  const offerings = [
    {
      title: "Systematic Investment Plans (SIP)",
      description:
        "Start investing with as little as ₹500 per month and build wealth systematically",
      icon: Calendar,
      features: [
        "Rupee Cost Averaging",
        "Disciplined Investing",
        "Flexible Amount",
        "Auto-debit Facility",
      ],
    },
    {
      title: "Lump Sum Investments",
      description:
        "Invest a large amount at once for potentially higher returns",
      icon: DollarSign,
      features: [
        "Immediate Market Exposure",
        "Bulk Investment Benefits",
        "Strategic Timing",
        "Portfolio Diversification",
      ],
    },
    {
      title: "Tax Saving Funds (ELSS)",
      description:
        "Save taxes under Section 80C while building long-term wealth",
      icon: Shield,
      features: [
        "Tax Deduction up to ₹1.5L",
        "3-Year Lock-in Period",
        "Equity Growth Potential",
        "Tax-free Returns",
      ],
    },
    {
      title: "Goal-Based Planning",
      description:
        "Customized investment strategies for your specific financial goals",
      icon: Target,
      features: [
        "Retirement Planning",
        "Child Education",
        "Home Purchase",
        "Wealth Creation",
      ],
    },
  ];
  const benefits = [
    "Professional fund management by experienced portfolio managers",
    "Diversification across multiple securities to reduce risk",
    "Liquidity with easy redemption options",
    "Transparent and regulated investment environment",
    "Cost-effective investment with low minimum amounts",
  ];
  const howItWorks = [
    {
      step: 1,
      title: "Initial Consultation",
      description:
        "We assess your financial goals, risk tolerance, and investment horizon",
      icon: Users,
    },
    {
      step: 2,
      title: "Portfolio Design",
      description:
        "Our experts create a customized mutual fund portfolio for you",
      icon: PieChart,
    },
    {
      step: 3,
      title: "Investment Execution",
      description:
        "We help you invest in selected funds with proper documentation",
      icon: TrendingUp,
    },
    {
      step: 4,
      title: "Ongoing Monitoring",
      description:
        "Regular portfolio reviews and rebalancing as per market conditions",
      icon: BarChart3,
    },
  ];
  const whyChooseSavi = [
    {
      title: "Expert Fund Selection",
      description:
        "Our research team analyzes 1000+ mutual funds to select the best performers",
      icon: Target,
    },
    {
      title: "Zero Commission Model",
      description:
        "Transparent advisory with no hidden charges or commission conflicts",
      icon: Shield,
    },
    {
      title: "Regular Portfolio Reviews",
      description:
        "Quarterly portfolio health checks and rebalancing recommendations",
      icon: BarChart3,
    },
    {
      title: "Dedicated Relationship Manager",
      description:
        "Personal advisor to guide you through your investment journey",
      icon: Users,
    },
  ];
  const faqs = [
    {
      question: "What is the minimum amount required to start a SIP?",
      answer:
        "You can start a SIP with as little as ₹500 per month. However, we recommend starting with at least ₹1,000 per month for better diversification and meaningful wealth creation.",
    },
    {
      question: "How are mutual funds taxed?",
      answer:
        "Equity mutual funds held for more than 1 year qualify for long-term capital gains tax at 10% (above ₹1 lakh gains). Debt funds are taxed as per your income tax slab. ELSS funds offer tax deduction under Section 80C.",
    },
    {
      question: "Can I withdraw my mutual fund investments anytime?",
      answer:
        "Yes, most mutual funds (except ELSS) offer high liquidity. You can redeem your investments anytime, and the money is typically credited to your account within 1-3 business days.",
    },
    {
      question: "How do you select mutual funds for my portfolio?",
      answer:
        "We use a comprehensive research process analyzing fund performance, fund manager track record, expense ratios, portfolio composition, and risk metrics. We also consider your risk profile and investment goals.",
    },
    {
      question:
        "What is the difference between direct and regular mutual funds?",
      answer:
        "Direct funds have lower expense ratios as they don't include distributor commissions. However, with direct funds, you don't get advisory services. We recommend regular funds with proper advisory support for better outcomes.",
    },
  ];
  return (
    <>
      {" "}
      <Helmet>
        {" "}
        <title>
          Mutual Funds Investment - SIP, Lump Sum & Tax Saving | SAVI Wealth
        </title>{" "}
        <meta
          name="description"
          content="Invest in mutual funds with SAVI Wealth. Start SIP from ₹500, lump sum investments, ELSS tax saving funds. Expert fund selection and portfolio management."
        />{" "}
        <meta
          name="keywords"
          content="mutual funds, SIP, systematic investment plan, ELSS, tax saving, lump sum investment, portfolio management"
        />{" "}
      </Helmet>{" "}
      <div className="pt-16">
        {" "}
        {/* Hero Section */}{" "}
        <section className="py-20 bg-gradient-to-br from-blue-600 via-blue-700 to-teal-600 relative overflow-hidden">
          {" "}
          <div className="absolute inset-0 bg-black/10" />{" "}
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {" "}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {" "}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="text-white"
              >
                {" "}
                <div className="flex items-center space-x-3 mb-6">
                  {" "}
                  <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center">
                    {" "}
                    <PieChart className="w-8 h-8 text-white" />{" "}
                  </div>{" "}
                  <div>
                    {" "}
                    <h1 className="text-5xl md:text-6xl font-bold">
                      Mutual Funds
                    </h1>{" "}
                    <p className="text-xl text-blue-100 mt-2">
                      Professional Wealth Management
                    </p>{" "}
                  </div>{" "}
                </div>{" "}
                <p className="text-xl md:text-2xl text-blue-100 mb-8 leading-relaxed">
                  {" "}
                  Build wealth systematically with our expertly curated mutual
                  fund portfolios. Start your investment journey with as little
                  as ₹500 per month.{" "}
                </p>{" "}
                <div className="flex flex-col sm:flex-row gap-4">
                  {" "}
                  <button className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-blue-50 transform hover:scale-105 transition-all duration-200 flex items-center space-x-2">
                    {" "}
                    <Phone className="w-5 h-5" />{" "}
                    <span>Book Free Consultation</span>{" "}
                  </button>{" "}
                  {/* <button className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-blue-600 transition-colors duration-200 flex items-center space-x-2">
                    {" "}
                    <Mail className="w-5 h-5" />{" "}
                    <span>Get Portfolio Analysis</span>{" "}
                  </button>{" "} */}
                </div>{" "}
              </motion.div>{" "}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative"
              >
                {" "}
                <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
                  {" "}
                  <div className="grid grid-cols-2 gap-6">
                    {" "}
                    <div className="text-center">
                      {" "}
                      <div className="text-3xl font-bold text-white mb-2">
                        ₹500
                      </div>{" "}
                      <div className="text-blue-100">Minimum SIP</div>{" "}
                    </div>{" "}
                    <div className="text-center">
                      {" "}
                      <div className="text-3xl font-bold text-white mb-2">
                        1000+
                      </div>{" "}
                      <div className="text-blue-100">Fund Options</div>{" "}
                    </div>{" "}
                    <div className="text-center">
                      {" "}
                      <div className="text-3xl font-bold text-white mb-2">
                        12-15%
                      </div>{" "}
                      <div className="text-blue-100">Expected Returns</div>{" "}
                    </div>{" "}
                    <div className="text-center">
                      {" "}
                      <div className="text-3xl font-bold text-white mb-2">
                        ₹1.5L
                      </div>{" "}
                      <div className="text-blue-100">Tax Savings</div>{" "}
                    </div>{" "}
                  </div>{" "}
                </div>{" "}
              </motion.div>{" "}
            </div>{" "}
          </div>{" "}
        </section>{" "}
        {/* What We Offer */}{" "}
        <section className="py-20 bg-white dark:bg-slate-900">
          {" "}
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {" "}
            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={staggerChildren}
              className="text-center mb-16"
            >
              {" "}
              <motion.h2
                variants={fadeInUp}
                className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4"
              >
                {" "}
                What We Offer{" "}
              </motion.h2>{" "}
              <motion.p
                variants={fadeInUp}
                className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto"
              >
                {" "}
                Comprehensive mutual fund investment solutions tailored to your
                financial goals{" "}
              </motion.p>{" "}
            </motion.div>{" "}
            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={staggerChildren}
              className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
            >
              {" "}
              {offerings.map((offering, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className="bg-slate-50 dark:bg-slate-800 p-6 rounded-2xl hover:shadow-lg transition-all duration-300 group"
                >
                  {" "}
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-teal-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-200">
                    {" "}
                    <offering.icon className="w-6 h-6 text-white" />{" "}
                  </div>{" "}
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
                    {" "}
                    {offering.title}{" "}
                  </h3>{" "}
                  <p className="text-slate-600 dark:text-slate-300 mb-4">
                    {" "}
                    {offering.description}{" "}
                  </p>{" "}
                  <ul className="space-y-2">
                    {" "}
                    {offering.features.map((feature, idx) => (
                      <li
                        key={idx}
                        className="flex items-center text-sm text-slate-600 dark:text-slate-300"
                      >
                        {" "}
                        <CheckCircle className="w-4 h-4 text-green-600 mr-2" />{" "}
                        {feature}{" "}
                      </li>
                    ))}{" "}
                  </ul>{" "}
                </motion.div>
              ))}{" "}
            </motion.div>{" "}
          </div>{" "}
        </section>{" "}
        {/* Key Benefits */}{" "}
        <section className="py-20 bg-slate-50 dark:bg-slate-800">
          {" "}
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {" "}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              {" "}
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
                {" "}
                Key Benefits{" "}
              </h2>{" "}
              <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
                {" "}
                Why mutual funds are the preferred choice for wealth creation{" "}
              </p>{" "}
            </motion.div>{" "}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {" "}
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start space-x-4 bg-white dark:bg-slate-900 p-6 rounded-xl shadow-lg"
                >
                  {" "}
                  <CheckCircle className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />{" "}
                  <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
                    {benefit}
                  </p>{" "}
                </motion.div>
              ))}{" "}
            </div>{" "}
          </div>{" "}
        </section>{" "}
        {/* How It Works */}{" "}
        <section className="py-20 bg-white dark:bg-slate-900">
          {" "}
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {" "}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              {" "}
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
                {" "}
                How It Works{" "}
              </h2>{" "}
              <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
                {" "}
                Our simple 4-step process to get you started with mutual fund
                investments{" "}
              </p>{" "}
            </motion.div>{" "}
            <div className="relative flex flex-col md:flex-row items-center justify-center gap-8">
              {" "}
              {howItWorks.map((step, index) => (
                <React.Fragment key={index}>
                  {" "}
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.2 }}
                    className="text-center relative flex flex-col items-center"
                    style={{ minWidth: 200 }}
                  >
                    {" "}
                    {/* Icon */}{" "}
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-teal-600 rounded-full flex items-center justify-center mb-4">
                      {" "}
                      <step.icon className="w-8 h-8 text-white" />{" "}
                    </div>{" "}
                    {/* Step Number */}{" "}
                    <div className="bg-gradient-to-r from-blue-600 to-teal-600 text-white text-sm font-bold w-8 h-8 rounded-full flex items-center justify-center mb-4">
                      {" "}
                      {step.step}{" "}
                    </div>{" "}
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
                      {" "}
                      {step.title}{" "}
                    </h3>{" "}
                    <p className="text-slate-600 dark:text-slate-300">
                      {" "}
                      {step.description}{" "}
                    </p>{" "}
                  </motion.div>{" "}
                  {/* Arrow (not after last step) */}{" "}
                  {index < howItWorks.length - 1 && (
                    <div className="hidden md:flex items-center">
                      {" "}
                      <ArrowRight className="w-10 h-10 text-blue-400" />{" "}
                    </div>
                  )}{" "}
                </React.Fragment>
              ))}{" "}
            </div>{" "}
          </div>{" "}
        </section>{" "}
        {/* Why Choose SAVI */}{" "}
        <section className="py-20 bg-slate-50 dark:bg-slate-800">
          {" "}
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {" "}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              {" "}
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
                {" "}
                Why Choose SAVI Wealth?{" "}
              </h2>{" "}
              <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
                {" "}
                Our unique approach to mutual fund advisory sets us apart{" "}
              </p>{" "}
            </motion.div>{" "}
            <div className="grid md:grid-cols-2 gap-8">
              {" "}
              {whyChooseSavi.map((reason, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start space-x-4 bg-white dark:bg-slate-900 p-8 rounded-2xl shadow-lg"
                >
                  {" "}
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-teal-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    {" "}
                    <reason.icon className="w-6 h-6 text-white" />{" "}
                  </div>{" "}
                  <div>
                    {" "}
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
                      {" "}
                      {reason.title}{" "}
                    </h3>{" "}
                    <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                      {" "}
                      {reason.description}{" "}
                    </p>{" "}
                  </div>{" "}
                </motion.div>
              ))}{" "}
            </div>{" "}
          </div>{" "}
        </section>{" "}
        {/* CTA Section */}{" "}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-teal-600">
          {" "}
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            {" "}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              {" "}
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                {" "}
                Ready to Start Your Investment Journey?{" "}
              </h2>{" "}
              <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                {" "}
                Get personalized mutual fund recommendations from our experts.
                Book a free consultation today.{" "}
              </p>{" "}
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                {" "}
                <button className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-blue-50 transform hover:scale-105 transition-all duration-200 flex items-center justify-center space-x-2">
                  {" "}
                  <Phone className="w-5 h-5" />{" "}
                  <span>Book Free Consultation</span>{" "}
                </button>{" "}
                <button className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-blue-600 transition-colors duration-200 flex items-center justify-center space-x-2">
                  {" "}
                  <ArrowRight className="w-5 h-5" />{" "}
                  <span>Start SIP Calculator</span>{" "}
                </button>{" "}
              </div>{" "}
            </motion.div>{" "}
          </div>{" "}
        </section>{" "}
        {/* FAQs */}{" "}
        <section className="py-20 bg-white dark:bg-slate-900">
          {" "}
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            {" "}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              {" "}
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
                {" "}
                Frequently Asked Questions{" "}
              </h2>{" "}
              <p className="text-xl text-slate-600 dark:text-slate-300">
                {" "}
                Get answers to common questions about mutual fund investments{" "}
              </p>{" "}
            </motion.div>{" "}
            <div className="space-y-4">
              {" "}
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-slate-50 dark:bg-slate-800 rounded-xl overflow-hidden"
                >
                  {" "}
                  <button
                    onClick={() =>
                      setExpandedFAQ(expandedFAQ === index ? null : index)
                    }
                    className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors"
                  >
                    {" "}
                    <span className="text-lg font-semibold text-slate-900 dark:text-white">
                      {" "}
                      {faq.question}{" "}
                    </span>{" "}
                    {expandedFAQ === index ? (
                      <ChevronUp className="w-5 h-5 text-slate-500" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-slate-500" />
                    )}{" "}
                  </button>{" "}
                  {expandedFAQ === index && (
                    <div className="px-6 pb-4">
                      {" "}
                      <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                        {" "}
                        {faq.answer}{" "}
                      </p>{" "}
                    </div>
                  )}{" "}
                </motion.div>
              ))}{" "}
            </div>{" "}
          </div>{" "}
        </section>{" "}
        {/* Contact Section */}{" "}
        <section className="py-20 bg-slate-50 dark:bg-slate-800">
          {" "}
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {" "}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {" "}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                {" "}
                <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-6">
                  {" "}
                  Speak with Our Mutual Fund Experts{" "}
                </h2>{" "}
                <p className="text-xl text-slate-600 dark:text-slate-300 mb-8">
                  {" "}
                  Get personalized advice on mutual fund investments. Our
                  certified advisors are here to help you make informed
                  decisions.{" "}
                </p>{" "}
                <div className="space-y-4">
                  {" "}
                  <div className="flex items-center space-x-3">
                    {" "}
                    <Phone className="w-5 h-5 text-blue-600" />{" "}
                    <span className="text-slate-700 dark:text-slate-300">
                      +91 9876543210
                    </span>{" "}
                  </div>{" "}
                  <div className="flex items-center space-x-3">
                    {" "}
                    <Mail className="w-5 h-5 text-blue-600" />{" "}
                    <span className="text-slate-700 dark:text-slate-300">
                      mutualfunds@saviwealth.com
                    </span>{" "}
                  </div>{" "}
                </div>{" "}
              </motion.div>{" "}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-slate-900 p-8 rounded-2xl shadow-lg"
              >
                {" "}
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
                  {" "}
                  Book Your Free Consultation{" "}
                </h3>{" "}
                <form className="space-y-4">
                  {" "}
                  <div>
                    {" "}
                    <input
                      type="text"
                      placeholder="Full Name"
                      className="w-full px-4 py-3 border border-slate-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />{" "}
                  </div>{" "}
                  <div>
                    {" "}
                    <input
                      type="email"
                      placeholder="Email Address"
                      className="w-full px-4 py-3 border border-slate-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />{" "}
                  </div>{" "}
                  <div>
                    {" "}
                    <input
                      type="tel"
                      placeholder="Phone Number"
                      className="w-full px-4 py-3 border border-slate-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />{" "}
                  </div>{" "}
                  <div>
                    {" "}
                    <select className="w-full px-4 py-3 border border-slate-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                      {" "}
                      <option value="">Investment Amount Range</option>{" "}
                      <option value="500-5000">₹500 - ₹5,000</option>{" "}
                      <option value="5000-25000">₹5,000 - ₹25,000</option>{" "}
                      <option value="25000-100000">₹25,000 - ₹1,00,000</option>{" "}
                      <option value="100000+">Above ₹1,00,000</option>{" "}
                    </select>{" "}
                  </div>{" "}
                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-blue-600 to-teal-600 text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-200"
                  >
                    {" "}
                    Book Free Consultation{" "}
                  </button>{" "}
                </form>{" "}
              </motion.div>{" "}
            </div>{" "}
          </div>{" "}
        </section>{" "}
      </div>{" "}
    </>
  );
};
export default MutualFunds;
