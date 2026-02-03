'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import HeroBackground from './HeroBackground';

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
    <section className="min-h-screen flex flex-col items-center justify-center text-center px-4 relative overflow-hidden pt-20 pb-20">
      {/* Background Carousel */}
      <HeroBackground />

      {/* Interactive Background Blobs */}
      <div 
        className="absolute top-0 -left-20 w-80 h-80 bg-blue-600/10 rounded-full blur-[120px] animate-pulse-slow transition-transform duration-500 z-0"
        style={{ transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)` }}
      />
      <div 
        className="absolute bottom-0 -right-20 w-80 h-80 bg-red-600/10 rounded-full blur-[120px] animate-pulse-slow transition-transform duration-500 z-0"
        style={{ transform: `translate(-${mousePosition.x}px, -${mousePosition.y}px)` }}
      />

      <div className="relative z-10 w-full max-w-5xl mx-auto">
        {/* <div className="mb-6 inline-block px-4 py-2 border border-blue-500/30 rounded-full bg-blue-500/10 animate-fadeInDown">
          <p className="text-sm font-semibold text-blue-400">Welcome to my portfolio</p>
        </div> */}

        <h1 className="text-[48px] md:text-[64px] font-extrabold leading-tight tracking-tighter mb-6 animate-fadeInUp">
          Selamat Datang Para Penggemar <br />
          <span className="text-transparent bg-gradient-to-r from-yellow-500 via-red-500 to-pink-500 bg-clip-text animate-float">
            Rizky Roza Rahim
          </span>
        </h1>

        <p className="text-[24px] md:text-[32px] text-slate-400 max-w-4xl mx-auto font-light leading-relaxed animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
         Bukan penyihir, cuma mahasiswa yang hobi ngubah <span className="text-blue-400 font-semibold">bug</span>  jadi  <span className="text-pink-400 font-semibold">fitur</span> dan ngubah <span className="text-red-400 font-semibold">jam tidur</span> jadi kode.
        </p>

       <div className="mt-12 flex gap-6 justify-center flex-col sm:flex-row animate-fadeInUp" style={{ animationDelay: '0.4s' }}>
  {/* Tombol: Lihat Projek Saya (Kuning ke Oranye + Border) */}
  <Link 
    href="/project" 
    className="px-8 py-4 bg-gradient-to-r from-pink-500 to-red-700 border-2 border-yellow-700 text-black font-bold rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-orange-500/50 active:scale-95 text-center"
  >
    Lihat Projek Saya
  </Link>
  
  {/* Tombol: Tentang Saya (Oranye ke Kuning) */}
  <Link 
    href="/about" 
    className="px-8 py-4 bg-gradient-to-r from-red-700 to-pink-400 border-2 border-yellow-500 text-black font-bold rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-yellow-500/50 active:scale-95 text-center"
  >
    Tentang Saya
  </Link>
</div>
      </div>
    </section>
  );
}