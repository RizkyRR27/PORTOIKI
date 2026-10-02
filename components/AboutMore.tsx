'use client';

import { useState } from 'react';
import Breadcrumb from '@/components/Breadcrumb';
import Reveal from '@/components/Reveal';
import { ChevronLeft, ChevronRight, ZoomIn, Film, Heart } from 'lucide-react';

const images = ['w.jpeg', '1.jpg', '2.JPG', '3.jpg', '4.jpeg', '5.jpeg', '6.jpeg', '7.jpeg'];

const card = 'border border-[#27272a] bg-[#151517] p-6 md:p-10';
const label = 'mono mb-4 text-xs uppercase tracking-[0.2em] text-[#D2FF00]';
const navBtn = 'absolute top-1/2 z-10 -translate-y-1/2 cursor-pointer border border-[#27272a] bg-black/70 p-3 text-white backdrop-blur-sm transition-colors hover:border-[#D2FF00] hover:bg-[#D2FF00] hover:text-black';

export default function AboutMore() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [showLightbox, setShowLightbox] = useState(false);

  const nextSlide = () => setActiveIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  const prevSlide = () => setActiveIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));

  return (
    <section className="relative z-10 space-y-3 pb-10">
      <div className="mb-10">
        <Reveal dir="fade"><p className={label}>04 / Off track</p></Reveal>
        <h1 className="display text-6xl md:text-8xl">
          <Reveal dir="mask" delay={80}><span className="block">More about</span></Reveal>
          <Reveal dir="mask" delay={180}><span className="block text-[#D2FF00]">me.</span></Reveal>
        </h1>
        <Reveal delay={300}>
          <p className="mt-8 max-w-2xl text-base leading-8 text-zinc-400 md:text-lg">
            Lahir di Jakarta, 27 Mei 2005 — <span className="font-bold text-white">Gemini ♊</span>. Besar di Bekasi dan menempuh pendidikan dasar hingga menengah di lingkungan Muhammadiyah.
          </p>
        </Reveal>
      </div>

      {/* Hobi */}
      <Reveal className={card}>
        <h2 className="display mb-4 text-3xl md:text-4xl">Hobbies &amp; Activities</h2>
        <p className="max-w-3xl leading-8 text-zinc-400">
          Nongkrong santai, jalan-jalan mengeksplorasi tempat baru, serta aktif berolahraga seperti basket, futsal, badminton, billiard, dan jalan kaki sore.
        </p>
      </Reveal>

      {/* Gallery Carousel */}
      <Reveal dir="scale" className={card}>
        <h2 className="display mb-8 flex items-center gap-3 text-3xl md:text-4xl">
          <Film className="h-6 w-6 text-[#D2FF00]" /> Personal Gallery
        </h2>

        <div className="group relative aspect-video w-full overflow-hidden bg-[#111112] md:aspect-[16/10]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={`/images/${images[activeIndex]}`}
            alt={`Galeri foto ${images[activeIndex]}`}
            className="h-full w-full object-cover"
            onError={(e) => { e.currentTarget.style.display = 'none'; }}
          />

          <button
            onClick={() => setShowLightbox(true)}
            className="absolute right-4 top-4 flex cursor-pointer items-center gap-2 border border-[#27272a] bg-black/70 px-3 py-2 mono text-[10px] font-bold uppercase tracking-widest text-white opacity-0 backdrop-blur-sm transition-all hover:bg-[#D2FF00] hover:text-black group-hover:opacity-100"
          >
            <ZoomIn className="h-4 w-4" /> Zoom
          </button>

          <button onClick={prevSlide} className={`${navBtn} left-4`} aria-label="Previous image">
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button onClick={nextSlide} className={`${navBtn} right-4`} aria-label="Next image">
            <ChevronRight className="h-5 w-5" />
          </button>

          <div className="absolute bottom-4 right-4 border border-[#27272a] bg-black/70 px-3 py-1 mono text-[10px] font-bold tracking-widest text-[#D2FF00] backdrop-blur-sm">
            {String(activeIndex + 1).padStart(2, '0')} / {String(images.length).padStart(2, '0')}
          </div>
        </div>

        <div className="mt-4 flex gap-2 overflow-x-auto pb-2">
          {images.map((img, idx) => (
            <button
              key={img}
              onClick={() => setActiveIndex(idx)}
              aria-label={`Foto ${idx + 1}`}
              className={`relative h-16 w-24 flex-shrink-0 cursor-pointer overflow-hidden border transition-all ${idx === activeIndex ? 'border-[#D2FF00]' : 'border-[#27272a] opacity-50 hover:opacity-100'}`}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={`/images/${img}`} alt="" className="h-full w-full object-cover" onError={(e) => { e.currentTarget.style.display = 'none'; }} />
            </button>
          ))}
        </div>
      </Reveal>

      {/* Favorit */}
      <Reveal className={card}>
        <h2 className="display mb-6 text-3xl md:text-4xl">Favorites</h2>
        <div className="space-y-4 leading-8 text-zinc-400">
          <p className="flex flex-col gap-1 sm:flex-row sm:items-center sm:gap-3">
            <span className="w-fit border border-[#27272a] bg-[#111112] px-3 py-1 mono text-[10px] font-bold uppercase tracking-widest text-white">Favorite Food</span>
            <span>gue blom ada makanan paporit</span>
          </p>
          <p className="flex flex-col gap-1 sm:flex-row sm:items-center sm:gap-3">
            <span className="flex w-fit items-center gap-2 border border-[#27272a] bg-[#111112] px-3 py-1 mono text-[10px] font-bold uppercase tracking-widest text-white">
              <Heart className="h-3.5 w-3.5 text-[#D2FF00]" /> Favorite Song
            </span>
            <span>&quot;Aku Cinta Kau dan Dia&quot; — Maliq &amp; D&apos;Essentials.</span>
          </p>
        </div>
      </Reveal>

      {/* Lightbox Zoom Modal */}
      {showLightbox && (
        <div
          className="fixed inset-0 z-[10000] flex items-center justify-center bg-black/95 p-4 backdrop-blur-sm md:p-10"
          onClick={() => setShowLightbox(false)}
          style={{ animation: 'zoomIn 0.3s ease-out' }}
        >
          <button
            onClick={(e) => { e.stopPropagation(); prevSlide(); }}
            className={`${navBtn} left-2 z-50 md:left-6`}
            aria-label="Previous image"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>

          <button
            onClick={(e) => { e.stopPropagation(); nextSlide(); }}
            className={`${navBtn} right-2 z-50 md:right-6`}
            aria-label="Next image"
          >
            <ChevronRight className="h-5 w-5" />
          </button>

          <div className="relative flex w-full max-w-5xl items-center justify-center" onClick={(e) => e.stopPropagation()}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={`/images/${images[activeIndex]}`}
              alt="Zoomed"
              className="max-h-[85vh] max-w-full object-contain"
              onError={(e) => { e.currentTarget.style.display = 'none'; }}
            />
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 border border-[#27272a] bg-black/70 px-4 py-1.5 mono text-xs font-bold tracking-widest text-[#D2FF00] backdrop-blur-sm">
              {activeIndex + 1} / {images.length}
            </div>
          </div>

          <p className="absolute bottom-4 mono text-[10px] uppercase tracking-widest text-zinc-500">
            Click outside image to close
          </p>
        </div>
      )}

      <Breadcrumb />
    </section>
  );
}
