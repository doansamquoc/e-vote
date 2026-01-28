import { Box } from "lucide-react";
import LoginForm from "../components/login-form";

const LoginPage = () => {
  return (
    <div className='flex flex-col'>
      <Box className='mx-auto size-14' />
      <h1 className='text-2xl text-center uppercase py-4'>
        Secure Voting with Blockchain!
      </h1>
      <span className='text-center pb-2'>Sign in to create a secure vote.</span>
      <div className='py-2'>
        <LoginForm />
      </div>
      <span className='text-center text-xs text-muted-foreground'>
        By clicking continue. You agree to the e-Vote privacy & terms of service
      </span>
    </div>
  );
};

export default LoginPage;
