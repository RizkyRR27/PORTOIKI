'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function Navbar() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 bg-white border-b-4 border-black p-5 flex justify-between items-center ${isVisible ? 'animate-fadeInDown' : 'opacity-0'}`}>
      <Link href="/" className="text-3xl font-black tracking-tighter text-black hover:text-[#ff3c88] transition-colors duration-200">
        RRR<span className="text-[#00f0ff] mix-blend-difference">.</span>
      </Link>
      <div className="flex gap-6 font-bold text-sm text-black hidden md:flex">
        <Link href="/" className="px-4 py-2 border-2 border-transparent hover:border-black hover:bg-[#ffe600] transition-all duration-200 uppercase tracking-widest">
          Home
        </Link>
        <Link href="/HUBi" className="px-4 py-2 border-2 border-transparent hover:border-black hover:bg-[#ff3c88] hover:text-white transition-all duration-200 uppercase tracking-widest">
          Hubungin Gue
        </Link>
        <Link href="/Penghargaan" className="px-4 py-2 border-2 border-transparent hover:border-black hover:bg-[#00f0ff] transition-all duration-200 uppercase tracking-widest">
          Penghargaan
        </Link>
      </div>
    </nav>
  );
}