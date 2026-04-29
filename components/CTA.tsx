'use client';

import Link from 'next/link';

export default function CTA() {
  return (
    <section className="relative py-32 px-10 z-10">
      <div className="max-w-5xl mx-auto text-center brutal-card bg-[#00ff66] p-12 md:p-20 overflow-hidden relative transform rotate-1">
        
        <h2 className="text-5xl md:text-7xl font-black mb-8 animate-fadeInUp text-black">
          SIAP <span className="bg-white border-4 border-black px-4 shadow-[4px_4px_0px_rgba(0,0,0,1)] inline-block transform -rotate-2">BERKOLABORASI?</span>
        </h2>
        
        <p className="text-xl text-black bg-white border-4 border-black p-4 mb-12 max-w-2xl mx-auto font-bold shadow-[4px_4px_0px_rgba(0,0,0,1)] animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
          Mari kita ciptakan sesuatu yang luar biasa bersama. Hubungi saya untuk diskusi atau kolaborasi project.
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center animate-fadeInUp" style={{ animationDelay: '0.4s' }}>
          <Link 
            href="/HUBi" 
            className="brutal-btn px-8 py-4 bg-[#ff3c88] text-white text-lg"
          >
            Hubungi Saya Sekarang
          </Link>
          
          <Link 
            href="/about" 
            className="brutal-btn px-8 py-4 bg-[#ffe600] text-black text-lg"
          >
            Pelajari Lebih Lanjut
          </Link>
        </div>

        {/* Social proof */}
        <div className="mt-20 pt-10 border-t-4 border-black">
          <p className="text-black font-black mb-8 animate-fadeInUp text-xl uppercase tracking-widest" style={{ animationDelay: '0.6s' }}>Aktif di platform:</p>
          <div className="flex gap-8 justify-center flex-wrap animate-fadeInUp" style={{ animationDelay: '0.8s' }}>
            {[
              { name: 'GitHub', icon: '🐙', color: 'bg-[#00f0ff]' },
              { name: 'LinkedIn', icon: '💼', color: 'bg-[#ff5e00]' },
              { name: 'Instagram', icon: '📷', color: 'bg-[#c250ff]' }
            ].map(platform => (
              <div key={platform.name} className={`flex items-center gap-3 brutal-btn ${platform.color} px-4 py-2 hover:-translate-y-2`}>
                <span className="text-2xl">{platform.icon}</span>
                <p className="text-sm font-black text-black">{platform.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
