import Navbar from '@/components/navbar'
import '@/app/globals.css'
import type { Metadata } from 'next'
import Footer from '@/components/footer';

import { Poppins } from 'next/font/google';
const poppins = Poppins({ subsets: ['latin'], weight: '400' });

interface LayoutProps {
  children: React.ReactNode;
}

const RootLayout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className={poppins.className}>
      <nav>
        <Navbar />
      </nav>
      <main className='light bg-white' >{children}</main>
      <Footer />


    </div >

  );
};
export default RootLayout;