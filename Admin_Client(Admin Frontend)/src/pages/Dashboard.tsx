import React, { useState, useEffect } from 'react';
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
  AlertCircle,
} from 'lucide-react';
import { Card, StatCard, Button, Table, Badge } from '../components/common';
import { getAdminAnalytics, getAdminTransactions, getInvestments } from '../services/api';

export const Dashboard: React.FC = () => {
  const [analytics, setAnalytics] = useState<any>(null);
  const [transactions, setTransactions] = useState<any[]>([]);
  const [investments, setInvestments] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const token = localStorage.getItem('token');

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        
        if (!token) {
          setError('Authentication token not found');
          return;
        }

        const [analyticsData, transactionsData, investmentsData] = await Promise.all([
          getAdminAnalytics(token),
          getAdminTransactions(token),
          getInvestments(),
        ]);

        setAnalytics(analyticsData);
        setTransactions(transactionsData.transactions || []);
        setInvestments(investmentsData.investments || []);
        setError('');
      } catch (err) {
        console.error('Failed to fetch dashboard data:', err);
        setError('Failed to load dashboard data');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [token]);

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
    { key: 'investmentName', label: 'Investment' },
    { key: 'transactionType', label: 'Type' },
    { key: 'amount', label: 'Amount' },
    { key: 'transactionDate', label: 'Date' },
    { key: 'transactionStatus', label: 'Status' },
  ];

  const tableData = recentTransactions.map((txn: any) => ({
    ...txn,
    userName: txn.userName || 'N/A',
    investmentName: txn.investmentName || 'N/A',
    transactionType: txn.transactionType,
    amount: `₹${(parseFloat(txn.amount) / 100000).toFixed(2)}L`,
    transactionDate: new Date(txn.transactionDate).toLocaleDateString('en-IN'),
    transactionStatus:
      txn.transactionStatus === 'success' ? (
        <Badge variant="success">Success</Badge>
      ) : txn.transactionStatus === 'pending' ? (
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

  if (loading) {
    return (
      <div className="space-y-8">
        <div className="h-8 bg-gray-200 rounded w-1/3 animate-pulse"></div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="h-32 bg-gray-200 rounded animate-pulse"></div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      {/* Page Header */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
        <p className="text-gray-600 mt-2">
          Welcome back! Here's your platform overview.
        </p>
      </div>

      {/* Error Message */}
      {error && (
        <Card className="border-red-200 bg-red-50 flex items-center gap-4">
          <AlertCircle className="text-red-600" size={24} />
          <div className="text-red-800">{error}</div>
        </Card>
      )}

      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard
          label="Total Users"
          value={analytics?.total_users || 0}
          icon={<Users className="text-blue-600" />}
          trend={{ value: 12, direction: 'up' }}
          color="blue"
        />
        <StatCard
          label="Assets Under Management"
          value={`₹${formatCurrency(parseFloat(analytics?.total_aum) || 0)}`}
          icon={<DollarSign className="text-green-600" />}
          trend={{ value: 8.5, direction: 'up' }}
          color="green"
        />
        <StatCard
          label="Active Investments"
          value={analytics?.total_investments || 0}
          icon={<TrendingUp className="text-purple-600" />}
          trend={{ value: 5.2, direction: 'up' }}
          color="orange"
        />
        <StatCard
          label="Transactions"
          value={analytics?.successful_transactions || 0}
          icon={<ArrowUpRight className="text-orange-600" />}
          trend={{ value: 3.1, direction: 'up' }}
          color="orange"
        />
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Investment Growth Chart */}
        <Card className="lg:col-span-2">
          <div className="mb-4">
            <h3 className="text-lg font-semibold text-gray-900">Investment Growth</h3>
            <p className="text-sm text-gray-600">Transaction trend over time</p>
          </div>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={generateGrowthChartData(transactions)}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" />
              <YAxis />
              <Tooltip formatter={(value: any) => `₹${(Number(value) / 100000).toFixed(2)}L`} />
              <Line type="monotone" dataKey="value" stroke="#0284c7" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </Card>

        {/* Portfolio Distribution */}
        <Card>
          <div className="mb-4">
            <h3 className="text-lg font-semibold text-gray-900">Investment Types</h3>
            <p className="text-sm text-gray-600">By investment count</p>
          </div>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={generatePortfolioChartData(investments)}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ name, value }) => `${name} ${value}%`}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
              >
                {generatePortfolioChartData(investments).map((entry) => (
                  <Cell key={`cell-${entry.name}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </Card>
      </div>

      {/* Recent Transactions Table */}
      <Card>
        <div className="flex items-center justify-between mb-6">
          <div>
            <h3 className="text-lg font-semibold text-gray-900">Recent Transactions</h3>
            <p className="text-sm text-gray-600">Latest platform activities</p>
          </div>
          <Button variant="secondary" size="sm">
            View All
          </Button>
        </div>

        {tableData.length > 0 ? (
          <Table
            columns={columns}
            data={tableData}
            actions={tableActions}
          />
        ) : (
          <div className="text-center py-8 text-gray-600">
            No transactions yet
          </div>
        )}
      </Card>
    </div>
  );
};

// Helper function to generate growth chart data from transactions
function generateGrowthChartData(transactions: any[]) {

  // Group transactions by date and calculate cumulative value
  const dateMap: { [key: string]: number } = {};
  let cumulativeValue = 0;

  transactions
    .sort(
      (a: any, b: any) =>
        new Date(a.transactionDate).getTime() -
        new Date(b.transactionDate).getTime()
    )
    .forEach((txn: any) => {
      const date = new Date(txn.transactionDate).toLocaleDateString('en-IN', {
        month: 'short',
        day: 'numeric',
      });
      const amount = parseFloat(txn.amount) || 0;
      cumulativeValue += amount;
      dateMap[date] = cumulativeValue;
    });

  if (Object.keys(dateMap).length === 0) {
    // Return demo data if no transactions
    return [
      { date: 'Jan 5', value: 500000 },
      { date: 'Jan 12', value: 750000 },
      { date: 'Jan 19', value: 950000 },
      { date: 'Feb 2', value: 1200000 },
      { date: 'Feb 16', value: 1450000 },
      { date: 'Mar 5', value: 1750000 },
    ];
  }

  return Object.entries(dateMap).map(([date, value]) => ({
    date,
    value,
  }));
}

// Helper function to generate portfolio chart data from investments
function generatePortfolioChartData(investments: any[]) {
  const colors = ['#0284c7', '#00a651', '#f59e0b', '#8b5cf6', '#ec4899', '#14b8a6', '#f97316'];
  const typeMap: { [key: string]: { count: number; color: string } } = {};

  // Count investments by type
  investments.forEach((inv: any) => {
    const type = inv.type || 'Other';
    if (!typeMap[type]) {
      typeMap[type] = { count: 0, color: colors[Object.keys(typeMap).length % colors.length] };
    }
    typeMap[type].count++;
  });

  // If no investments, return demo data
  if (Object.keys(typeMap).length === 0) {
    return [
      { name: 'Mutual Funds', value: 40, color: '#0284c7' },
      { name: 'Equity', value: 30, color: '#00a651' },
      { name: 'Bonds', value: 20, color: '#f59e0b' },
      { name: 'Insurance', value: 10, color: '#8b5cf6' },
    ];
  }

  // Calculate percentages
  const total = Object.values(typeMap).reduce((sum, item) => sum + item.count, 0);
  return Object.entries(typeMap).map(([name, data]) => ({
    name: name.replace(/_/g, ' '),
    value: Math.round((data.count / total) * 100),
    color: data.color,
  }));
}

export default Dashboard;
