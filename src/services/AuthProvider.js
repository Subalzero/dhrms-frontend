import React, { useContext, useState, useEffect, createContext } from "react";

import LoadingScreen from "./LoadingScreen";

const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

export default function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const login = async (email, password) => {
    setCurrentUser({ name: "Lord" });
    return true;
  };

  const logout = async () => {
    setCurrentUser(null);
    return true;
  };

  useEffect(() => {
    setCurrentUser({ name: "Lord" });
    setLoading(false);
  }, []);

  const value = {
    currentUser,
    login,
    logout,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
      {loading && <LoadingScreen />}
    </AuthContext.Provider>
  );
}
