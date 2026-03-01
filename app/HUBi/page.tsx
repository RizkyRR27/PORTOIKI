import React from 'react';
import Breadcrumb from '@/components/Breadcrumb';

export default function ContactPage() {
  const socialLinks = [
    { name: 'WhatsApp', val: '08118032005', url: 'https://wa.me/628118032005', color: 'hover:border-green-500' },
    { name: 'LinkedIn', val: 'Rizky Roza Rahim', url: 'https://www.linkedin.com/in/rizkyrozarahim270505', color: 'hover:border-blue-500' },
    { name: 'Instagram', val: '@rizkyroza._', url: 'https://instagram.com/rizkyroza.r_', color: 'hover:border-pink-500' },
    { name: 'TikTok', val: 'bandar', url: 'https://www.tiktok.com/@whosiap4', color: 'hover:border-purple-500' },
    { name: 'Facebook', val: 'rizky.roza', url: 'https://www.facebook.com/rizky.roza.5/', color: 'hover:border-blue-700' },
    { name: 'Email', val: 'rizkyroza2005@gmail.com', url: 'mailto:rizkyroza2005@gmail.com', color: 'hover:border-red-600' },
  ];

  return (
    <div className="pt-32 px-10 max-w-4xl mx-auto pb-20">
      <header className="text-center mb-16 animate-fadeInDown">
        <h1 className="text-5xl font-extrabold mb-4">Hubungin <span className="text-pink-500 inline-block hover:animate-glow transition-all">Gue</span></h1>
        <p className="text-xl text-blue-600">
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
            className={`group p-8 bg-pink-50/80 border border-pink-200 rounded-2xl transition-all duration-300 transform hover:-translate-y-2 hover:bg-pink-100 ${item.color} animate-fadeInUp`}
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="flex justify-between items-center">
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-blue-500 mb-1 group-hover:text-gray-900 transition-colors">
                  {item.name}
                </p>
                <p className="text-lg font-medium text-gray-800">{item.val}</p>
              </div>
              <div className="text-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform group-hover:translate-x-2">
                →
              </div>
            </div>
          </a>
        ))}
      </div>

      <div className="mt-20 p-8 border border-blue-200 rounded-3xl bg-gradient-to-br from-blue-100/20 to-pink-100/20 text-center hover:border-pink-300 transition-all duration-500 animate-fadeInUp">
        <h3 className="text-2xl font-bold mb-2">Lokasi Saat Ini</h3>
        <p className="text-blue-600">Sedang menempuh pendidikan di <span className="text-pink-500">Politeknik Negeri Malang</span></p>
      </div>
      <Breadcrumb />
    </div>
  );
}