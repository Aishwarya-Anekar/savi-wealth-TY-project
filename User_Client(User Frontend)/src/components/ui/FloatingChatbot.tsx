
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChatBubbleLeftRightIcon, XMarkIcon } from '@heroicons/react/24/outline';

const FloatingChatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Chatbot Modal with Stack AI iframe */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.98, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.98, y: 20 }}
            className="fixed inset-0 w-screen h-screen bg-white dark:bg-gray-900 z-50 flex flex-col"
            style={{ borderRadius: 0, boxShadow: 'none' }}
          >
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-full flex items-center justify-center">
                  {/* <span className="text-white text-sm font-bold">SW</span> */}
                </div>
                <div>
                  {/* <h3 className="font-semibold text-gray-900 dark:text-white">SaviWealth Assistant</h3> */}
                  <h1 className="text-xs text-green-500">Online</h1>
                </div>
              </div>
              <div>
              <div className="flex flex-col items-center justify-center">
              <h1 className="text-2xl md:text-3xl font-extrabold text-blue-600 mb-2 text-center">Welcome to SaviWealth!</h1>
              <p className="text-base md:text-small text-gray-600 dark:text-gray-300 mb-4 text-center max-w-2xl">
                Click the chatbot below to ask any questions about investments, mutual funds, insurance, or financial planning.
                </p>
            </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full transition-colors"
              >
                <XMarkIcon className="h-5 w-5 text-gray-500" />
              </button>
            </div>
           
            {/* Stack AI Chatbot Embed */}
            <div className="flex-1 overflow-hidden">
              <iframe
                src="https://www.stack-ai.com/embed/6d292b14-0ca0-4162-8c35-05cc74429c79/0ae860aa-8fbc-4528-8805-ced91f04c786/685404c96fe56826c33f1570"
                title="Stack AI Chatbot"
                width="100%"
                height="100%"
                style={{ border: 'none', width: '100vw', height: '100%', minHeight: '100%' }}
                allow="clipboard-write;"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Button */}
      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 w-14 h-14 bg-gradient-to-br from-blue-400 via-blue-500 to-blue-700 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-200 flex items-center justify-center z-40"
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <XMarkIcon className="h-6 w-6" />
            </motion.div>
          ) : (
            <motion.div
              key="chat"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <ChatBubbleLeftRightIcon className="h-6 w-6" />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>
    </>
  );
};

export default FloatingChatbot;