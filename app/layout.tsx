import './globals.css';
import Navbar from '@/components/Navbar';

export const metadata = {
  title: 'Portofolio | Rizky Roza Rahim',
  description: 'Portofolio mahasiswa Sistem Informasi Bisnis',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-pink-50 text-gray-900 antialiased">
        <Navbar />
        {children}
      </body>
    </html>
  );
}