'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { Sun, Moon, Menu, X, Home, MessageSquare, Award, User, Code } from 'lucide-react';
// import { useTheme } from './ThemeProvider';

export default function Navbar() {
  const [isVisible, setIsVisible] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setIsVisible(true);
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '/', label: 'Beranda', icon: Home },
    { href: '/about', label: 'Tentang', icon: User },
    { href: '/project', label: 'Projek', icon: Code },
    { href: '/Penghargaan', label: 'Penghargaan', icon: Award },
    { href: '/HUBi', label: 'Hubungi', icon: MessageSquare },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-colors duration-300 p-4 ${isScrolled ? 'bg-[#141414]' : 'bg-gradient-to-b from-black/80 to-transparent'} ${isVisible ? 'animate-fadeInDown' : 'opacity-0'}`}>
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="cursor-target text-3xl font-black font-sans tracking-tighter text-[#E50914] hover:text-[#F40612] transition-colors duration-200 flex items-center gap-1">
          RRR
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6 font-sans font-medium text-sm">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            const Icon = link.icon;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`cursor-target flex items-center gap-2 transition-colors duration-150 tracking-wide ${isActive
                  ? 'text-white font-bold'
                  : 'text-gray-300 hover:text-gray-400'
                  }`}
              >
                {link.label}
              </Link>
            );
          })}
        </div>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="md:hidden mt-4 bg-[#141414] p-4 font-sans">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              const Icon = link.icon;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`cursor-target flex items-center gap-3 p-2 font-medium text-sm ${isActive ? 'text-white font-bold' : 'text-gray-300 hover:text-gray-400'
                    }`}
                >
                  <Icon className="w-5 h-5" />
                  {link.label}
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </nav>
  );
}