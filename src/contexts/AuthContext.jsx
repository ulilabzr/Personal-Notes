import React, { createContext, useCallback, useEffect, useMemo, useState } from "react";
import { getUserLogged, login as apiLogin, logout as apiLogout, register as apiRegister, getAccessToken } from "../utils/api";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [initializing, setInitializing] = useState(true);

  const bootstrap = useCallback(async () => {
    try {
      if (!getAccessToken()) {
        setUser(null);
      } else {
        const me = await getUserLogged();
        setUser(me);
      }
    } catch (e) {
      setUser(null);
    } finally {
      setInitializing(false);
    }
  }, []);

  useEffect(() => {
    bootstrap();
  }, [bootstrap]);

  const login = useCallback(async ({ email, password }) => {
    await apiLogin({ email, password });
    const me = await getUserLogged();
    setUser(me);
  }, []);

  const register = useCallback(async ({ name, email, password }) => {
    await apiRegister({ name, email, password });
  }, []);

  const logout = useCallback(() => {
    apiLogout();
    setUser(null);
  }, []);

  const value = useMemo(() => ({ user, initializing, login, logout, register }), [user, initializing, login, logout, register]);

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthContext;


