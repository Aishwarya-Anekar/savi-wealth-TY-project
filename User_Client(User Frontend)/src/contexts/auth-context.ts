import { createContext } from 'react';

export interface User {
  id: number;
  fullName: string;
  email: string;
  role: 'user' | 'admin';
}

export interface AuthContextType {
  user: User | null;
  token: string | null;
  login: (token: string, user: User) => void;
  logout: () => void;
  isAuthenticated: boolean;
  isAdmin: boolean;
  isUser: boolean;
}

export const AuthContext = createContext<AuthContextType | undefined>(undefined);
