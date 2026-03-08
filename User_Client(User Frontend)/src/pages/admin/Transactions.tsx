import React, { useState, useEffect } from 'react';
import { Download, Filter, Search } from 'lucide-react';
import { Card, Button, Badge, Table, Pagination } from '../../components/admin/AdminCommon';
import { getAdminTransactions } from '../../services/api';
import { Transaction } from '../../types';

export const Transactions: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [typeFilter, setTypeFilter] = useState<string>('all');
  const [statusFilter, setStatusFilter] = useState<string>('all');
  const [searchTerm, setSearchTerm] = useState('');

  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const itemsPerPage = 10;

  const filteredTransactions = transactions.filter((txn) => {
    const matchesSearch =
      txn.userName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      txn.id.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesType = typeFilter === 'all' || txn.type === typeFilter;
    const matchesStatus = statusFilter === 'all' || txn.status === statusFilter;
    return matchesSearch && matchesType && matchesStatus;
  });

  const totalPages = Math.ceil(filteredTransactions.length / itemsPerPage);
  const paginatedData = filteredTransactions.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const columns = [
    { key: 'id', label: 'Transaction ID', className: 'font-mono text-sm' },
    { key: 'userName', label: 'User Name' },
    { key: 'type', label: 'Type', className: 'capitalize' },
    { key: 'amount', label: 'Amount' },
    { key: 'date', label: 'Date' },
    { key: 'status', label: 'Status' },
  ];

  const tableData = paginatedData.map((txn) => ({
    ...txn,
    type: txn.type.charAt(0).toUpperCase() + txn.type.slice(1),
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
      Details
    </Button>
  );

  useEffect(() => {
    const fetchTxns = async () => {
      try {
        setLoading(true);
        const token = localStorage.getItem('token');
        if (!token) throw new Error('Missing token');
        const data = await getAdminTransactions(token);
        setTransactions(data.transactions || []);
        setError('');
      } catch (err) {
        console.error(err);
        setError('Failed to load transactions');
      } finally {
        setLoading(false);
      }
    };
    fetchTxns();
  }, []);

  // statistics derived from transactions
  const totalAmount = transactions.reduce((sum, t) => sum + t.amount, 0);
  const successCount = transactions.filter((t) => t.status === 'success').length;
  const pendingCount = transactions.filter((t) => t.status === 'pending').length;

  if (loading) return <p>Loading transactions...</p>;
  if (error) return <p className="text-red-600">{error}</p>;

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Transactions</h1>
        <p className="text-gray-600 mt-2">
          View and manage all investment transactions.
        </p>
      </div>

      {/* Statistics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card>
          <h3 className="text-sm font-medium text-gray-600 uppercase tracking-wide mb-2">
            Total Transactions
          </h3>
          <p className="text-4xl font-bold text-gray-900">
            {transactions.length}
          </p>
          <p className="text-sm text-gray-500 mt-2">All time</p>
        </Card>

        <Card>
          <h3 className="text-sm font-medium text-gray-600 uppercase tracking-wide mb-2">
            Total Amount
          </h3>
          <p className="text-3xl font-bold text-gray-900">
            ₹{(totalAmount / 10000000).toFixed(1)}Cr
          </p>
          <p className="text-sm text-gray-500 mt-2">Processed</p>
        </Card>

        <Card>
          <h3 className="text-sm font-medium text-gray-600 uppercase tracking-wide mb-2">
            Successful
          </h3>
          <p className="text-4xl font-bold text-success-600">{successCount}</p>
          <p className="text-sm text-gray-500 mt-2">
            {((successCount / transactions.length) * 100).toFixed(1)}%
          </p>
        </Card>

        <Card>
          <h3 className="text-sm font-medium text-gray-600 uppercase tracking-wide mb-2">
            Pending
          </h3>
          <p className="text-4xl font-bold text-warning-600">{pendingCount}</p>
          <p className="text-sm text-gray-500 mt-2">Awaiting confirmation</p>
        </Card>
      </div>

      {/* Filters */}
      <Card>
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-5 gap-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search by user or transaction ID..."
              className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-500"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          <select
            value={typeFilter}
            onChange={(e) => setTypeFilter(e.target.value)}
            className="px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-500"
          >
            <option value="all">All Types</option>
            <option value="buy">Buy</option>
            <option value="sell">Sell</option>
            <option value="deposit">Deposit</option>
            <option value="withdrawal">Withdrawal</option>
          </select>

          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-500"
          >
            <option value="all">All Status</option>
            <option value="success">Success</option>
            <option value="pending">Pending</option>
            <option value="failed">Failed</option>
          </select>

          <Button variant="secondary" size="sm" icon={<Filter size={16} />}>
            More Filters
          </Button>

          <Button variant="secondary" size="sm" icon={<Download size={16} />}>
            Export CSV
          </Button>
        </div>
      </Card>

      {/* Transactions Table */}
      <Card>
        <Table
          columns={columns}
          data={tableData}
          actions={tableActions}
        />
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
        />
      </Card>
    </div>
  );
};
