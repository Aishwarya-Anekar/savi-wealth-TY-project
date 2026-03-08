import React, { useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
  RadarChart,
  Radar,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  AreaChart,
  Area,
  Legend,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
} from "recharts";

import jsPDF from "jspdf";
import html2canvas from "html2canvas";

const COLORS = ["#0057A3", "#29A745", "#003f73", "#80d0a2"];

// =======================
// All Risk Analyzer Questions
// =======================
const questions = [
  {
    id: 1,
    text: "What is your knowledge about investments?",
    options: [
      { text: "Strongly agree", score: 3 },
      { text: "Somewhat agree", score: 2 },
      { text: "Disagree", score: 1 },
    ],
  },
  {
    id: 2,
    text: "How stable is your income?",
    options: [
      { text: "Reasonably stable", score: 3 },
      { text: "Somewhat stable", score: 2 },
      { text: "Unstable", score: 1 },
    ],
  },
  {
    id: 3,
    text: "What is your primary investment objective?",
    options: [
      { text: "Protect value", score: 1 },
      { text: "Balance risk/return", score: 2 },
      { text: "Maximise long-term returns", score: 3 },
    ],
  },
  {
    id: 4,
    text: "How would you describe your current savings?",
    options: [
      { text: "Not much savings", score: 1 },
      { text: "Some savings, not enough", score: 2 },
      { text: "Good savings to meet goals", score: 3 },
    ],
  },
  {
    id: 5,
    text: "Are you comfortable with market fluctuations?",
    options: [
      { text: "Agree", score: 3 },
      { text: "Somewhat agree", score: 2 },
      { text: "Disagree", score: 1 },
    ],
  },
  {
    id: 6,
    text: "What risk/return range is acceptable to you?",
    options: [
      { text: "6%, 8%, -1%", score: 1 },
      { text: "8%, 12%, -4%", score: 2 },
      { text: "10%, 15%, -7%", score: 3 },
      { text: "12%, 25%, -18%", score: 4 },
    ],
  },
  {
    id: 7,
    text: "Do you have ongoing loans/EMIs?",
    options: [
      { text: "No loans", score: 3 },
      { text: "Comfortable with EMI", score: 2 },
      { text: "Little uncomfortable", score: 1 },
    ],
  },
  {
    id: 8,
    text: "How comfortable are you with equity volatility?",
    options: [
      { text: "Not comfortable", score: 1 },
      { text: "Don’t mind", score: 2 },
      { text: "Comfortable", score: 3 },
    ],
  },
  {
    id: 9,
    text: "What is your intended investment period?",
    options: [
      { text: "0–2 years", score: 1 },
      { text: "2–5 years", score: 2 },
      { text: "5–10 years", score: 3 },
      { text: "10+ years", score: 4 },
    ],
  },
  {
    id: 10,
    text: "How do you handle financial decision-making?",
    options: [
      { text: "Prefer safety & guarantees", score: 1 },
      { text: "Balance between safety & growth", score: 2 },
      { text: "Take calculated risks for higher growth", score: 3 },
    ],
  },
];

// =======================
// Main Component
// =======================
type ResultType = {
  totalScore: number;
  category: string;
  persona: string;
  schemes: string;
  analysis: string;
  recommendations: {
    short: string[];
    mid: string[];
    long: string[];
  };
  chartData: { question: string; score: number }[];
  radarData: { trait: string; value: number }[];
  areaData: { name: string; return: number }[];
  allocationData: { asset: string; value: number }[];
  comparisonData: {
    trait: string;
    Conservative: number;
    Moderate: number;
    Aggressive: number;
    You: number;
  }[];
  horizonData: { period: string; growth: number }[];
};

