'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function PenghargaanNavbar() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 bg-black/80 backdrop-blur-md border-b border-white/10 p-4 flex justify-between items-center ${isVisible ? 'animate-fadeInDown' : 'opacity-0'}`}>
      <div className="text-lg font-bold tracking-tighter">Penghargaan</div>
      <div className="flex gap-4 items-center">
        <a href="/images/penghargaan/certificate.jpg" target="_blank" rel="noopener noreferrer" className="px-3 py-1 border border-white/10 rounded hover:bg-white/5 transition">
          View JPG
        </a>
        <a href="/documents/penghargaan/certificate.pdf" target="_blank" rel="noopener noreferrer" className="px-3 py-1 border border-white/10 rounded hover:bg-white/5 transition">
          View PDF
        </a>
      </div>
    </nav>
  );
}
