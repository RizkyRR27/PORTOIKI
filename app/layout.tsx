import './globals.css';
import Navbar from '@/components/Navbar';

export const metadata = {
  title: 'Portofolio | Rizky Roza Rahim',
  description: 'Portofolio mahasiswa Sistem Informasi Bisnis',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;800;900&display=swap" rel="stylesheet" />
      </head>
      <body suppressHydrationWarning className="bg-[#fdfbf7] text-black antialiased relative min-h-screen">
        <Navbar />
        {children}
      </body>
    </html>
  );
}