'use client';

import Link from 'next/link';

export default function CTA() {
  return (
    <section className="relative py-32 px-10 overflow-hidden">
      {/* Background animation */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 via-red-900/20 to-blue-900/20" />
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-red-600/20 rounded-full blur-[120px] animate-pulse-slow" />
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-600/20 rounded-full blur-[120px] animate-pulse-slow" />

      <div className="max-w-4xl mx-auto relative z-10 text-center">
        <h2 className="text-5xl md:text-6xl font-extrabold mb-6 animate-fadeInUp">
          Siap <span className="text-transparent bg-gradient-to-r from-blue-500 to-red-500 bg-clip-text">Berkolaborasi?</span>
        </h2>
        
        <p className="text-xl text-slate-300 mb-12 max-w-2xl mx-auto animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
          Mari kita ciptakan sesuatu yang luar biasa bersama. Hubungi saya untuk diskusi atau kolaborasi project.
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center animate-fadeInUp" style={{ animationDelay: '0.4s' }}>
          <Link 
            href="/HUBi" 
            className="px-8 py-4 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 font-bold rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-red-600/50"
          >
            Hubungi Saya Sekarang
          </Link>
          
          <Link 
            href="/about" 
            className="px-8 py-4 border-2 border-blue-500 text-blue-500 hover:bg-blue-600/10 font-bold rounded-lg transition-all duration-300 transform hover:scale-105"
          >
            Pelajari Lebih Lanjut
          </Link>
        </div>

        {/* Social proof */}
        <div className="mt-16 pt-12 border-t border-white/10">
          <p className="text-slate-400 mb-6 animate-fadeInUp" style={{ animationDelay: '0.6s' }}>Aktif di platform:</p>
          <div className="flex gap-6 justify-center flex-wrap animate-fadeInUp" style={{ animationDelay: '0.8s' }}>
            {[
              { name: 'GitHub', icon: '🐙' },
              { name: 'LinkedIn', icon: '💼' },
              { name: 'Instagram', icon: '📷' }
            ].map(platform => (
              <div key={platform.name} className="text-2xl hover:scale-110 transition-transform duration-300 cursor-pointer">
                <span>{platform.icon}</span>
                <p className="text-xs mt-1 text-slate-400">{platform.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
