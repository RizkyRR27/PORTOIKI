'use client';

import { useState, useEffect } from 'react';

export default function HeroBackground() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  // List foto - taruh foto di public/images/hero/ dengan nama hero1.jpg, hero2.jpg, dst
  const photos = [
    '/images/BG/2.jpg',
    '/images/BG/3.jpg',
    '/images/BG/4.jpg',
 
  ];

  // Auto-rotate foto setiap 4 detik
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % photos.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [photos.length]);

  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Background Photos Container */}
      <div className="relative w-full h-full">
        {photos.map((photo, index) => (
          <img
            key={index}
            src={photo}
            alt={`Hero background ${index + 1}`}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
              index === currentIndex ? 'opacity-100' : 'opacity-0'
            }`}
            onError={(e) => {
              // Hide broken images gracefully
              (e.currentTarget as HTMLImageElement).style.display = 'none';
            }}
          />
        ))}

        {/* Dark Overlay untuk readability text */}
        <div className="absolute inset-0 bg-black/50" />

        {/* Animated Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/40 via-transparent to-slate-900/40" />
      </div>

      {/* Photo Indicators (dots) */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex gap-2 z-20">
        {photos.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentIndex
                ? 'bg-white w-8'
                : 'bg-white/40 hover:bg-white/70'
            }`}
            aria-label={`Go to photo ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
