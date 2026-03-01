'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';


export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 10,
        y: (e.clientY / window.innerHeight) * 10,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-center px-4 relative overflow-hidden pt-20 pb-20 bg-white">
      {/* Interactive Background Blobs */}
      <div 
        className="absolute top-0 -left-20 w-80 h-80 bg-pink-400/20 rounded-full blur-[150px] animate-pulse-slow transition-transform duration-500 z-0"
        style={{ transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)` }}
      />
      <div 
        className="absolute bottom-0 -right-20 w-80 h-80 bg-blue-400/20 rounded-full blur-[150px] animate-pulse-slow transition-transform duration-500 z-0"
        style={{ transform: `translate(-${mousePosition.x}px, -${mousePosition.y}px)` }}
      />

      <div className="relative z-10 w-full max-w-5xl mx-auto">
        {/* <div className="mb-6 inline-block px-4 py-2 border border-blue-500/30 rounded-full bg-blue-500/10 animate-fadeInDown">
          <p className="text-sm font-semibold text-blue-400">Welcome to my portfolio</p>
        </div> */}

        <h1 className="text-[48px] md:text-[64px] font-extrabold leading-tight tracking-tighter mb-6 animate-fadeInUp text-gray-800">
          Selamat Datang Para Penggemar <br />
          <span className="text-transparent bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text animate-float">
            Rizky Roza Rahim
          </span>
        </h1>

        <p className="text-[24px] md:text-[32px] text-gray-600 max-w-4xl mx-auto font-light leading-relaxed animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
          Bukan penyihir, cuma mahasiswa yang hobi ngubah <span className="text-blue-500 font-semibold">bug</span> jadi <span className="text-pink-500 font-semibold">fitur</span> dan ngubah <span className="text-indigo-500 font-semibold">jam tidur</span> jadi kode.
        </p>

       <div className="mt-12 flex gap-6 justify-center flex-col sm:flex-row animate-fadeInUp" style={{ animationDelay: '0.4s' }}>
  {/* Tombol: Lihat Projek Saya (Kuning ke Oranye + Border) */}
  <Link 
    href="/project" 
    className="px-8 py-4 bg-pink-500 border-2 border-pink-600 text-white font-bold rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-pink-300/50 active:scale-95 text-center"
  >
    Lihat Projek Saya
  </Link>
  
  {/* Tombol: Tentang Saya */}
  <Link 
    href="/about" 
    className="px-8 py-4 bg-blue-500 border-2 border-blue-600 text-white font-bold rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-blue-300/50 active:scale-95 text-center"
  >
    Tentang Saya
  </Link>
</div>
      </div>
    </section>
  );
}