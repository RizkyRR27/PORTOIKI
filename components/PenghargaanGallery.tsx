'use client';

import { useEffect, useState } from 'react';
import Reveal from '@/components/Reveal';
import { FileText, Image as ImageIcon, ZoomIn, X, Download, Award, CandlestickChart } from 'lucide-react';

type Category = 'Sports' | 'academic' | 'Portofolio';

type Item = {
  id: string;
  title: string;
  type: 'image' | 'pdf';
  url: string;
  category: Category;
};

const items: Item[] = [
  { id: 'jpg-1', title: 'Sertifikat Karate 1', type: 'image', url: '/sertif/karate1.jpg', category: 'Sports' },
  { id: 'jpg-2', title: 'Sertifikat Karate 2', type: 'image', url: '/sertif/karate2.jpg', category: 'Sports' },
  { id: 'pdf-1', title: 'Dokumen Penghargaan 1', type: 'pdf', url: '/sertif/11.pdf', category: 'academic' },
  { id: 'pdf-2', title: 'Dokumen Penghargaan 2', type: 'pdf', url: '/sertif/22.pdf', category: 'academic' },
  { id: 'pdf-3', title: 'Dokumen Penghargaan 3', type: 'pdf', url: '/sertif/33.pdf', category: 'academic' },
  { id: 'pdf-4', title: 'Dokumen Penghargaan 4', type: 'pdf', url: '/sertif/44.pdf', category: 'academic' },
];

const categories: { id: 'all' | Category; label: string; icon: typeof Award }[] = [
  { id: 'all', label: 'All Certificates', icon: Award },
  { id: 'Sports', label: 'Sports', icon: ImageIcon },
  { id: 'academic', label: 'Academic & Competence', icon: FileText },
  { id: 'Portofolio', label: 'Portofolio', icon: CandlestickChart },
];

const FALLBACK = 'https://images.unsplash.com/photo-1578301978693-85fa9c0320b9?w=800&auto=format&fit=crop&q=60';

export default function PenghargaanGallery() {
  const [active, setActive] = useState<Item | null>(null);
  const [filterType, setFilterType] = useState<'all' | Category>('all');

  useEffect(() => {
    document.body.style.overflow = active ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [active]);

  function openItem(item: Item) {
    setActive(item);
  }

  function closeModal() {
    setActive(null);
  }

  const filteredItems = items.filter((it) => filterType === 'all' || it.category === filterType);

  return (
    <div className="relative z-10">
      {/* Category selector */}
      <div className="mb-10 flex flex-wrap gap-2">
        {categories.map(({ id, label, icon: Icon }) => (
          <button
            key={id}
            onClick={() => setFilterType(id)}
            className={`flex cursor-pointer items-center gap-2 rounded-full border px-5 py-2 mono text-[10px] font-bold uppercase tracking-widest transition-colors ${filterType === id
              ? 'border-[#D2FF00] bg-[#D2FF00] text-black'
              : 'border-[#27272a] text-zinc-400 hover:border-[#D2FF00] hover:text-[#D2FF00]'
              }`}
          >
            <Icon className="h-4 w-4" /> {label}
          </button>
        ))}
      </div>

      {filteredItems.length === 0 && (
        <p className="border border-dashed border-[#27272a] p-10 text-center mono text-xs uppercase tracking-widest text-zinc-500">
          Belum ada item di kategori ini.
        </p>
      )}

      {/* Grid of awards */}
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3">
        {filteredItems.map((it, idx) => (
          <Reveal key={it.id} dir="scale" delay={idx * 80} className="h-full">
          <button
            onClick={() => openItem(it)}
            className="group flex h-full w-full cursor-pointer flex-col overflow-hidden border border-[#27272a] bg-[#151517] text-left transition-all duration-300 hover:border-[#D2FF00] hover:shadow-[0_0_40px_-12px_#D2FF00] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#D2FF00]"
            aria-label={`Buka pratinjau ${it.title}`}
          >
            <div className="relative aspect-video w-full overflow-hidden bg-[#111112]">
              {it.type === 'image' ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={it.url}
                  alt={it.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  onError={(e) => { e.currentTarget.src = FALLBACK; }}
                />
              ) : (
                <div className="flex h-full w-full flex-col items-center justify-center gap-2 text-zinc-500 transition-colors group-hover:text-[#D2FF00]">
                  <FileText className="h-10 w-10" />
                  <span className="mono text-[10px] font-bold uppercase tracking-widest">Open PDF</span>
                </div>
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

              <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 transition-opacity group-hover:opacity-100">
                <div className="scale-50 rounded-full bg-[#D2FF00] p-3 text-black transition-transform duration-300 group-hover:scale-100">
                  <ZoomIn className="h-6 w-6" />
                </div>
              </div>
            </div>

            <div className="flex items-end justify-between gap-3 p-5">
              <div className="min-w-0">
                <span className="mono mb-1 block text-[10px] font-bold uppercase tracking-[0.18em] text-[#D2FF00]">{it.type}</span>
                <h3 className="display truncate text-xl">{it.title}</h3>
              </div>
              <span className="mono text-[10px] text-zinc-600">{String(idx + 1).padStart(2, '0')}</span>
            </div>
          </button>
          </Reveal>
        ))}
      </div>

      {/* Modal Dialog Viewer */}
      {active && (
        <div className="fixed inset-0 z-[60] flex animate-zoomIn items-center justify-center bg-black/95 p-4 backdrop-blur-sm md:p-6">
          <div className="flex max-h-[90vh] w-full max-w-5xl flex-col overflow-hidden border border-[#27272a] bg-[#111112] text-white">
            <div className="flex items-center justify-between border-b border-[#27272a] bg-[#151517] p-4">
              <h4 className="display flex items-center gap-2 text-lg">
                <Award className="h-5 w-5 text-[#D2FF00]" /> {active.title}
              </h4>
              <div className="flex items-center gap-2">
                <a
                  href={active.url}
                  download
                  className="border border-[#27272a] p-2 transition-colors hover:border-[#D2FF00] hover:text-[#D2FF00]"
                  title="Unduh Sertifikat"
                >
                  <Download className="h-5 w-5" />
                </a>
                <button
                  onClick={closeModal}
                  className="flex cursor-pointer items-center gap-2 bg-[#D2FF00] px-4 py-2 mono text-[10px] font-bold uppercase tracking-widest text-black transition-colors hover:bg-white"
                >
                  <X className="h-4 w-4" /> Close
                </button>
              </div>
            </div>

            <div className="flex flex-grow items-center justify-center overflow-auto bg-[#111112] p-4 md:p-6">
              {active.type === 'image' ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={active.url}
                  alt={active.title}
                  className="mx-auto max-h-[70vh] w-auto"
                  onError={(e) => { e.currentTarget.src = FALLBACK; }}
                />
              ) : (
                <iframe
                  src={active.url}
                  className="h-[70vh] w-full bg-white"
                  title={active.title}
                  allow="fullscreen"
                  loading="lazy"
                />
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
