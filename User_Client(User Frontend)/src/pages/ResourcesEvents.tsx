import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  CalendarDaysIcon,
  ClockIcon,
  MapPinIcon,
  UserGroupIcon,
  ArrowRightIcon,
  CheckCircleIcon,
  ExclamationTriangleIcon,
} from '@heroicons/react/24/outline';
import SEOHead from '../components/SEOHead';

interface Event {
  id: number;
  title: string;
  description: string;
  date: string;
  time: string;
  location: string;
  type: 'upcoming' | 'past';
  category: string;
  attendees: number;
  maxAttendees?: number;
  image: string;
  slug: string;
  status: 'open' | 'full' | 'completed';
}

const ResourcesEvents: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedType, setSelectedType] = useState('All');

  const categories = ['All', 'Seminars', 'Workshops', 'Conferences', 'Webinars', 'Networking'];
  const types = ['All', 'Upcoming', 'Past'];

  const events: Event[] = [
    {
      id: 1,
      title: 'Investment Strategies for 2025',
      description: 'Join our expert panel as they discuss the most effective investment strategies for the upcoming year, covering market trends and opportunities.',
      date: 'April 15, 2025',
      time: '10:00 AM - 12:00 PM',
      location: 'Mumbai Convention Center',
      type: 'upcoming',
      category: 'Seminars',
      attendees: 45,
      maxAttendees: 100,
      image: '/Images/YEsJHy0dR1zj.png',
      slug: 'investment-strategies-2025',
      status: 'open',
    },
    {
      id: 2,
      title: 'Wealth Management Workshop',
      description: 'Interactive workshop on personal wealth management, portfolio diversification, and long-term financial planning strategies.',
      date: 'April 22, 2025',
      time: '2:00 PM - 5:00 PM',
      location: 'Delhi Financial District',
      type: 'upcoming',
      category: 'Workshops',
      attendees: 28,
      maxAttendees: 50,
      image: '/Images/NE6hevacyo13.jpg',
      slug: 'wealth-management-workshop',
      status: 'open',
    },
    {
      id: 3,
      title: 'Digital Finance Conference 2025',
      description: 'Annual conference exploring the future of digital finance, fintech innovations, and their impact on traditional investment methods.',
      date: 'May 5, 2025',
      time: '9:00 AM - 6:00 PM',
      location: 'Bangalore Tech Park',
      type: 'upcoming',
      category: 'Conferences',
      attendees: 180,
      maxAttendees: 200,
      image: '/Images/YKoanrjM43YL.png',
      slug: 'digital-finance-conference-2025',
      status: 'open',
    },
    {
      id: 4,
      title: 'Tax Planning Webinar',
      description: 'Online webinar covering effective tax planning strategies, deductions, and investment options for tax optimization.',
      date: 'May 12, 2025',
      time: '7:00 PM - 8:30 PM',
      location: 'Online Event',
      type: 'upcoming',
      category: 'Webinars',
      attendees: 320,
      maxAttendees: 500,
      image: '/Images/9AubsN3d8yz0.jpg',
      slug: 'tax-planning-webinar',
      status: 'open',
    },
    {
      id: 5,
      title: 'Mutual Fund Masterclass',
      description: 'Comprehensive masterclass on mutual fund investing, covering fund selection, SIP strategies, and performance evaluation.',
      date: 'March 20, 2025',
      time: '11:00 AM - 4:00 PM',
      location: 'Chennai Business Center',
      type: 'past',
      category: 'Workshops',
      attendees: 75,
      maxAttendees: 75,
      image: '/Images/5Ez3KWnIs8D4.jpeg',
      slug: 'mutual-fund-masterclass',
      status: 'completed',
    },
    {
      id: 6,
      title: 'Financial Literacy Workshop',
      description: 'Basic financial literacy workshop for young professionals, covering budgeting, saving, and investment fundamentals.',
      date: 'March 10, 2025',
      time: '2:00 PM - 5:00 PM',
      location: 'Pune Education Hub',
      type: 'past',
      category: 'Workshops',
      attendees: 60,
      maxAttendees: 60,
      image: '/Images/7TGaY8hHnZRv.jpg',
      slug: 'financial-literacy-workshop',
      status: 'completed',
    },
    {
      id: 7,
      title: 'Alternative Investment Conference',
      description: 'Conference focused on alternative investment opportunities including REITs, commodities, and private equity.',
      date: 'February 28, 2025',
      time: '9:00 AM - 5:00 PM',
      location: 'Hyderabad Convention Hall',
      type: 'past',
      category: 'Conferences',
      attendees: 150,
      maxAttendees: 150,
      image: '/Images/6EiO5RfW3TC5.jpg',
      slug: 'alternative-investment-conference',
      status: 'completed',
    },
    {
      id: 8,
      title: 'Networking Mixer: Finance Professionals',
      description: 'Networking event for finance professionals to connect, share insights, and explore collaboration opportunities.',
      date: 'June 8, 2025',
      time: '6:00 PM - 9:00 PM',
      location: 'Gurgaon Business District',
      type: 'upcoming',
      category: 'Networking',
      attendees: 25,
      maxAttendees: 80,
      image: '/Images/IwVfDTOx1H7P.jpeg',
      slug: 'networking-mixer-finance-professionals',
      status: 'open',
    },
  ];

  const filteredEvents = events.filter(event => {
    const categoryMatch = selectedCategory === 'All' || event.category === selectedCategory;
    const typeMatch = selectedType === 'All' || 
      (selectedType === 'Upcoming' && event.type === 'upcoming') ||
      (selectedType === 'Past' && event.type === 'past');
    return categoryMatch && typeMatch;
  });

  const upcomingEvents = events.filter(event => event.type === 'upcoming');
  const pastEvents = events.filter(event => event.type === 'past');

  return (
    <>
      <SEOHead
        title="Events - Resources - SaviWealth"
        description="Join our financial events, seminars, workshops, and conferences to enhance your investment knowledge and network with experts."
        keywords="financial events, investment seminars, wealth management workshops, finance conferences"
      />
      
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-16">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-red-600 to-red-800 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">
                Financial Events
              </h1>
              <p className="text-xl text-red-100 max-w-2xl mx-auto">
                Join our educational events, seminars, and workshops to enhance your financial knowledge
              </p>
            </motion.div>
          </div>
        </section>

        {/* Event Stats */}
        <section className="py-8 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-primary-600 dark:text-primary-400 mb-2">
                  {upcomingEvents.length}
                </div>
                <div className="text-gray-600 dark:text-gray-400">Upcoming Events</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary-600 dark:text-primary-400 mb-2">
                  {pastEvents.length}
                </div>
                <div className="text-gray-600 dark:text-gray-400">Past Events</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary-600 dark:text-primary-400 mb-2">
                  {events.reduce((sum, event) => sum + event.attendees, 0)}
                </div>
                <div className="text-gray-600 dark:text-gray-400">Total Attendees</div>
              </div>
            </div>
          </div>
        </section>

        {/* Filters */}
        <section className="py-8 bg-gray-100 dark:bg-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-4">
              {/* Category Filter */}
              <div>
                <h3 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Category</h3>
                <div className="flex flex-wrap gap-2">
                  {categories.map((category) => (
                    <button
                      key={category}
                      onClick={() => setSelectedCategory(category)}
                      className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
                        selectedCategory === category
                          ? 'bg-primary-600 text-white'
                          : 'bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-primary-100 dark:hover:bg-gray-600'
                      }`}
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </div>

              {/* Type Filter */}
              <div>
                <h3 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Type</h3>
                <div className="flex flex-wrap gap-2">
                  {types.map((type) => (
                    <button
                      key={type}
                      onClick={() => setSelectedType(type)}
                      className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
                        selectedType === type
                          ? 'bg-red-600 text-white'
                          : 'bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-red-100 dark:hover:bg-gray-600'
                      }`}
                    >
                      {type}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Events Grid */}
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredEvents.map((event, index) => (
                <motion.article
                  key={event.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden group"
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={event.image}
                      alt={event.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4 flex space-x-2">
                      <span className="bg-red-600 text-white px-3 py-1 rounded-full text-xs font-medium">
                        {event.category}
                      </span>
                      <span className={`px-3 py-1 rounded-full text-xs font-medium text-white ${
                        event.type === 'upcoming' ? 'bg-green-600' : 'bg-gray-600'
                      }`}>
                        {event.type === 'upcoming' ? 'Upcoming' : 'Past'}
                      </span>
                    </div>
                    <div className="absolute top-4 right-4">
                      {event.status === 'open' && (
                        <CheckCircleIcon className="h-6 w-6 text-green-500" />
                      )}
                      {event.status === 'full' && (
                        <ExclamationTriangleIcon className="h-6 w-6 text-yellow-500" />
                      )}
                      {event.status === 'completed' && (
                        <CheckCircleIcon className="h-6 w-6 text-gray-500" />
                      )}
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 line-clamp-2 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-300">
                      {event.title}
                    </h3>
                    
                    <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-2 text-sm">
                      {event.description}
                    </p>
                    
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                        <CalendarDaysIcon className="h-4 w-4 mr-2" />
                        <span>{event.date}</span>
                      </div>
                      <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                        <ClockIcon className="h-4 w-4 mr-2" />
                        <span>{event.time}</span>
                      </div>
                      <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                        <MapPinIcon className="h-4 w-4 mr-2" />
                        <span>{event.location}</span>
                      </div>
                      <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                        <UserGroupIcon className="h-4 w-4 mr-2" />
                        <span>
                          {event.attendees} 
                          {event.maxAttendees && ` / ${event.maxAttendees}`} attendees
                        </span>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className={`text-sm font-medium ${
                        event.status === 'open' ? 'text-green-600 dark:text-green-400' :
                        event.status === 'full' ? 'text-yellow-600 dark:text-yellow-400' :
                        'text-gray-600 dark:text-gray-400'
                      }`}>
                        {event.status === 'open' && 'Registration Open'}
                        {event.status === 'full' && 'Event Full'}
                        {event.status === 'completed' && 'Completed'}
                      </div>
                      
                      <Link
                        to={`/resources/events/${event.slug}`}
                        className="inline-flex items-center text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 font-medium transition-colors duration-200"
                      >
                        {event.type === 'upcoming' ? 'Register' : 'View Details'}
                        <ArrowRightIcon className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform duration-200" />
                      </Link>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Event */}
        <section className="py-16 bg-white dark:bg-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-serif font-bold text-gray-900 dark:text-white mb-4">
                Featured Event
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400">
                Don't miss our flagship event of the year
              </p>
            </motion.div>

            <div className="bg-gradient-to-r from-red-50 to-red-100 dark:from-gray-700 dark:to-gray-600 rounded-2xl p-8 md:p-12">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div>
                  <div className="mb-4">
                    <span className="bg-red-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                      Annual Conference
                    </span>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4">
                    SaviWealth Investment Summit 2025
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-6">
                    Join industry leaders, fund managers, and investment experts for our annual summit featuring keynote speeches, panel discussions, and networking opportunities.
                  </p>
                  <div className="space-y-2 mb-6">
                    <div className="flex items-center text-gray-500 dark:text-gray-400">
                      <CalendarDaysIcon className="h-5 w-5 mr-2" />
                      <span>July 15-16, 2025</span>
                    </div>
                    <div className="flex items-center text-gray-500 dark:text-gray-400">
                      <MapPinIcon className="h-5 w-5 mr-2" />
                      <span>Mumbai International Convention Center</span>
                    </div>
                    <div className="flex items-center text-gray-500 dark:text-gray-400">
                      <UserGroupIcon className="h-5 w-5 mr-2" />
                      <span>500+ Expected Attendees</span>
                    </div>
                  </div>
                  <Link
                    to="/resources/events/saviwealth-investment-summit-2025"
                    className="inline-flex items-center px-6 py-3 bg-red-600 hover:bg-red-700 text-white font-medium rounded-lg transition-colors duration-200"
                  >
                    Register Now
                    <ArrowRightIcon className="h-5 w-5 ml-2" />
                  </Link>
                </div>
                <div className="relative">
                  <img
                    src="/Images/YEsJHy0dR1zj.png"
                    alt="SaviWealth Investment Summit 2025"
                    className="w-full h-64 md:h-80 object-cover rounded-xl shadow-lg"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="bg-red-50 dark:bg-gray-800 py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-serif font-bold text-gray-900 dark:text-white mb-4">
                Stay Updated on Events
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
                Subscribe to receive notifications about upcoming events and exclusive invitations
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                />
                <button className="px-6 py-3 bg-red-600 hover:bg-red-700 text-white font-medium rounded-lg transition-colors duration-200">
                  Subscribe
                </button>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ResourcesEvents;

