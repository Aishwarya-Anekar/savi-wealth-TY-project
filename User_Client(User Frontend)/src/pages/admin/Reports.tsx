import React, { useState, useEffect } from 'react';
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';
import { Download } from 'lucide-react';
import { Card, Button } from '../../components/admin/AdminCommon';
import { getAdminReports, getAdminAnalytics } from '../../services/api';

// Chart data types could be defined later if needed


export const Reports: React.FC = () => {
  const [dateRange, setDateRange] = useState({ start: '2024-01-01', end: '2024-06-30' });
  const [reports, setReports] = useState<any>(null);
  const [analytics, setAnalytics] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const token = localStorage.getItem('token');
        if (!token) throw new Error('Missing token');
        const reportsRes = await getAdminReports(token);
        const analyticsRes = await getAdminAnalytics(token);
        setReports(reportsRes);
        setAnalytics(analyticsRes);
        setError('');
      } catch (err) {
        console.error(err);
        setError('Failed to load report data');
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading) {
    return <p>Loading reports...</p>;
  }

  if (error) {
    return <p className="text-red-600">{error}</p>;
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Reports</h1>
        <p className="text-gray-600 mt-2">
          Analyze platform performance and generate custom reports.
        </p>
      </div>

      {/* Date Range Selector */}
      <Card>
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-6 gap-4 items-end">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Start Date
            </label>
            <input
              type="date"
              value={dateRange.start}
              onChange={(e) =>
                setDateRange({ ...dateRange, start: e.target.value })
              }
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              End Date
            </label>
            <input
              type="date"
              value={dateRange.end}
              onChange={(e) =>
                setDateRange({ ...dateRange, end: e.target.value })
              }
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-500"
            />
          </div>

          <button className="px-6 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors font-medium">
            Apply
          </button>

          <Button variant="secondary" size="sm" icon={<Download size={16} />}>
            PDF
          </Button>

          <Button variant="secondary" size="sm" icon={<Download size={16} />}>
            CSV
          </Button>

          <Button variant="secondary" size="sm" icon={<Download size={16} />}>
            Excel
          </Button>
        </div>
      </Card>

      {/* Key Metrics (from reports API) */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card>
          <h3 className="text-sm font-medium text-gray-600 uppercase tracking-wide mb-2">
            Total Users
          </h3>
          <p className="text-4xl font-bold text-gray-900">
            {reports?.userStats?.totalUsers || 0}
          </p>
        </Card>

        <Card>
          <h3 className="text-sm font-medium text-gray-600 uppercase tracking-wide mb-2">
            Total Investments
          </h3>
          <p className="text-4xl font-bold text-gray-900">
            {reports?.investmentStats?.totalInvestments || 0}
          </p>
        </Card>

        <Card>
          <h3 className="text-sm font-medium text-gray-600 uppercase tracking-wide mb-2">
            Total Transactions
          </h3>
          <p className="text-4xl font-bold text-gray-900">
            {reports?.transactionStats?.totalTransactions || 0}
          </p>
        </Card>

        <Card>
          <h3 className="text-sm font-medium text-gray-600 uppercase tracking-wide mb-2">
            Assets Under Management
          </h3>
          <p className="text-4xl font-bold text-gray-900">
            ₹{(reports?.aumStats?.totalAUM || 0).toLocaleString()}
          </p>
        </Card>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* User Growth Chart */}
        <Card>
          <h2 className="text-lg font-semibold text-gray-900 mb-4">
            User Growth Trend
          </h2>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={analytics?.userGrowth || []}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
              <XAxis dataKey="month" stroke="#6b7280" />
              <YAxis stroke="#6b7280" />
              <Tooltip
                contentStyle={{
                  backgroundColor: '#fff',
                  border: '1px solid #e5e7eb',
                  borderRadius: '8px',
                }}
              />
              <Legend />
              <Line
                type="monotone"
                dataKey="users"
                stroke="#0284c7"
                strokeWidth={2}
                dot={{ fill: '#0284c7', r: 5 }}
                activeDot={{ r: 7 }}
                name="Active Users"
              />
            </LineChart>
          </ResponsiveContainer>
        </Card>

        {/* Revenue Chart */}
        <Card>
          <h2 className="text-lg font-semibold text-gray-900 mb-4">
            Revenue Performance
          </h2>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={analytics?.revenue || []}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
              <XAxis dataKey="month" stroke="#6b7280" />
              <YAxis stroke="#6b7280" />
              <Tooltip
                contentStyle={{
                  backgroundColor: '#fff',
                  border: '1px solid #e5e7eb',
                  borderRadius: '8px',
                }}
              />
              <Legend />
              <Bar
                dataKey="revenue"
                fill="#00a651"
                radius={[8, 8, 0, 0]}
                name="Revenue (₹100K)"
              />
            </BarChart>
          </ResponsiveContainer>
        </Card>
      </div>

      {/* Export Report Section */}
      <Card>
        <h2 className="text-lg font-semibold text-gray-900 mb-4">
          Export Reports
        </h2>
        <p className="text-gray-600 text-sm mb-6">
          Download comprehensive reports in your preferred format.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <button className="flex items-center gap-2 px-4 py-3 bg-red-50 text-red-600 rounded-lg hover:bg-red-100 transition-colors font-medium border border-red-200">
            <Download size={18} />
            PDF Report
          </button>
          <button className="flex items-center gap-2 px-4 py-3 bg-green-50 text-green-600 rounded-lg hover:bg-green-100 transition-colors font-medium border border-green-200">
            <Download size={18} />
            Excel Report
          </button>
          <button className="flex items-center gap-2 px-4 py-3 bg-blue-50 text-blue-600 rounded-lg hover:bg-blue-100 transition-colors font-medium border border-blue-200">
            <Download size={18} />
            CSV Export
          </button>
          <button className="flex items-center gap-2 px-4 py-3 bg-purple-50 text-purple-600 rounded-lg hover:bg-purple-100 transition-colors font-medium border border-purple-200">
            <Download size={18} />
            Schedule Report
          </button>
        </div>
      </Card>

      {/* Recent Reports */}
      <Card>
        <h2 className="text-lg font-semibold text-gray-900 mb-4">
          Recently Generated
        </h2>
        <div className="space-y-3">
          {[
            'Monthly Performance Report - February 2024',
            'User Analytics Summary - Q4 2023',
            'Investment Portfolio Analysis - January 2024',
            'Transaction Audit Report - December 2023',
          ].map((report, idx) => (
            <div
              key={idx}
              className="flex items-center justify-between p-3 bg-gray-50 rounded-lg border border-gray-200 hover:bg-gray-100 transition-colors"
            >
              <div>
                <p className="font-medium text-gray-900">{report}</p>
                <p className="text-xs text-gray-600 mt-1">
                  Generated on {new Date().toLocaleDateString('en-IN')}
                </p>
              </div>
              <Button variant="secondary" size="sm" icon={<Download size={16} />}>
                Download
              </Button>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
};
