import React from 'react';
import Breadcrumb from '@/components/Breadcrumb';

export default function ContactPage() {
  const socialLinks = [
    { name: 'WhatsApp', val: '08118032005', url: 'https://wa.me/628118032005', bg: 'bg-[#00ff66]', icon: '💬' },
    { name: 'LinkedIn', val: 'Rizky Roza Rahim', url: 'https://www.linkedin.com/in/rizkyrozarahim270505', bg: 'bg-[#00f0ff]', icon: '💼' },
    { name: 'Instagram', val: '@rizkyroza._', url: 'https://instagram.com/rizkyroza.r_', bg: 'bg-[#ff3c88]', icon: '📷' },
    { name: 'TikTok', val: 'bandar', url: 'https://www.tiktok.com/@whosiap4', bg: 'bg-white', icon: '🎵' },
    { name: 'Facebook', val: 'rizky.roza', url: 'https://www.facebook.com/rizky.roza.5/', bg: 'bg-[#ffe600]', icon: '📘' },
    { name: 'Email', val: 'rizkyroza2005@gmail.com', url: 'mailto:rizkyroza2005@gmail.com', bg: 'bg-[#ff5e00]', icon: '✉️' },
  ];

  return (
    <div className="pt-32 px-10 max-w-5xl mx-auto pb-20 relative z-10">
      <header className="text-center mb-16 animate-fadeInDown">
        <h1 className="text-6xl md:text-8xl font-black mb-8 text-black uppercase">
          Hubungin <span className="bg-[#ff3c88] text-white px-4 py-2 border-4 border-black shadow-[6px_6px_0px_rgba(0,0,0,1)] inline-block transform rotate-2">Gue</span>
        </h1>
        <p className="text-xl text-black font-bold bg-[#ffe600] border-4 border-black p-4 inline-block shadow-[4px_4px_0px_rgba(0,0,0,1)] transform -rotate-1">
          Tertarik ngobrol, main, ingin tahu, atau kolaborasi? Pilih jalur di bawah.
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {socialLinks.map((item, index) => (
          <a 
            key={item.name}
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`group p-6 brutal-card ${item.bg} flex items-center gap-6 ${index % 2 === 0 ? 'transform rotate-1' : 'transform -rotate-1'}`}
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="text-5xl bg-white border-4 border-black w-20 h-20 flex items-center justify-center shadow-[4px_4px_0px_rgba(0,0,0,1)] group-hover:scale-110 transition-transform">
              {item.icon}
            </div>
            <div className="flex-grow">
              <p className="text-sm font-black text-black uppercase bg-white px-2 inline-block border-2 border-black mb-2">
                {item.name}
              </p>
              <p className="text-xl font-black text-black bg-white/60 p-2 border-2 border-black">{item.val}</p>
            </div>
            <div className="text-black text-3xl font-black group-hover:translate-x-2 transition-transform">
              →
            </div>
          </a>
        ))}
      </div>

      <div className="mt-20 p-10 brutal-card bg-[#c250ff] text-center animate-fadeInUp transform rotate-1">
        <h3 className="text-4xl font-black mb-6 text-black uppercase bg-white inline-block px-4 py-2 border-4 border-black shadow-[4px_4px_0px_rgba(0,0,0,1)] -rotate-1">Lokasi Saat Ini</h3>
        <p className="text-black font-bold text-xl bg-white p-6 border-4 border-black shadow-[6px_6px_0px_rgba(0,0,0,1)]">
          📍 Sedang menempuh pendidikan di <span className="bg-[#ffe600] px-2 uppercase font-black border-2 border-black">Politeknik Negeri Malang</span>
        </p>
      </div>
      
      <div className="mt-16 flex justify-center">
        <div className="bg-white border-4 border-black p-4 shadow-[4px_4px_0px_rgba(0,0,0,1)] font-black text-black">
          <Breadcrumb />
        </div>
      </div>
    </div>
  );
}