const RiskAnalyzer = () => {
  const [answers, setAnswers] = useState<{ [key: number]: number }>({});
  const [currentQ, setCurrentQ] = useState(0);

  const [result, setResult] = useState<ResultType | null>(null);

  const handleSelect = (qId: number, score: number) =>
    setAnswers({ ...answers, [qId]: score });

  const calculateResult = () => {
    const totalScore = Object.values(answers).reduce((a, b) => a + b, 0);
    let category = "",
      persona = "",
      schemes = "",
      analysis = "",
      recommendations: {
        short: string[];
        mid: string[];
        long: string[];
      } = { short: [], mid: [], long: [] };

    // Risk categories based on score
    if (totalScore <= 14) {
      category = "Conservative (Low Risk)";
      persona = "Safe Planner";
      schemes = "FDs, Government Bonds, SIPs in Debt Funds.";
      analysis =
        "Your profile suggests a conservative outlook. You prioritise capital protection over aggressive growth, with a preference for stability, fixed income, and predictable returns.";
      recommendations = {
        short: [
          "Keep 20-30% of capital in liquid funds or savings accounts.",
          "Invest in short-duration debt instruments for liquidity.",
        ],
        mid: [
          "Government Bonds and PPFs for medium-term security.",
          "Balanced Debt SIPs for predictable returns.",
        ],
        long: [
          "Retirement-focused annuity plans.",
          "Low-volatility index funds only in small allocations.",
        ],
      };
    } else if (totalScore <= 21) {
      category = "Moderate (Balanced)";
      persona = "Balanced Planner";
      schemes = "Hybrid Funds, Blue-chip SIPs, Balanced Advantage Funds.";
      analysis =
        "Your responses show a balanced risk appetite. You are comfortable with moderate volatility and prefer a combination of security and equity-driven growth.";
      recommendations = {
        short: [
          "Maintain 15-20% liquidity in cash equivalents.",
          "Ultra-short debt funds for stability.",
        ],
        mid: [
          "Hybrid Mutual Funds for diversification.",
          "SIPs in Blue-chip equity funds for steady returns.",
        ],
        long: [
          "Balanced Advantage or Flexi-cap funds for adaptive allocation.",
          "Mix of equity + debt allocation aligned with life goals.",
        ],
      };
    } else {
      category = "Aggressive (High Risk)";
      persona = "Growth Seeker";
      schemes =
        "Equity SIPs, Small-Cap Funds, International ETFs, Digital Assets.";
      analysis =
        "You display a high risk appetite with strong focus on long-term wealth creation. You are comfortable with volatility and inclined towards equities and high-growth assets.";
      recommendations = {
        short: [
          "Maintain 10-15% capital in liquid assets for emergencies.",
          "High-yield savings or ultra-short debt for stability.",
        ],
        mid: [
          "Small-cap and Thematic Equity SIPs.",
          "International ETFs for global diversification.",
        ],
        long: [
          "Aggressive Equity SIPs with 60-70% allocation.",
          "Allocate 5-10% towards regulated Digital Assets (if permissible).",
        ],
      };
    }

    // Charts data
    const chartData = questions.map((q) => ({
      question: `Q${q.id}`,
      score: answers[q.id] || 0,
    }));

    const radarData = [
      { trait: "Knowledge", value: answers[1] || 0 },
      { trait: "Income Stability", value: answers[2] || 0 },
      { trait: "Objective", value: answers[3] || 0 },
      { trait: "Savings", value: answers[4] || 0 },
      { trait: "Volatility Comfort", value: answers[8] || 0 },
    ];

    const areaData = [
      { name: "Low Risk", return: 4 },
      { name: "Balanced", return: 7 },
      { name: "Aggressive", return: 12 },
    ];

    const allocationData = [
      {
        asset: "Equity",
        value: category.includes("Aggressive")
          ? 60
          : category.includes("Moderate")
          ? 40
          : 20,
      },
      {
        asset: "Debt/Bonds",
        value: category.includes("Conservative")
          ? 50
          : category.includes("Moderate")
          ? 40
          : 20,
      },
      {
        asset: "Mutual Funds",
        value: category.includes("Moderate")
          ? 20
          : category.includes("Aggressive")
          ? 15
          : 10,
      },
      {
        asset: "Cash/Liquid",
        value: category.includes("Conservative") ? 20 : 10,
      },
    ];

    const comparisonData = [
      {
        trait: "Knowledge",
        Conservative: 1,
        Moderate: 2,
        Aggressive: 3,
        You: answers[1] || 0,
      },
      {
        trait: "Stability",
        Conservative: 3,
        Moderate: 2,
        Aggressive: 1,
        You: answers[2] || 0,
      },
      {
        trait: "Objective",
        Conservative: 1,
        Moderate: 2,
        Aggressive: 3,
        You: answers[3] || 0,
      },
      {
        trait: "Volatility",
        Conservative: 1,
        Moderate: 2,
        Aggressive: 3,
        You: answers[8] || 0,
      },
    ];

    const horizonData = [
      { period: "0-2 Years", growth: category.includes("Aggressive") ? 4 : 2 },
      { period: "2-5 Years", growth: category.includes("Moderate") ? 6 : 3 },
      {
        period: "5-10 Years",
        growth: category.includes("Aggressive") ? 12 : 7,
      },
      {
        period: "10+ Years",
        growth: category.includes("Aggressive") ? 18 : 10,
      },
    ];

    setResult({
      totalScore,
      category,
      persona,
      schemes,
      analysis,
      recommendations,
      chartData,
      radarData,
      areaData,
      allocationData,
      comparisonData,
      horizonData,
    });
  };

  // =======================
  // PDF Download
  // =======================
  const downloadPDF = () => {
    const input = document.getElementById("report-section");
    if (!input) return;
    html2canvas(input).then((canvas) => {
      const pdf = new jsPDF("p", "mm", "a4");
      const pageWidth = pdf.internal.pageSize.getWidth();
      const pageHeight = pdf.internal.pageSize.getHeight();

      const imgData = canvas.toDataURL("image/png");

      let imgWidth = pageWidth;
      let imgHeight = (canvas.height * imgWidth) / canvas.width;

      if (imgHeight > pageHeight - 30) {
        imgHeight = pageHeight - 30;
        imgWidth = (canvas.width * imgHeight) / canvas.height;
      }

      pdf.setFont("helvetica", "bold");
      pdf.setFontSize(15);
      pdf.text(
        "SaviWealth Financial Risk Report",
        pageWidth / 2,
        15,
        { align: "center" }
      );

      const x = (pageWidth - imgWidth) / 2;
      pdf.addImage(imgData, "PNG", x, 25, imgWidth, imgHeight);

      pdf.save("SaviWealth_Financial_Report.pdf");
    });
  };

  // =======================
  // Render
  // =======================
  return (
    <div className="max-w-6xl mx-auto p-6 bg-white dark:bg-gray-900 rounded-xl shadow-md">

      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-blue-900 dark:text-white">
  Financial Risk Analyzer
</h1>
      </div>

      {!result ? (
       <div>
  {/* Question Stepper */}
  <p className="font-semibold mb-4 text-gray-800 dark:text-gray-100">
    {questions[currentQ].text}
  </p>

  <div className="space-y-2">
    {questions[currentQ].options.map((opt, i) => (
      <label
        key={i}
        className="flex items-center border border-gray-300 dark:border-gray-600 
                   p-3 rounded-lg cursor-pointer 
                   bg-white dark:bg-gray-800 
                   text-gray-800 dark:text-gray-200 
                   hover:bg-blue-50 dark:hover:bg-gray-700 
                   transition-colors duration-200"
      >
        <input
          type="radio"
          name={`q-${questions[currentQ].id}`}
          value={opt.score}
          checked={answers[questions[currentQ].id] === opt.score}
          onChange={() => handleSelect(questions[currentQ].id, opt.score)}
          className="mr-3 accent-blue-600 dark:accent-blue-400"
        />
        {opt.text}
      </label>
    ))}
  </div>

  <div className="flex justify-between mt-6">
    <button
      onClick={() => setCurrentQ(currentQ - 1)}
      disabled={currentQ === 0}
      className="px-5 py-2 rounded-lg font-medium
                 bg-gray-500 hover:bg-gray-600 
                 text-white disabled:opacity-50 disabled:cursor-not-allowed
                 transition-colors duration-200"
    >
      Previous
    </button>
    {currentQ === questions.length - 1 ? (
      <button
        onClick={calculateResult}
        className="px-5 py-2 rounded-lg font-medium
                   bg-green-600 hover:bg-green-700 
                   text-white transition-colors duration-200"
      >
        Submit
      </button>
    ) : (
      <button
        onClick={() => setCurrentQ(currentQ + 1)}
        className="px-5 py-2 rounded-lg font-medium
                   bg-blue-600 hover:bg-blue-700 
                   text-white transition-colors duration-200"
      >
        Next
      </button>
    )}
  </div>
</div>
) : (
<div
  id="report-section"
  className="space-y-12 p-8 rounded-xl shadow-lg
             bg-white dark:bg-gray-900"
>
  {/* Executive Summary */}
  <div className="border-b pb-4 border-gray-200 dark:border-gray-700">
    <h1 className="text-2xl font-bold text-blue-900 dark:text-blue-400">
      Executive Summary
    </h1>
    <p className="mt-2 leading-relaxed text-gray-700 dark:text-gray-300">
      Based on your responses, we have analyzed your investment profile
      across knowledge, stability, objectives, and risk appetite. This
      report provides a professional assessment of your financial
      persona, risk capacity, and tailored investment strategies aligned
      with global best practices in wealth management.
    </p>
  </div>

       {/* KPI Highlights */}
<div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
  <div className="p-6 bg-gray-50 dark:bg-gray-800 shadow rounded">
    <h3 className="text-sm text-gray-600 dark:text-gray-400">Total Score</h3>
    <p className="text-3xl font-bold text-blue-900 dark:text-blue-400">
      {result.totalScore}
    </p>
  </div>
  <div className="p-6 bg-gray-50 dark:bg-gray-800 shadow rounded">
    <h3 className="text-sm text-gray-600 dark:text-gray-400">Risk Category</h3>
    <p className="text-lg font-semibold text-green-700 dark:text-green-400">
      {result.category}
    </p>
  </div>
  <div className="p-6 bg-gray-50 dark:bg-gray-800 shadow rounded">
    <h3 className="text-sm text-gray-600 dark:text-gray-400">Investor Persona</h3>
    <p className="text-lg font-semibold text-blue-700 dark:text-blue-400">
      {result.persona}
    </p>
  </div>
  <div className="p-6 bg-gray-50 dark:bg-gray-800 shadow rounded">
    <h3 className="text-sm text-gray-600 dark:text-gray-400">Suggested Products</h3>
    <p className="text-lg font-semibold text-purple-700 dark:text-purple-400">
      {result.schemes}
    </p>
  </div>
</div>

{/* Charts Section */}
<h2 className="text-2xl font-bold text-blue-900 dark:text-blue-400 mt-10">
  Analytical Visualizations
</h2>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
  {/* Bar Chart */}
  <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded shadow">
    <h3 className="text-md font-semibold text-gray-700 dark:text-gray-300 mb-2">
      Question-wise Scores
    </h3>
    <ResponsiveContainer width="100%" height={250}>
      <BarChart data={result.chartData}>
        <CartesianGrid strokeDasharray="3 3" strokeOpacity={0.3} />
        <XAxis dataKey="question" stroke="#ccc" />
        <YAxis stroke="#ccc" />
        <Tooltip />
        <Bar dataKey="score" fill="#0057A3" />
      </BarChart>
    </ResponsiveContainer>
  </div>

  {/* Radar Chart */}
  <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded shadow">
    <h3 className="text-md font-semibold text-gray-700 dark:text-gray-300 mb-2">
      Risk Traits Radar
    </h3>
    <ResponsiveContainer width="100%" height={250}>
      <RadarChart data={result.radarData}>
        <PolarGrid />
        <PolarAngleAxis dataKey="trait" stroke="#ccc" />
        <PolarRadiusAxis stroke="#ccc" />
        <Radar
          name="You"
          dataKey="value"
          stroke="#29A745"
          fill="#29A745"
          fillOpacity={0.6}
        />
      </RadarChart>
    </ResponsiveContainer>
  </div>

  {/* Area Chart */}
  <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded shadow">
    <h3 className="text-md font-semibold text-gray-700 dark:text-gray-300 mb-2">
      Risk vs Return Profile
    </h3>
    <ResponsiveContainer width="100%" height={250}>
      <AreaChart data={result.areaData}>
        <CartesianGrid strokeDasharray="3 3" strokeOpacity={0.3} />
        <XAxis dataKey="name" stroke="#ccc" />
        <YAxis stroke="#ccc" />
        <Tooltip />
        <Area type="monotone" dataKey="return" stroke="#003f73" fill="#80d0a2" />
      </AreaChart>
    </ResponsiveContainer>
  </div>

  {/* Line Chart */}
  <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded shadow">
    <h3 className="text-md font-semibold text-gray-700 dark:text-gray-300 mb-2">
      Growth Horizon
    </h3>
    <ResponsiveContainer width="100%" height={250}>
      <LineChart data={result.horizonData}>
        <CartesianGrid strokeDasharray="3 3" strokeOpacity={0.3} />
        <XAxis dataKey="period" stroke="#ccc" />
        <YAxis stroke="#ccc" />
        <Tooltip />
        <Line type="monotone" dataKey="growth" stroke="#0057A3" />
      </LineChart>
    </ResponsiveContainer>
  </div>

  {/* Pie Chart */}
  <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded shadow">
    <h3 className="text-md font-semibold text-gray-700 dark:text-gray-300 mb-2">
      Suggested Asset Allocation
    </h3>
    <ResponsiveContainer width="100%" height={250}>
      <PieChart>
        <Pie
          data={result.allocationData}
          dataKey="value"
          nameKey="asset"
          cx="50%"
          cy="50%"
          outerRadius={80}
          label
        >
          {result.allocationData.map((_, i) => (
            <Cell key={i} fill={COLORS[i % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
      </PieChart>
    </ResponsiveContainer>
  </div>

  {/* Stacked Bar Chart */}
  <div className="p-4 bg-gray-50 dark:bg-gray-800 rounded shadow">
    <h3 className="text-md font-semibold text-gray-700 dark:text-gray-300 mb-2">
      Persona Benchmark Comparison
    </h3>
    <ResponsiveContainer width="100%" height={250}>
      <BarChart data={result.comparisonData}>
        <CartesianGrid strokeDasharray="3 3" strokeOpacity={0.3} />
        <XAxis dataKey="trait" stroke="#ccc" />
        <YAxis stroke="#ccc" />
        <Tooltip />
        <Legend />
        <Bar dataKey="Conservative" stackId="a" fill="#8884d8" />
        <Bar dataKey="Moderate" stackId="a" fill="#82ca9d" />
        <Bar dataKey="Aggressive" stackId="a" fill="#ffc658" />
        <Bar dataKey="You" fill="#ff0000" />
      </BarChart>
    </ResponsiveContainer>
  </div>
</div>

</div>
)}
{result && (
  <button
    onClick={downloadPDF}
    className="mt-6 px-6 py-2 bg-purple-700 text-white rounded"
  >
    Download PDF Report
  </button>
)}
    </div>
  );
};

export default RiskAnalyzer;


