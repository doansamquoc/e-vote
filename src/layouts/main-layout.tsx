import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div className='flex flex-col min-h-screen'>
      <header className='py-2 top-0 sticky bg-background z-50 px-2 md:px-4'>
        <Header />
      </header>
      <main className='flex-1 max-w-3xl mx-auto w-full px-2'>
        <Outlet />
      </main>
      <footer className='pt-8 pb-4 px-2 md:px-4 bg-blue-300 dark:bg-blue-950 border-t'>
        <Footer />
      </footer>
    </div>
  );
};

export default MainLayout;
