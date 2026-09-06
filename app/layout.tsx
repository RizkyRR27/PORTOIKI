import './globals.css';
import Navbar from '@/components/Navbar';
import GradualBlur from '@/components/GradualBlur';
import { SmoothScrollProvider } from '@/components/SmoothScrollProvider';
import { Outfit, Plus_Jakarta_Sans } from 'next/font/google';

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-outfit',
  weight: ['400', '600', '800', '900'],
  display: 'swap',
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-plus-jakarta',
  weight: ['400', '500', '700', '800'],
  display: 'swap',
});

export const metadata = {
  title: 'Portofolio | Rizky Roza Rahim',
  description: 'Portofolio mahasiswa Sistem Informasi Bisnis Politeknik Negeri Malang',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body suppressHydrationWarning className={`${outfit.variable} ${plusJakarta.variable} font-sans bg-[#141414] text-white antialiased relative min-h-screen transition-colors duration-300`}>
        <Navbar />
        {children}
        <GradualBlur preset="page-header" strength={2.5} height="7rem" style={{ zIndex: 40 }} />
        <GradualBlur preset="page-footer" strength={3.0} height="6rem" style={{ zIndex: 40 }} />
        {/* //</ThemeProvider> */}
      </body>
    </html>
  );
} 
