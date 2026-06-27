import { useContext, createContext, useState } from 'react';
import * as AuthService from '../services/auth-service.js';

const AuthContext = createContext();
const LS_CURRENT_USER_KEY = 'current-user';

export function AuthContextProvider({ children }) {
  const [user, setUser] = useState(
    self.localStorage.getItem(LS_CURRENT_USER_KEY) ? 
      JSON.parse(self.localStorage.getItem(LS_CURRENT_USER_KEY)) :
      undefined
  );
  const login = (user) => {
    self.localStorage.setItem(LS_CURRENT_USER_KEY, JSON.stringify(user));
    setUser(user);
  }

  const logout = () => {
    self.localStorage.removeItem(LS_CURRENT_USER_KEY);
    setUser(undefined);
  }

  const updateFavorites = async (user) => {
    const normalizedUser = user && typeof user === 'object'
      ? { ...user, favorites: Array.isArray(user.favorites) ? [...user.favorites] : [] }
      : user;

    self.localStorage.setItem(LS_CURRENT_USER_KEY, JSON.stringify(normalizedUser));
    setUser(normalizedUser);

    try {
      await AuthService.updateUser(normalizedUser);
    } catch (error) {
      console.error('Error updating user favorites:', error);
    }
  }


  return (
    <AuthContext.Provider value={{ user, login, logout, updateFavorites }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  return useContext(AuthContext);
}