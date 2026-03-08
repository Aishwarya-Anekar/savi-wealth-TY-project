import React from 'react';
import {
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';
import {
  Users,
  TrendingUp,
  DollarSign,
  ArrowUpRight,
  Eye,
} from 'lucide-react';
import { Card, StatCard, Button, Table, Badge } from '../components/common';
import {
  dashboardMetrics,
  investmentGrowthData,
  portfolioDistributionData,
  transactions,
} from '../data/mockData';

export const Dashboard: React.FC = () => {
  const formatCurrency = (value: number) => {
    const suffixes = ['', 'K', 'M', 'B'];
    const suffixNum = Math.floor((value.toString().length - 1) / 3);
    let shortValue: number | string = parseFloat(
      (suffixNum !== 0 ? value / Math.pow(1000, suffixNum) : value).toPrecision(2)
    );
    if (shortValue % 1 !== 0) {
      shortValue = shortValue.toFixed(1);
    }
    return shortValue + suffixes[suffixNum];
  };

  const recentTransactions = transactions.slice(0, 5);

  const columns = [
    { key: 'userName', label: 'User Name' },
    {
      key: 'type',
      label: 'Type',
      className: 'capitalize',
    },
    {
      key: 'amount',
      label: 'Amount',
      className: 'font-semibold',
    },
    {
      key: 'date',
      label: 'Date',
    },
    {
      key: 'status',
      label: 'Status',
    },
  ];

  const tableData = recentTransactions.map((txn) => ({
    ...txn,
    userName: txn.userName,
    type: txn.type,
    amount: `₹${(txn.amount / 100000).toFixed(2)}L`,
    date: new Date(txn.date).toLocaleDateString('en-IN'),
    status:
      txn.status === 'success' ? (
        <Badge variant="success">Success</Badge>
      ) : txn.status === 'pending' ? (
        <Badge variant="warning">Pending</Badge>
      ) : (
        <Badge variant="danger">Failed</Badge>
      ),
  }));

  const tableActions = () => (
    <Button variant="secondary" size="sm">
      View
    </Button>
  );

  return (
    <div className="space-y-8">
      {/* Page Header */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
        <p className="text-gray-600 mt-2">
          Welcome back! Here's your platform overview.
        </p>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard
          label="Total Users"
          value={dashboardMetrics.totalUsers.toLocaleString('en-IN')}
          icon={<Users size={24} />}
          trend={{ value: 12.5, direction: 'up' }}
          color="blue"
        />
        <StatCard
          label="Assets Under Management"
          value={formatCurrency(dashboardMetrics.assetsUnderManagement)}
          icon={<DollarSign size={24} />}
          trend={{ value: 8.2, direction: 'up' }}
          color="green"
        />
        <StatCard
          label="Total Investments"
          value={dashboardMetrics.totalInvestments.toLocaleString('en-IN')}
          icon={<TrendingUp size={24} />}
          trend={{ value: 5.1, direction: 'up' }}
          color="orange"
        />
        <StatCard
          label="Monthly Growth Rate"
          value={`${dashboardMetrics.monthlyGrowth}%`}
          icon={<ArrowUpRight size={24} />}
          trend={{ value: 2.3, direction: 'up' }}
          color="green"
        />
      </div>

      {/* Charts Row 1 */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Investment Growth Chart */}
        <Card>
          <h2 className="text-lg font-semibold text-gray-900 mb-4">
            Investment Growth
          </h2>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={investmentGrowthData}>
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
              <Line
                type="monotone"
                dataKey="value"
                stroke="#0284c7"
                strokeWidth={2}
                dot={{ fill: '#0284c7', r: 5 }}
                activeDot={{ r: 7 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </Card>

        {/* Portfolio Distribution */}
        <Card>
          <h2 className="text-lg font-semibold text-gray-900 mb-4">
            Portfolio Distribution
          </h2>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={portfolioDistributionData}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ name, value }) => `${name}: ${value}%`}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
              >
                {portfolioDistributionData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </Card>
      </div>

      {/* Charts Row 2 */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Transaction Status */}
        <Card>
          <h2 className="text-lg font-semibold text-gray-900 mb-4">
            Transaction Status
          </h2>
          <div className="space-y-4">
            <div>
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm text-gray-600">Successful</span>
                <span className="text-lg font-semibold text-success-600">
                  {dashboardMetrics.successfulTransactions}
                </span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className="bg-success-600 h-2 rounded-full"
                  style={{
                    width: `${
                      (dashboardMetrics.successfulTransactions /
                        (dashboardMetrics.successfulTransactions +
                          dashboardMetrics.failedTransactions +
                          dashboardMetrics.pendingTransactions)) *
                      100
                    }%`,
                  }}
                />
              </div>
            </div>
            <div>
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm text-gray-600">Pending</span>
                <span className="text-lg font-semibold text-warning-600">
                  {dashboardMetrics.pendingTransactions}
                </span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className="bg-warning-600 h-2 rounded-full"
                  style={{
                    width: `${
                      (dashboardMetrics.pendingTransactions /
                        (dashboardMetrics.successfulTransactions +
                          dashboardMetrics.failedTransactions +
                          dashboardMetrics.pendingTransactions)) *
                      100
                    }%`,
                  }}
                />
              </div>
            </div>
            <div>
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm text-gray-600">Failed</span>
                <span className="text-lg font-semibold text-danger-600">
                  {dashboardMetrics.failedTransactions}
                </span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className="bg-danger-600 h-2 rounded-full"
                  style={{
                    width: `${
                      (dashboardMetrics.failedTransactions /
                        (dashboardMetrics.successfulTransactions +
                          dashboardMetrics.failedTransactions +
                          dashboardMetrics.pendingTransactions)) *
                      100
                    }%`,
                  }}
                />
              </div>
            </div>
          </div>
        </Card>

        {/* Key Metrics */}
        <Card>
          <h2 className="text-lg font-semibold text-gray-900 mb-4">
            Key Metrics
          </h2>
          <div className="space-y-4">
            <div className="flex justify-between">
              <span className="text-sm text-gray-600">Active Investors</span>
              <span className="font-semibold text-gray-900">
                {dashboardMetrics.activeInvestors}
              </span>
            </div>
            <div className="border-t border-gray-200 pt-4 flex justify-between">
              <span className="text-sm text-gray-600">Pending Transactions</span>
              <span className="font-semibold text-gray-900">
                {dashboardMetrics.pendingTransactions}
              </span>
            </div>
            <div className="border-t border-gray-200 pt-4 flex justify-between">
              <span className="text-sm text-gray-600">Conversion Rate</span>
              <span className="font-semibold text-gray-900">85.7%</span>
            </div>
          </div>
        </Card>

        {/* Quick Actions */}
        <Card>
          <h2 className="text-lg font-semibold text-gray-900 mb-4">
            Quick Actions
          </h2>
          <div className="space-y-3">
            <Button variant="primary" className="w-full" size="sm">
              Create Investment Plan
            </Button>
            <Button variant="secondary" className="w-full" size="sm">
              Add New User
            </Button>
            <Button variant="secondary" className="w-full" size="sm">
              View Reports
            </Button>
          </div>
        </Card>
      </div>

      {/* Recent Transactions */}
      <Card>
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold text-gray-900">
            Recent Transactions
          </h2>
          <Button
            variant="secondary"
            size="sm"
            icon={<Eye size={16} />}
          >
            View All
          </Button>
        </div>
        <Table columns={columns} data={tableData} actions={tableActions} />
      </Card>
    </div>
  );
};
