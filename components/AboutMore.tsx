"use client";

import Breadcrumb from '@/components/Breadcrumb';

export default function AboutMore() {
  return (
    <section className="max-w-4xl mx-auto py-20 px-6 space-y-10 brutal-card bg-[#00ff66] mt-32 relative z-10 mb-20 p-8 md:p-12 transform rotate-1">
      <h1 className="text-5xl md:text-7xl font-black text-black mb-8 text-center uppercase bg-white border-4 border-black inline-block px-6 py-2 shadow-[8px_8px_0px_rgba(0,0,0,1)] -rotate-2">More About Me</h1>

      <div className="space-y-10">
        <p className="text-2xl text-black leading-relaxed font-black text-center max-w-2xl mx-auto bg-white border-4 border-black p-6 shadow-[6px_6px_0px_rgba(0,0,0,1)] transform rotate-1">
          Lahir di Jakarta, 27 Mei 2005 — <span className="bg-[#ff3c88] text-white px-2 border-2 border-black">Gemini</span>. Besar di Bekasi dan menempuh pendidikan dasar hingga menengah di lingkungan Muhammadiyah.
        </p>

        <div className="bg-[#00f0ff] p-8 border-4 border-black shadow-[8px_8px_0px_rgba(0,0,0,1)] transform -rotate-1">
          <p className="font-black text-3xl text-black mb-4 uppercase bg-white inline-block px-4 py-1 border-4 border-black shadow-[4px_4px_0px_rgba(0,0,0,1)]">Hobi & Kegiatan</p>
          <p className="text-black font-bold text-xl leading-relaxed mt-4 bg-white p-4 border-4 border-black">Nongkrong, jalan-jalan, olahraga (basket, futsal, badminton, billiard, jalan santai).</p>
        </div>

        <div className="bg-white border-4 border-black p-8 shadow-[8px_8px_0px_rgba(0,0,0,1)]">
          <p className="font-black text-3xl text-white bg-black mb-8 text-center uppercase py-2 shadow-[4px_4px_0px_rgba(255,60,136,1)]">Galeri Pribadi</p>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
            {['w.jpeg', '1.jpg', '2.jpg', '3.jpg', '4.jpeg', '5.jpeg', '6.jpeg'].map((f) => (
              <div key={f} className="w-full h-40 bg-[#ffe600] border-4 border-black relative overflow-hidden group shadow-[4px_4px_0px_rgba(0,0,0,1)] hover:-translate-y-2 transition-transform">
                <img src={`/images/${f}`} alt={f} className="object-cover w-full h-full filter contrast-125" onError={(e) => { (e.currentTarget as HTMLImageElement).style.display = 'none' }} />
              </div>
            ))}
          </div>
        </div>

        <div className="bg-[#ff3c88] p-8 border-4 border-black shadow-[8px_8px_0px_rgba(0,0,0,1)] transform rotate-1">
          <p className="font-black text-3xl text-black mb-4 uppercase bg-[#ffe600] inline-block px-4 py-1 border-4 border-black shadow-[4px_4px_0px_rgba(0,0,0,1)]">Favorit</p>
          <p className="text-white font-bold text-xl leading-relaxed mt-4 bg-black p-4 border-4 border-white shadow-[4px_4px_0px_rgba(255,230,0,1)]">
            <span className="bg-[#00f0ff] text-black border-2 border-black px-2 uppercase">Makanan:</span> Semuanya enak.<br /><br />
            <span className="bg-[#00ff66] text-black border-2 border-black px-2 uppercase">Lagu Favorit:</span> "AKU CINTA KAU DAN DIA" - Maliq & D'Essentials.
          </p>
        </div>
      </div>

      <div className="pt-8 flex justify-center mt-10">
        <div className="bg-white border-4 border-black p-4 shadow-[4px_4px_0px_rgba(0,0,0,1)] font-black text-black">
          <Breadcrumb />
        </div>
      </div>
    </section>
  );
}
