'use client';

import Link from 'next/link';

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-center px-4 relative overflow-hidden pt-20 pb-20">
      
      <div className="relative z-10 w-full max-w-5xl mx-auto">
        
        <div className="mb-8 inline-block px-4 py-2 bg-[#00ff66] border-4 border-black shadow-[4px_4px_0px_rgba(0,0,0,1)] text-black text-sm font-bold tracking-widest uppercase animate-fadeInUp transform -rotate-2">
          Available for Hire
        </div>
        
        <h1 className="text-6xl md:text-8xl font-black leading-none tracking-tighter mb-8 animate-fadeInUp flex flex-col gap-4">
          <span className="block text-4xl md:text-5xl bg-[#ffe600] border-4 border-black px-6 py-2 w-fit mx-auto shadow-[6px_6px_0px_rgba(0,0,0,1)] transform rotate-1">
            Hello, I'm
          </span>
          <span className="bg-[#00f0ff] border-4 border-black px-8 py-4 w-fit mx-auto shadow-[8px_8px_0px_rgba(0,0,0,1)] transform -rotate-1 text-black">
            RIZKY ROZA RAHIM
          </span>
        </h1>

        <p className="text-xl md:text-2xl text-black bg-white border-4 border-black p-6 max-w-3xl mx-auto font-bold leading-relaxed animate-fadeInUp shadow-[6px_6px_0px_rgba(0,0,0,1)]" style={{ animationDelay: '0.2s' }}>
          Bukan penyihir, cuma mahasiswa yang hobi ngubah <span className="bg-[#ff3c88] text-white px-2">bug</span> jadi <span className="bg-[#ffe600] px-2">fitur</span> dan ngubah jam tidur jadi kode.
        </p>

       <div className="mt-12 flex gap-6 justify-center flex-col sm:flex-row animate-fadeInUp" style={{ animationDelay: '0.4s' }}>
          <Link 
            href="/project" 
            className="brutal-btn px-8 py-4 bg-[#ff3c88] text-white text-center text-lg"
          >
            Lihat Projek Saya
          </Link>
          
          <Link 
            href="/about" 
            className="brutal-btn px-8 py-4 bg-white text-black text-center text-lg"
          >
            Tentang Saya
          </Link>
        </div>
      </div>
    </section>
  );
}