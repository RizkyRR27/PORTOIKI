'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function Navbar() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 bg-black/80 backdrop-blur-md border-b border-white/10 p-5 flex justify-between items-center ${isVisible ? 'animate-fadeInDown' : 'opacity-0'}`}>
      <Link href="/" className="text-2xl font-bold tracking-tighter group hover:text-red-600 transition-colors duration-300">
        RRR<span className="text-red-600 group-hover:animate-glow">.</span>
      </Link>
      <div className="flex gap-8 font-medium uppercase tracking-widest text-xs">
        <Link href="/" className="relative hover:text-blue-500 transition-colors duration-300 group">
          <span>Home</span>
          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-500 group-hover:w-full transition-all duration-300"></span>
        </Link>
        <Link href="/HUBi" className="relative hover:text-red-500 transition-colors duration-300 group">
          <span>Hubungin Gue</span>
          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-red-500 group-hover:w-full transition-all duration-300"></span>
        </Link>
      </div>
    </nav>
  );
}