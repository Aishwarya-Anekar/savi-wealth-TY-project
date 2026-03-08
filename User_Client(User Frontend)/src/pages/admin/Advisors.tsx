import React, { useState, useEffect } from 'react';
import { Plus, Edit2, Trash2, Star, Phone, Mail, Users } from 'lucide-react';
import { Card, Button, Badge, Modal, Input } from '../../components/admin/AdminCommon';
import { Advisor } from '../../types';
import { getAdminAdvisors } from '../../services/api';

export const Advisors: React.FC = () => {
  const [showModal, setShowModal] = useState(false);
  const [editingAdvisor, setEditingAdvisor] = useState<Advisor | null>(null);

  const [advisors, setAdvisors] = useState<Advisor[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const handleEdit = (advisor: Advisor) => {
    setEditingAdvisor(advisor);
    setShowModal(true);
  };

  // fetch advisors
  useEffect(() => {
    const fetchAdvisors = async () => {
      try {
        setLoading(true);
        const token = localStorage.getItem('token');
        console.log('Fetching advisors with token:', token);
        if (!token) throw new Error('Missing auth token');
        const data = await getAdminAdvisors(token);
        console.log('Advisors data received:', data);
        setAdvisors(data.advisors || []);
        setError('');
      } catch (err) {
        console.error('Error fetching advisors:', err);
        setError('Failed to load advisors');
      } finally {
        setLoading(false);
      }
    };
    fetchAdvisors();
  }, []);

  const handleCloseModal = () => {
    setShowModal(false);
    setEditingAdvisor(null);
  };

  const getRatingColor = (rating: number) => {
    if (rating >= 4.8) return 'text-green-600';
    if (rating >= 4.5) return 'text-blue-600';
    return 'text-orange-600';
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-start">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Advisor Management</h1>
          <p className="text-gray-600 mt-2">
            Manage financial advisors, assign clients, and track performance.
          </p>
        </div>
        <Button
          variant="primary"
          icon={<Plus size={20} />}
          onClick={() => {
            setEditingAdvisor(null);
            setShowModal(true);
          }}
        >
          Add Advisor
        </Button>
      </div>

      {/* Summary Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <h3 className="text-sm font-medium text-gray-600 uppercase tracking-wide mb-2">
            Total Advisors
          </h3>
          <p className="text-4xl font-bold text-gray-900">{advisors.length}</p>
          <p className="text-sm text-gray-500 mt-2">
            {advisors.filter((a) => a.status === 'active').length} active
          </p>
        </Card>

        <Card>
          <h3 className="text-sm font-medium text-gray-600 uppercase tracking-wide mb-2">
            Total Clients Assigned
          </h3>
          <p className="text-4xl font-bold text-gray-900">
            {advisors.reduce((sum, a) => sum + a.assignedClients, 0)}
          </p>
          <p className="text-sm text-gray-500 mt-2">
            {(
              advisors.length > 0
                ? (
                    advisors.reduce((sum, a) => sum + a.assignedClients, 0) /
                    advisors.length
                  ).toFixed(1)
                : '0'
            )}{' '}
            per advisor
          </p>
        </Card>

        <Card>
          <h3 className="text-sm font-medium text-gray-600 uppercase tracking-wide mb-2">
            Average Rating
          </h3>
          <p className="text-4xl font-bold text-gray-900">
            {advisors.length > 0
              ? (
                  advisors.reduce((sum, a) => sum + a.rating, 0) /
                  advisors.length
                ).toFixed(1)
              : '0'}
          </p>
          <div className="flex gap-1 mt-2">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                size={14}
                fill={
                  advisors.length > 0 &&
                  i <
                    Math.round(
                      advisors.reduce((sum, a) => sum + a.rating, 0) /
                        advisors.length
                    )
                    ? '#fbbf24'
                    : '#d1d5db'
                }
                className="text-yellow-400"
              />
            ))}
          </div>
        </Card>
      </div>

      {/* Advisors Grid */}
      {loading ? (
        <p>Loading advisors...</p>
      ) : error ? (
        <p className="text-red-600">{error}</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {advisors.map((advisor) => (
          <Card key={advisor.id} className="flex flex-col justify-between">
            <div>
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-lg font-bold text-gray-900">
                    {advisor.name}
                  </h3>
                  <p className="text-sm text-gray-600">{advisor.expertise[0]}</p>
                </div>
                <Badge
                  variant={advisor.status === 'active' ? 'success' : 'warning'}
                >
                  {advisor.status === 'active' ? 'Active' : 'Inactive'}
                </Badge>
              </div>

              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <Mail size={16} className="text-gray-400" />
                  <span className="truncate">{advisor.email}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <Phone size={16} className="text-gray-400" />
                  <span>{advisor.phone}</span>
                </div>
              </div>

              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-3 rounded-lg mb-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-medium text-gray-600">Rating</span>
                  <span className={`font-bold text-lg ${getRatingColor(advisor.rating)}`}>
                    {advisor.rating}
                  </span>
                </div>
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={16}
                      fill={
                        i < Math.round(advisor.rating) ? '#fbbf24' : '#d1d5db'
                      }
                      className="text-yellow-400"
                    />
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-2 pb-4 border-b border-gray-200">
                <div className="bg-gray-50 p-2 rounded">
                  <p className="text-xs text-gray-600">Assigned Clients</p>
                  <p className="text-lg font-bold text-gray-900">
                    {advisor.assignedClients}
                  </p>
                </div>
                <div className="bg-gray-50 p-2 rounded">
                  <p className="text-xs text-gray-600">Join Date</p>
                  <p className="text-sm font-semibold text-gray-900">
                    {new Date(advisor.joinDate).getFullYear()}
                  </p>
                </div>
              </div>

              <div className="mt-4">
                <p className="text-xs font-medium text-gray-600 mb-2 uppercase">
                  Expertise
                </p>
                <div className="flex flex-wrap gap-1">
                  {advisor.expertise.map((exp) => (
                    <Badge key={exp} variant="info" className="text-xs">
                      {exp}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex gap-2 mt-6">
              <Button
                variant="secondary"
                size="sm"
                className="flex-1"
                icon={<Users size={16} />}
              >
                Assign
              </Button>
              <Button
                variant="secondary"
                size="sm"
                icon={<Edit2 size={16} />}
                onClick={() => handleEdit(advisor)}
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

      {/* Edit/Add Advisor Modal */}
      <Modal
        isOpen={showModal}
        onClose={handleCloseModal}
        title={editingAdvisor ? 'Edit Advisor' : 'Add New Advisor'}
        size="lg"
      >
        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <Input
              label="Full Name"
              type="text"
              placeholder="Dr. John Doe"
              defaultValue={editingAdvisor?.name || ''}
            />
            <Input
              label="Email"
              type="email"
              placeholder="john@saviwealth.com"
              defaultValue={editingAdvisor?.email || ''}
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <Input
              label="Phone"
              type="tel"
              placeholder="+91-xxxxxxxxxx"
              defaultValue={editingAdvisor?.phone || ''}
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
              Areas of Expertise (comma-separated)
            </label>
            <input
              type="text"
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-500"
              placeholder="Equity, Mutual Funds, Portfolio Management"
              defaultValue={editingAdvisor?.expertise.join(', ') || ''}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Bio / Description
            </label>
            <textarea
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-500 resize-none"
              rows={4}
              placeholder="Enter advisor bio or credentials..."
            />
          </div>
        </div>

        <div slot="footer" className="flex gap-3">
          <Button variant="secondary" onClick={handleCloseModal}>
            Cancel
          </Button>
          <Button variant="primary">
            {editingAdvisor ? 'Update' : 'Add'} Advisor
          </Button>
        </div>
      </Modal>
    </div>
  );
};
