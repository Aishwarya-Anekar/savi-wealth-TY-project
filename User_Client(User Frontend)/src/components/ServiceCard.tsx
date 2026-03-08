import React from "react";
import { motion } from "framer-motion";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import { useNavigate } from "react-router-dom";

interface ServiceCardProps {
  title: string;
  description: string;
  features: string[];
  icon: React.ReactNode;
  index: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  description,
  features,
  icon,
  index,
}) => {
  const navigate = useNavigate(); // ✅ initialize navigate

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ y: -8 }}
      className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-gray-700 group relative overflow-hidden"
    >
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-50 to-secondary-50 dark:from-primary-900/10 dark:to-secondary-900/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

      {/* Content */}
      <div className="relative z-10">
        {/* Icon */}
        <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
          <div className="text-white text-2xl">{icon}</div>
        </div>

        {/* Title & Description */}
        <h3 className="text-2xl font-serif font-bold text-gray-900 dark:text-white mb-3">
          {title}
        </h3>
        <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
          {description}
        </p>

        {/* Features */}
        <div className="space-y-3 mb-8">
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 + idx * 0.05 }}
              className="flex items-center text-gray-700 dark:text-gray-300"
            >
              <div className="w-2 h-2 bg-primary-500 rounded-full mr-3 flex-shrink-0"></div>
              <span className="text-sm">{feature}</span>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <button
          onClick={() => navigate("/client-services")}
          className="flex items-center text-primary-600 dark:text-primary-400 font-medium text-sm hover:text-primary-700 dark:hover:text-primary-300 transition-colors duration-200"
        >
          Learn More
          <ArrowRightIcon className="h-4 w-4 ml-1 hover:translate-x-1 transition-transform duration-200" />
        </button>
      </div>
    </motion.div>
  );
};

export default ServiceCard;
