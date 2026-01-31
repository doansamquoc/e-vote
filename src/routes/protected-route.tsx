import { useAuth } from "@/hooks/use-auth";
import type { ReactNode } from "react";
import { Navigate, useLocation } from "react-router-dom";

interface ProtectedRouteProps {
  children: ReactNode;
}

const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
  const { user, loading } = useAuth();
  const location = useLocation();
  if (loading) {
    return (
      <div className='flex justify-center items-center h-screen'>
        <p>Đang kiểm tra bảo mật...</p>
      </div>
    );
  }

  if (!user) {
    return <Navigate to={"/auth/login"} state={{ location }} replace />;
  }
  return <>{children}</>;
};

export default ProtectedRoute;
