import React, { useState, useMemo } from "react";
import { motion } from "framer-motion";
import {
  ChartBarIcon,
  ArrowTrendingUpIcon,
  ChartPieIcon,
} from "@heroicons/react/24/outline";
import {
  ResponsiveContainer,
  AreaChart,
  Area,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  PieChart,
  Pie,
  Cell,
  LineChart,
  Line,
} from "recharts";

const COLORS = ["#2563eb", "#22c55e", "#f59e0b"];

// Dropdown options (from saviwealth.in)
const AMC_OPTIONS = ["HDFC Mutual Fund", "SBI Mutual Fund", "Axis Mutual Fund"];
const TYPE_OPTIONS = ["Debt", "Equity", "Hybrid"];
const SUBTYPE_OPTIONS = ["Large Cap Fund", "ELSS", "Aggressive Hybrid Fund"];
const SCHEME_OPTIONS = [
  "HDFC Growth Fund - Gr",
  "SBI Bluechip Fund - Gr",
  "Axis Equity Fund - Gr",
];

interface NAVPoint {
  date: string;
  nav: number;
}

const MFHistoricNAV: React.FC = () => {
  // Selection states
  const [amc, setAmc] = useState(AMC_OPTIONS[0]);
  const [type, setType] = useState(TYPE_OPTIONS[0]);
  const [subType, setSubType] = useState(SUBTYPE_OPTIONS[0]);
  const [scheme, setScheme] = useState(SCHEME_OPTIONS[0]);

  // Dashboard state
  const [navData, setNavData] = useState<NAVPoint[]>([]);
  const [allocation, setAllocation] = useState<{ name: string; value: number }[]>(
    []
  );

  // Derived metrics
  const results = useMemo(() => {
    if (navData.length === 0) return null;
    const latestNAV = navData[navData.length - 1].nav;
    const oldNAV = navData[0].nav;
    const yearAgoNAV =
      navData.length > 1 ? navData[navData.length - 2].nav : oldNAV;

    const growth1Y = ((latestNAV - yearAgoNAV) / yearAgoNAV) * 100;
    const growthCAGR =
      ((latestNAV / oldNAV) ** (1 / (navData.length - 1)) - 1) * 100;

    return { latestNAV, growth1Y, growthCAGR };
  }, [navData]);

  // Simulated fetch
  const handleFetch = () => {
    console.log("Fetching NAV for:", { amc, type, subType, scheme });

    // Simulated NAV history (replace with API later)
    const mockNAV = [
      { date: "2019", nav: 100 + Math.random() * 50 },
      { date: "2020", nav: 120 + Math.random() * 50 },
      { date: "2021", nav: 150 + Math.random() * 50 },
      { date: "2022", nav: 200 + Math.random() * 50 },
      { date: "2023", nav: 250 + Math.random() * 50 },
      { date: "2024", nav: 300 + Math.random() * 50 },
    ];

    const mockAllocation = [
      { name: "Equity", value: 60 + Math.round(Math.random() * 20) },
      { name: "Debt", value: 20 + Math.round(Math.random() * 10) },
      { name: "Cash", value: 10 + Math.round(Math.random() * 10) },
    ];

    setNavData(mockNAV);
    setAllocation(mockAllocation);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl border border-gray-100 dark:border-gray-700"
    >
      {/* Header */}
      <div className="flex items-center mb-8">
        <ChartBarIcon className="h-8 w-8 text-primary-600 dark:text-primary-400 mr-3" />
        <h3 className="text-3xl font-serif font-bold text-gray-900 dark:text-white">
          Mutual Fund Historic NAV
        </h3>
      </div>

      {/* Selection Inputs */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-8">
        <div className="space-y-4">
          {[
            { label: "AMC", options: AMC_OPTIONS, state: amc, setter: setAmc },
            { label: "Type", options: TYPE_OPTIONS, state: type, setter: setType },
            {
              label: "Sub Type",
              options: SUBTYPE_OPTIONS,
              state: subType,
              setter: setSubType,
            },
            {
              label: "Scheme",
              options: SCHEME_OPTIONS,
              state: scheme,
              setter: setScheme,
            },
          ].map(({ label, options, state, setter }) => (
            <div key={label}>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                {label}
              </label>
              <select
                value={state}
                onChange={(e) => setter(e.target.value)}
                className="w-full rounded-lg border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 p-2 text-gray-900 dark:text-white"
              >
                {options.map((opt) => (
                  <option key={opt}>{opt}</option>
                ))}
              </select>
            </div>
          ))}

          {/* Fetch Button */}
          <motion.button
            onClick={handleFetch}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="mt-4 px-6 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700"
          >
            Fetch NAV History
          </motion.button>
        </div>

        {/* Dashboard Panel */}
        {results && (
          <div className="bg-gradient-to-br from-primary-50 to-secondary-50 dark:from-primary-900/20 dark:to-secondary-900/20 rounded-xl p-8 flex flex-col">
            <div className="flex items-center mb-6">
              <ArrowTrendingUpIcon className="h-7 w-7 text-primary-600 dark:text-primary-400 mr-2" />
              <h4 className="text-xl font-semibold text-gray-900 dark:text-white">
                NAV Dashboard
              </h4>
            </div>

            {/* Metrics */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
              <motion.div whileHover={{ scale: 1.05 }} className="bg-white dark:bg-gray-700 p-5 rounded-lg shadow text-center">
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">
                  Latest NAV
                </p>
                <p className="text-xl font-bold text-gray-900 dark:text-white">
                  ₹{results.latestNAV.toFixed(2)}
                </p>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} className="bg-white dark:bg-gray-700 p-5 rounded-lg shadow text-center">
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">
                  1-Year Growth
                </p>
                <p className="text-xl font-bold text-green-600 dark:text-green-400">
                  {results.growth1Y.toFixed(2)}%
                </p>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} className="bg-white dark:bg-gray-700 p-5 rounded-lg shadow text-center">
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">
                  CAGR
                </p>
                <p className="text-xl font-bold text-primary-600 dark:text-primary-400">
                  {results.growthCAGR.toFixed(2)}%
                </p>
              </motion.div>
            </div>

            {/* Charts */}
            <div className="h-72 mb-6">
              <ResponsiveContainer>
                <AreaChart data={navData}>
                  <defs>
                    <linearGradient id="colorNav" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#2563eb" stopOpacity={0.8} />
                      <stop offset="95%" stopColor="#2563eb" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="date" />
                  <YAxis />
                  <Tooltip formatter={(val: number) => `₹${val.toLocaleString()}`} />
                  <Legend />
                  <Area type="monotone" dataKey="nav" stroke="#2563eb" fill="url(#colorNav)" />
                </AreaChart>
              </ResponsiveContainer>
            </div>

            <div className="h-72 mb-6">
              <ResponsiveContainer>
                <LineChart data={navData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="date" />
                  <YAxis />
                  <Tooltip formatter={(val: number) => `₹${val.toLocaleString()}`} />
                  <Legend />
                  <Line type="monotone" dataKey="nav" stroke="#22c55e" strokeWidth={2} />
                </LineChart>
              </ResponsiveContainer>
            </div>

            {/* Asset Allocation */}
            <div className="h-64 mb-6">
              <div className="flex items-center mb-2">
                <ChartPieIcon className="h-6 w-6 text-primary-600 dark:text-primary-400 mr-2" />
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                  Asset Allocation
                </h4>
              </div>
              <ResponsiveContainer>
                <PieChart>
                  <Pie data={allocation} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={80} label>
                    {allocation.map((_entry, i) => (
                      <Cell key={i} fill={COLORS[i % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip formatter={(val: number) => `${val}%`} />
                  <Legend />
                </PieChart>
              </ResponsiveContainer>
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full mt-4 px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white rounded-lg"
            >
              Explore Fund Details
            </motion.button>
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default MFHistoricNAV;
