import React, { useState, useEffect } from 'react';
import { Plus, X, Bell, CheckCircle, AlertCircle, Info } from 'lucide-react';
import { Card, Button, Badge, Modal } from '../components/common';
import { Notification } from '../types';
import { getAdminNotifications } from '../services/api';

export const Notifications: React.FC = () => {
  const [notificationsList, setNotificationsList] = useState<Notification[]>([]);
  const [showModal, setShowModal] = useState(false);
  const [filter, setFilter] = useState<'all' | 'unread' | 'read'>('all');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const filteredNotifications = notificationsList.filter((notif) => {
    if (filter === 'unread') return !notif.read;
    if (filter === 'read') return notif.read;
    return true;
  });

  const toggleRead = (id: string) => {
    setNotificationsList((prev) =>
      prev.map((notif) =>
        notif.id === id ? { ...notif, read: !notif.read } : notif
      )
    );
  };

  const deleteNotification = (id: string) => {
    setNotificationsList((prev) => prev.filter((notif) => notif.id !== id));
  };

  const unreadCount = notificationsList.filter((n) => !n.read).length;

  useEffect(() => {
    const fetchNotifications = async () => {
      try {
        setLoading(true);
        const token = localStorage.getItem('token');
        if (!token) throw new Error('Missing token');
        const data = await getAdminNotifications(token);
        setNotificationsList(data.notifications || []);
        setError('');
      } catch (err) {
        console.error(err);
        setError('Failed to load notifications');
      } finally {
        setLoading(false);
      }
    };
    fetchNotifications();
  }, []);

  const getIcon = (type: string) => {
    switch (type) {
      case 'success':
        return <CheckCircle size={20} className="text-success-600" />;
      case 'danger':
        return <AlertCircle size={20} className="text-danger-600" />;
      case 'warning':
        return <AlertCircle size={20} className="text-warning-600" />;
      default:
        return <Info size={20} className="text-primary-600" />;
    }
  };

  const getVariant = (
    type: string
  ): 'success' | 'danger' | 'warning' | 'info' => {
    if (type === 'success') return 'success';
    if (type === 'danger') return 'danger';
    if (type === 'warning') return 'warning';
    return 'info';
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-start">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Notifications</h1>
          <p className="text-gray-600 mt-2">
            Manage system notifications and alerts.
          </p>
        </div>
        <Button
          variant="primary"
          icon={<Plus size={20} />}
          onClick={() => setShowModal(true)}
        >
          Create Notification
        </Button>
      </div>

      {/* Stats Card */}
      <Card>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <h3 className="text-sm font-medium text-gray-600 uppercase tracking-wide mb-2">
              Total Notifications
            </h3>
            <p className="text-4xl font-bold text-gray-900">
              {notificationsList.length}
            </p>
          </div>

          <div>
            <h3 className="text-sm font-medium text-gray-600 uppercase tracking-wide mb-2">
              Unread
            </h3>
            <p className="text-4xl font-bold text-warning-600">{unreadCount}</p>
          </div>

          <div>
            <h3 className="text-sm font-medium text-gray-600 uppercase tracking-wide mb-2">
              Read
            </h3>
            <p className="text-4xl font-bold text-success-600">
              {notificationsList.length - unreadCount}
            </p>
          </div>
        </div>
      </Card>

      {/* Filter Tabs */}
      <Card>
        <div className="flex gap-4">
          {(['all', 'unread', 'read'] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setFilter(tab)}
              className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                filter === tab
                  ? 'bg-primary-100 text-primary-700'
                  : 'text-gray-600 hover:bg-gray-100'
              }`}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
              {tab === 'unread' && ` (${unreadCount})`}
            </button>
          ))}
        </div>
      </Card>

      {/* Notifications List */}
      {loading ? (
        <p>Loading notifications...</p>
      ) : error ? (
        <p className="text-red-600">{error}</p>
      ) : (
        <div className="space-y-3">
          {filteredNotifications.length === 0 ? (
          <Card className="text-center py-12">
            <Bell size={48} className="mx-auto text-gray-300 mb-4" />
            <p className="text-gray-600 text-lg">No notifications</p>
          </Card>
        ) : (
          filteredNotifications.map((notif) => (
            <Card
              key={notif.id}
              className={`flex items-start gap-4 ${
                !notif.read ? 'bg-blue-50 border-l-4 border-l-primary-600' : ''
              }`}
            >
              <div className="flex-shrink-0 mt-1">
                {getIcon(notif.type)}
              </div>

              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="font-semibold text-gray-900">
                      {notif.title}
                    </h3>
                    <p className="text-gray-600 text-sm mt-1">
                      {notif.message}
                    </p>
                    <p className="text-xs text-gray-500 mt-2">
                      {new Date(notif.createdAt).toLocaleDateString('en-IN')}{' '}
                      at{' '}
                      {new Date(notif.createdAt).toLocaleTimeString('en-IN')}
                    </p>
                  </div>

                  <div className="flex items-center gap-2 flex-shrink-0">
                    <Badge variant={getVariant(notif.type)}>
                      {notif.type.charAt(0).toUpperCase() + notif.type.slice(1)}
                    </Badge>
                  </div>
                </div>

                <div className="flex gap-2 mt-3">
                  <button
                    onClick={() => toggleRead(notif.id)}
                    className="text-xs font-medium text-primary-600 hover:text-primary-700"
                  >
                    {notif.read ? 'Mark as Unread' : 'Mark as Read'}
                  </button>
                  <button
                    onClick={() => deleteNotification(notif.id)}
                    className="text-xs font-medium text-danger-600 hover:text-danger-700"
                  >
                    Delete
                  </button>
                </div>
              </div>

              <button
                onClick={() => deleteNotification(notif.id)}
                className="flex-shrink-0 text-gray-400 hover:text-gray-600"
              >
                <X size={20} />
              </button>
            </Card>
          ))
        )}
      </div>
      )}

      {/* Create Notification Modal */}
      <Modal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        title="Create New Notification"
        size="lg"
      >
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Title
            </label>
            <input
              type="text"
              placeholder="Notification title"
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Message
            </label>
            <textarea
              placeholder="Notification message"
              rows={4}
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-500 resize-none"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Type
              </label>
              <select className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-500">
                <option>Info</option>
                <option>Success</option>
                <option>Warning</option>
                <option>Danger</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Recipients
              </label>
              <select className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-500">
                <option>All Users</option>
                <option>Active Users Only</option>
                <option>Admins</option>
              </select>
            </div>
          </div>

          <div>
            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                className="w-4 h-4 rounded border border-gray-300 text-primary-600 focus:ring-primary-500"
              />
              <span className="text-sm text-gray-700">Send as email notification</span>
            </label>
          </div>
        </div>

        <div slot="footer" className="flex gap-3">
          <Button
            variant="secondary"
            onClick={() => setShowModal(false)}
          >
            Cancel
          </Button>
          <Button variant="primary">Send Notification</Button>
        </div>
      </Modal>
    </div>
  );
};
