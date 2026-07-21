import {
  createContext,
  useEffect,
  useState,
  ReactNode,
} from "react";

import * as authService from "../services/authService";
import type { User } from "../services/authService";

interface AuthContextType {
  user: User | null;
  loading: boolean;

  login: (
    email: string,
    password: string
  ) => Promise<void>;

  logout: () => void;
}

export const AuthContext = createContext<AuthContextType>(
  {} as AuthContextType
);

interface Props {
  children: ReactNode;
}

export function AuthProvider({ children }: Props) {
  const [user, setUser] = useState<User | null>(null);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadUser() {
      try {
        const current = await authService.getCurrentUser();

        setUser(current);
      } catch {
        authService.logout();
      } finally {
        setLoading(false);
      }
    }

    if (localStorage.getItem("access")) {
      loadUser();
    } else {
      setLoading(false);
    }
  }, []);

  async function login(email: string, password: string) {
    await authService.login({
      email,
      password,
    });

    const current = await authService.getCurrentUser();

    setUser(current);
  }

  function logout() {
    authService.logout();

    setUser(null);
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}