import { Outlet } from "react-router-dom";

const AuthLayout = () => {
  return (
    <div className='grid min-h-screen max-w-xs mx-auto items-center'>
      <Outlet />
    </div>
  );
};

export default AuthLayout;
