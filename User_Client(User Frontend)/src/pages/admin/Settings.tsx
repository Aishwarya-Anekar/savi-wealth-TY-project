import React, { useState } from 'react';
import { Lock, User, Globe, Bell } from 'lucide-react';
import { Card, Button, Input } from '../../components/admin/AdminCommon';

export const Settings: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'profile' | 'platform' | 'theme'>(
    'profile'
  );

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Settings</h1>
        <p className="text-gray-600 mt-2">
          Manage your profile, platform configuration, and preferences.
        </p>
      </div>

      {/* Tabs */}
      <Card>
        <div className="flex gap-4 border-b border-gray-200 -mx-6 px-6">
          {[
            { id: 'profile' as const, label: 'Admin Profile', icon: User },
            { id: 'platform' as const, label: 'Platform Config', icon: Globe },
            { id: 'theme' as const, label: 'Theme & Display', icon: Bell },
          ].map((tab) => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-4 py-3 font-medium border-b-2 transition-all ${
                  activeTab === tab.id
                    ? 'border-primary-600 text-primary-600'
                    : 'border-transparent text-gray-600 hover:text-gray-900'
                }`}
              >
                <Icon size={18} />
                {tab.label}
              </button>
            );
          })}
        </div>
      </Card>

      {/* Profile Tab */}
      {activeTab === 'profile' && (
        <div className="space-y-6">
          {/* Admin Info Card */}
          <Card>
            <h2 className="text-lg font-semibold text-gray-900 mb-6">
              Admin Profile Information
            </h2>

            <div className="flex items-center gap-6 mb-8">
              <div className="w-24 h-24 rounded-full bg-gradient-to-br from-primary-600 to-primary-800 flex items-center justify-center text-white text-3xl font-bold">
                AJ
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900">Admin User</h3>
                <p className="text-gray-600">admin@saviwealth.com</p>
                <Button variant="secondary" size="sm" className="mt-2">
                  Change Avatar
                </Button>
              </div>
            </div>

            <div className="space-y-4">
              <Input
                label="Full Name"
                type="text"
                placeholder="Admin User"
                defaultValue="Admin User"
              />

              <Input
                label="Email Address"
                type="email"
                placeholder="admin@saviwealth.com"
                defaultValue="admin@saviwealth.com"
              />

              <Input
                label="Phone Number"
                type="tel"
                placeholder="+91-xxxxxxxxxx"
                defaultValue="+91-9876543210"
              />

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Department
                </label>
                <select className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-500">
                  <option>Administration</option>
                  <option>Operations</option>
                  <option>Super Admin</option>
                </select>
              </div>
            </div>
          </Card>

          {/* Password Card */}
          <Card>
            <h2 className="text-lg font-semibold text-gray-900 mb-6 flex items-center gap-2">
              <Lock size={20} />
              Change Password
            </h2>

            <div className="space-y-4">
              <Input
                label="Current Password"
                type="password"
                placeholder="••••••••"
              />

              <Input
                label="New Password"
                type="password"
                placeholder="••••••••"
              />

              <Input
                label="Confirm Password"
                type="password"
                placeholder="••••••••"
              />
            </div>

            <Button variant="primary" className="mt-6">
              Update Password
            </Button>
          </Card>
        </div>
      )}

      {/* Platform Config Tab */}
      {activeTab === 'platform' && (
        <div className="space-y-6">
          <Card>
            <h2 className="text-lg font-semibold text-gray-900 mb-6">
              Platform Configuration
            </h2>

            <div className="space-y-6">
              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="block text-sm font-medium text-gray-700">
                    Platform Name
                  </label>
                  <span className="text-xs text-gray-500">Read-Only</span>
                </div>
                <input
                  type="text"
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 bg-gray-50 text-gray-700 cursor-not-allowed"
                  value="Savi Wealth Admin Panel"
                  disabled
                />
              </div>

              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="block text-sm font-medium text-gray-700">
                    Current Version
                  </label>
                  <span className="text-xs text-gray-500">Read-Only</span>
                </div>
                <input
                  type="text"
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 bg-gray-50 text-gray-700 cursor-not-allowed"
                  value="v2.1.0"
                  disabled
                />
              </div>

              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="block text-sm font-medium text-gray-700">
                    Last Updated
                  </label>
                  <span className="text-xs text-gray-500">Read-Only</span>
                </div>
                <input
                  type="text"
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 bg-gray-50 text-gray-700 cursor-not-allowed"
                  value="February 24, 2026"
                  disabled
                />
              </div>

              <div>
                <label className="flex items-center gap-2 text-sm font-medium text-gray-700">
                  <input
                    type="checkbox"
                    defaultChecked
                    className="w-4 h-4 rounded border border-gray-300 text-primary-600"
                  />
                  Maintenance Mode
                </label>
                <p className="text-xs text-gray-600 mt-2">
                  When enabled, only admins can access the platform
                </p>
              </div>

              <div>
                <label className="flex items-center gap-2 text-sm font-medium text-gray-700">
                  <input
                    type="checkbox"
                    defaultChecked
                    className="w-4 h-4 rounded border border-gray-300 text-primary-600"
                  />
                  Enable API Access
                </label>
                <p className="text-xs text-gray-600 mt-2">
                  Allow third-party applications to connect
                </p>
              </div>

              <div>
                <label className="flex items-center gap-2 text-sm font-medium text-gray-700">
                  <input
                    type="checkbox"
                    defaultChecked
                    className="w-4 h-4 rounded border border-gray-300 text-primary-600"
                  />
                  Enable Two-Factor Authentication
                </label>
                <p className="text-xs text-gray-600 mt-2">
                  Require 2FA for all admin accounts
                </p>
              </div>
            </div>

            <Button variant="primary" className="mt-6">
              Save Configuration
            </Button>
          </Card>

          {/* Backup & Security */}
          <Card>
            <h2 className="text-lg font-semibold text-gray-900 mb-6">
              Backup & Security
            </h2>

            <div className="space-y-4">
              <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                <div>
                  <p className="font-medium text-gray-900">Last Backup</p>
                  <p className="text-sm text-gray-600">
                    February 23, 2026 at 02:00 AM
                  </p>
                </div>
                <Button variant="secondary" size="sm">
                  View
                </Button>
              </div>

              <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
                <div>
                  <p className="font-medium text-gray-900">Database Size</p>
                  <p className="text-sm text-gray-600">2.4 GB</p>
                </div>
                <Button variant="secondary" size="sm">
                  Backup Now
                </Button>
              </div>
            </div>
          </Card>
        </div>
      )}

      {/* Theme Tab */}
      {activeTab === 'theme' && (
        <div className="space-y-6">
          <Card>
            <h2 className="text-lg font-semibold text-gray-900 mb-6">
              Theme Settings
            </h2>

            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  Color Scheme
                </label>
                <div className="grid grid-cols-3 gap-4">
                  {[
                    { name: 'Light', bg: 'bg-gray-100', border: 'border-2' },
                    { name: 'Dark', bg: 'bg-gray-900', border: 'border-2' },
                    { name: 'Auto', bg: 'bg-gradient-to-r from-gray-100 to-gray-900', border: 'border-2' },
                  ].map((theme) => (
                    <label
                      key={theme.name}
                      className={`flex items-center gap-2 p-4 rounded-lg cursor-pointer ${theme.border} ${theme.bg === 'bg-gradient-to-r from-gray-100 to-gray-900' ? 'border-primary-600' : 'border-gray-200'}`}
                    >
                      <input
                        type="radio"
                        name="theme"
                        defaultChecked={theme.name === 'Light'}
                        className="w-4 h-4 text-primary-600"
                      />
                      <span className="text-sm font-medium text-gray-900">
                        {theme.name}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <label className="flex items-center gap-2 text-sm font-medium text-gray-700 mb-3">
                  <Bell size={16} />
                  Notification Settings
                </label>
                <div className="space-y-3 ml-6">
                  {['Email notifications', 'Push notifications', 'SMS alerts'].map(
                    (setting) => (
                      <label
                        key={setting}
                        className="flex items-center gap-2 text-sm text-gray-700"
                      >
                        <input
                          type="checkbox"
                          defaultChecked
                          className="w-4 h-4 rounded border border-gray-300 text-primary-600"
                        />
                        {setting}
                      </label>
                    )
                  )}
                </div>
              </div>
            </div>

            <Button variant="primary" className="mt-6">
              Save Theme Settings
            </Button>
          </Card>

          {/* Preview */}
          <Card>
            <h2 className="text-lg font-semibold text-gray-900 mb-4">
              Theme Preview
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-6 bg-gray-50 rounded-lg border-2 border-primary-600">
                <div className="w-full h-32 bg-primary-600 rounded-lg mb-4" />
                <p className="text-sm font-medium text-gray-900">Primary Color</p>
              </div>
              <div className="p-6 bg-gray-50 rounded-lg">
                <div className="w-full h-32 bg-success-600 rounded-lg mb-4" />
                <p className="text-sm font-medium text-gray-900">Success Color</p>
              </div>
              <div className="p-6 bg-gray-50 rounded-lg">
                <div className="w-full h-32 bg-danger-600 rounded-lg mb-4" />
                <p className="text-sm font-medium text-gray-900">Danger Color</p>
              </div>
            </div>
          </Card>
        </div>
      )}
    </div>
  );
};
