// User and Authentication Types
export interface User {
  id: string;
  name: string;
  fullName?: string;
  email: string;
  phone?: string;
  role: 'user' | 'admin';
  status?: 'active' | 'inactive' | 'suspended';
  createdAt?: string;
  avatar?: string;
}

// Investment Types
export interface Investment {
  id: string;
  name: string;
  type: string;
  category?: string;
  description?: string;
  minimumAmount?: number;
  expectedReturn?: number;
  riskLevel?: 'low' | 'medium' | 'high';
  createdAt?: string;
  status?: 'active' | 'inactive';
}

// Portfolio Types
export interface Portfolio {
  id: string;
  userId: string;
  totalValue: number;
  investments: Investment[];
  createdAt?: string;
  updatedAt?: string;
}

// Transaction Types
export interface Transaction {
  id: string;
  userId: string;
  type: 'buy' | 'sell' | 'dividend' | 'transfer';
  amount: number;
  investmentId?: string;
  date: string;
  status?: 'pending' | 'completed' | 'failed';
  description?: string;
}

// Advisor Types
export interface Advisor {
  id: string;
  name: string;
  email?: string;
  phone?: string;
  specialization?: string;
  experience?: number;
  clients?: number;
  rating?: number;
  status?: 'active' | 'inactive';
}

// Notification Types
export interface Notification {
  id: string;
  userId: string;
  type: 'info' | 'warning' | 'success' | 'error';
  title: string;
  message: string;
  read: boolean;
  createdAt: string;
  actionUrl?: string;
}

// Financial Profile Types
export interface FinancialProfile {
  userId: string;
  monthlyIncome?: number;
  annualIncome?: number;
  expenses?: number;
  savingsRate?: number;
  investmentExperience?: 'beginner' | 'intermediate' | 'advanced';
  riskTolerance?: 'low' | 'medium' | 'high';
  investmentGoals?: string[];
}

// Behavioral Assessment Types
export interface BehavioralAssessment {
  id: string;
  userId: string;
  score: number;
  panicIndex?: number;
  riskScore?: number;
  createdAt: string;
  answers?: number[];
}

// API Response Types
export interface ApiResponse<T> {
  success: boolean;
  message?: string;
  data?: T;
  error?: string;
}

export interface LoginResponse {
  token: string;
  user: User;
}

// Chart/Analytics Types
export interface ChartDataPoint {
  label: string;
  value: number;
  [key: string]: any;
}

export interface AnalyticsData {
  totalUsers?: number;
  activeUsers?: number;
  totalInvestments?: number;
  averageReturn?: number;
  portfolioValue?: number;
  transactions?: number;
  [key: string]: any;
}
