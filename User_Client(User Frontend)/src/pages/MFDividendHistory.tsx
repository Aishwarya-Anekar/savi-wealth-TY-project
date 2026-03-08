import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MagnifyingGlassIcon, DocumentArrowDownIcon } from '@heroicons/react/24/outline';

interface DividendRecord {
  id: number;
  schemeName: string;
  fundHouse: string;
  category: string;
  dividendRate: number;
  recordDate: string;
  paymentDate: string;
  nav: number;
}

const MFDividendHistory: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  
 

  // Sample dividend data
  const dividendData: DividendRecord[] = [
    {
      id: 1,
      schemeName: 'HDFC Equity Fund - Dividend',
      fundHouse: 'HDFC Mutual Fund',
      category: 'Equity',
      dividendRate: 2.5,
      recordDate: '2024-01-15',
      paymentDate: '2024-01-20',
      nav: 45.67
    },
    {
      id: 2,
      schemeName: 'ICICI Prudential Balanced Advantage Fund - Dividend',
      fundHouse: 'ICICI Prudential Mutual Fund',
      category: 'Hybrid',
      dividendRate: 1.8,
      recordDate: '2024-01-10',
      paymentDate: '2024-01-15',
      nav: 32.45
    },
    {
      id: 3,
      schemeName: 'SBI Magnum Income Fund - Dividend',
      fundHouse: 'SBI Mutual Fund',
      category: 'Debt',
      dividendRate: 3.2,
      recordDate: '2024-01-05',
      paymentDate: '2024-01-10',
      nav: 28.90
    },
    {
      id: 4,
      schemeName: 'Axis Bluechip Fund - Dividend',
      fundHouse: 'Axis Mutual Fund',
      category: 'Equity',
      dividendRate: 2.1,
      recordDate: '2023-12-28',
      paymentDate: '2024-01-02',
      nav: 52.34
    },
    {
      id: 5,
      schemeName: 'Franklin India Corporate Bond Fund - Dividend',
      fundHouse: 'Franklin Templeton Mutual Fund',
      category: 'Debt',
      dividendRate: 2.8,
      recordDate: '2023-12-20',
      paymentDate: '2023-12-25',
      nav: 15.67
    }
  ];

  const categories = ['All', 'Equity', 'Debt', 'Hybrid'];

  const filteredData = dividendData.filter(record => {
    const matchesCategory = selectedCategory === 'All' || record.category === selectedCategory;
    const matchesSearch = record.schemeName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         record.fundHouse.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const exportToCSV = () => {
    const headers = ['Scheme Name', 'Fund House', 'Category', 'Dividend Rate (%)', 'Record Date', 'Payment Date', 'NAV'];
    const csvContent = [
      headers.join(','),
      ...filteredData.map(record => [
        `"${record.schemeName}"`,
        `"${record.fundHouse}"`,
        record.category,
        record.dividendRate,
        record.recordDate,
        record.paymentDate,
        record.nav
      ].join(','))
    ].join('\\n');

    const blob = new Blob([csvContent], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'mf_dividend_history.csv';
    a.click();
    window.URL.revokeObjectURL(url);
  };

  return (
    <div className="min-h-screen pt-16 bg-gray-50 dark:bg-gray-900">
      {/* Hero Section */}
      <section className="py-12 bg-gradient-to-br from-red-50 via-pink-50 to-red-100 dark:from-gray-800 dark:via-gray-800 dark:to-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 dark:text-white mb-4">
              MF <span className="text-red-600 dark:text-red-400">Dividend History</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Get the latest dividend payouts of all mutual fund schemes by category. Track dividend distributions and payment dates.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filters Section */}
      <section className="py-8 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-6 items-center">
            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                    selectedCategory === category
                      ? 'bg-red-600 text-white shadow-lg'
                      : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <MagnifyingGlassIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search by scheme or fund house..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
              />
            </div>

            {/* Export Button */}
            <button
              onClick={exportToCSV}
              className="flex items-center gap-2 px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-colors duration-200"
            >
              <DocumentArrowDownIcon className="h-5 w-5" />
              Export CSV
            </button>
          </div>
        </div>
      </section>

      {/* Data Table */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden"
          >
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50 dark:bg-gray-700">
                  <tr>
                    <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                      Scheme Details
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                      Category
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                      Dividend Rate
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                      Record Date
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                      Payment Date
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                      NAV
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 dark:divide-gray-600">
                  {filteredData.map((record, index) => (
                    <motion.tr
                      key={record.id}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      className="hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200"
                    >
                      <td className="px-6 py-4">
                        <div>
                          <div className="text-sm font-medium text-gray-900 dark:text-white">
                            {record.schemeName}
                          </div>
                          <div className="text-sm text-gray-500 dark:text-gray-400">
                            {record.fundHouse}
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                          record.category === 'Equity' ? 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200' :
                          record.category === 'Debt' ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200' :
                          'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200'
                        }`}>
                          {record.category}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">
                        {record.dividendRate}%
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-400">
                        {new Date(record.recordDate).toLocaleDateString('en-IN')}
                      </td>
                      <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-400">
                        {new Date(record.paymentDate).toLocaleDateString('en-IN')}
                      </td>
                      <td className="px-6 py-4 text-sm font-medium text-gray-900 dark:text-white">
                        ₹{record.nav}
                      </td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>

            {filteredData.length === 0 && (
              <div className="text-center py-12">
                <p className="text-gray-500 dark:text-gray-400 text-lg">
                  No dividend records found for the selected criteria.
                </p>
              </div>
            )}
          </motion.div>

          {/* Summary Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
              <div className="text-2xl font-bold text-red-600 dark:text-red-400">
                {filteredData.length}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Total Records</div>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
              <div className="text-2xl font-bold text-green-600 dark:text-green-400">
                {filteredData.length > 0 ? (filteredData.reduce((sum, record) => sum + record.dividendRate, 0) / filteredData.length).toFixed(2) : '0.00'}%
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Average Dividend Rate</div>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
              <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                {filteredData.length > 0 ? Math.max(...filteredData.map(record => record.dividendRate)).toFixed(2) : '0.00'}%
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Highest Dividend Rate</div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default MFDividendHistory;

