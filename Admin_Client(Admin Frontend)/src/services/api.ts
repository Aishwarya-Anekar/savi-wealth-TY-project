/**
 * SaviWealth Admin API Service
 * Handles all API calls to the backend for admin dashboard
 */

const API_BASE = (import.meta as any).env?.VITE_API_BASE || "http://localhost:5000";

interface ApiOptions {
  method?: "GET" | "POST" | "PUT" | "DELETE";
  body?: any;
  token?: string;
}

async function apiCall(endpoint: string, options: ApiOptions = {}) {
  const { method = "GET", body, token } = options;

  const headers: any = {
    "Content-Type": "application/json",
  };

  if (token) {
    headers["Authorization"] = `Bearer ${token}`;
  }

  try {
    const response = await fetch(`${API_BASE}${endpoint}`, {
      method,
      headers,
      body: body ? JSON.stringify(body) : undefined,
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || "API Error");
    }

    return data;
  } catch (error) {
    console.error("API Error:", error);
    throw error;
  }
}

// ========== Authentication ==========

export async function adminLogin(email: string, password: string) {
  return apiCall("/api/auth/login", {
    method: "POST",
    body: { email, password },
  });
}

// ========== Analytics ==========

export async function getAdminAnalytics(token: string) {
  return apiCall("/api/admin/analytics", {
    token,
  });
}

// ========== Users ==========

export async function getAdminUsers(token: string, filters?: any) {
  let endpoint = "/api/admin/users";
  if (filters) {
    const params = new URLSearchParams();
    if (filters.status) params.append("status", filters.status);
    if (filters.kycStatus) params.append("kycStatus", filters.kycStatus);
    endpoint += `?${params.toString()}`;
  }

  return apiCall(endpoint, { token });
}

export async function getUserProfile(token: string, userId: string) {
  return apiCall(`/api/users/${userId}`, { token });
}

// ========== Transactions ==========

export async function getAdminTransactions(token: string) {
  return apiCall("/api/admin/transactions", { token });
}

// ========== Investments ==========

export async function getInvestments(filters?: any) {
  let endpoint = "/api/investments";
  if (filters) {
    const params = new URLSearchParams();
    if (filters.type) params.append("type", filters.type);
    if (filters.riskLevel) params.append("riskLevel", filters.riskLevel);
    endpoint += `?${params.toString()}`;
  }

  return apiCall(endpoint);
}

export async function createInvestment(token: string, data: any) {
  return apiCall("/api/admin/investments", {
    method: "POST",
    body: data,
    token,
  });
}

// ========== Portfolios ==========

export async function getUserPortfolio(token: string, userId: string) {
  return apiCall(`/api/admin/portfolios/${userId}`, { token });
}

// ========== Additional Admin APIs ==========
export async function getAdminAdvisors(token: string) {
  return apiCall("/api/admin/advisors", { token });
}

export async function getAdminNotifications(token: string) {
  return apiCall("/api/admin/notifications", { token });
}

export async function getAdminPortfolios(token: string) {
  return apiCall("/api/admin/portfolios", { token });
}

export async function getAdminReports(token: string) {
  return apiCall("/api/admin/reports", { token });
}

// ========== Export for use in components ==========
export default {
  adminLogin,
  getAdminAnalytics,
  getAdminUsers,
  getUserProfile,
  getAdminTransactions,
  getInvestments,
  createInvestment,
  getUserPortfolio,
  getAdminAdvisors,
  getAdminNotifications,
  getAdminPortfolios,
  getAdminReports,
};
