'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

export default function PenghargaanNavbar() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 bg-[#00f0ff] border-b-4 border-black p-5 flex justify-between items-center shadow-[0_4px_0_rgba(0,0,0,1)] ${isVisible ? 'animate-fadeInDown' : 'opacity-0'}`}>
      <Link href="/" className="text-2xl font-black tracking-tight text-black hover:text-white transition-colors duration-200 uppercase bg-[#ffe600] px-3 py-1 border-4 border-black">
        RRR <span className="bg-black text-white px-2 ml-1">Penghargaan</span>
      </Link>
      <div className="flex gap-4 items-center text-sm font-black uppercase">
        <a href="/images/penghargaan/certificate.jpg" target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-[#ff3c88] text-white border-4 border-black shadow-[4px_4px_0px_rgba(0,0,0,1)] hover:-translate-y-1 transition-transform">
          View JPG
        </a>
        <a href="/documents/penghargaan/certificate.pdf" target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-white text-black border-4 border-black shadow-[4px_4px_0px_rgba(0,0,0,1)] hover:-translate-y-1 transition-transform">
          View PDF
        </a>
      </div>
    </nav>
  );
}
