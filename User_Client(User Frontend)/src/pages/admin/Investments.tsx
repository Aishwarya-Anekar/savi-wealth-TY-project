import React, { useState, useEffect } from 'react';
import { Plus, Edit2, Trash2, Eye } from 'lucide-react';
import { Card, Button, Badge, Modal, Input } from '../../components/admin/AdminCommon';
import { Investment } from '../../types';
import { getInvestments } from '../../services/api';

export const Investments: React.FC = () => {
  const [showModal, setShowModal] = useState(false);
  const [editingInvestment, setEditingInvestment] = useState<Investment | null>(
    null
  );

  const [investments, setInvestments] = useState<Investment[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const handleEdit = (investment: Investment) => {
    setEditingInvestment(investment);
    setShowModal(true);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const data = await getInvestments();
        setInvestments(data.investments || []);
        setError('');
      } catch (err) {
        console.error(err);
        setError('Failed to load investments');
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const handleCloseModal = () => {
    setShowModal(false);
    setEditingInvestment(null);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-start">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">
            Investment Management
          </h1>
          <p className="text-gray-600 mt-2">
            Manage investment plans, track performance, and configure returns.
          </p>
        </div>
        <Button
          variant="primary"
          icon={<Plus size={20} />}
          onClick={() => {
            setEditingInvestment(null);
            setShowModal(true);
          }}
        >
          Add Investment Plan
        </Button>
      </div>

      {/* Investment Cards Grid */}
      {loading ? (
        <p>Loading investments...</p>
      ) : error ? (
        <p className="text-red-600">{error}</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {investments.map((investment) => (
          <Card
            key={investment.id}
            className="flex flex-col justify-between hoverable"
          >
            <div>
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-lg font-bold text-gray-900">
                  {investment.name}
                </h3>
                <Badge
                  variant={
                    investment.status === 'active' ? 'success' : 'warning'
                  }
                >
                  {investment.status === 'active' ? 'Active' : 'Inactive'}
                </Badge>
              </div>

              <div className="space-y-3 mb-6">
                <div>
                  <p className="text-xs text-gray-600 uppercase tracking-wide">
                    Risk Level
                  </p>
                  <Badge
                    variant={
                      investment.riskLevel === 'high'
                        ? 'danger'
                        : investment.riskLevel === 'medium'
                          ? 'warning'
                          : 'success'
                    }
                    className="mt-1"
                  >
                    {investment.riskLevel.charAt(0).toUpperCase() +
                      investment.riskLevel.slice(1)}
                  </Badge>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-blue-50 p-3 rounded-lg">
                    <p className="text-xs text-gray-600">Expected Return</p>
                    <p className="text-xl font-bold text-blue-600">
                      {investment.expectedReturn}%
                    </p>
                  </div>
                  <div className="bg-gray-100 p-3 rounded-lg">
                    <p className="text-xs text-gray-600">Min Investment</p>
                    <p className="text-lg font-semibold text-gray-900">
                      ₹{(investment.minInvestment / 1000).toFixed(0)}K
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 pb-4 border-b border-gray-200">
                  <div>
                    <p className="text-xs text-gray-600">Investors</p>
                    <p className="text-lg font-bold text-gray-900">
                      {investment.investorCount}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-600">Total Invested</p>
                    <p className="text-sm font-semibold text-gray-900">
                      ₹{(investment.totalInvested / 10000000).toFixed(1)}Cr
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex gap-2">
              <Button
                variant="secondary"
                size="sm"
                className="flex-1"
                icon={<Eye size={16} />}
              >
                View
              </Button>
              <Button
                variant="secondary"
                size="sm"
                icon={<Edit2 size={16} />}
                onClick={() => handleEdit(investment)}
              >
                Edit
              </Button>
              <Button
                variant="danger"
                size="sm"
                icon={<Trash2 size={16} />}
              >
                Delete
              </Button>
            </div>
          </Card>
        ))}
      </div>
      )}

      {/* Edit/Add Investment Modal */}
      <Modal
        isOpen={showModal}
        onClose={handleCloseModal}
        title={editingInvestment ? 'Edit Investment Plan' : 'Create Investment Plan'}
        size="lg"
      >
        <div className="space-y-4">
          <Input
            label="Plan Name"
            type="text"
            placeholder="e.g., Growth Equity Fund"
            defaultValue={editingInvestment?.name || ''}
          />

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Risk Level
              </label>
              <select className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-500">
                <option>Low</option>
                <option>Medium</option>
                <option>High</option>
              </select>
            </div>

            <Input
              label="Expected Return (%)"
              type="number"
              placeholder="12"
              defaultValue={editingInvestment?.expectedReturn || ''}
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <Input
              label="Minimum Investment (₹)"
              type="number"
              placeholder="10000"
              defaultValue={editingInvestment?.minInvestment || ''}
            />

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Status
              </label>
              <select className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-500">
                <option>Active</option>
                <option>Inactive</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Description
            </label>
            <textarea
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-500 resize-none"
              rows={4}
              placeholder="Enter investment plan description..."
            />
          </div>
        </div>

        <div slot="footer" className="flex gap-3">
          <Button variant="secondary" onClick={handleCloseModal}>
            Cancel
          </Button>
          <Button variant="primary">
            {editingInvestment ? 'Update' : 'Create'} Plan
          </Button>
        </div>
      </Modal>
    </div>
  );
};
