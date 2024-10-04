// components/AuthProvider.tsx
'use client'

import React, { createContext, useContext, ReactNode, useState, useEffect, useCallback } from 'react'
import auth from '@/lib/auth'
import { useRouter } from 'next/navigation'
import axios from 'axios'

interface UserProfile {
  // Define the structure of your user profile here
  id: string;
  email: string;
  username: string;
  // Add other fields as necessary
}

interface AuthContextType {
  isAuthenticated: boolean;
  isLoading: boolean;
  userProfile: UserProfile | null;
  register: (email: string, password: string, username: string) => Promise<void>;
  login: (email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userProfile, setUserProfile] = useState<UserProfile | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();

  const fetchUserProfile = useCallback(async () => {
    const token = auth.getToken();
    
    if (token) {
      try {
        const response = await axios.get(`${process.env.NEXT_PUBLIC_APP_BASE_URL}/api/user`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        // Save user profile to localStorage
        localStorage.setItem('userProfile', JSON.stringify(response.data));
        setUserProfile(response.data);
      } catch (error) {
        console.error('Error fetching user profile:', error);
        // Attempt to refresh token if there's an error
        await refreshToken();
      }
    }
  }, []);

  const refreshToken = useCallback(async () => {
    const refreshToken = auth.getToken();
    if (refreshToken) {
      try {
        const response = await axios.post(`${process.env.NEXT_PUBLIC_APP_BASE_URL}/api/auth/refresh`, {
          refresh_token: refreshToken,
        });

        const { auth_token } = response.data;
        await auth.saveToken(auth_token);
        await fetchUserProfile();
      } catch (error) {
        console.error('Error refreshing token:', error);
        logout(); // Log out if refreshing fails
      }
    }
  }, []);

  const checkAuth = useCallback(() => {
    const authStatus = auth.isAuthenticated()
    setIsAuthenticated(authStatus)
    setIsLoading(false)
  }, [])

  useEffect(() => {
    checkAuth()
  }, [checkAuth])

  const login = useCallback(async (email: string, password: string) => {
    try {
      const response = await axios.post(`${process.env.NEXT_PUBLIC_APP_BASE_URL}/api/auth/login`, {
        email,
        password,
      });

      const { auth_token } = response.data.data;
      console.log("auth_token : ",auth_token);
      
      auth.saveToken(auth_token)
      setUserProfile(response.data.user);
      setIsAuthenticated(true);
    } catch (error) {
      console.error('Login error:', error);
      throw error; // Rethrow the error for further handling
    }
  }, [fetchUserProfile]);

  const register = useCallback(async (email: string, password: string, username: string) => {
    try {
      const response = await axios.post(`${process.env.NEXT_PUBLIC_APP_BASE_URL}/api/auth/register`, {
        email,
        username,
        password,
        name:""
      });

      const { auth_token } = response.data.data;
      auth.saveToken(auth_token);
      setUserProfile(response.data.user);
      setIsAuthenticated(true);
    } catch (error) {
      console.error('Registration error:', error);
      throw error; // Rethrow the error for further handling
    }
  }, [fetchUserProfile]);

  const logout = useCallback(async () => {
    const token = localStorage.getItem("token")
    if (token) {
      try {
        // Send logout request with the access token
        await axios.post(`${process.env.NEXT_PUBLIC_APP_BASE_URL}/api/auth/logout`, {}, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        await auth.logout();
    setUserProfile(null);
    setIsAuthenticated(false);
    localStorage.removeItem('userProfile'); // Remove profile from localStorage
    router.push('/login');
      } catch (error) {
        console.error('Error during logout:', error);
      }
    } 
    
  }, [router]);

  return (
    <AuthContext.Provider value={{ isAuthenticated, isLoading, userProfile, login, logout, register }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
