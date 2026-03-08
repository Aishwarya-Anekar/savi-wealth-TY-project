import React from "react";
import { motion } from "framer-motion";
import SIPCalculator from "../components/tools/SIPCalculator";
import SEOHead from "../components/SEOHead";

const SIPCalculatorPage: React.FC = () => {
  return (
    <div className="min-h-screen pt-16">
      <SEOHead
        title="Mutual Fund SIP Calculator | SaviWealth"
        description="Calculate your SIP returns with our advanced calculator. Analyze monthly investments with inflation adjustment, growth projections, and detailed metrics."
        keywords="SIP calculator, mutual fund SIP, investment returns, financial planning, wealth calculator"
      />

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-secondary-50 via-white to-secondary-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-gray-900 dark:text-white mb-6">
              Mutual Fund{" "}
              <span className="text-primary-600 dark:text-primary-400">
                SIP Calculator
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Plan your SIP investments with our comprehensive calculator.
              Analyze monthly contributions, future value, inflation-adjusted
              returns, and year-wise projections.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Calculator Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SIPCalculator />
        </div>
      </section>

      {/* Features Section */}
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
              Calculator Features
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Monthly SIP Analysis",
                description:
                  "Calculate future value and gains from monthly SIP contributions",
                icon: "📊",
              },
              {
                title: "Growth Projections",
                description:
                  "Interactive charts showing year-wise corpus build-up",
                icon: "📈",
              },
              {
                title: "Inflation Adjustment",
                description: "See real returns after adjusting for inflation",
                icon: "💰",
              },
              {
                title: "Multiple Metrics",
                description:
                  "Absolute returns, annualized returns, and inflation-adjusted value",
                icon: "🎯",
              },
              {
                title: "Flexible Inputs",
                description:
                  "Customizable SIP amount, return rate, and time period",
                icon: "⚙️",
              },
              {
                title: "Professional Results",
                description:
                  "Detailed breakdown suitable for financial planning presentations",
                icon: "📋",
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-gray-700 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default SIPCalculatorPage;
