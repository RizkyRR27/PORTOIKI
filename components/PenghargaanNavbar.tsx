'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function PenghargaanNavbar() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 bg-pink-100/80 backdrop-blur-md border-b border-pink-200 p-4 flex justify-between items-center ${isVisible ? 'animate-fadeInDown' : 'opacity-0'}`}>
      <div className="text-lg font-bold tracking-tighter text-gray-800">Penghargaan</div>
      <div className="flex gap-4 items-center">
        <a href="/images/penghargaan/certificate.jpg" target="_blank" rel="noopener noreferrer" className="px-3 py-1 border border-pink-200 rounded hover:bg-pink-50 transition">
          View JPG
        </a>
        <a href="/documents/penghargaan/certificate.pdf" target="_blank" rel="noopener noreferrer" className="px-3 py-1 border border-pink-200 rounded hover:bg-pink-50 transition">
          View PDF
        </a>
      </div>
    </nav>
  );
}
