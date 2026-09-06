'use client';

import React, { useState, useMemo } from 'react';
import { FileText, Image, ZoomIn, X, Download, Terminal, Award } from 'lucide-react';

type Item = {
  id: string;
  title: string;
  type: 'image' | 'pdf';
  url: string;
  category: 'karate' | 'academic';
};

export default function PenghargaanGallery() {
  const items: Item[] = [
    { id: 'jpg-1', title: 'Sertifikat Karate 1', type: 'image', url: '/sertif/karate1.jpg', category: 'karate' },
    { id: 'jpg-2', title: 'Sertifikat Karate 2', type: 'image', url: '/sertif/karate2.jpg', category: 'karate' },
    { id: 'pdf-1', title: 'Dokumen Penghargaan 1', type: 'pdf', url: '/sertif/11.pdf', category: 'academic' },
    { id: 'pdf-2', title: 'Dokumen Penghargaan 2', type: 'pdf', url: '/sertif/22.pdf', category: 'academic' },
    { id: 'pdf-3', title: 'Dokumen Penghargaan 3', type: 'pdf', url: '/sertif/33.pdf', category: 'academic' },
    { id: 'pdf-4', title: 'Dokumen Penghargaan 4', type: 'pdf', url: '/sertif/44.pdf', category: 'academic' },
  ];

  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<Item | null>(null);
  const [filterType, setFilterType] = useState<'all' | 'karate' | 'academic'>('all');

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

  const filteredItems = useMemo(() => {
    return items.filter(it => filterType === 'all' || it.category === filterType);
  }, [filterType]);

  return (
    <div className="relative z-10 font-sans text-white">
      {/* Category selector */}
      <div className="flex flex-wrap gap-3 justify-center mb-10">
        {[
          { id: 'all', label: 'All Certificates', icon: Award },
          { id: 'karate', label: 'Sports (Karate)', icon: Image },
          { id: 'academic', label: 'Academic & Competence', icon: FileText }
        ].map(cat => {
          const Icon = cat.icon;
          return (
            <button
              key={cat.id}
              onClick={() => setFilterType(cat.id as any)}
              className={`px-5 py-2 rounded-full font-bold text-xs uppercase transition-colors cursor-pointer flex items-center gap-2 ${
                filterType === cat.id 
                  ? 'bg-[#E50914] text-white'
                  : 'bg-[#222222] text-gray-300 hover:bg-[#333333] hover:text-white border border-[#333333]'
              }`}
            >
              <Icon className="w-4 h-4" /> {cat.label}
            </button>
          );
        })}
      </div>

      {/* Grid of awards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {filteredItems.map((it, idx) => (
          <button
            key={it.id}
            onClick={() => openItem(it)}
            className="text-left bg-[#181818] rounded-md overflow-hidden group flex flex-col shadow-2xl transition-all duration-300 hover:scale-105 hover:z-10 cursor-pointer"
            aria-label={`Buka pratinjau ${it.title}`}
          >
            {/* Preview image or mock */}
            <div className="relative overflow-hidden w-full aspect-video bg-gradient-to-br from-[#222222] to-[#111111]">
              {it.type === 'image' ? (
                <img 
                  src={it.url} 
                  alt={it.title} 
                  className="w-full h-full object-cover filter contrast-110 saturate-110 transition-transform duration-500 group-hover:scale-110" 
                  onError={(e) => {
                    // Fallback
                    e.currentTarget.src = "https://images.unsplash.com/photo-1578301978693-85fa9c0320b9?w=500&auto=format&fit=crop&q=60";
                  }}
                />
              ) : (
                <div className="w-full h-full flex flex-col items-center justify-center text-gray-400 group-hover:text-white transition-colors gap-2">
                  <FileText className="w-10 h-10" />
                  <span className="text-xs font-bold tracking-wider uppercase">Open PDF</span>
                </div>
              )}
              {/* Overlay Gradient for Title */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80"></div>
              
              {/* Netflix N Logo */}
              <div className="absolute top-3 left-3 opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="text-[#E50914] text-xs font-black drop-shadow-lg">N</span>
              </div>

              {/* Hover Zoom Icon */}
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <div className="bg-[#E50914] text-white rounded-full p-3 shadow-lg transform scale-50 group-hover:scale-100 transition-transform duration-300">
                  <ZoomIn className="w-6 h-6" />
                </div>
              </div>

              {/* Title overlay */}
              <div className="absolute bottom-0 left-0 p-4 w-full">
                <span className="text-[10px] font-bold uppercase text-[#E50914] tracking-wider mb-1 block">
                  {it.type}
                </span>
                <h3 className="font-bold text-lg text-white truncate drop-shadow-md">
                  {it.title}
                </h3>
              </div>
            </div>
          </button>
        ))}
      </div>

      {/* Modal Dialog Viewer */}
      {open && active && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/95 backdrop-blur-sm p-4 md:p-6 animate-zoomIn">
          <div className="max-w-5xl w-full max-h-[90vh] bg-[#141414] rounded-lg shadow-2xl flex flex-col text-white overflow-hidden border border-[#333333]">
            
            {/* Modal Header */}
            <div className="flex justify-between items-center p-4 border-b border-[#333333] bg-[#181818]">
              <h4 className="font-bold text-white text-lg uppercase flex items-center gap-2">
                <Award className="w-5 h-5 text-[#E50914]" /> {active.title}
              </h4>
              <div className="flex items-center gap-3">
                <a 
                  href={active.url} 
                  download 
                  className="bg-[#222222] hover:bg-[#333333] text-white p-2 rounded transition-colors cursor-pointer"
                  title="Unduh Sertifikat"
                >
                  <Download className="w-5 h-5" />
                </a>
                <button 
                  onClick={closeModal} 
                  className="bg-transparent hover:bg-[#E50914] text-white px-4 py-2 rounded transition-colors font-bold text-sm uppercase cursor-pointer flex items-center gap-2"
                >
                  <X className="w-4 h-4" /> Close
                </button>
              </div>
            </div>

            {/* Modal Content */}
            <div className="p-4 md:p-6 flex-grow overflow-auto bg-[#141414] flex items-center justify-center">
              {active.type === 'image' ? (
                <img 
                  src={active.url} 
                  alt={active.title} 
                  className="w-auto max-h-[70vh] mx-auto rounded shadow-2xl" 
                  onError={(e) => {
                    e.currentTarget.src = "https://images.unsplash.com/photo-1578301978693-85fa9c0320b9?w=800&auto=format&fit=crop&q=60";
                  }}
                />
              ) : (
                <iframe 
                  src={active.url} 
                  className="w-full h-[70vh] rounded shadow-2xl bg-white" 
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
