import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  XMarkIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  MagnifyingGlassIcon,
  PhotoIcon,
  EyeIcon,
  CalendarIcon,
} from '@heroicons/react/24/outline';
import SEOHead from '../components/SEOHead';

interface GalleryImage {
  id: number;
  title: string;
  description: string;
  category: string;
  date: string;
  views: number;
  src: string;
  alt: string;
}

const ResourcesImageGallery: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const categories = ['All', 'Charts & Graphs', 'Infographics', 'Market Data', 'Educational', 'Events'];

  const galleryImages: GalleryImage[] = [
    {
      id: 1,
      title: 'Stock Market Performance',
      description: 'Comprehensive analysis of stock market performance with detailed charts and trends.',
      category: 'Charts & Graphs',
      date: 'March 20, 2025',
      views: 245,
      src: '/Images/BB0IC4EkPEbl.jpg',
      alt: 'Stock market performance chart',
    },
    {
      id: 2,
      title: 'Financial Planning Infographic',
      description: 'Visual guide to financial planning steps and investment strategies.',
      category: 'Infographics',
      date: 'March 18, 2025',
      views: 189,
      src: '/Images/ziT2QVdDXDtN.jpg',
      alt: 'Financial planning infographic',
    },
    {
      id: 3,
      title: 'Investment Portfolio Analysis',
      description: 'Detailed breakdown of diversified investment portfolio performance.',
      category: 'Charts & Graphs',
      date: 'March 15, 2025',
      views: 312,
      src: '/Images/g4ANUiWN9lPF.jpg',
      alt: 'Investment portfolio analysis',
    },
    {
      id: 4,
      title: 'Market Data Visualization',
      description: 'Real-time market data presented in easy-to-understand visual format.',
      category: 'Market Data',
      date: 'March 12, 2025',
      views: 156,
      src: '/Images/3BwHHTWdTXTA.jpg',
      alt: 'Market data visualization',
    },
    {
      id: 5,
      title: 'Financial Background',
      description: 'Professional financial background with charts and data overlays.',
      category: 'Educational',
      date: 'March 10, 2025',
      views: 98,
      src: '/Images/j6w14W1vgskG.jpg',
      alt: 'Financial background',
    },
    {
      id: 6,
      title: 'Investment Growth Chart',
      description: 'Long-term investment growth patterns and compound interest visualization.',
      category: 'Charts & Graphs',
      date: 'March 8, 2025',
      views: 267,
      src: '/Images/3njvynLyIkfe.jpg',
      alt: 'Investment growth chart',
    },
    {
      id: 7,
      title: 'Stock Market Trends',
      description: 'Current stock market trends and technical analysis indicators.',
      category: 'Market Data',
      date: 'March 5, 2025',
      views: 203,
      src: '/Images/BHXzIZ7ftDvT.jpg',
      alt: 'Stock market trends',
    },
    {
      id: 8,
      title: 'Financial Education Visual',
      description: 'Educational content about financial literacy and investment basics.',
      category: 'Educational',
      date: 'March 2, 2025',
      views: 134,
      src: '/Images/1ifDZ6C0USYk.jpg',
      alt: 'Financial education visual',
    },
    {
      id: 9,
      title: 'Investment Conference 2025',
      description: 'Highlights from our annual investment conference and networking event.',
      category: 'Events',
      date: 'February 28, 2025',
      views: 89,
      src: '/Images/NE6hevacyo13.jpg',
      alt: 'Investment conference 2025',
    },
    {
      id: 10,
      title: 'Financial Seminar',
      description: 'Educational seminar on wealth management and financial planning.',
      category: 'Events',
      date: 'February 25, 2025',
      views: 76,
      src: '/Images/9AubsN3d8yz0.jpg',
      alt: 'Financial seminar',
    },
    {
      id: 11,
      title: 'Market Analysis Infographic',
      description: 'Comprehensive market analysis presented in infographic format.',
      category: 'Infographics',
      date: 'February 22, 2025',
      views: 145,
      src: '/Images/YKoanrjM43YL.png',
      alt: 'Market analysis infographic',
    },
    {
      id: 12,
      title: 'Investment Workshop',
      description: 'Interactive workshop on investment strategies and portfolio management.',
      category: 'Events',
      date: 'February 20, 2025',
      views: 112,
      src: '/Images/7TGaY8hHnZRv.jpg',
      alt: 'Investment workshop',
    },
  ];

  const filteredImages = selectedCategory === 'All' 
    ? galleryImages 
    : galleryImages.filter(image => image.category === selectedCategory);

  const openLightbox = (image: GalleryImage) => {
    setSelectedImage(image);
    setCurrentImageIndex(filteredImages.findIndex(img => img.id === image.id));
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const navigateImage = (direction: 'prev' | 'next') => {
    const newIndex = direction === 'prev' 
      ? (currentImageIndex - 1 + filteredImages.length) % filteredImages.length
      : (currentImageIndex + 1) % filteredImages.length;
    
    setCurrentImageIndex(newIndex);
    setSelectedImage(filteredImages[newIndex]);
  };

  return (
    <>
      <SEOHead
        title="Image Gallery - Resources - SaviWealth"
        description="Browse our collection of financial charts, infographics, and educational images covering investment and market analysis."
        keywords="financial images, investment charts, market infographics, financial education"
      />
      
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-16">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-orange-600 to-orange-800 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">
                Image Gallery
              </h1>
              <p className="text-xl text-orange-100 max-w-2xl mx-auto">
                Visual insights into financial markets, investment strategies, and educational content
              </p>
            </motion.div>
          </div>
        </section>

        {/* Category Filter */}
        <section className="py-8 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap gap-2 justify-center">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
                    selectedCategory === category
                      ? 'bg-primary-600 text-white'
                      : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-primary-100 dark:hover:bg-gray-600'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Gallery Stats */}
        <section className="py-6 bg-gray-100 dark:bg-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between">
              <div className="flex items-center text-gray-600 dark:text-gray-400">
                <PhotoIcon className="h-5 w-5 mr-2" />
                <span>{filteredImages.length} images</span>
              </div>
              <div className="flex items-center space-x-4 text-sm text-gray-500 dark:text-gray-400">
                <span>Total Views: {galleryImages.reduce((sum, img) => sum + img.views, 0)}</span>
              </div>
            </div>
          </div>
        </section>

        {/* Image Grid */}
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {filteredImages.map((image, index) => (
                <motion.div
                  key={image.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.05 }}
                  className="group cursor-pointer"
                  onClick={() => openLightbox(image)}
                >
                  <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden">
                    <div className="relative overflow-hidden">
                      <img
                        src={image.src}
                        alt={image.alt}
                        className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-300 flex items-center justify-center">
                        <MagnifyingGlassIcon className="h-8 w-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      </div>
                      <div className="absolute top-3 left-3">
                        <span className="bg-orange-600 text-white px-2 py-1 rounded-full text-xs font-medium">
                          {image.category}
                        </span>
                      </div>
                    </div>
                    
                    <div className="p-4">
                      <h3 className="text-sm font-bold text-gray-900 dark:text-white mb-2 line-clamp-2">
                        {image.title}
                      </h3>
                      
                      <div className="flex items-center justify-between text-xs text-gray-500 dark:text-gray-400">
                        <div className="flex items-center">
                          <EyeIcon className="h-3 w-3 mr-1" />
                          <span>{image.views}</span>
                        </div>
                        <div className="flex items-center">
                          <CalendarIcon className="h-3 w-3 mr-1" />
                          <span>{image.date.split(',')[0]}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Lightbox */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-black bg-opacity-90 flex items-center justify-center p-4"
              onClick={closeLightbox}
            >
              <div className="relative max-w-4xl max-h-full">
                {/* Close Button */}
                <button
                  onClick={closeLightbox}
                  className="absolute top-4 right-4 z-10 p-2 bg-black bg-opacity-50 text-white rounded-full hover:bg-opacity-70 transition-colors duration-200"
                >
                  <XMarkIcon className="h-6 w-6" />
                </button>

                {/* Navigation Buttons */}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    navigateImage('prev');
                  }}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 p-2 bg-black bg-opacity-50 text-white rounded-full hover:bg-opacity-70 transition-colors duration-200"
                >
                  <ChevronLeftIcon className="h-6 w-6" />
                </button>

                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    navigateImage('next');
                  }}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 p-2 bg-black bg-opacity-50 text-white rounded-full hover:bg-opacity-70 transition-colors duration-200"
                >
                  <ChevronRightIcon className="h-6 w-6" />
                </button>

                {/* Image */}
                <motion.div
                  initial={{ scale: 0.8 }}
                  animate={{ scale: 1 }}
                  exit={{ scale: 0.8 }}
                  className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden"
                  onClick={(e) => e.stopPropagation()}
                >
                  <img
                    src={selectedImage.src}
                    alt={selectedImage.alt}
                    className="w-full h-auto max-h-[70vh] object-contain"
                  />
                  
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <span className="bg-orange-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                        {selectedImage.category}
                      </span>
                      <span className="text-sm text-gray-500 dark:text-gray-400">
                        {currentImageIndex + 1} of {filteredImages.length}
                      </span>
                    </div>
                    
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                      {selectedImage.title}
                    </h3>
                    
                    <p className="text-gray-600 dark:text-gray-400 mb-4">
                      {selectedImage.description}
                    </p>
                    
                    <div className="flex items-center space-x-6 text-sm text-gray-500 dark:text-gray-400">
                      <div className="flex items-center">
                        <EyeIcon className="h-4 w-4 mr-1" />
                        <span>{selectedImage.views} views</span>
                      </div>
                      <div className="flex items-center">
                        <CalendarIcon className="h-4 w-4 mr-1" />
                        <span>{selectedImage.date}</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Load More Section */}
        <section className="py-8 text-center">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 bg-primary-600 hover:bg-primary-700 text-white font-medium rounded-lg transition-colors duration-200"
          >
            Load More Images
          </motion.button>
        </section>

        {/* Gallery Info */}
        <section className="bg-orange-50 dark:bg-gray-800 py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-serif font-bold text-gray-900 dark:text-white mb-4">
                Visual Learning Resources
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
                Our image gallery provides visual insights into complex financial concepts, making learning more engaging and effective
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="bg-orange-100 dark:bg-gray-700 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <PhotoIcon className="h-8 w-8 text-orange-600 dark:text-orange-400" />
                  </div>
                  <h3 className="font-bold text-gray-900 dark:text-white mb-2">High Quality</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">Professional quality images and infographics</p>
                </div>
                <div className="text-center">
                  <div className="bg-orange-100 dark:bg-gray-700 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <MagnifyingGlassIcon className="h-8 w-8 text-orange-600 dark:text-orange-400" />
                  </div>
                  <h3 className="font-bold text-gray-900 dark:text-white mb-2">Easy to Understand</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">Complex concepts simplified through visuals</p>
                </div>
                <div className="text-center">
                  <div className="bg-orange-100 dark:bg-gray-700 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <CalendarIcon className="h-8 w-8 text-orange-600 dark:text-orange-400" />
                  </div>
                  <h3 className="font-bold text-gray-900 dark:text-white mb-2">Regularly Updated</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">Fresh content added regularly</p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ResourcesImageGallery;

