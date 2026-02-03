import React from 'react';
import Breadcrumb from '@/components/Breadcrumb';

export default function ContactPage() {
  const socialLinks = [
    { name: 'WhatsApp', val: '08118032005', url: 'https://wa.me/628118032005', color: 'hover:border-green-500' },
    { name: 'LinkedIn', val: 'Rizky Roza Rahim', url: 'https://www.linkedin.com/in/rizky-roza-801a6a287', color: 'hover:border-blue-500' },
    { name: 'Instagram', val: '@rizkyroza._', url: 'https://instagram.com/rizkyroza._', color: 'hover:border-pink-500' },
    { name: 'TikTok', val: 'bandar', url: 'https://www.tiktok.com/@whosiap4', color: 'hover:border-purple-500' },
    { name: 'Facebook', val: 'rizky.roza', url: 'https://www.facebook.com/rizky.roza', color: 'hover:border-blue-700' },
    { name: 'Email', val: 'rizkyroza2005@gmail.com', url: 'mailto:rizkyroza2005@gmail.com', color: 'hover:border-red-600' },
  ];

  return (
    <div className="pt-32 px-10 max-w-4xl mx-auto pb-20">
      <header className="text-center mb-16 animate-fadeInDown">
        <h1 className="text-5xl font-extrabold mb-4">Hubungin <span className="text-red-600 inline-block hover:animate-glow transition-all">Gue</span></h1>
        <p className="text-xl text-slate-400">
          Tertarik ngobrol, main, ingin tahu, kolaborasi sama i? <br/>
          Pilih jalur yang paling nyaman buat u.
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {socialLinks.map((item, index) => (
          <a 
            key={item.name}
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`group p-8 bg-slate-900/40 border border-white/5 rounded-2xl transition-all duration-300 transform hover:-translate-y-2 hover:bg-slate-900 ${item.color} animate-fadeInUp`}
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="flex justify-between items-center">
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-1 group-hover:text-white transition-colors">
                  {item.name}
                </p>
                <p className="text-lg font-medium text-slate-200">{item.val}</p>
              </div>
              <div className="text-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform group-hover:translate-x-2">
                →
              </div>
            </div>
          </a>
        ))}
      </div>

      <div className="mt-20 p-8 border border-white/5 rounded-3xl bg-gradient-to-br from-blue-900/10 to-red-900/10 text-center hover:border-blue-500/30 transition-all duration-500 animate-fadeInUp">
        <h3 className="text-2xl font-bold mb-2">Lokasi Saat Ini</h3>
        <p className="text-slate-400">Sedang menempuh pendidikan di <span className="text-white">Politeknik Negeri Malang</span></p>
      </div>
      <Breadcrumb />
    </div>
  );
}