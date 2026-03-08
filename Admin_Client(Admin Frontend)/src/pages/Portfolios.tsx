import React, { useState, useEffect } from 'react';
import {
  PieChart,
  Pie,
  Cell,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';
import { Eye, TrendingUp, TrendingDown } from 'lucide-react';
import { Card, Button, Table } from '../components/common';
import { Portfolio } from '../types';
import { getAdminPortfolios } from '../services/api';

export const Portfolios: React.FC = () => {
  const [portfolios, setPortfolios] = useState<Portfolio[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const portfolioChartData = portfolios.map((p) => ({
    name: p.userName,
    stocks: p.stocks,
    mutualFunds: p.mutualFunds,
    bonds: p.bonds,
    others: p.others,
  }));

  const columns = [
    { key: 'userName', label: 'User Name' },
    { key: 'stocks', label: 'Stocks', className: 'text-center' },
    { key: 'mutualFunds', label: 'Mutual Funds', className: 'text-center' },
    { key: 'bonds', label: 'Bonds', className: 'text-center' },
    { key: 'totalValue', label: 'Total Value' },
    { key: 'monthlyReturn', label: 'Monthly Return' },
  ];

  const tableData = portfolios.map((portfolio) => ({
    ...portfolio,
    stocks: `${portfolio.stocks}%`,
    mutualFunds: `${portfolio.mutualFunds}%`,
    bonds: `${portfolio.bonds}%`,
    totalValue: `₹${(portfolio.totalValue / 100000).toFixed(2)}L`,
    monthlyReturn: (
      <div className="flex items-center gap-1">
        {portfolio.monthlyReturn > 0 ? (
          <>
            <TrendingUp size={16} className="text-success-600" />
            <span className="text-success-600 font-semibold">
              +{portfolio.monthlyReturn}%
            </span>
          </>
        ) : (
          <>
            <TrendingDown size={16} className="text-danger-600" />
            <span className="text-danger-600 font-semibold">
              {portfolio.monthlyReturn}%
            </span>
          </>
        )}
      </div>
    ),
  }));

  const tableActions = () => (
    <Button variant="secondary" size="sm" icon={<Eye size={16} />}>
      View
    </Button>
  );

  // Data for portfolio allocation types
  const allocationData = [
    { name: 'Stocks', value: 40, color: '#0284c7' },
    { name: 'Mutual Funds', value: 35, color: '#00a651' },
    { name: 'Bonds', value: 20, color: '#f59e0b' },
    { name: 'Others', value: 5, color: '#9ca3af' },
  ];

  useEffect(() => {
    const fetchPortfolios = async () => {
      try {
        setLoading(true);
        const token = localStorage.getItem('token');
        if (!token) throw new Error('Missing token');
        const data = await getAdminPortfolios(token);
        setPortfolios(data.portfolios || []);
        setError('');
      } catch (err) {
        console.error(err);
        setError('Failed to load portfolios');
      } finally {
        setLoading(false);
      }
    };
    fetchPortfolios();
  }, []);

  if (loading) return <p>Loading portfolios...</p>;
  if (error) return <p className="text-red-600">{error}</p>;

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Portfolio Overview</h1>
        <p className="text-gray-600 mt-2">
          Track portfolio composition and asset allocation across all users.
        </p>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <h3 className="text-sm font-medium text-gray-600 uppercase tracking-wide mb-2">
            Total Portfolios
          </h3>
          <p className="text-4xl font-bold text-gray-900">{portfolios.length}</p>
          <p className="text-sm text-gray-500 mt-2">Active portfolios</p>
        </Card>

        <Card>
          <h3 className="text-sm font-medium text-gray-600 uppercase tracking-wide mb-2">
            Total Assets
          </h3>
          <p className="text-4xl font-bold text-gray-900">
            ₹
            {(
              portfolios.reduce((sum, p) => sum + p.totalValue, 0) / 10000000
            ).toFixed(1)}
            Cr
          </p>
          <p className="text-sm text-gray-500 mt-2">Under management</p>
        </Card>

        <Card>
          <h3 className="text-sm font-medium text-gray-600 uppercase tracking-wide mb-2">
            Average Return
          </h3>
          <p className="text-4xl font-bold text-success-600">
            {(
              portfolios.length > 0
                ? (
                    portfolios.reduce((sum, p) => sum + p.monthlyReturn, 0) /
                    portfolios.length
                  ).toFixed(2)
                : '0'
            )}
            %
          </p>
          <p className="text-sm text-gray-500 mt-2">Monthly average</p>
        </Card>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Asset Allocation Pie Chart */}
        <Card>
          <h2 className="text-lg font-semibold text-gray-900 mb-4">
            Asset Allocation Distribution
          </h2>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={allocationData}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ name, value }) => `${name}: ${value}%`}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
              >
                {allocationData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </Card>

        {/* Asset Type Breakdown */}
        <Card>
          <h2 className="text-lg font-semibold text-gray-900 mb-4">
            Allocation Breakdown
          </h2>
          <div className="space-y-4">
            {allocationData.map((item) => (
              <div key={item.name}>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium text-gray-700">
                    {item.name}
                  </span>
                  <span className="text-lg font-bold" style={{ color: item.color }}>
                    {item.value}%
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div
                    className="rounded-full h-3 transition-all"
                    style={{
                      width: `${item.value}%`,
                      backgroundColor: item.color,
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>

      {/* Portfolio Composition Chart */}
      <Card>
        <h2 className="text-lg font-semibold text-gray-900 mb-4">
          Portfolio Composition by User
        </h2>
        <ResponsiveContainer width="100%" height={400}>
          <BarChart
            data={portfolioChartData}
            margin={{ top: 20, right: 30, left: 0, bottom: 60 }}
          >
            <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
            <XAxis
              dataKey="name"
              angle={-45}
              textAnchor="end"
              height={80}
              tick={{ fontSize: 12 }}
            />
            <YAxis stroke="#6b7280" />
            <Tooltip
              contentStyle={{
                backgroundColor: '#fff',
                border: '1px solid #e5e7eb',
                borderRadius: '8px',
              }}
            />
            <Legend />
            <Bar dataKey="stocks" fill="#0284c7" stackId="a" />
            <Bar dataKey="mutualFunds" fill="#00a651" stackId="a" />
            <Bar dataKey="bonds" fill="#f59e0b" stackId="a" />
            <Bar dataKey="others" fill="#9ca3af" stackId="a" />
          </BarChart>
        </ResponsiveContainer>
      </Card>

      {/* Portfolios Table */}
      <Card>
        <h2 className="text-lg font-semibold text-gray-900 mb-4">
          Portfolio Details
        </h2>
        <Table
          columns={columns}
          data={tableData}
          actions={tableActions}
        />
      </Card>
    </div>
  );
};
