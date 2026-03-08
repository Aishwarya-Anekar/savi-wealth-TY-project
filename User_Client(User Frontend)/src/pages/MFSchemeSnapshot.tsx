import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MagnifyingGlassIcon, DocumentArrowDownIcon } from '@heroicons/react/24/outline';

interface SchemeData {
  id: number;
  schemeName: string;
  fundHouse: string;
  category: string;
  subCategory: string;
  expenseRatio: number;
  aum: number;
  nav: number;
  returns1Y: number;
  returns3Y: number;
  returns5Y: number;
  riskLevel: 'Low' | 'Moderate' | 'High' | 'Very High';
  minInvestment: number;
  exitLoad: string;
  launchDate: string;
}

const MFSchemeSnapshot: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('expenseRatio');
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');

  // Sample scheme data
  const schemeData: SchemeData[] = [
    {
      id: 1,
      schemeName: 'HDFC Top 100 Fund',
      fundHouse: 'HDFC Mutual Fund',
      category: 'Equity',
      subCategory: 'Large Cap',
      expenseRatio: 1.85,
      aum: 15420,
      nav: 645.32,
      returns1Y: 12.5,
      returns3Y: 15.8,
      returns5Y: 13.2,
      riskLevel: 'High',
      minInvestment: 5000,
      exitLoad: '1% if redeemed within 1 year',
      launchDate: '2010-03-15'
    },
    {
      id: 2,
      schemeName: 'ICICI Prudential Corporate Bond Fund',
      fundHouse: 'ICICI Prudential Mutual Fund',
      category: 'Debt',
      subCategory: 'Corporate Bond',
      expenseRatio: 0.65,
      aum: 8750,
      nav: 28.45,
      returns1Y: 6.8,
      returns3Y: 7.2,
      returns5Y: 8.1,
      riskLevel: 'Low',
      minInvestment: 5000,
      exitLoad: 'Nil',
      launchDate: '2015-08-20'
    },
    {
      id: 3,
      schemeName: 'SBI Balanced Advantage Fund',
      fundHouse: 'SBI Mutual Fund',
      category: 'Hybrid',
      subCategory: 'Dynamic Asset Allocation',
      expenseRatio: 1.25,
      aum: 12300,
      nav: 156.78,
      returns1Y: 9.5,
      returns3Y: 11.2,
      returns5Y: 10.8,
      riskLevel: 'Moderate',
      minInvestment: 1000,
      exitLoad: '1% if redeemed within 1 year',
      launchDate: '2018-01-10'
    },
    {
      id: 4,
      schemeName: 'Axis Small Cap Fund',
      fundHouse: 'Axis Mutual Fund',
      category: 'Equity',
      subCategory: 'Small Cap',
      expenseRatio: 2.15,
      aum: 6800,
      nav: 89.23,
      returns1Y: 18.2,
      returns3Y: 22.5,
      returns5Y: 16.8,
      riskLevel: 'Very High',
      minInvestment: 5000,
      exitLoad: '1% if redeemed within 1 year',
      launchDate: '2013-12-05'
    },
    {
      id: 5,
      schemeName: 'Franklin India Ultra Short Bond Fund',
      fundHouse: 'Franklin Templeton Mutual Fund',
      category: 'Debt',
      subCategory: 'Ultra Short Duration',
      expenseRatio: 0.45,
      aum: 4200,
      nav: 11.67,
      returns1Y: 4.2,
      returns3Y: 5.1,
      returns5Y: 6.8,
      riskLevel: 'Low',
      minInvestment: 5000,
      exitLoad: 'Nil',
      launchDate: '2019-06-12'
    }
  ];

  const categories = ['All', 'Equity', 'Debt', 'Hybrid'];

  const filteredAndSortedData = schemeData
    .filter(scheme => {
      const matchesCategory = selectedCategory === 'All' || scheme.category === selectedCategory;
      const matchesSearch = scheme.schemeName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           scheme.fundHouse.toLowerCase().includes(searchTerm.toLowerCase());
      return matchesCategory && matchesSearch;
    })
    .sort((a, b) => {
      const aValue = a[sortBy as keyof SchemeData];
      const bValue = b[sortBy as keyof SchemeData];
      
      if (typeof aValue === 'number' && typeof bValue === 'number') {
        return sortOrder === 'asc' ? aValue - bValue : bValue - aValue;
      }
      
      return sortOrder === 'asc' 
        ? String(aValue).localeCompare(String(bValue))
        : String(bValue).localeCompare(String(aValue));
    });

  const exportToCSV = () => {
    const headers = [
      'Scheme Name', 'Fund House', 'Category', 'Sub Category', 'Expense Ratio (%)', 
      'AUM (Cr)', 'NAV', '1Y Returns (%)', '3Y Returns (%)', '5Y Returns (%)', 
      'Risk Level', 'Min Investment', 'Exit Load', 'Launch Date'
    ];
    
    const csvContent = [
      headers.join(','),
      ...filteredAndSortedData.map(scheme => [
        `"${scheme.schemeName}"`,
        `"${scheme.fundHouse}"`,
        scheme.category,
        `"${scheme.subCategory}"`,
        scheme.expenseRatio,
        scheme.aum,
        scheme.nav,
        scheme.returns1Y,
        scheme.returns3Y,
        scheme.returns5Y,
        scheme.riskLevel,
        scheme.minInvestment,
        `"${scheme.exitLoad}"`,
        scheme.launchDate
      ].join(','))
    ].join('\\n');

    const blob = new Blob([csvContent], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'mf_scheme_snapshot.csv';
    a.click();
    window.URL.revokeObjectURL(url);
  };

  const getRiskColor = (risk: string) => {
    switch (risk) {
      case 'Low': return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200';
      case 'Moderate': return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200';
      case 'High': return 'bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200';
      case 'Very High': return 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200';
      default: return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200';
    }
  };

  return (
    <div className="min-h-screen pt-16 bg-gray-50 dark:bg-gray-900">
      {/* Hero Section */}
      <section className="py-12 bg-gradient-to-br from-blue-50 via-indigo-50 to-blue-100 dark:from-gray-800 dark:via-gray-800 dark:to-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 dark:text-white mb-4">
              MF <span className="text-blue-600 dark:text-blue-400">Scheme Snapshot</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Know the Expense Ratio at a glance about Schemes across equity, debt, hybrid and compare key metrics to make informed investment decisions.
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
                      ? 'bg-blue-600 text-white shadow-lg'
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
                className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
              />
            </div>

            {/* Sort */}
            <div className="flex gap-2">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500"
              >
                <option value="expenseRatio">Expense Ratio</option>
                <option value="returns1Y">1Y Returns</option>
                <option value="returns3Y">3Y Returns</option>
                <option value="aum">AUM</option>
                <option value="nav">NAV</option>
              </select>
              <button
                onClick={() => setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc')}
                className="px-3 py-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
              >
                {sortOrder === 'asc' ? '↑' : '↓'}
              </button>
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
                      Expense Ratio
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                      AUM (₹ Cr)
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                      NAV
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                      Returns
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                      Risk Level
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                      Min Investment
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 dark:divide-gray-600">
                  {filteredAndSortedData.map((scheme, index) => (
                    <motion.tr
                      key={scheme.id}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      className="hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200"
                    >
                      <td className="px-6 py-4">
                        <div>
                          <div className="text-sm font-medium text-gray-900 dark:text-white">
                            {scheme.schemeName}
                          </div>
                          <div className="text-sm text-gray-500 dark:text-gray-400">
                            {scheme.fundHouse}
                          </div>
                          <div className="text-xs text-gray-400 dark:text-gray-500">
                            {scheme.category} • {scheme.subCategory}
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="text-sm font-medium text-gray-900 dark:text-white">
                          {scheme.expenseRatio}%
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="text-sm font-medium text-gray-900 dark:text-white">
                          ₹{scheme.aum.toLocaleString()}
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="text-sm font-medium text-gray-900 dark:text-white">
                          ₹{scheme.nav}
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="text-xs space-y-1">
                          <div className="flex justify-between">
                            <span className="text-gray-500 dark:text-gray-400">1Y:</span>
                            <span className={`font-medium ${scheme.returns1Y >= 0 ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'}`}>
                              {scheme.returns1Y}%
                            </span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-500 dark:text-gray-400">3Y:</span>
                            <span className={`font-medium ${scheme.returns3Y >= 0 ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'}`}>
                              {scheme.returns3Y}%
                            </span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-500 dark:text-gray-400">5Y:</span>
                            <span className={`font-medium ${scheme.returns5Y >= 0 ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'}`}>
                              {scheme.returns5Y}%
                            </span>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getRiskColor(scheme.riskLevel)}`}>
                          {scheme.riskLevel}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <div className="text-sm font-medium text-gray-900 dark:text-white">
                          ₹{scheme.minInvestment.toLocaleString()}
                        </div>
                        <div className="text-xs text-gray-500 dark:text-gray-400">
                          {scheme.exitLoad}
                        </div>
                      </td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>

            {filteredAndSortedData.length === 0 && (
              <div className="text-center py-12">
                <p className="text-gray-500 dark:text-gray-400 text-lg">
                  No schemes found for the selected criteria.
                </p>
              </div>
            )}
          </motion.div>

          {/* Summary Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-8 grid grid-cols-1 md:grid-cols-4 gap-6"
          >
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
              <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                {filteredAndSortedData.length}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Total Schemes</div>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
              <div className="text-2xl font-bold text-green-600 dark:text-green-400">
                {filteredAndSortedData.length > 0 ? (filteredAndSortedData.reduce((sum, scheme) => sum + scheme.expenseRatio, 0) / filteredAndSortedData.length).toFixed(2) : '0.00'}%
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Avg Expense Ratio</div>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
              <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">
                ₹{filteredAndSortedData.length > 0 ? (filteredAndSortedData.reduce((sum, scheme) => sum + scheme.aum, 0)).toLocaleString() : '0'} Cr
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Total AUM</div>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
              <div className="text-2xl font-bold text-orange-600 dark:text-orange-400">
                {filteredAndSortedData.length > 0 ? (filteredAndSortedData.reduce((sum, scheme) => sum + scheme.returns1Y, 0) / filteredAndSortedData.length).toFixed(1) : '0.0'}%
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Avg 1Y Returns</div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default MFSchemeSnapshot;

