import React, { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { CalculatorIcon, ArrowTrendingUpIcon } from "@heroicons/react/24/outline";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Legend,
} from "recharts";

const COLORS = ["#2563eb", "#22c55e"]; // Tailwind blue & green shades

const SIPCalculator: React.FC = () => {
  const [monthlyInvestment, setMonthlyInvestment] = useState(5000);
  const [expectedReturn, setExpectedReturn] = useState(12);
  const [timePeriod, setTimePeriod] = useState(10);

  const results = useMemo(() => {
    const monthlyRate = expectedReturn / 100 / 12;
    const totalMonths = timePeriod * 12;
    const totalInvestment = monthlyInvestment * totalMonths;

    const futureValue =
      monthlyInvestment *
      (((Math.pow(1 + monthlyRate, totalMonths) - 1) / monthlyRate) *
        (1 + monthlyRate));

    const wealthGained = futureValue - totalInvestment;

    return { totalInvestment, futureValue, wealthGained };
  }, [monthlyInvestment, expectedReturn, timePeriod]);

  // Year-wise growth data
  const growthData = useMemo(() => {
    const monthlyRate = expectedReturn / 100 / 12;
    const data: { year: number; invested: number; value: number }[] = [];

    for (let year = 1; year <= timePeriod; year++) {
      const months = year * 12;
      const invested = monthlyInvestment * months;
      const value =
        monthlyInvestment *
        (((Math.pow(1 + monthlyRate, months) - 1) / monthlyRate) *
          (1 + monthlyRate));

      data.push({
        year,
        invested: Math.round(invested),
        value: Math.round(value),
      });
    }

    return data;
  }, [monthlyInvestment, expectedReturn, timePeriod]);

  const chartData = [
    { name: "Total Investment", value: results.totalInvestment },
    { name: "Wealth Gained", value: results.wealthGained },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl border border-gray-100 dark:border-gray-700"
    >
      {/* Header */}
      <div className="flex items-center mb-8">
        <CalculatorIcon className="h-8 w-8 text-primary-600 dark:text-primary-400 mr-3" />
        <h3 className="text-3xl font-serif font-bold text-gray-900 dark:text-white">
          SIP Calculator
        </h3>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* Input Section */}
        <div className="space-y-8">
          {/* Monthly Investment */}
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
              Monthly Investment (₹)
            </label>
            <input
              type="range"
              min="500"
              max="100000"
              step="500"
              value={monthlyInvestment}
              onChange={(e) => setMonthlyInvestment(Number(e.target.value))}
              className="w-full h-2 bg-gray-200 rounded-lg cursor-pointer dark:bg-gray-700"
            />
            <div className="flex justify-between text-sm mt-2 text-gray-500 dark:text-gray-400">
              <span>₹500</span>
              <span className="text-base font-semibold text-primary-600 dark:text-primary-400">
                ₹{monthlyInvestment.toLocaleString()}
              </span>
              <span>₹1,00,000</span>
            </div>
          </div>

          {/* Expected Return */}
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
              Expected Annual Return (%)
            </label>
            <input
              type="range"
              min="1"
              max="30"
              step="0.5"
              value={expectedReturn}
              onChange={(e) => setExpectedReturn(Number(e.target.value))}
              className="w-full h-2 bg-gray-200 rounded-lg cursor-pointer dark:bg-gray-700"
            />
            <div className="flex justify-between text-sm mt-2 text-gray-500 dark:text-gray-400">
              <span>1%</span>
              <span className="text-base font-semibold text-primary-600 dark:text-primary-400">
                {expectedReturn}%
              </span>
              <span>30%</span>
            </div>
          </div>

          {/* Time Period */}
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
              Time Period (Years)
            </label>
            <input
              type="range"
              min="1"
              max="40"
              step="1"
              value={timePeriod}
              onChange={(e) => setTimePeriod(Number(e.target.value))}
              className="w-full h-2 bg-gray-200 rounded-lg cursor-pointer dark:bg-gray-700"
            />
            <div className="flex justify-between text-sm mt-2 text-gray-500 dark:text-gray-400">
              <span>1 Year</span>
              <span className="text-base font-semibold text-primary-600 dark:text-primary-400">
                {timePeriod} Years
              </span>
              <span>40 Years</span>
            </div>
          </div>
        </div>

        {/* Results Dashboard */}
        <div className="bg-gradient-to-br from-primary-50 to-secondary-50 dark:from-primary-900/20 dark:to-secondary-900/20 rounded-xl p-8 flex flex-col">
          {/* Title */}
          <div className="flex items-center mb-6">
            <ArrowTrendingUpIcon className="h-7 w-7 text-primary-600 dark:text-primary-400 mr-2" />
            <h4 className="text-xl font-semibold text-gray-900 dark:text-white">
              Investment Dashboard
            </h4>
          </div>

          {/* Dashboard Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-white dark:bg-gray-700 rounded-lg p-5 shadow text-center"
            >
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">Total Investment</p>
              <p className="text-xl font-bold text-gray-900 dark:text-white">
                ₹{results.totalInvestment.toLocaleString()}
              </p>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-white dark:bg-gray-700 rounded-lg p-5 shadow text-center"
            >
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">Wealth Gained</p>
              <p className="text-xl font-bold text-green-600 dark:text-green-400">
                ₹{results.wealthGained.toLocaleString()}
              </p>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-white dark:bg-gray-700 rounded-lg p-5 shadow text-center"
            >
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">Future Value</p>
              <p className="text-xl font-bold text-primary-600 dark:text-primary-400">
                ₹{results.futureValue.toLocaleString()}
              </p>
            </motion.div>
          </div>

          {/* Pie Chart */}
          <div className="h-56 mb-8">
            <ResponsiveContainer>
              <PieChart>
                <Pie
                  data={chartData}
                  dataKey="value"
                  nameKey="name"
                  cx="50%"
                  cy="50%"
                  outerRadius={80}
                  label
                >
                  {chartData.map((_entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>

          {/* Growth Prediction (Line Chart) */}
          <div className="h-72">
            <ResponsiveContainer>
              <LineChart data={growthData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="year" />
                <YAxis />
                <Tooltip formatter={(val: number) => `₹${val.toLocaleString()}`} />
                <Legend />
                <Line type="monotone" dataKey="invested" stroke="#2563eb" strokeWidth={2} />
                <Line type="monotone" dataKey="value" stroke="#22c55e" strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
          </div>

          {/* CTA Button */}
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full mt-8 px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white font-semibold rounded-lg transition-colors"
          >
            Start SIP Investment
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};

export default SIPCalculator;
