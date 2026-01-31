import { getSigner, magic } from "@/lib/magic";
import type { AuthContextType } from "@/types/auth-context-type.type";
import { ethers } from "ethers";
import type { MagicUserMetadata } from "magic-sdk";
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";

const AuthContext = createContext<AuthContextType | undefined>(undefined);

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState<MagicUserMetadata | null>(null);
  const [provider, setProvider] = useState<ethers.BrowserProvider | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  const refreshUser = useCallback(async () => {
    try {
      const userInfo = await magic.user.getInfo();
      setUser(userInfo);

      setProvider(await getSigner());
    } catch (error) {
      console.error("Get user info failed:", error);
      setUser(null);
    }
  }, []);

  useEffect(() => {
    const checkLogin = async () => {
      try {
        const isLoggedIn = await magic.user.isLoggedIn();
        if (isLoggedIn) {
          await refreshUser();
        }
      } catch (error) {
        console.error("Check login failed:", error);
      } finally {
        setLoading(false);
      }
    };
    checkLogin();
  }, [refreshUser]);

  // Login method
  const login = async (email: string) => {
    setLoading(true);
    try {
      await magic.auth.loginWithEmailOTP({ email });
      await refreshUser();
    } catch (error) {
      console.error("Login failed:", error);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  // Logout method
  const logout = async () => {
    setLoading(true);
    try {
      await magic.user.logout();
      setUser(null);
      setProvider(null);
    } catch (error) {
      console.error("Logout failed:", error);
    } finally {
      setLoading(false);
    }
  };
  const value: AuthContextType = {
    user,
    provider,
    loading,
    login,
    logout,
    magic,
  };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
