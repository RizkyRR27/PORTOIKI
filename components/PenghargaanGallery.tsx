'use client';

import { useState } from 'react';

type Item = {
  id: string;
  title: string;
  type: 'image' | 'pdf';
  url: string;
};

export default function PenghargaanGallery() {
  const items: Item[] = [
    { id: 'jpg-1', title: 'Sertifikat Karate 1', type: 'image', url: '/sertif/karate1.jpg' },
    { id: 'jpg-2', title: 'Sertifikat Karate 2', type: 'image', url: '/sertif/karate2.jpg' },
    { id: 'pdf-1', title: 'Dokumen Penghargaan 1', type: 'pdf', url: '/sertif/11.pdf' },
    { id: 'pdf-2', title: 'Dokumen Penghargaan 2', type: 'pdf', url: '/sertif/22.pdf' },
    { id: 'pdf-3', title: 'Dokumen Penghargaan 3', type: 'pdf', url: '/sertif/33.pdf' },
    { id: 'pdf-4', title: 'Dokumen Penghargaan 4', type: 'pdf', url: '/sertif/44.pdf' },
  ];

  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<Item | null>(null);

  const colors = ['bg-[#ffe600]', 'bg-[#ff3c88]', 'bg-[#00f0ff]', 'bg-[#00ff66]', 'bg-[#c250ff]', 'bg-[#ff5e00]'];

  function openItem(item: Item) {
    setActive(item);
    setOpen(true);
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    setOpen(false);
    setActive(null);
    document.body.style.overflow = '';
  }

  return (
    <div className="relative z-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
        {items.map((it, idx) => (
          <button
            key={it.id}
            onClick={() => openItem(it)}
            className={`text-left brutal-card ${colors[idx % colors.length]} p-6 transition-all duration-300 group flex flex-col ${idx % 2 === 0 ? 'transform rotate-1' : 'transform -rotate-1'}`}
            aria-label={`Buka ${it.title}`}
          >
            <h3 className="font-black text-2xl uppercase mb-6 text-black bg-white inline-block px-3 py-1 border-4 border-black shadow-[4px_4px_0px_rgba(0,0,0,1)] group-hover:-translate-y-1 transition-transform">{it.title}</h3>
            <div className="mt-auto relative overflow-hidden bg-white border-4 border-black shadow-[6px_6px_0px_rgba(0,0,0,1)]">
              {it.type === 'image' ? (
                <img src={it.url} alt={it.title} className="w-full h-56 object-cover filter contrast-125 saturate-150 transition-transform duration-300 group-hover:scale-105" />
              ) : (
                <div className="w-full h-56 flex items-center justify-center bg-black text-white group-hover:bg-[#ff3c88] transition-colors">
                  <span className="text-xl font-black tracking-widest uppercase">PDF Document</span>
                </div>
              )}
            </div>
          </button>
        ))}
      </div>

      {open && active && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center bg-[#ffe600]/80 backdrop-blur-md p-4 md:p-6">
          <div className="max-w-5xl w-full max-h-[90vh] bg-white border-4 border-black shadow-[16px_16px_0px_rgba(0,0,0,1)] flex flex-col">
            <div className="flex justify-between items-center p-6 border-b-4 border-black bg-[#ff3c88]">
              <h4 className="font-black text-white text-2xl uppercase">{active.title}</h4>
              <button onClick={closeModal} className="brutal-btn px-6 py-2 bg-white text-black text-lg">Tutup</button>
            </div>
            <div className="p-6 flex-grow overflow-auto bg-white" style={{
               backgroundImage: 'linear-gradient(rgba(0,0,0,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.05) 1px, transparent 1px)',
               backgroundSize: '20px 20px'
            }}>
              {active.type === 'image' ? (
                <img src={active.url} alt={active.title} className="w-full h-auto mx-auto border-4 border-black shadow-[8px_8px_0px_rgba(0,0,0,1)]" />
              ) : (
                <iframe 
                  src={`https://docs.google.com/gview?url=${typeof window !== 'undefined' ? window.location.origin : ''}${active.url}&embedded=true`} 
                  className="w-full h-[70vh] border-4 border-black shadow-[8px_8px_0px_rgba(0,0,0,1)] bg-white" 
                  title={active.title}
                  allow="fullscreen"
                  loading="lazy"
                ></iframe>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
