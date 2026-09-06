'use client';

import Link from 'next/link';
import ImageTrail from './ImageTrail';
import { useEffect, useState, useRef } from 'react';
import { ArrowRight, FileText, MapPin, Briefcase, Zap, Terminal, Info } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Hero() {
  const [typedText, setTypedText] = useState('');
  const fullText = "Selamat Datang di Portofolio Iky, Senang rasanya anda berkunjung di website saya.";

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setTypedText(fullText.substring(0, index));
      index++;
      if (index > fullText.length) {
        clearInterval(interval);
      }
    }, 45);
    return () => clearInterval(interval);
  }, []);

  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // Initial Load Animations
    gsap.from('.available-sticker', {
      scale: 0,
      rotation: -30,
      opacity: 0,
      duration: 0.8,
      ease: 'back.out(1.5)',
    });

    gsap.from('.hero-title-part', {
      y: 80,
      opacity: 0,
      duration: 1,
      stagger: 0.25,
      ease: 'power4.out',
      delay: 0.2,
    });

    gsap.from('.hero-terminal', {
      y: 60,
      scale: 0.96,
      opacity: 0,
      duration: 1,
      ease: 'power3.out',
      delay: 0.6,
    });

    gsap.from('.hero-badge', {
      y: 20,
      opacity: 0,
      duration: 0.6,
      stagger: 0.1,
      ease: 'power2.out',
      delay: 0.8,
    });

    gsap.from('.hero-cta-btn', {
      y: 20,
      opacity: 0,
      duration: 0.6,
      stagger: 0.15,
      ease: 'power2.out',
      delay: 1.1,
    });

    // Parallax Scroll Animations for Floating Shapes
    gsap.to('.parallax-shape-1', {
      scrollTrigger: {
        trigger: '.hero-section',
        start: 'top top',
        end: 'bottom top',
        scrub: 1,
      },
      y: -180,
      rotation: 120,
      ease: 'none',
    });

    gsap.to('.parallax-shape-2', {
      scrollTrigger: {
        trigger: '.hero-section',
        start: 'top top',
        end: 'bottom top',
        scrub: 1,
      },
      y: -240,
      x: 60,
      rotation: -180,
      ease: 'none',
    });

    gsap.to('.parallax-shape-3', {
      scrollTrigger: {
        trigger: '.hero-section',
        start: 'top top',
        end: 'bottom top',
        scrub: 1,
      },
      y: 180,
      rotation: 90,
      ease: 'none',
    });
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="hero-section min-h-[90vh] flex flex-row items-center px-6 md:px-16 relative overflow-hidden bg-[#141414] text-white">
      {/* Background Image/Gradient Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-[#141414] via-[#141414]/80 to-transparent z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#141414] via-transparent to-transparent z-10" />
        {/* Placeholder for a cinematic background, we just use a dark subtle pattern/color for now since no image is provided */}
        <div className="absolute inset-0 bg-neutral-900 opacity-50" />
      </div>

      {/* Left: Hero Content */}
      <div className="relative z-20 w-full max-w-xl flex flex-col items-start mt-20 flex-shrink-0">
        {/* Top Badge like "N SERIES" */}
        <div className="hero-badge flex items-center gap-2 mb-4 font-sans font-bold text-sm tracking-widest text-gray-300">
          <span className="text-[#E50914] text-xl">R</span> ORIGINAL PORTFOLIO
        </div>

        {/* Main Header */}
        <h1 className="hero-title-part text-5xl sm:text-7xl md:text-8xl font-black tracking-tight leading-none text-left mb-4 font-sans drop-shadow-lg">
          RIZKY ROZA RAHIM
        </h1>

        {/* Sub-Hero Description */}
        <p className="hero-terminal text-lg md:text-xl font-medium leading-relaxed text-gray-200 max-w-2xl mb-8 font-sans drop-shadow-md">
          {typedText}
          <span className="animate-pulse bg-[#E50914] text-transparent inline-block w-1.5 h-5 ml-1 align-middle">|</span>
        </p>

        {/* Info Badges (Like Movie tags: 2026 | Developer | Action) */}
        <div className="hero-badge flex flex-wrap gap-3 items-center mb-8 font-sans font-bold text-sm text-gray-400">
          <span className="flex items-center gap-1"><MapPin className="w-4 h-4" /> Jakarta, Bekasi, Malang, Bali</span>
          <span className="flex items-center gap-1"><Zap className="w-4 h-4" /> D4 Sistem Informasi Bisnis</span>
        </div>

        {/* Call to Actions */}
        <div className="flex gap-4 font-sans">
          <Link
            href="/project"
            className="hero-cta-btn px-6 py-2.5 bg-white text-black rounded-md text-lg font-bold flex items-center gap-2 hover:bg-neutral-300 transition-colors"
          >
            <div className="w-0 h-0 border-t-[8px] border-t-transparent border-l-[12px] border-l-black border-b-[8px] border-b-transparent ml-1"></div>
            Lihat Projek
          </Link>

          <Link
            href="/about"
            className="hero-cta-btn px-6 py-2.5 bg-gray-500/50 text-white rounded-md text-lg font-bold flex items-center gap-2 hover:bg-gray-500/70 transition-colors backdrop-blur-sm"
          >
            <Info className="w-6 h-6" />
            Tentang Saya
          </Link>
        </div>
      </div>

      {/* Right: ImageTrail Interactive Area */}
      <div className="relative z-20 flex-1 hidden md:flex items-center justify-center h-[90vh] ml-8">
        <div className="w-full h-full" style={{ position: 'relative', overflow: 'hidden' }}>
          <ImageTrail
            items={[
              '/images/1.jpg',
              '/images/2.jpg',
              '/images/3.jpg',
              '/images/4.jpg',
              '/images/5.jpg',
              'https://picsum.photos/id/67/300/300',
              'https://picsum.photos/id/96/300/300',
              'https://picsum.photos/id/103/300/300',
              'https://picsum.photos/id/106/300/300',
              'https://picsum.photos/id/119/300/300',
            ]}
            variant={1}
          />
          {/* Hint overlay */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <p className="text-gray-500 text-sm font-sans tracking-widest uppercase select-none opacity-60">
              ✦ Gerakkan kursor di sini
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}