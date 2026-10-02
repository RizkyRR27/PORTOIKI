'use client';

import Link from 'next/link';
import { ArrowDownRight, ArrowUpRight, MapPin, Zap } from 'lucide-react';
import { useEffect, useState } from 'react';
import Reveal from '@/components/Reveal';

export default function Hero() {
  const [typedText, setTypedText] = useState('');
  const fullText = 'Mahasiswa Sistem Informasi Bisnis yang merancang pengalaman digital dengan presisi.';

  useEffect(() => {
    let index = 0;
    const interval = window.setInterval(() => {
      setTypedText(fullText.slice(0, index));
      index += 1;
      if (index > fullText.length) window.clearInterval(interval);
    }, 28);
    return () => window.clearInterval(interval);
  }, []);

  return (
    <section className="relative overflow-hidden border-b border-[#27272a] px-5 pb-12 pt-28 md:px-10 md:pb-16 md:pt-36">
      <div className="pointer-events-none absolute inset-0 opacity-40 [background-image:linear-gradient(rgba(255,255,255,.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.035)_1px,transparent_1px)] [background-size:64px_64px]" />
      <div className="pointer-events-none absolute -right-32 top-24 h-96 w-96 rounded-full bg-[#D2FF00]/10 blur-[120px]" />

      <div className="relative z-10 mx-auto grid max-w-[1600px] gap-12 lg:grid-cols-[1.35fr_.65fr] lg:items-end">
        <div>
          <Reveal dir="down" distance={16}>
            <div className="mono mb-7 flex items-center gap-3 text-[10px] uppercase tracking-[0.22em] text-zinc-400">
              <span className="h-2 w-2 animate-pulse rounded-full bg-[#D2FF00]" />
              Available for selected opportunities / 2026
            </div>
          </Reveal>
          <h1 className="display max-w-5xl text-[clamp(4rem,12vw,11.5rem)] text-white">
            <Reveal dir="mask" delay={100}><span className="block">Rizky</span></Reveal>
            <Reveal dir="mask" delay={220}><span className="block text-[#D2FF00]">Roza</span></Reveal>
            <Reveal dir="mask" delay={340}><span className="block">Rahim</span></Reveal>
          </h1>
          <Reveal delay={500} className="mt-8 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div className="max-w-lg">
              <p className="mono mb-3 text-xs uppercase tracking-[0.2em] text-[#D2FF00]">Driven by precision / Built for speed</p>
              <p className="min-h-12 max-w-md text-sm leading-7 text-zinc-400 md:text-base">
                {typedText}<span className="ml-1 inline-block h-4 w-px animate-pulse bg-[#D2FF00] align-middle" />
              </p>
            </div>
            <div className="flex shrink-0 gap-3">
              <Link href="/project" className="group inline-flex items-center gap-2 rounded-full bg-[#D2FF00] px-5 py-3 text-sm font-bold text-black transition-all duration-200 hover:bg-white hover:shadow-[0_0_35px_-8px_#D2FF00]">
                View projects <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </Link>
              <Link href="/HUBi" className="inline-flex items-center gap-2 rounded-full border border-[#27272a] px-5 py-3 text-sm font-bold text-white transition-colors hover:border-[#D2FF00] hover:text-[#D2FF00]">
                Contact
              </Link>
            </div>
          </Reveal>
        </div>

        <Reveal dir="left" delay={450} distance={48} className="relative hidden min-h-[310px] border border-[#27272a] bg-[#151517] p-5 lg:block">
          <div className="flex items-center justify-between border-b border-[#27272a] pb-4 mono text-[10px] uppercase tracking-widest text-zinc-500">
            <span>Performance log / 001</span><span className="text-[#D2FF00]">Live</span>
          </div>
          <div className="absolute inset-x-5 top-24 h-24 opacity-80 [background-image:linear-gradient(135deg,transparent_0_8%,#D2FF00_8%_9%,transparent_9%_18%,#D2FF00_18%_19%,transparent_19%_31%,#D2FF00_31%_32%,transparent_32%_45%,#D2FF00_45%_46%,transparent_46%_100%)]" />
          <div className="absolute bottom-5 left-5 right-5 grid grid-cols-2 gap-4 border-t border-[#27272a] pt-4">
            <div><p className="mono text-[10px] uppercase tracking-widest text-zinc-500">Location</p><p className="mt-1 flex items-center gap-1 text-sm"><MapPin className="h-3.5 w-3.5 text-[#D2FF00]" /> Indonesia</p></div>
            <div><p className="mono text-[10px] uppercase tracking-widest text-zinc-500">Focus</p><p className="mt-1 flex items-center gap-1 text-sm"><Zap className="h-3.5 w-3.5 text-[#D2FF00]" /> Quality & UI</p></div>
          </div>
          <span className="absolute right-5 top-24 mono text-[10px] text-zinc-500">98.4%</span>
        </Reveal>
      </div>

      <div className="relative z-10 mx-auto mt-16 flex max-w-[1600px] items-center justify-between border-t border-[#27272a] pt-4 mono text-[10px] uppercase tracking-[0.2em] text-zinc-500">
        <span>Scroll to explore</span><ArrowDownRight className="h-4 w-4 text-[#D2FF00]" />
      </div>
    </section>
  );
}
