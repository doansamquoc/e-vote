import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div className='flex flex-col min-h-screen max-w-5xl mx-auto px-2 md:px-4'>
      <header className='py-4 top-0 sticky bg-background z-50'>
        <Header />
      </header>
      <main className='flex flex-1 py-2'>
        <Outlet />
      </main>
      <footer className='pt-8 pb-4'>
        <Footer />
      </footer>
    </div>
  );
};

export default MainLayout;
