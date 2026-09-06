'use client';

import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Stats() {
  const containerRef = useRef<HTMLDivElement>(null);

  const statsData = [
    {
      label: 'Projects Completed',
      target: 5,
      suffix: '+',
      numColor: 'text-blue-500',
      borderColor: 'border-blue-500/30 hover:border-blue-500',
      badgeBg: 'bg-blue-950/60 text-blue-400 border-blue-500/40',
      barBg: 'bg-blue-500'
    },
    {
      label: 'Internship Experience',
      target: 2,
      suffix: ' Exp',
      numColor: 'text-red-500',
      borderColor: 'border-red-500/30 hover:border-red-500',
      badgeBg: 'bg-red-950/60 text-red-400 border-red-500/40',
      barBg: 'bg-red-500'
    },
    {
      label: 'Skills Mastered',
      target: 14,
      suffix: '+',
      numColor: 'text-blue-400',
      borderColor: 'border-blue-500/30 hover:border-blue-400',
      badgeBg: 'bg-blue-950/60 text-blue-400 border-blue-500/40',
      barBg: 'bg-blue-400'
    },
  ];

  useGSAP(() => {
    // 1. Animasi munculnya kartu
    gsap.from('.stats-card', {
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top 85%',
      },
      opacity: 1, // Memastikan opacity kembali ke 1 penuh
      duration: 0.6,
      stagger: 0.15,
      ease: 'power2.out',
    });

    // 2. Count Up Angka
    statsData.forEach((stat, index) => {
      const obj = { value: 0 };
      const numberEl = containerRef.current?.querySelector(`.stat-number-${index}`);
      const barEl = containerRef.current?.querySelector(`.stat-bar-${index}`);

      if (numberEl) {
        gsap.to(obj, {
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top 85%',
          },
          value: stat.target,
          duration: 1.5,
          ease: 'power2.out',
          onUpdate: () => {
            numberEl.textContent = Math.floor(obj.value).toString();
          },
        });
      }

      if (barEl) {
        gsap.fromTo(
          barEl,
          { width: '0%' },
          {
            scrollTrigger: {
              trigger: containerRef.current,
              start: 'top 85%',
            },
            width: '100%',
            duration: 1.5,
            ease: 'power2.out',
          }
        );
      }
    });
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="py-20 px-6 relative z-10 font-sans bg-black">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {statsData.map((stat, index) => (
          <div
            key={stat.label}
            className={`stats-card relative p-8 bg-slate-900/80 backdrop-blur-md border ${stat.borderColor} rounded-2xl flex flex-col justify-between transition-all duration-300 hover:-translate-y-2`}
          >
            <div>
              {/* Badge Top */}
              <div className="flex justify-between items-center mb-6">
                <span className={`text-[11px] font-mono font-bold tracking-widest uppercase px-3 py-1 rounded-full border ${stat.badgeBg}`}>
                  STAT_0{index + 1}
                </span>
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              </div>

              {/* Angka & Suffix */}
              <div className="text-6xl md:text-7xl font-black mb-4 tracking-tight flex items-baseline">
                {/* Span khusus angka tempat GSAP memasukkan nilainya */}
                <span className={`stat-number-${index} ${stat.numColor}`}>
                  0
                </span>
                {/* Suffix terpisah (+ / Exp) agar tidak hilang saat diupdate GSAP */}
                <span className="text-red-500 ml-1">
                  {stat.suffix}
                </span>
              </div>
            </div>

            <div>
              {/* Progress Bar */}
              <div className="w-full bg-slate-800 border border-white/10 h-3 rounded-full relative mb-4 overflow-hidden">
                <div
                  className={`stat-bar-${index} h-full rounded-full ${stat.barBg}`}
                  style={{ width: '0%' }}
                />
              </div>

              {/* Label */}
              <p className="font-semibold uppercase tracking-wider text-xs text-slate-400 border-t border-white/10 pt-4">
                {stat.label}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}