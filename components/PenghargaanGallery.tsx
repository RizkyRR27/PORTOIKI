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
    { id: 'jpg-1', title: 'Penghargaan 1', type: 'image', url: '/sertif/karate1.jpg' },
    { id: 'jpg-2', title: 'Penghargaan 2', type: 'image', url: '/sertif/karate2.jpg' },
    { id: 'pdf-1', title: 'Sertifikat 1', type: 'pdf', url: '/sertif/11.pdf' },
    { id: 'pdf-2', title: 'Sertifikat 2', type: 'pdf', url: '/sertif/22.pdf' },
    { id: 'pdf-3', title: 'Sertifikat 3', type: 'pdf', url: '/sertif/33.pdf' },
    { id: 'pdf-4', title: 'Sertifikat 4', type: 'pdf', url: '/sertif/44.pdf' },
  ];

  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<Item | null>(null);

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
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {items.map((it) => (
          <button
            key={it.id}
            onClick={() => openItem(it)}
            className="text-left p-6 bg-slate-900/40 border border-white/5 rounded-2xl hover:scale-105 transition transform"
            aria-label={`Buka ${it.title}`}
          >
            <h3 className="font-semibold mb-4">{it.title}</h3>
            <div className="mt-4">
              {it.type === 'image' ? (
                <img src={it.url} alt={it.title} className="w-full h-40 object-cover rounded-md border border-white/5" />
              ) : (
                <div className="w-full h-40 flex items-center justify-center bg-black/20 rounded-md border border-white/5 text-slate-300">
                  <span className="text-sm">📄 PDF</span>
                </div>
              )}
            </div>
          </button>
        ))}
      </div>

      {open && active && (
        <div className="fixed inset-0 z-60 flex items-center justify-center bg-black/70 p-6">
          <div className="max-w-5xl w-full max-h-[90vh] bg-slate-900 rounded-lg overflow-hidden">
            <div className="flex justify-between items-center p-3 border-b border-white/5">
              <h4 className="font-semibold">{active.title}</h4>
              <button onClick={closeModal} className="px-3 py-1 border rounded hover:bg-white/5">Tutup</button>
            </div>
            <div className="p-4 h-[80vh] overflow-auto bg-black">
              {active.type === 'image' ? (
                <img src={active.url} alt={active.title} className="w-full h-auto mx-auto" />
              ) : (
                <iframe 
                  src={`https://docs.google.com/gview?url=${typeof window !== 'undefined' ? window.location.origin : ''}${active.url}&embedded=true`} 
                  className="w-full h-[80vh] border-0" 
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
