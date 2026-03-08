import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { CalculatorIcon, ArrowTrendingUpIcon, CalendarIcon } from '@heroicons/react/24/outline';

const MFReturnsCalculator: React.FC = () => {
  const [initialInvestment, setInitialInvestment] = useState(100000);
  const [monthlyInvestment, setMonthlyInvestment] = useState(5000);
  const [expectedReturn, setExpectedReturn] = useState(12);
  const [timePeriod, setTimePeriod] = useState(10);
  const [inflationRate, setInflationRate] = useState(6);

  const results = useMemo(() => {
    const monthlyRate = expectedReturn / 100 / 12;
    const totalMonths = timePeriod * 12;
    
    // Lump sum calculation
    const lumpSumFV = initialInvestment * Math.pow(1 + expectedReturn / 100, timePeriod);
    
    // SIP calculation
    const sipFV = monthlyInvestment * 
      (((Math.pow(1 + monthlyRate, totalMonths) - 1) / monthlyRate) * (1 + monthlyRate));
    
    const totalInvestment = initialInvestment + (monthlyInvestment * totalMonths);
    const totalFutureValue = lumpSumFV + sipFV;
    const totalGains = totalFutureValue - totalInvestment;
    
    // Inflation adjusted value
    const inflationAdjustedValue = totalFutureValue / Math.pow(1 + inflationRate / 100, timePeriod);
    
    // Year-wise breakdown for chart
    const yearlyData = [];
    for (let year = 1; year <= timePeriod; year++) {
      const lumpSumValue = initialInvestment * Math.pow(1 + expectedReturn / 100, year);
      const sipMonths = year * 12;
      const sipValue = monthlyInvestment * 
        (((Math.pow(1 + monthlyRate, sipMonths) - 1) / monthlyRate) * (1 + monthlyRate));
      const totalValue = lumpSumValue + sipValue;
      const invested = initialInvestment + (monthlyInvestment * sipMonths);
      
      yearlyData.push({
        year: `Year ${year}`,
        invested: Math.round(invested),
        value: Math.round(totalValue),
        gains: Math.round(totalValue - invested)
      });
    }

    return {
      totalInvestment,
      totalFutureValue,
      totalGains,
      inflationAdjustedValue,
      yearlyData,
      absoluteReturn: ((totalFutureValue - totalInvestment) / totalInvestment) * 100,
      annualizedReturn: (Math.pow(totalFutureValue / totalInvestment, 1 / timePeriod) - 1) * 100
    };
  }, [initialInvestment, monthlyInvestment, expectedReturn, timePeriod, inflationRate]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl border border-gray-100 dark:border-gray-700"
    >
      <div className="flex items-center mb-6">
        <CalculatorIcon className="h-8 w-8 text-primary-600 dark:text-primary-400 mr-3" />
        <h3 className="text-2xl font-serif font-bold text-gray-900 dark:text-white">
          Mutual Fund Returns Calculator
        </h3>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
        {/* Input Section */}
        <div className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Initial Investment (₹)
            </label>
            <input
              type="range"
              min="10000"
              max="1000000"
              step="10000"
              value={initialInvestment}
              onChange={(e) => setInitialInvestment(Number(e.target.value))}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
            />
            <div className="flex justify-between text-sm text-gray-500 dark:text-gray-400 mt-1">
              <span>₹10K</span>
              <span className="font-semibold text-primary-600 dark:text-primary-400">
                ₹{(initialInvestment / 1000).toFixed(0)}K
              </span>
              <span>₹10L</span>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Monthly SIP (₹)
            </label>
            <input
              type="range"
              min="1000"
              max="50000"
              step="1000"
              value={monthlyInvestment}
              onChange={(e) => setMonthlyInvestment(Number(e.target.value))}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
            />
            <div className="flex justify-between text-sm text-gray-500 dark:text-gray-400 mt-1">
              <span>₹1K</span>
              <span className="font-semibold text-primary-600 dark:text-primary-400">
                ₹{(monthlyInvestment / 1000).toFixed(0)}K
              </span>
              <span>₹50K</span>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Expected Annual Return (%)
            </label>
            <input
              type="range"
              min="5"
              max="25"
              step="0.5"
              value={expectedReturn}
              onChange={(e) => setExpectedReturn(Number(e.target.value))}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
            />
            <div className="flex justify-between text-sm text-gray-500 dark:text-gray-400 mt-1">
              <span>5%</span>
              <span className="font-semibold text-primary-600 dark:text-primary-400">
                {expectedReturn}%
              </span>
              <span>25%</span>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Investment Period (Years)
            </label>
            <input
              type="range"
              min="1"
              max="30"
              step="1"
              value={timePeriod}
              onChange={(e) => setTimePeriod(Number(e.target.value))}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
            />
            <div className="flex justify-between text-sm text-gray-500 dark:text-gray-400 mt-1">
              <span>1 Year</span>
              <span className="font-semibold text-primary-600 dark:text-primary-400">
                {timePeriod} Years
              </span>
              <span>30 Years</span>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Inflation Rate (%)
            </label>
            <input
              type="range"
              min="3"
              max="10"
              step="0.5"
              value={inflationRate}
              onChange={(e) => setInflationRate(Number(e.target.value))}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
            />
            <div className="flex justify-between text-sm text-gray-500 dark:text-gray-400 mt-1">
              <span>3%</span>
              <span className="font-semibold text-primary-600 dark:text-primary-400">
                {inflationRate}%
              </span>
              <span>10%</span>
            </div>
          </div>
        </div>

        {/* Results Section */}
        <div className="bg-gradient-to-br from-primary-50 to-secondary-50 dark:from-primary-900/20 dark:to-secondary-900/20 rounded-xl p-6">
          <div className="flex items-center mb-4">
            <ArrowTrendingUpIcon className="h-6 w-6 text-primary-600 dark:text-primary-400 mr-2" />
            <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
              Investment Results
            </h4>
          </div>
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-gray-600 dark:text-gray-300 text-sm">Total Investment:</span>
              <span className="text-lg font-semibold text-gray-900 dark:text-white">
                ₹{(results.totalInvestment / 100000).toFixed(1)}L
              </span>
            </div>

            <div className="flex justify-between items-center">
              <span className="text-gray-600 dark:text-gray-300 text-sm">Future Value:</span>
              <span className="text-lg font-semibold text-primary-600 dark:text-primary-400">
                ₹{(results.totalFutureValue / 100000).toFixed(1)}L
              </span>
            </div>

            <div className="flex justify-between items-center">
              <span className="text-gray-600 dark:text-gray-300 text-sm">Total Gains:</span>
              <span className="text-lg font-semibold text-green-600 dark:text-green-400">
                ₹{(results.totalGains / 100000).toFixed(1)}L
              </span>
            </div>

            <div className="border-t border-gray-200 dark:border-gray-600 pt-4">
              <div className="flex justify-between items-center mb-2">
                <span className="text-gray-600 dark:text-gray-300 text-sm">Absolute Return:</span>
                <span className="text-sm font-semibold text-blue-600 dark:text-blue-400">
                  {results.absoluteReturn.toFixed(1)}%
                </span>
              </div>
              <div className="flex justify-between items-center mb-2">
                <span className="text-gray-600 dark:text-gray-300 text-sm">Annualized Return:</span>
                <span className="text-sm font-semibold text-purple-600 dark:text-purple-400">
                  {results.annualizedReturn.toFixed(1)}%
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600 dark:text-gray-300 text-sm">Inflation Adjusted:</span>
                <span className="text-sm font-semibold text-orange-600 dark:text-orange-400">
                  ₹{(results.inflationAdjustedValue / 100000).toFixed(1)}L
                </span>
              </div>
            </div>
          </div>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full mt-6 px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white font-semibold rounded-lg transition-colors duration-200"
          >
            Start Investment
          </motion.button>
        </div>

        {/* Chart Section */}
        <div className="bg-white dark:bg-gray-700 rounded-xl p-6 border border-gray-200 dark:border-gray-600">
          <div className="flex items-center mb-4">
            <CalendarIcon className="h-6 w-6 text-primary-600 dark:text-primary-400 mr-2" />
            <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
              Growth Projection
            </h4>
          </div>
          
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={results.yearlyData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                <XAxis 
                  dataKey="year" 
                  stroke="#6B7280"
                  fontSize={12}
                />
                <YAxis 
                  stroke="#6B7280"
                  fontSize={12}
                  tickFormatter={(value) => `₹${(value / 100000).toFixed(1)}L`}
                />
                <Tooltip 
                  formatter={(value: number, name: string) => [
                    `₹${(value / 100000).toFixed(1)}L`, 
                    name === 'invested' ? 'Invested' : name === 'value' ? 'Portfolio Value' : 'Gains'
                  ]}
                  labelStyle={{ color: '#374151' }}
                  contentStyle={{ 
                    backgroundColor: '#F9FAFB', 
                    border: '1px solid #E5E7EB',
                    borderRadius: '8px'
                  }}
                />
                <Line 
                  type="monotone" 
                  dataKey="invested" 
                  stroke="#6B7280" 
                  strokeWidth={2}
                  dot={{ fill: '#6B7280', strokeWidth: 2, r: 4 }}
                />
                <Line 
                  type="monotone" 
                  dataKey="value" 
                  stroke="#2563EB" 
                  strokeWidth={3}
                  dot={{ fill: '#2563EB', strokeWidth: 2, r: 4 }}
                />
                <Line 
                  type="monotone" 
                  dataKey="gains" 
                  stroke="#059669" 
                  strokeWidth={2}
                  dot={{ fill: '#059669', strokeWidth: 2, r: 4 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default MFReturnsCalculator;