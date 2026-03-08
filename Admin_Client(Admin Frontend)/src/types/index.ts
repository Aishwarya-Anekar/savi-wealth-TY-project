export interface User {
  id: string;
  name: string;
  email: string;
  phone: string;
  status: 'active' | 'inactive' | 'suspended';
  kycStatus: 'verified' | 'pending' | 'rejected';
  joinDate: string;
  aum: number;
  investmentCount: number;
}

export interface Investment {
  id: string;
  name: string;
  riskLevel: 'low' | 'medium' | 'high';
  expectedReturn: number;
  status: 'active' | 'inactive';
  minInvestment: number;
  investorCount: number;
  totalInvested: number;
}

export interface Portfolio {
  id: string;
  userId: string;
  userName: string;
  stocks: number;
  mutualFunds: number;
  bonds: number;
  others: number;
  totalValue: number;
  monthlyReturn: number;
}

export interface Transaction {
  id: string;
  userId: string;
  userName: string;
  type: 'buy' | 'sell' | 'withdrawal' | 'deposit';
  amount: number;
  date: string;
  status: 'success' | 'pending' | 'failed';
}

export interface Advisor {
  id: string;
  name: string;
  email: string;
  phone: string;
  expertise: string[];
  assignedClients: number;
  status: 'active' | 'inactive';
  joinDate: string;
  rating: number;
}

export interface DashboardMetrics {
  totalUsers: number;
  assetsUnderManagement: number;
  totalInvestments: number;
  monthlyGrowth: number;
  activeInvestors: number;
  pendingTransactions: number;
  successfulTransactions: number;
  failedTransactions: number;
}

export interface Notification {
  id: string;
  title: string;
  message: string;
  type: 'info' | 'success' | 'warning' | 'danger';
  read: boolean;
  createdAt: string;
}
