import './globals.css';
import Navbar from '@/components/Navbar';
import GradualBlur from '@/components/GradualBlur';
import { Outfit, Plus_Jakarta_Sans, JetBrains_Mono } from 'next/font/google';

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

const jetbrains = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains',
  weight: ['400', '700'],
  display: 'swap',
});

export const metadata = {
  title: 'Portofolio | Rizky Roza Rahim',
  description: 'Portofolio mahasiswa Sistem Informasi Bisnis Politeknik Negeri Malang',
  icons: { icon: '/iki_logo.svg' },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body suppressHydrationWarning className={`${outfit.variable} ${plusJakarta.variable} ${jetbrains.variable} font-sans bg-[#111112] text-white antialiased relative min-h-screen`}>
        <div className="grain" aria-hidden />
        <Navbar />
        {children}
        <GradualBlur preset="page-header" strength={2.5} height="7rem" style={{ zIndex: 40 }} />
      </body>
    </html>
  );
}
