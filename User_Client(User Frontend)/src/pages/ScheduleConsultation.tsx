import React, { useState } from 'react';
import { User, Mail, Phone, Calendar, Clock, MessageSquare } from 'lucide-react';

const ScheduleConsultation: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    consultationType: '',
    preferredDate: '',
    preferredTime: '',
    message: ''
  });
  const [showSuccess, setShowSuccess] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 5000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 dark:from-gray-900 dark:to-gray-800 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4 mt-8">
            Schedule a Consultation
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Book your personalized financial consultation with our experts.
          </p>
        </div>

        {/* Form Card */}
        <div className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm rounded-xl shadow-xl border-0 p-8">
          <div className="text-center pb-6">
            <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-2">
              Consultation Request
            </h2>
            <p className="text-gray-600 dark:text-gray-400">
              Fill out the form below and we'll get back to you within 24 hours.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Two-column layout */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Full Name */}
              <div className="space-y-2">
                <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Full Name *
                </label>
                <div className="relative">
                  <User className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                  <input
                    id="fullName"
                    name="fullName"
                    type="text"
                    required
                    placeholder="Enter your full name"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    className="w-full pl-10 pr-3 py-3 border border-gray-200 dark:border-gray-700 rounded-lg 
                               bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 
                               focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                  />
                </div>
              </div>

              {/* Email */}
              <div className="space-y-2">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Email Address *
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="Enter your email address"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full pl-10 pr-3 py-3 border border-gray-200 dark:border-gray-700 rounded-lg 
                               bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 
                               focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                  />
                </div>
              </div>

              {/* Phone */}
              <div className="space-y-2">
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Phone Number *
                </label>
                <div className="relative">
                  <Phone className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    required
                    placeholder="Enter your phone number"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full pl-10 pr-3 py-3 border border-gray-200 dark:border-gray-700 rounded-lg 
                               bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 
                               focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                  />
                </div>
              </div>

              {/* Consultation Type */}
              <div className="space-y-2">
                <label htmlFor="consultationType" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Consultation Type *
                </label>
                <select
                  id="consultationType"
                  name="consultationType"
                  required
                  value={formData.consultationType}
                  onChange={handleInputChange}
                  className="w-full px-3 py-3 border border-gray-200 dark:border-gray-700 rounded-lg 
                             bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 
                             focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                >
                  <option value="">Select consultation type</option>
                  <option value="investment">Investment Planning</option>
                  <option value="retirement">Retirement Planning</option>
                  <option value="tax">Tax Planning</option>
                  <option value="general">General</option>
                </select>
              </div>

              {/* Preferred Date */}
              <div className="space-y-2">
                <label htmlFor="preferredDate" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Preferred Date *
                </label>
                <div className="relative">
                  <Calendar className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                  <input
                    id="preferredDate"
                    name="preferredDate"
                    type="date"
                    required
                    value={formData.preferredDate}
                    onChange={handleInputChange}
                    className="w-full pl-10 pr-3 py-3 border border-gray-200 dark:border-gray-700 rounded-lg 
                               bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 
                               focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                  />
                </div>
              </div>

              {/* Preferred Time */}
              <div className="space-y-2">
                <label htmlFor="preferredTime" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Preferred Time *
                </label>
                <div className="relative">
                  <Clock className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                  <input
                    id="preferredTime"
                    name="preferredTime"
                    type="time"
                    required
                    value={formData.preferredTime}
                    onChange={handleInputChange}
                    className="w-full pl-10 pr-3 py-3 border border-gray-200 dark:border-gray-700 rounded-lg 
                               bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 
                               focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                  />
                </div>
              </div>
            </div>

            {/* Message */}
            <div className="space-y-2">
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Additional Message
              </label>
              <div className="relative">
                <MessageSquare className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  placeholder="Tell us more about your financial goals or any specific questions you have..."
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full pl-10 pr-3 py-3 border border-gray-200 dark:border-gray-700 rounded-lg 
                             bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 
                             focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors resize-none"
                />
              </div>
            </div>

            {/* Submit Button */}
            <div className="mt-6">
              <button
                type="submit"
                className="w-full py-3 px-6 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 
                           text-white font-semibold text-lg rounded-lg shadow-lg hover:shadow-xl 
                           transition-all duration-200 transform hover:scale-[1.02] 
                           focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                Submit
              </button>
            </div>

            {/* Success Message */}
            {showSuccess && (
              <div className="mt-4 p-4 bg-green-50 dark:bg-green-900/40 border border-green-200 dark:border-green-700 rounded-lg">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <svg
                      className="h-5 w-5 text-green-400"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <p className="text-sm font-medium text-green-800 dark:text-green-200">
                      Thank you! Your consultation request has been submitted successfully.
                    </p>
                  </div>
                </div>
              </div>
            )}
          </form>

          {/* Footer Note */}
          <div className="pt-6 border-t border-gray-100 dark:border-gray-700 mt-6">
            <p className="text-sm text-gray-500 dark:text-gray-400 text-center">
              Our team will contact you within 24 hours after submission.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScheduleConsultation;
