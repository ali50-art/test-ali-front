// lib/auth.ts
'use client'

import axios from 'axios';
import Cookies from 'js-cookie';

const auth = {
  saveToken: (token: string) => {
    localStorage.setItem("token",token)
    
  },

  getToken: (): string | undefined => {
    return JSON.stringify(localStorage.getItem("token"))
  },


  logout: async () => {
    localStorage.removeItem("token")
    return 1
  },

  isAuthenticated: (): boolean => {
    return !!localStorage.getItem("token");
  },
}

export default auth;