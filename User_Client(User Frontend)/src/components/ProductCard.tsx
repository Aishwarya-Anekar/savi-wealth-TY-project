import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRightIcon } from "@heroicons/react/24/outline";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  slug?: string;
  index: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, icon, index }) => {
  const navigate = useNavigate();

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
      className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700 group hover:border-primary-300 dark:hover:border-primary-600"
    >
      <div className="flex items-center justify-center w-14 h-14 rounded-xl bg-primary-100 dark:bg-primary-900 text-primary-600 dark:text-primary-300 mb-6">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{title}</h3>
      <p className="text-gray-600 dark:text-gray-400 mb-6">{description}</p>
      <button
        onClick={() => navigate("/product-basket")}
        className="flex items-center text-primary-600 dark:text-primary-400 font-medium text-sm hover:text-primary-700 dark:hover:text-primary-300 transition-colors duration-200"
      >
        Learn More
        <ArrowRightIcon className="h-4 w-4 ml-1 hover:translate-x-1 transition-transform duration-200" />
      </button>
    </motion.div>
  );
};

export default ServiceCard;
