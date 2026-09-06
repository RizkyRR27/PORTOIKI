'use client';

import { useState } from 'react';
import Breadcrumb from '@/components/Breadcrumb';
import { ChevronLeft, ChevronRight, ZoomIn, X, Film, Heart } from 'lucide-react';

export default function AboutMore() {
  const images = ['w.jpeg', '1.jpg', '2.JPG', '3.jpg', '4.jpeg', '5.jpeg', '6.jpeg', '7.jpeg'];
  const [activeIndex, setActiveIndex] = useState(0);
  const [showLightbox, setShowLightbox] = useState(false);

  const nextSlide = () => {
    setActiveIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  return (
    <section className="max-w-4xl mx-auto py-16 px-6 space-y-12 bg-[#141414] mt-20 relative z-10 mb-20 text-white font-sans">
      <h1 className="text-4xl md:text-5xl font-bold text-white mb-8 text-center uppercase tracking-wider">
        More <span className="text-[#E50914]">About Me</span>
      </h1>

      <div className="space-y-10">
        <p className="text-lg md:text-xl text-gray-300 leading-relaxed font-medium text-center max-w-2xl mx-auto">
          Lahir di Jakarta, 27 Mei 2005 — <span className="text-white font-bold">Gemini ♊</span>. Besar di Bekasi dan menempuh pendidikan dasar hingga menengah di lingkungan Muhammadiyah.
        </p>

        {/* Hobi */}
        <div className="bg-[#181818] p-8 rounded-md shadow-2xl">
          <h2 className="text-2xl font-bold mb-4 border-l-4 border-[#E50914] pl-4">
            Hobbies & Activities
          </h2>
          <p className="text-gray-300 leading-relaxed">
            Nongkrong santai, jalan-jalan mengeksplorasi tempat baru, serta aktif berolahraga seperti basket, futsal, badminton, billiard, dan jalan kaki sore.
          </p>
        </div>

        {/* Gallery Carousel */}
        <div className="bg-[#181818] p-8 rounded-md shadow-2xl">
          <h2 className="text-2xl font-bold mb-6 border-l-4 border-[#E50914] pl-4 flex items-center gap-2">
            <Film className="w-5 h-5 text-[#E50914]" /> Personal Gallery
          </h2>

          {/* Main slider */}
          <div className="relative w-full aspect-video md:aspect-[16/10] bg-[#141414] overflow-hidden rounded group">
            <img
              src={`/images/${images[activeIndex]}`}
              alt={`Galeri foto ${images[activeIndex]}`}
              className="w-full h-full object-cover filter contrast-110 saturate-110"
              onError={(e) => { e.currentTarget.style.display = 'none'; }}
            />

            {/* Overlay button */}
            <button
              onClick={() => setShowLightbox(true)}
              className="absolute top-4 right-4 bg-black/60 hover:bg-[#E50914] text-white p-2 rounded backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all flex items-center gap-2 text-xs font-bold uppercase cursor-pointer"
            >
              <ZoomIn className="w-4 h-4" /> Zoom
            </button>

            {/* Navigation buttons */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-[#E50914] text-white p-3 rounded-full backdrop-blur-sm transition-all cursor-pointer z-10 hover:scale-110"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-[#E50914] text-white p-3 rounded-full backdrop-blur-sm transition-all cursor-pointer z-10 hover:scale-110"
              aria-label="Next image"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Indicator */}
            <div className="absolute bottom-4 right-4 bg-black/60 backdrop-blur-sm text-white px-3 py-1 text-xs font-bold rounded">
              {activeIndex + 1} / {images.length}
            </div>
          </div>

          {/* Thumbnail strip */}
          <div className="flex gap-3 mt-6 overflow-x-auto pb-2 scrollbar-thin scrollbar-thumb-[#333333] scrollbar-track-transparent">
            {images.map((img, idx) => (
              <button
                key={img}
                onClick={() => setActiveIndex(idx)}
                className={`w-24 h-16 rounded overflow-hidden flex-shrink-0 relative transition-all ${idx === activeIndex ? 'ring-2 ring-[#E50914] scale-95' : 'opacity-50 hover:opacity-100'
                  }`}
              >
                <img src={`/images/${img}`} alt="thumbnail" className="object-cover w-full h-full" onError={(e) => { e.currentTarget.style.display = 'none'; }} />
              </button>
            ))}
          </div>
        </div>

        {/* Favorit */}
        <div className="bg-[#181818] p-8 rounded-md shadow-2xl">
          <h2 className="text-2xl font-bold mb-6 border-l-4 border-[#E50914] pl-4">
            Favorites
          </h2>
          <div className="text-gray-300 leading-relaxed space-y-4">
            <p className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2">
              <span className="text-white font-bold bg-[#222222] px-2 py-1 rounded text-sm w-fit">Favorite Food:</span>
              <span>gue blom ada makanan paporit</span>
            </p>
            <p className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2">
              <span className="text-white font-bold bg-[#222222] px-2 py-1 rounded text-sm flex items-center gap-2 w-fit">
                <Heart className="w-4 h-4 text-[#E50914]" /> Favorite Song:
              </span>
              <span>"Aku Cinta Kau dan Dia" — Maliq & D'Essentials.</span>
            </p>
          </div>
        </div>
      </div>

      {/* Lightbox Zoom Modal */}
      {showLightbox && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 p-4 md:p-10 animate-zoomIn backdrop-blur-sm">
          <button
            onClick={() => setShowLightbox(false)}
            className="absolute top-6 right-6 bg-transparent hover:bg-[#E50914] text-white p-2 rounded transition-all cursor-pointer z-50 flex items-center gap-2 font-bold"
          >
            <X className="w-6 h-6" /> Close
          </button>

          <div className="relative max-w-5xl w-full flex items-center justify-center">
            <img
              src={`/images/${images[activeIndex]}`}
              alt="Zoomed"
              className="max-w-full max-h-[85vh] object-contain rounded shadow-2xl"
              onError={(e) => { e.currentTarget.style.display = 'none'; }}
            />
          </div>
        </div>
      )}

      <div className="pt-8 flex justify-center mt-10">
        <Breadcrumb />
      </div>
    </section>
  );
}
