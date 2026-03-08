import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  HeartIcon,
  HomeIcon,
  AcademicCapIcon,
  ClockIcon
} from '@heroicons/react/24/outline';

interface CalculatorResult {
  type: string;
  result: number;
  details: Record<string, number | string>;
}

const FinancialTools: React.FC = () => {
  const [activeCalculator, setActiveCalculator] = useState<string | null>(null);
  const [calculatorResults, setCalculatorResults] = useState<CalculatorResult[]>([]);

  // Human Life Value Calculator
  const [hlvInputs, setHlvInputs] = useState({
    currentAge: 30,
    retirementAge: 60,
    currentIncome: 1000000,
    incomeGrowthRate: 8,
    discountRate: 10,
    existingInsurance: 500000
  });

  // EMI Calculator
  const [emiInputs, setEmiInputs] = useState({
    loanAmount: 5000000,
    interestRate: 8.5,
    tenure: 20
  });

  // Goal Planning Calculator
  const [goalInputs, setGoalInputs] = useState({
    goalAmount: 2000000,
    timeToGoal: 10,
    expectedReturn: 12,
    currentSavings: 100000
  });

  // Retirement Calculator
  const [retirementInputs, setRetirementInputs] = useState({
    currentAge: 30,
    retirementAge: 60,
    currentExpenses: 50000,
    inflationRate: 6,
    expectedReturn: 12,
    existingCorpus: 500000
  });

  const calculateHLV = () => {
    const { currentAge, retirementAge, currentIncome, incomeGrowthRate, discountRate, existingInsurance } = hlvInputs;
    const workingYears = retirementAge - currentAge;
    
    let totalPV = 0;
    for (let year = 1; year <= workingYears; year++) {
      const futureIncome = currentIncome * Math.pow(1 + incomeGrowthRate / 100, year);
      const presentValue = futureIncome / Math.pow(1 + discountRate / 100, year);
      totalPV += presentValue;
    }
    
    const insuranceNeeded = Math.max(0, totalPV - existingInsurance);
    
    setCalculatorResults([{
      type: 'HLV',
      result: insuranceNeeded,
      details: {
        totalPV,
        existingInsurance,
        workingYears
      }
    }]);
  };

  const calculateEMI = () => {
    const { loanAmount, interestRate, tenure } = emiInputs;
    const monthlyRate = interestRate / 100 / 12;
    const totalMonths = tenure * 12;
    
    const emi = (loanAmount * monthlyRate * Math.pow(1 + monthlyRate, totalMonths)) / 
                (Math.pow(1 + monthlyRate, totalMonths) - 1);
    
    const totalAmount = emi * totalMonths;
    const totalInterest = totalAmount - loanAmount;
    
    setCalculatorResults([{
      type: 'EMI',
      result: emi,
      details: {
        totalAmount,
        totalInterest,
        loanAmount
      }
    }]);
  };

  const calculateGoal = () => {
    const { goalAmount, timeToGoal, expectedReturn, currentSavings } = goalInputs;
    const monthlyRate = expectedReturn / 100 / 12;
    const totalMonths = timeToGoal * 12;
    
    const futureValueOfCurrentSavings = currentSavings * Math.pow(1 + expectedReturn / 100, timeToGoal);
    const remainingAmount = goalAmount - futureValueOfCurrentSavings;
    
    const monthlySIP = remainingAmount > 0 ? 
      (remainingAmount * monthlyRate) / (Math.pow(1 + monthlyRate, totalMonths) - 1) : 0;
    
    setCalculatorResults([{
      type: 'Goal',
      result: monthlySIP,
      details: {
        goalAmount,
        futureValueOfCurrentSavings,
        remainingAmount,
        timeToGoal
      }
    }]);
  };

  const calculateRetirement = () => {
    const { currentAge, retirementAge, currentExpenses, inflationRate, expectedReturn, existingCorpus } = retirementInputs;
    const yearsToRetirement = retirementAge - currentAge;
    
    const futureExpenses = currentExpenses * 12 * Math.pow(1 + inflationRate / 100, yearsToRetirement);
    const requiredCorpus = futureExpenses * 25; // 25x annual expenses rule
    
    const futureValueOfExisting = existingCorpus * Math.pow(1 + expectedReturn / 100, yearsToRetirement);
    const additionalRequired = Math.max(0, requiredCorpus - futureValueOfExisting);
    
    const monthlyRate = expectedReturn / 100 / 12;
    const totalMonths = yearsToRetirement * 12;
    const monthlySIP = additionalRequired > 0 ?
      (additionalRequired * monthlyRate) / (Math.pow(1 + monthlyRate, totalMonths) - 1) : 0;
    
    setCalculatorResults([{
      type: 'Retirement',
      result: monthlySIP,
      details: {
        requiredCorpus,
        futureValueOfExisting,
        additionalRequired,
        yearsToRetirement
      }
    }]);
  };

  const tools = [
    {
      id: 'hlv',
      title: 'Human Life Value Calculator',
      description: 'Calculate the insurance coverage needed to protect your family\'s financial future.',
      icon: <HeartIcon className="h-8 w-8" />,
      color: 'from-red-500 to-pink-500',
      bgColor: 'from-red-50 to-pink-50 dark:from-red-900/20 dark:to-pink-900/20'
    },
    {
      id: 'emi',
      title: 'EMI Calculator',
      description: 'Calculate your loan EMI and understand the total interest payable.',
      icon: <HomeIcon className="h-8 w-8" />,
      color: 'from-blue-500 to-indigo-500',
      bgColor: 'from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20'
    },
    {
      id: 'goal',
      title: 'Goal Planning Calculator',
      description: 'Plan your financial goals and calculate the required monthly investment.',
      icon: <AcademicCapIcon className="h-8 w-8" />,
      color: 'from-green-500 to-emerald-500',
      bgColor: 'from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20'
    },
    {
      id: 'retirement',
      title: 'Retirement Calculator',
      description: 'Calculate how much you need to save for a comfortable retirement.',
      icon: <ClockIcon className="h-8 w-8" />,
      color: 'from-purple-500 to-violet-500',
      bgColor: 'from-purple-50 to-violet-50 dark:from-purple-900/20 dark:to-violet-900/20'
    }
  ];

  const renderCalculatorForm = () => {
    switch (activeCalculator) {
      case 'hlv':
        return (
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Human Life Value Calculator</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Current Age</label>
                <input
                  type="number"
                  value={hlvInputs.currentAge}
                  onChange={(e) => setHlvInputs({...hlvInputs, currentAge: Number(e.target.value)})}
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Retirement Age</label>
                <input
                  type="number"
                  value={hlvInputs.retirementAge}
                  onChange={(e) => setHlvInputs({...hlvInputs, retirementAge: Number(e.target.value)})}
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Current Annual Income (₹)</label>
                <input
                  type="number"
                  value={hlvInputs.currentIncome}
                  onChange={(e) => setHlvInputs({...hlvInputs, currentIncome: Number(e.target.value)})}
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Income Growth Rate (%)</label>
                <input
                  type="number"
                  step="0.1"
                  value={hlvInputs.incomeGrowthRate}
                  onChange={(e) => setHlvInputs({...hlvInputs, incomeGrowthRate: Number(e.target.value)})}
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Discount Rate (%)</label>
                <input
                  type="number"
                  step="0.1"
                  value={hlvInputs.discountRate}
                  onChange={(e) => setHlvInputs({...hlvInputs, discountRate: Number(e.target.value)})}
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Existing Insurance (₹)</label>
                <input
                  type="number"
                  value={hlvInputs.existingInsurance}
                  onChange={(e) => setHlvInputs({...hlvInputs, existingInsurance: Number(e.target.value)})}
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                />
              </div>
            </div>
            <button
              onClick={calculateHLV}
              className="w-full px-6 py-3 bg-gradient-to-r from-red-500 to-pink-500 text-white font-semibold rounded-lg hover:from-red-600 hover:to-pink-600 transition-all duration-200"
            >
              Calculate Human Life Value
            </button>
          </div>
        );

      case 'emi':
        return (
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">EMI Calculator</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Loan Amount (₹)</label>
                <input
                  type="number"
                  value={emiInputs.loanAmount}
                  onChange={(e) => setEmiInputs({...emiInputs, loanAmount: Number(e.target.value)})}
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Interest Rate (% p.a.)</label>
                <input
                  type="number"
                  step="0.1"
                  value={emiInputs.interestRate}
                  onChange={(e) => setEmiInputs({...emiInputs, interestRate: Number(e.target.value)})}
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Tenure (Years)</label>
                <input
                  type="number"
                  value={emiInputs.tenure}
                  onChange={(e) => setEmiInputs({...emiInputs, tenure: Number(e.target.value)})}
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                />
              </div>
            </div>
            <button
              onClick={calculateEMI}
              className="w-full px-6 py-3 bg-gradient-to-r from-blue-500 to-indigo-500 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-indigo-600 transition-all duration-200"
            >
              Calculate EMI
            </button>
          </div>
        );

      case 'goal':
        return (
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Goal Planning Calculator</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Goal Amount (₹)</label>
                <input
                  type="number"
                  value={goalInputs.goalAmount}
                  onChange={(e) => setGoalInputs({...goalInputs, goalAmount: Number(e.target.value)})}
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Time to Goal (Years)</label>
                <input
                  type="number"
                  value={goalInputs.timeToGoal}
                  onChange={(e) => setGoalInputs({...goalInputs, timeToGoal: Number(e.target.value)})}
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Expected Return (% p.a.)</label>
                <input
                  type="number"
                  step="0.1"
                  value={goalInputs.expectedReturn}
                  onChange={(e) => setGoalInputs({...goalInputs, expectedReturn: Number(e.target.value)})}
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Current Savings (₹)</label>
                <input
                  type="number"
                  value={goalInputs.currentSavings}
                  onChange={(e) => setGoalInputs({...goalInputs, currentSavings: Number(e.target.value)})}
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                />
              </div>
            </div>
            <button
              onClick={calculateGoal}
              className="w-full px-6 py-3 bg-gradient-to-r from-green-500 to-emerald-500 text-white font-semibold rounded-lg hover:from-green-600 hover:to-emerald-600 transition-all duration-200"
            >
              Calculate Required SIP
            </button>
          </div>
        );

      case 'retirement':
        return (
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Retirement Calculator</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Current Age</label>
                <input
                  type="number"
                  value={retirementInputs.currentAge}
                  onChange={(e) => setRetirementInputs({...retirementInputs, currentAge: Number(e.target.value)})}
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Retirement Age</label>
                <input
                  type="number"
                  value={retirementInputs.retirementAge}
                  onChange={(e) => setRetirementInputs({...retirementInputs, retirementAge: Number(e.target.value)})}
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Current Monthly Expenses (₹)</label>
                <input
                  type="number"
                  value={retirementInputs.currentExpenses}
                  onChange={(e) => setRetirementInputs({...retirementInputs, currentExpenses: Number(e.target.value)})}
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Inflation Rate (%)</label>
                <input
                  type="number"
                  step="0.1"
                  value={retirementInputs.inflationRate}
                  onChange={(e) => setRetirementInputs({...retirementInputs, inflationRate: Number(e.target.value)})}
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Expected Return (%)</label>
                <input
                  type="number"
                  step="0.1"
                  value={retirementInputs.expectedReturn}
                  onChange={(e) => setRetirementInputs({...retirementInputs, expectedReturn: Number(e.target.value)})}
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Existing Retirement Corpus (₹)</label>
                <input
                  type="number"
                  value={retirementInputs.existingCorpus}
                  onChange={(e) => setRetirementInputs({...retirementInputs, existingCorpus: Number(e.target.value)})}
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                />
              </div>
            </div>
            <button
              onClick={calculateRetirement}
              className="w-full px-6 py-3 bg-gradient-to-r from-purple-500 to-violet-500 text-white font-semibold rounded-lg hover:from-purple-600 hover:to-violet-600 transition-all duration-200"
            >
              Calculate Retirement SIP
            </button>
          </div>
        );

      default:
        return null;
    }
  };

  const renderResults = () => {
    if (calculatorResults.length === 0) return null;

    const result = calculatorResults[0];

    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mt-8 bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-xl p-6 border border-green-200 dark:border-green-800"
      >
        <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Calculation Results</h4>
        
        {result.type === 'HLV' && (
          <div className="space-y-3">
            <div className="text-2xl font-bold text-green-600 dark:text-green-400">
              Additional Insurance Needed: ₹{result.result.toLocaleString()}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
              <div>
                <span className="text-gray-600 dark:text-gray-400">Total Present Value:</span>
                <div className="font-semibold">₹{result.details.totalPV.toLocaleString()}</div>
              </div>
              <div>
                <span className="text-gray-600 dark:text-gray-400">Existing Insurance:</span>
                <div className="font-semibold">₹{result.details.existingInsurance.toLocaleString()}</div>
              </div>
              <div>
                <span className="text-gray-600 dark:text-gray-400">Working Years:</span>
                <div className="font-semibold">{result.details.workingYears} years</div>
              </div>
            </div>
          </div>
        )}

        {result.type === 'EMI' && (
          <div className="space-y-3">
            <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">
              Monthly EMI: ₹{result.result.toLocaleString()}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
              <div>
                <span className="text-gray-600 dark:text-gray-400">Loan Amount:</span>
                <div className="font-semibold">₹{result.details.loanAmount.toLocaleString()}</div>
              </div>
              <div>
                <span className="text-gray-600 dark:text-gray-400">Total Interest:</span>
                <div className="font-semibold">₹{result.details.totalInterest.toLocaleString()}</div>
              </div>
              <div>
                <span className="text-gray-600 dark:text-gray-400">Total Amount:</span>
                <div className="font-semibold">₹{result.details.totalAmount.toLocaleString()}</div>
              </div>
            </div>
          </div>
        )}

        {result.type === 'Goal' && (
          <div className="space-y-3">
            <div className="text-2xl font-bold text-green-600 dark:text-green-400">
              Required Monthly SIP: ₹{result.result.toLocaleString()}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
              <div>
                <span className="text-gray-600 dark:text-gray-400">Goal Amount:</span>
                <div className="font-semibold">₹{result.details.goalAmount.toLocaleString()}</div>
              </div>
              <div>
                <span className="text-gray-600 dark:text-gray-400">Future Value of Current Savings:</span>
                <div className="font-semibold">₹{result.details.futureValueOfCurrentSavings.toLocaleString()}</div>
              </div>
              <div>
                <span className="text-gray-600 dark:text-gray-400">Time to Goal:</span>
                <div className="font-semibold">{result.details.timeToGoal} years</div>
              </div>
            </div>
          </div>
        )}

        {result.type === 'Retirement' && (
          <div className="space-y-3">
            <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">
              Required Monthly SIP: ₹{result.result.toLocaleString()}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
              <div>
                <span className="text-gray-600 dark:text-gray-400">Required Corpus:</span>
                <div className="font-semibold">₹{result.details.requiredCorpus.toLocaleString()}</div>
              </div>
              <div>
                <span className="text-gray-600 dark:text-gray-400">Future Value of Existing:</span>
                <div className="font-semibold">₹{result.details.futureValueOfExisting.toLocaleString()}</div>
              </div>
              <div>
                <span className="text-gray-600 dark:text-gray-400">Years to Retirement:</span>
                <div className="font-semibold">{result.details.yearsToRetirement} years</div>
              </div>
            </div>
          </div>
        )}
      </motion.div>
    );
  };

  return (
    <div className="min-h-screen pt-16 bg-gray-50 dark:bg-gray-900">
      {/* Hero Section */}
      <section className="py-12 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 dark:from-gray-800 dark:via-gray-800 dark:to-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 dark:text-white mb-4">
              Financial <span className="text-indigo-600 dark:text-indigo-400">Tools</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Comprehensive financial calculators to help you plan your investments, loans, insurance, and retirement goals effectively.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Tools Grid */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {tools.map((tool, index) => (
              <motion.div
                key={tool.id}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`bg-gradient-to-br ${tool.bgColor} rounded-xl p-6 cursor-pointer transition-all duration-300 hover:shadow-lg border border-gray-200 dark:border-gray-700 ${
                  activeCalculator === tool.id ? 'ring-2 ring-indigo-500 shadow-lg' : ''
                }`}
                onClick={() => setActiveCalculator(activeCalculator === tool.id ? null : tool.id)}
              >
                <div className={`flex items-center justify-center w-12 h-12 bg-gradient-to-br ${tool.color} rounded-xl mb-4`}>
                  <div className="text-white">
                    {tool.icon}
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  {tool.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  {tool.description}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Calculator Form */}
          {activeCalculator && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8"
            >
              {renderCalculatorForm()}
              {renderResults()}
            </motion.div>
          )}
        </div>
      </section>

      {/* Information Section */}
      <section className="py-12 bg-white dark:bg-gray-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-serif font-bold text-gray-900 dark:text-white mb-6">
              Important Disclaimer
            </h2>
            <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-6">
              <p className="text-sm text-gray-700 dark:text-gray-300">
                These calculators provide estimates based on the inputs provided and should be used for indicative purposes only. 
                Actual results may vary based on market conditions, policy terms, and other factors. 
                Please consult with a qualified financial advisor for personalized advice.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default FinancialTools;

