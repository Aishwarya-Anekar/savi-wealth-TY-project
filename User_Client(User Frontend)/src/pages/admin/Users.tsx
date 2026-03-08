import { useState, useEffect } from 'react';
import { Search, Plus, Eye, Trash2, Filter } from 'lucide-react';
import { Card, Button, Badge, Table, Modal } from '../../components/admin/AdminCommon';
import { User } from '../../types';
import { getAdminUsers } from '../../services/api';

export const Users: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState<string>('all');
  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  const [showModal, setShowModal] = useState(false);

  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const filteredUsers = users.filter((user) => {
    const matchesSearch =
      user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus =
      statusFilter === 'all' || user.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const handleViewUser = (user: User) => {
    setSelectedUser(user);
    setShowModal(true);
  };

  const columns = [
    { key: 'name', label: 'Name' },
    { key: 'email', label: 'Email' },
    { key: 'status', label: 'Status' },
    { key: 'kycStatus', label: 'KYC Status' },
    { key: 'aum', label: 'AUM' },
    { key: 'joinDate', label: 'Join Date' },
  ];

  const tableData = filteredUsers.map((user) => ({
    ...user,
    status:
      user.status === 'active' ? (
        <Badge variant="success">Active</Badge>
      ) : user.status === 'suspended' ? (
        <Badge variant="danger">Suspended</Badge>
      ) : (
        <Badge variant="warning">Inactive</Badge>
      ),
    kycStatus:
      user.kycStatus === 'verified' ? (
        <Badge variant="success">Verified</Badge>
      ) : user.kycStatus === 'pending' ? (
        <Badge variant="warning">Pending</Badge>
      ) : (
        <Badge variant="danger">Rejected</Badge>
      ),
    aum: `₹${(user.aum / 100000).toFixed(1)}L`,
    joinDate: new Date(user.joinDate).toLocaleDateString('en-IN'),
  }));

  const tableActions = (row: any) => (
    <div className="flex gap-2">
      <Button
        variant="secondary"
        size="sm"
        icon={<Eye size={16} />}
        onClick={() => handleViewUser(row as User)}
      >
        View
      </Button>
      <Button variant="danger" size="sm" icon={<Trash2 size={16} />}>
        Disable
      </Button>
    </div>
  );

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        setLoading(true);
        const token = localStorage.getItem('token');
        if (!token) throw new Error('Missing token');
        const data = await getAdminUsers(token);
        setUsers(data.users || []);
        setError('');
      } catch (err) {
        console.error(err);
        setError('Failed to load users');
      } finally {
        setLoading(false);
      }
    };
    fetchUsers();
  }, []);

  if (loading) return <p>Loading users...</p>;
  if (error) return <p className="text-red-600">{error}</p>;

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900">User Management</h1>
        <p className="text-gray-600 mt-2">
          Manage users, view details, and handle KYC verification.
        </p>
      </div>

      {/* Filters and Search */}
      <Card>
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search by name or email..."
              className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-500"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-500"
          >
            <option value="all">All Users</option>
            <option value="active">Active</option>
            <option value="inactive">Inactive</option>
            <option value="suspended">Suspended</option>
          </select>

          <div className="flex gap-2 justify-end">
            <Button variant="secondary" size="sm" icon={<Filter size={16} />}>
              More Filters
            </Button>
            <Button variant="primary" size="sm" icon={<Plus size={16} />}>
              Add User
            </Button>
          </div>
        </div>
      </Card>

      {/* Users Table */}
      <Card>
        <Table
          columns={columns}
          data={tableData}
          actions={(row) => tableActions(row)}
        />
      </Card>

      {/* User Detail Modal */}
      {selectedUser && (
        <Modal
          isOpen={showModal}
          onClose={() => setShowModal(false)}
          title="User Details"
        >
          <div className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Full Name
                </label>
                <p className="text-gray-900 font-semibold">{selectedUser.name}</p>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <p className="text-gray-900">{selectedUser.email}</p>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Phone
                </label>
                <p className="text-gray-900">{selectedUser.phone}</p>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Status
                </label>
                <Badge
                  variant={
                    selectedUser.status === 'active'
                      ? 'success'
                      : selectedUser.status === 'suspended'
                        ? 'danger'
                        : 'warning'
                  }
                >
                  {selectedUser.status.charAt(0).toUpperCase() +
                    selectedUser.status.slice(1)}
                </Badge>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  KYC Status
                </label>
                <Badge
                  variant={
                    selectedUser.kycStatus === 'verified'
                      ? 'success'
                      : selectedUser.kycStatus === 'pending'
                        ? 'warning'
                        : 'danger'
                  }
                >
                  {selectedUser.kycStatus.charAt(0).toUpperCase() +
                    selectedUser.kycStatus.slice(1)}
                </Badge>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Join Date
                </label>
                <p className="text-gray-900">
                  {new Date(selectedUser.joinDate).toLocaleDateString('en-IN')}
                </p>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Assets Under Management
                </label>
                <p className="text-gray-900 font-semibold">
                  ₹{(selectedUser.aum / 100000).toFixed(2)}L
                </p>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Active Investments
                </label>
                <p className="text-gray-900 font-semibold">
                  {selectedUser.investmentCount}
                </p>
              </div>
            </div>

            <div className="border-t border-gray-200 pt-6">
              <h3 className="font-semibold text-gray-900 mb-4">
                Account Summary
              </h3>
              <div className="grid grid-cols-3 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <p className="text-sm text-gray-600">Portfolio Value</p>
                  <p className="text-lg font-bold text-blue-600">
                    ₹{(selectedUser.aum / 100000).toFixed(2)}L
                  </p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <p className="text-sm text-gray-600">Total Returns</p>
                  <p className="text-lg font-bold text-green-600">+8.5%</p>
                </div>
                <div className="bg-orange-50 p-4 rounded-lg">
                  <p className="text-sm text-gray-600">Monthly Growth</p>
                  <p className="text-lg font-bold text-orange-600">5.2%</p>
                </div>
              </div>
            </div>
          </div>

          <div slot="footer" className="flex gap-3">
            <Button variant="secondary" onClick={() => setShowModal(false)}>
              Close
            </Button>
            <Button variant="primary">Edit User</Button>
          </div>
        </Modal>
      )}
    </div>
  );
};
